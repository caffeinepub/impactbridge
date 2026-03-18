import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ImpactMetrics {
    partnerCompanies: bigint;
    statesCovered: bigint;
    totalLivesImpacted: bigint;
    projectsCompleted: bigint;
}
export interface ProjectUpdate {
    id: bigint;
    status: string;
    projectName: string;
    description: string;
    fundUtilization: bigint;
}
export interface ContactForm {
    contactName: string;
    email: string;
    message: string;
    companyName: string;
    phone: string;
    budgetRange: string;
}
export interface NewsletterSignup {
    email: string;
    companyName: string;
}
export interface CaseStudy {
    title: string;
    description: string;
    outcomeMetrics: string;
    category: string;
    location: string;
}
export interface backendInterface {
    addCaseStudy(title: string, category: string, description: string, location: string, outcomeMetrics: string): Promise<void>;
    addProjectUpdate(projectName: string, status: string, fundUtilization: bigint, description: string): Promise<void>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllNewsletterSignups(): Promise<Array<NewsletterSignup>>;
    getCaseStudies(): Promise<Array<CaseStudy>>;
    getCaseStudiesByTitle(): Promise<Array<CaseStudy>>;
    getContactFormsByEmail(): Promise<Array<ContactForm>>;
    getImpactMetrics(): Promise<ImpactMetrics>;
    getProjectUpdates(): Promise<Array<ProjectUpdate>>;
    signupNewsletter(email: string, companyName: string): Promise<void>;
    submitContactForm(companyName: string, contactName: string, email: string, phone: string, message: string, budgetRange: string): Promise<void>;
    updateImpactMetrics(totalLivesImpacted: bigint, projectsCompleted: bigint, partnerCompanies: bigint, statesCovered: bigint): Promise<void>;
}
