import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Rocket, Search, Users } from "lucide-react";
import type { Page } from "../components/Layout";

interface HowItWorksProps {
  onNavigate: (page: Page) => void;
}

const STEPS = [
  {
    num: "01",
    icon: <Search className="w-6 h-6 text-teal-600" />,
    title: "Discovery & Planning",
    desc: "We start with a deep-dive into your CSR mandate, goals, and budget. Our team identifies the right programme areas, NGO partners, and geographic focus — aligned to your company's values and compliance needs.",
    highlights: [
      "Needs assessment",
      "Partner shortlisting",
      "Budget planning",
      "Compliance alignment",
    ],
  },
  {
    num: "02",
    icon: <Rocket className="w-6 h-6 text-teal-600" />,
    title: "Fund Deployment",
    desc: "Once approved, funds are released in tranches tied to verified milestones. All payments flow through escrow-style controls, with full audit trails available to your finance and legal teams.",
    highlights: [
      "Tranche-based release",
      "Audit-ready trails",
      "MOU with NGO partners",
      "Board-ready documentation",
    ],
  },
  {
    num: "03",
    icon: <Users className="w-6 h-6 text-teal-600" />,
    title: "Ground Execution",
    desc: "Our verified NGO partners execute on the ground — with regular check-ins from Impacto field officers. You get live photo and video updates, and beneficiary data is collected through our mobile-first monitoring system.",
    highlights: [
      "Verified NGO partners",
      "Field officer oversight",
      "Live photo/video updates",
      "Beneficiary data collection",
    ],
  },
  {
    num: "04",
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    title: "Reporting & Stories",
    desc: "At project close, you receive a comprehensive impact report: quantitative outcomes, financial utilization, and compelling human stories ready for your CSR report, board presentation, or brand campaign.",
    highlights: [
      "Quantitative impact report",
      "Financial reconciliation",
      "Story content for brand use",
      "Regulatory compliance pack",
    ],
  },
];

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            The Process
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            How Impacto Works
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Four steps from CSR budget to verified impact report — with full
            transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-12 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-ocid={`step.item.${i + 1}`}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border-2 border-teal-200 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-teal-700">
                    {step.num}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block w-0.5 bg-teal-200 flex-1 mt-4 h-32" />
                )}
              </div>
              {/* Content */}
              <Card className="flex-1 shadow-card border-earth-100">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-full font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-earth-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready to begin?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            It starts with a 30-minute discovery call. No commitment needed.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            data-ocid="hiw.primary_button"
            size="lg"
            className="bg-teal-700 hover:bg-teal-800 text-white"
          >
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
