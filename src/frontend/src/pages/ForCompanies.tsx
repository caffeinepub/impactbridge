import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  BarChart3,
  Check,
  Newspaper,
  Share2,
  Video,
  X,
} from "lucide-react";
import type { Page } from "../components/Layout";

interface ForCompaniesProps {
  onNavigate: (page: Page) => void;
}

const VALUE_PROPS = [
  {
    title: "Measurable ROI",
    desc: "Track every rupee to verified outcomes. Annual impact reports ready for board and shareholders.",
  },
  {
    title: "ESG Alignment",
    desc: "Projects mapped to SDGs and SEBI BRSR reporting requirements so your compliance is always covered.",
  },
  {
    title: "Hassle-Free Execution",
    desc: "No procurement headaches, no vendor management, no field team required from your end.",
  },
];

const DELIVERABLES = [
  {
    icon: <Share2 className="w-5 h-5 text-teal-600" />,
    title: "Social Media Features",
    desc: "Branded posts across LinkedIn, Instagram, and Twitter showcasing your impact story.",
  },
  {
    icon: <Video className="w-5 h-5 text-teal-600" />,
    title: "Impact Videos",
    desc: "Professionally produced short-form video documenting your project's human impact.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-teal-600" />,
    title: "Brand Storytelling",
    desc: "Long-form narrative content — blog posts, case study PDFs, and infographics.",
  },
  {
    icon: <Newspaper className="w-5 h-5 text-teal-600" />,
    title: "PR Visibility",
    desc: "Press releases and media placement in relevant CSR and business publications.",
  },
];

const COMPARISON = [
  {
    feature: "End-to-end implementation",
    ib: true,
    traditional: false,
    diy: false,
  },
  {
    feature: "Verified NGO partners",
    ib: true,
    traditional: false,
    diy: false,
  },
  { feature: "Real-time monitoring", ib: true, traditional: false, diy: false },
  {
    feature: "Data-backed impact report",
    ib: true,
    traditional: true,
    diy: false,
  },
  {
    feature: "Brand marketing deliverables",
    ib: true,
    traditional: false,
    diy: false,
  },
  {
    feature: "ESG compliance documentation",
    ib: true,
    traditional: true,
    diy: true,
  },
  {
    feature: "Regulatory filing support",
    ib: true,
    traditional: false,
    diy: false,
  },
];

export default function ForCompanies({ onNavigate }: ForCompaniesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            Corporate Partners
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            CSR That Works for Business
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Impacto turns your statutory CSR obligation into a strategic asset —
            measurable social impact plus authentic brand equity.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Why Partner With Us
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2">
            What You Get
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((v, i) => (
            <Card key={v.title} className="shadow-card border-earth-100">
              <CardContent className="p-7">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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

      {/* CSR + Brand Return */}
      <section className="bg-earth-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-earth-500 text-sm font-semibold uppercase tracking-widest">
              Bonus Value
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              CSR + Brand Return
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Every Impacto partner receives a suite of marketing deliverables
              that turn your social investment into authentic brand
              storytelling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DELIVERABLES.map((d, i) => (
              <Card
                key={d.title}
                data-ocid={`deliverable.item.${i + 1}`}
                className="shadow-card bg-white text-center"
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                    {d.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold mb-2">
                    {d.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Comparison
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2">
            Why Impacto
          </h2>
        </div>
        <div className="max-w-3xl mx-auto overflow-x-auto rounded-xl shadow-card border border-border">
          <Table data-ocid="comparison.table">
            <TableHeader>
              <TableRow className="bg-teal-900 hover:bg-teal-900">
                <TableHead className="text-white font-semibold">
                  Feature
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Impacto
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  Traditional Agency
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  DIY
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON.map((row, i) => (
                <TableRow
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-earth-50/50"}
                >
                  <TableCell className="font-medium text-sm">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.ib ? (
                      <Check className="w-4 h-4 text-moss-600 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-destructive mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.traditional ? (
                      <Check className="w-4 h-4 text-moss-600 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-destructive mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.diy ? (
                      <Check className="w-4 h-4 text-moss-600 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-destructive mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Make Your CSR Work Harder
          </h2>
          <p className="text-teal-200 mb-8 max-w-md mx-auto">
            Let's find the right programme for your company's goals and budget.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            data-ocid="companies.primary_button"
            size="lg"
            className="bg-earth-500 hover:bg-earth-600 text-white"
          >
            Get a Free CSR Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
