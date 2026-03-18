import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useCaseStudies } from "../hooks/useQueries";

const CATEGORY_COLORS: Record<string, string> = {
  Education: "bg-teal-50 text-teal-700 border-teal-200",
  "Clean Water": "bg-blue-50 text-blue-700 border-blue-200",
  "Women Empowerment": "bg-rose-50 text-rose-700 border-rose-200",
  Health: "bg-moss-50 text-moss-700 border-moss-200",
  Environment: "bg-earth-50 text-earth-700 border-earth-200",
};

export default function CaseStudies() {
  const { data: caseStudies } = useCaseStudies();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set((caseStudies ?? []).map((cs) => cs.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? (caseStudies ?? [])
      : (caseStudies ?? []).filter((cs) => cs.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            Real Stories
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Case Studies
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Behind every metric is a human story. Here are some of the
            communities whose lives have changed.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pt-10 pb-4">
        <div
          className="flex flex-wrap gap-2 justify-center"
          data-ocid="filter.tab"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-ocid="filter.tab"
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-white text-foreground/70 border-border hover:border-teal-400 hover:text-teal-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div
            data-ocid="casestudies.empty_state"
            className="text-center py-20 text-muted-foreground"
          >
            No case studies found for this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <Card
                key={`${cs.category}-${cs.title}`}
                data-ocid={`casestudies.item.${i + 1}`}
                className="shadow-card hover:shadow-hero transition-all hover:-translate-y-1 bg-white overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-teal-600 to-moss-500" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      className={`text-xs border ${
                        CATEGORY_COLORS[cs.category] ??
                        "bg-teal-50 text-teal-700 border-teal-200"
                      }`}
                    >
                      {cs.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-earth-500">
                      <MapPin className="w-3 h-3" />
                      {cs.location}
                    </div>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cs.description}
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-1">
                      Outcomes
                    </p>
                    <p className="text-xs text-teal-800">{cs.outcomeMetrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
