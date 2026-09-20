import { Section } from "./Section";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

export function About() {
  return (
    <Section id="about" number="01" title="About Me">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm Hammad, a{" "}
            <span className="text-foreground font-semibold">Data Analytics Engineer</span>{" "}
            specializing in Power BI, Microsoft Fabric, and Azure. I design, support, and optimize
            data pipelines, semantic models, and enterprise BI solutions.
          </p>
          <p>
            With over <span className="text-foreground font-semibold">4 years of experience</span>{" "}
            in the data domain, my work spans BI engineering and analytics engineering—from data
            integration and warehouse design to executive dashboards and performance optimization.
            At Systems Limited, I support public-sector reporting with access controls, data quality
            improvements, and documented KPI definitions.
          </p>
          <p>
            I'm <span className="text-foreground font-semibold">5× Microsoft Certified</span> across
            Power BI, Fabric Analytics Engineering, Azure Data Fundamentals, Azure AI Fundamentals,
            and AI Business. I focus on building reliable solutions that are easy to maintain and
            useful to the people making decisions with them.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: MapPin, label: "Location", value: "Lahore, PK" },
            { icon: Briefcase, label: "Role", value: "Analytics Engineer" },
            { icon: GraduationCap, label: "Education", value: "B.S. IT" },
            { icon: Award, label: "Experience", value: "4+ Years" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-4 hover:border-primary/40 transition-colors"
            >
              <item.icon className="text-primary mb-2" size={20} />
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-sm font-semibold text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
