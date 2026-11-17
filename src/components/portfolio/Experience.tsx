import { useState } from "react";
import { Section } from "./Section";

const jobs = [
  {
    company: "Xvantech",
    role: "Business Intelligence Analyst",
    period: "Aug 2025 – Present",
    location: "Arizona, USA",
    bullets: [
      "Built end-to-end Power BI dashboards for automotive clients covering KPI tracking, GP margin, marketing analytics, call analytics, and payroll reporting",
      "Optimized an oversized Power BI semantic model by consolidating 900+ DAX measures into approximately 80 through redundancy elimination, relationship restructuring, and DAX rewrites",
      "Unified five Fivetran-synced platforms, including Google Ads, Tekmetric, Paylocity, 3CX, and NetSuite, into one reporting layer serving 8+ automotive locations",
      "Built reusable DAX period-switching logic for WTD, MTD, SPLY, and Pace reporting with MST timezone handling",
      "Engineered Azure SQL views and CTEs for GP analysis and paginated reports, using OPENJSON to parse and enrich call data",
      "Automated real-time low-sentiment call alerts and call-note workflows with Power Automate and scheduled DAX queries",
    ],
  },
  {
    company: "Tkxel",
    role: "Data Analytics Engineer",
    period: "Mar 2025 – Mar 2026",
    location: "Lahore",
    bullets: [
      "Reduced data refresh time from 5–6 hours to 20 minutes by redesigning end-to-end pipelines in Microsoft Fabric",
      "Built and deployed custom data agents in Microsoft Fabric using Copilot Studio",
      "Led data engineering projects using Azure Data Factory, Data Lake Gen2, Databricks, and Synapse",
      "Implemented medallion architecture for scalable pipelines and warehousing",
      "Configured SSRS for automated report subscriptions and secure data access",
      "Optimized DAX measures and T-SQL queries, reducing report latency by 30%",
    ],
  },
  {
    company: "PostEx",
    role: "Business Intelligence Engineer",
    period: "Oct 2024 – Mar 2025",
    location: "Lahore",
    bullets: [
      "Developed a centralized financial ledger in Power BI to reduce manual reporting work for the finance team",
      "Built Centralized Order Performance Dashboard with real-time insights",
      "Designed data warehousing solutions using incremental refresh",
      "Implemented Gen2 Dataflows for efficient ETL from MySQL databases",
      "Set up on-premises data gateway for secure Power BI connectivity",
      "Automated data refresh processes minimizing manual intervention",
    ],
  },
  {
    company: "CrecenTech",
    role: "Data Analyst",
    period: "May 2022 – Sep 2024",
    location: "Lahore",
    bullets: [
      "Developed tailored dashboards in Power BI and Looker Studio for real-time marketing insights",
      "Contributed to 50–60% time reduction by automating processes",
      "Collaborated with Project Managers to deliver data-driven solutions",
      "Created performance dashboards for the Quality Engineering Department",
      "Demonstrated expertise in CRM systems (Podio, Salesforce)",
      "Provided extensive training to new resources",
    ],
  },
  {
    company: "CapperSoft",
    role: "KYC Analyst",
    period: "Nov 2021 – Feb 2022",
    location: "Lahore",
    bullets: [
      "Verified customer documents against global regulatory frameworks",
      "Used OCR software to extract and validate customer information",
      "Reconciled sensitive data ensuring 100% accuracy",
      "Collaborated with team to enhance KYC procedures",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <Section id="experience" number="02" title="Experience">
      <div className="grid md:grid-cols-[200px_1fr] gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap md:border-l-2 md:-ml-px border-b-2 md:border-b-0 transition-all ${
                active === i
                  ? "text-primary border-primary bg-primary/5"
                  : "text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5"
              }`}
            >
              {j.company}
            </button>
          ))}
        </div>
        <div className="animate-fade-up" key={active}>
          <h3 className="text-xl font-bold text-foreground">
            {job.role} <span className="text-primary">@ {job.company}</span>
          </h3>
          <p className="text-sm text-muted-foreground font-mono mt-1 mb-5">
            {job.period} · {job.location}
          </p>
          <ul className="space-y-3">
            {job.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
