import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Eye, MapPin, Users } from "lucide-react";
import type { Page } from "../components/Layout";
import StatCounter from "../components/StatCounter";
import { useCaseStudies, useImpactMetrics } from "../hooks/useQueries";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const PILLARS = [
  {
    icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
    title: "End-to-End Implementation",
    desc: "From project design to ground execution — we handle everything so your CSR investment creates real change without operational burden.",
  },
  {
    icon: <Eye className="w-6 h-6 text-teal-600" />,
    title: "Real-Time Monitoring",
    desc: "Live dashboards, field reports, and verified milestones so you always know exactly where your funds are going and what they're achieving.",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-600" />,
    title: "Data-Backed Impact",
    desc: "Every project is measured against credible outcome metrics — lives changed, income raised, access improved — not just activities completed.",
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const { data: metrics } = useImpactMetrics();
  const { data: caseStudies } = useCaseStudies();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-community.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/70 to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-earth-400/20 text-earth-200 border-earth-400/40 text-xs uppercase tracking-widest">
              CSR That Creates Real Change
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Turning CSR into Real,
              <br />
              <span className="text-earth-300">Measurable Change</span>
            </h1>
            <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              We connect corporate CSR budgets with high-impact, on-ground
              initiatives — delivered with transparency, verified data, and
              powerful brand storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onNavigate("contact")}
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-earth-500 hover:bg-earth-600 text-white shadow-hero"
              >
                Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => onNavigate("impact")}
                data-ocid="hero.secondary_button"
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white/20 hover:text-white"
              >
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              end={Number(metrics?.totalLivesImpacted ?? 240000)}
              label="Lives Impacted"
              suffix="+"
            />
            <StatCounter
              end={Number(metrics?.projectsCompleted ?? 127)}
              label="Projects Completed"
            />
            <StatCounter
              end={Number(metrics?.partnerCompanies ?? 48)}
              label="Partner Companies"
            />
            <StatCounter
              end={Number(metrics?.statesCovered ?? 12)}
              label="States Covered"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Our Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            What We Do
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We bridge the gap between corporate intent and on-ground impact
            through end-to-end CSR programme management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <Card
              key={p.title}
              className="shadow-card hover:shadow-hero transition-shadow border-earth-100"
            >
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-earth-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
                Real Stories
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Impact in Action
              </h2>
            </div>
            <Button
              variant="ghost"
              onClick={() => onNavigate("case-studies")}
              data-ocid="home.secondary_button"
              className="hidden md:flex text-teal-700 hover:text-teal-800"
            >
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(caseStudies ?? []).slice(0, 3).map((cs, i) => (
              <Card
                key={cs.title}
                data-ocid={`case.item.${i + 1}`}
                className="shadow-card hover:shadow-hero transition-all hover:-translate-y-1 bg-white overflow-hidden"
              >
                <div className="h-3 bg-gradient-to-r from-teal-600 to-moss-500" />
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-teal-50 text-teal-700 border-teal-200 text-xs">
                    {cs.category}
                  </Badge>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {cs.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-earth-500">
                    <MapPin className="w-3 h-3" />
                    {cs.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button
              onClick={() => onNavigate("case-studies")}
              data-ocid="home.secondary_button"
              className="bg-teal-700 hover:bg-teal-800 text-white"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to make your CSR count?
          </h2>
          <p className="text-teal-200 mb-8 max-w-xl mx-auto">
            Join 48+ companies already creating verified, reportable social
            impact with Impacto.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            data-ocid="cta.primary_button"
            size="lg"
            className="bg-earth-500 hover:bg-earth-600 text-white"
          >
            Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
