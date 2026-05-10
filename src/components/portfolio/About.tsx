import { Section } from "./Section";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

export function About() {
  return (
    <Section id="about" number="01" title="About Me">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm a seasoned <span className="text-foreground font-semibold">Data Analytics Engineer</span> with
            expertise in transforming complex data into meaningful insights. I specialize in building enterprise-grade BI
            solutions using Power BI, Azure services, and Microsoft Fabric.
          </p>
          <p>
            With over <span className="text-foreground font-semibold">4 years of experience</span> in the
            data domain, I've helped organizations streamline reporting processes, implement data
            warehousing solutions, and develop automated data pipelines, driving real time savings
            and smarter decisions across teams.
          </p>
          <p>
            Also I'm a 3x Microsoft Certified professional holding the{" "}
            <span className="text-foreground">Power BI Data Analyst (PL-300)</span>,{" "}
            <span className="text-foreground">Azure Data Fundamentals (DP-900)</span>, and{" "}
            <span className="text-foreground">Fabric Analytics Engineer (DP-600)</span> certifications,
            constantly leveling up in cloud and data engineering.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: MapPin, label: "Location", value: "Lahore, PK" },
            { icon: Briefcase, label: "Role", value: "Analytics Engineer" },
            { icon: GraduationCap, label: "Education", value: "B.S. IT" },
            { icon: Award, label: "Experience", value: "4+ Years" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-4 hover:border-primary/40 transition-colors">
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