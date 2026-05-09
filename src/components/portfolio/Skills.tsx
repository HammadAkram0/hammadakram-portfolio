import { Section } from "./Section";
import { BarChart3, Database, Cloud, Code2, Workflow, Server } from "lucide-react";

const groups = [
  { icon: BarChart3, title: "Analytics & BI", items: ["Power BI", "SSRS", "Looker Studio", "Tableau", "IBM Cognos", "Copilot Studio"] },
  { icon: Workflow, title: "Data Engineering", items: ["Azure Data Factory", "Synapse Analytics", "Databricks", "Fivetran", "Dataflows"] },
  { icon: Database, title: "Databases", items: ["Azure SQL", "MySQL", "PostgreSQL", "Oracle", "SAP BW", "Data Lake Gen2"] },
  { icon: Code2, title: "Query Languages", items: ["DAX", "SQL", "T-SQL", "KQL", "Python"] },
  { icon: Cloud, title: "Cloud Platforms", items: ["Microsoft Azure", "Microsoft Fabric", "AWS", "Power BI Service"] },
  { icon: Server, title: "CRM & Automation", items: ["Salesforce", "NetSuite", "HubSpot", "Power Automate", "Logic Apps"] },
];

export function Skills() {
  return (
    <Section id="skills" number="03" title="Skills & Tools" subtitle="A modern data stack — from ingestion to insight.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-accent-gradient/20 bg-primary/10 flex items-center justify-center text-primary mb-4">
              <g.icon size={22} />
            </div>
            <h3 className="font-bold text-foreground mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
