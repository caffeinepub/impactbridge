import { useMutation, useQuery } from "@tanstack/react-query";
import type { CaseStudy, ImpactMetrics, ProjectUpdate } from "../backend.d";
import { useActor } from "./useActor";

const FALLBACK_METRICS: ImpactMetrics = {
  totalLivesImpacted: BigInt(240000),
  projectsCompleted: BigInt(127),
  partnerCompanies: BigInt(48),
  statesCovered: BigInt(12),
};

const FALLBACK_CASE_STUDIES: CaseStudy[] = [
  {
    title: "Bright Futures: Bridging the Education Gap in Rajasthan",
    description:
      "Partnering with 42 schools across rural Rajasthan, we deployed digital learning labs and trained 180 teachers. Dropout rates fell by 34% in two years.",
    outcomeMetrics:
      "12,400 students enrolled · 34% drop-out reduction · 180 teachers trained",
    category: "Education",
    location: "Rajasthan",
  },
  {
    title: "Clean Water for Every Village in Uttar Pradesh",
    description:
      "Installed 620 community water purification units and trained local maintenance teams. Over 80,000 people now have consistent access to safe drinking water.",
    outcomeMetrics:
      "80,000 beneficiaries · 620 units installed · 15 villages covered",
    category: "Clean Water",
    location: "Uttar Pradesh",
  },
  {
    title: "She Leads: Women's Empowerment & Livelihood in Bihar",
    description:
      "Skill training in tailoring, organic farming, and digital literacy for rural women. 3,200 women have launched micro-enterprises, raising household incomes by 40%.",
    outcomeMetrics:
      "3,200 women trained · 40% income rise · 890 micro-enterprises launched",
    category: "Women Empowerment",
    location: "Bihar",
  },
];

const FALLBACK_PROJECT_UPDATES: ProjectUpdate[] = [
  {
    id: BigInt(1),
    projectName: "Solar Schools Project",
    status: "Active",
    description:
      "Solar panels installed across 38 rural schools in MP. Powering classrooms, digital labs, and drinking water pumps.",
    fundUtilization: BigInt(78),
  },
  {
    id: BigInt(2),
    projectName: "Clean Water Initiative – Bundelkhand",
    status: "Active",
    description:
      "Phase 2 of pipeline and purification unit deployment in water-stressed Bundelkhand region.",
    fundUtilization: BigInt(45),
  },
  {
    id: BigInt(3),
    projectName: "Digital Literacy Program – Odisha",
    status: "Completed",
    description:
      "Mobile digital literacy vans trained 14,000 women and youth across 62 panchayats in Odisha.",
    fundUtilization: BigInt(92),
  },
];

export function useImpactMetrics() {
  const { actor, isFetching } = useActor();
  return useQuery<ImpactMetrics>({
    queryKey: ["impactMetrics"],
    queryFn: async () => {
      if (!actor) return FALLBACK_METRICS;
      try {
        return await actor.getImpactMetrics();
      } catch {
        return FALLBACK_METRICS;
      }
    },
    enabled: !isFetching,
    placeholderData: FALLBACK_METRICS,
  });
}

export function useCaseStudies() {
  const { actor, isFetching } = useActor();
  return useQuery<CaseStudy[]>({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      if (!actor) return FALLBACK_CASE_STUDIES;
      try {
        const data = await actor.getCaseStudies();
        return data.length > 0 ? data : FALLBACK_CASE_STUDIES;
      } catch {
        return FALLBACK_CASE_STUDIES;
      }
    },
    enabled: !isFetching,
    placeholderData: FALLBACK_CASE_STUDIES,
  });
}

export function useProjectUpdates() {
  const { actor, isFetching } = useActor();
  return useQuery<ProjectUpdate[]>({
    queryKey: ["projectUpdates"],
    queryFn: async () => {
      if (!actor) return FALLBACK_PROJECT_UPDATES;
      try {
        const data = await actor.getProjectUpdates();
        return data.length > 0 ? data : FALLBACK_PROJECT_UPDATES;
      } catch {
        return FALLBACK_PROJECT_UPDATES;
      }
    },
    enabled: !isFetching,
    placeholderData: FALLBACK_PROJECT_UPDATES,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (form: {
      companyName: string;
      contactName: string;
      email: string;
      phone: string;
      message: string;
      budgetRange: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactForm(
        form.companyName,
        form.contactName,
        form.email,
        form.phone,
        form.message,
        form.budgetRange,
      );
    },
  });
}

export function useSignupNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: { email: string; companyName: string }) => {
      if (!actor) throw new Error("Not connected");
      await actor.signupNewsletter(data.email, data.companyName);
    },
  });
}
