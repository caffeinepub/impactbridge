import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function StatCounter({
  end,
  label,
  suffix = "",
  prefix = "",
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);

  const formatted =
    count >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-teal-700">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
