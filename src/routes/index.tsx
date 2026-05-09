import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hammad Akram — Analytics Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Hammad Akram — Analytics Engineer specializing in Power BI, Microsoft Fabric, and Azure Data Engineering.",
      },
      { property: "og:title", content: "Hammad Akram — Analytics Engineer" },
      {
        property: "og:description",
        content: "Power BI, Microsoft Fabric, and Azure dashboards & data pipelines.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
