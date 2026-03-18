import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";
import StatCounter from "../components/StatCounter";
import { useImpactMetrics, useProjectUpdates } from "../hooks/useQueries";

const STATES = [
  "Rajasthan",
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
  "Odisha",
  "Jharkhand",
  "Chhattisgarh",
  "Maharashtra",
  "Assam",
  "West Bengal",
  "Gujarat",
  "Karnataka",
];

const SECTORS = [
  {
    name: "Education",
    img: "/assets/generated/impact-education.dim_600x400.jpg",
    count: "42 projects",
  },
  {
    name: "Health",
    img: "/assets/generated/impact-health.dim_600x400.jpg",
    count: "31 projects",
  },
  {
    name: "Environment",
    img: "/assets/generated/impact-environment.dim_600x400.jpg",
    count: "28 projects",
  },
];

export default function OurImpact() {
  const { data: metrics } = useImpactMetrics();
  const { data: updates } = useProjectUpdates();

  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            Verified Numbers
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our Impact at a Glance
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Every number below is independently verified by our monitoring teams
            and partner NGOs.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-16 border-b border-border">
        <div className="container mx-auto px-4">
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

      {/* Sectors */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Focus Areas
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2">
            Impact by Sector
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <div
              key={s.name}
              data-ocid={`sector.item.${i + 1}`}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-hero transition-shadow group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-display text-white text-xl font-bold">
                    {s.name}
                  </span>
                  <p className="text-white/80 text-xs mt-0.5">{s.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Updates */}
      <section className="bg-earth-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
              Live Dashboard
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Active Project Updates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(updates ?? []).map((u, i) => (
              <Card
                key={u.projectName}
                data-ocid={`project.item.${i + 1}`}
                className="shadow-card bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {u.projectName}
                    </h3>
                    <Badge
                      className={`text-xs ${
                        u.status === "Completed"
                          ? "bg-moss-100 text-moss-700"
                          : "bg-teal-50 text-teal-700"
                      }`}
                    >
                      {u.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {u.description}
                  </p>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-foreground/70">
                        Fund Utilization
                      </span>
                      <span className="font-bold text-teal-700">
                        {Number(u.fundUtilization)}%
                      </span>
                    </div>
                    <Progress
                      value={Number(u.fundUtilization)}
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">
            Reach
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2">
            Geographic Coverage
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {STATES.map((state) => (
            <div
              key={state}
              className="flex items-center gap-1.5 bg-teal-50 text-teal-800 border border-teal-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              <MapPin className="w-3.5 h-3.5" />
              {state}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
