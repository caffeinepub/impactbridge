import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Layout, { type Page } from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import ForCompanies from "./pages/ForCompanies";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import OurImpact from "./pages/OurImpact";

const queryClient = new QueryClient();

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "about":
        return <AboutUs />;
      case "impact":
        return <OurImpact />;
      case "how-it-works":
        return <HowItWorks onNavigate={navigate} />;
      case "for-companies":
        return <ForCompanies onNavigate={navigate} />;
      case "case-studies":
        return <CaseStudies />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout currentPage={currentPage} onNavigate={navigate}>
        {renderPage()}
      </Layout>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
