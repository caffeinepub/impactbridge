import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, TrendingUp, Zap } from "lucide-react";

const TEAM = [
  {
    name: "Anika Sharma",
    role: "Co-Founder & CEO",
    initials: "AS",
    bg: "bg-teal-100 text-teal-700",
  },
  {
    name: "Rajiv Menon",
    role: "Co-Founder & CTO",
    initials: "RM",
    bg: "bg-moss-100 text-moss-700",
  },
  {
    name: "Priya Nair",
    role: "Head of Impact Programs",
    initials: "PN",
    bg: "bg-earth-100 text-earth-700",
  },
  {
    name: "Suresh Kumar",
    role: "Head of Corporate Partnerships",
    initials: "SK",
    bg: "bg-teal-100 text-teal-800",
  },
];

const VALUES = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Transparency",
    desc: "Every rupee tracked, every outcome verified. We publish detailed fund utilization reports and field evidence.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Accountability",
    desc: "We own outcomes, not just activities. If a target isn't met, we investigate, learn, and report honestly.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Human Impact",
    desc: "Behind every metric is a real person. We never lose sight of the human story at the centre of our work.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Execution Excellence",
    desc: "We move fast, iterate often, and partner only with verified ground-level NGOs and implementation experts.",
  },
];

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
            Built by People Who Believe CSR Can Do More
          </h1>
          <p className="text-teal-200 text-lg leading-relaxed">
            Impacto was born from a simple frustration: too many CSR funds sat
            undeployed or were spent on programmes that looked good on paper but
            changed nothing on the ground.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
              Deploy capital where it matters most
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To make every rupee of CSR funding work harder — by connecting
              corporate capital with verified on-ground programmes, measuring
              every outcome rigorously, and reporting with radical transparency.
            </p>
          </div>
          <div>
            <span className="text-earth-500 text-sm font-semibold uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
              A India where no CSR fund goes to waste
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every company — regardless of size —
              can point to specific communities improved, specific lives
              changed, and specific numbers achieved through their social
              investments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-earth-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
            From Frustration to a Movement
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p>
              In 2019, our founders Anika and Rajiv were working in impact
              consulting when they noticed the same pattern repeating:
              well-meaning companies writing large CSR cheques to intermediaries
              who lacked the ground infrastructure to deliver outcomes — and no
              system to know what actually happened.
            </p>
            <p>
              They spent two years mapping India's highest-performing grassroots
              NGOs — organisations with proven field presence but no access to
              corporate funding. Then they built Impacto: a platform that routes
              corporate CSR directly to these verified implementers, wraps it in
              real-time monitoring, and produces transparent reports that
              satisfy both regulators and board-level expectations.
            </p>
            <p>
              Today, Impacto manages CSR programmes across 12 states, has
              directly impacted over 2,40,000 lives, and is trusted by 48
              companies ranging from startups to Fortune 500 subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            What We Stand For
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <Card
              key={v.title}
              className="shadow-card border-earth-100 text-center"
            >
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4 text-teal-600">
                  {v.icon}
                </div>
                <h3 className="font-display text-base font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-earth-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
              The People
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <Card
                key={member.name}
                data-ocid={`team.item.${i + 1}`}
                className="shadow-card text-center bg-white"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full ${member.bg} flex items-center justify-center mx-auto mb-3 font-display text-xl font-bold`}
                  >
                    {member.initials}
                  </div>
                  <p className="font-semibold text-sm text-foreground">
                    {member.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
