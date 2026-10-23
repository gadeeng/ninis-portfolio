import PortfolioDock from "@/components/PortfolioDock";
import ThemeToggle from "@/components/ThemeToggle";
import FadeSections from "@/components/FadeSections";
import Home from "@/components/sections/Home";
import AboutMe from "@/components/sections/AboutMe";
import ResearchProjects from "@/components/sections/ResearchProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import OrganizationalExperience from "@/components/sections/OrganizationalExperience";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <ThemeToggle />
      <PortfolioDock />
      <FadeSections />
      <main id="page-main">
        <Home />
        <AboutMe />
        <WorkExperience />
        <ResearchProjects />
        <OrganizationalExperience />
        <Footer />
      </main>
    </>
  );
}
