import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Section } from "./Section";
import operational from "@/assets/dashboard-operational.png";
import wwi from "@/assets/dashboard-wwi.png";
import automotive from "@/assets/dashboard-automotive.png";
import cost from "@/assets/dashboard-cost.png";
import sales from "@/assets/dashboard-sales.png";
import orders from "@/assets/dashboard-orders.png";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  image?: string;
  outcome?: string;
  repository?: string;
  title: string;
  client: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "fabric-migration",
    title: "Dynamics 365 to Microsoft Fabric",
    client: "Professional case study · Tkxel",
    outcome: "5–6 hours → 20 minutes",
    tagline:
      "Redesigned data pipelines to reduce refresh time and deliver curated data for Power BI reporting.",
    description:
      "Dynamics 365 reporting was constrained by 5–6-hour refresh cycles. At Tkxel, I redesigned and implemented end-to-end Microsoft Fabric pipelines, ingesting D365 F&O and CRM data and transforming it with notebooks. A Bronze, Silver, and Gold architecture organized processing, with curated data served through a warehouse for Power BI. Refresh time fell to 20 minutes.",
    highlights: [
      "My contribution: pipeline development, transformations, and data modeling",
      "D365 F&O and CRM ingestion through Fabric pipelines",
      "Notebook-based cleansing and medallion architecture",
      "Measured result: refresh time reduced from 5–6 hours to 20 minutes",
    ],
    tags: ["Microsoft Fabric", "Dynamics 365", "Pipelines", "Lakehouse"],
  },
  {
    id: "public-sector-reporting",
    title: "Public-Sector Operations & Executive Reporting",
    client: "Professional case study · Systems Limited",
    outcome: "90+ KPIs · 19 executive measures",
    tagline:
      "Unified contact-center reporting across multiple entities, with executive scorecards and role-based access.",
    description:
      "At Systems Limited, I combined Genesys, Dynamics 365, Kore.ai, and Hive data into a shared Power BI model for multiple public-sector entities. I delivered operational and executive reporting covering contact-center performance, workforce, customer experience, and case management. My work included weighted executive scorecards, model corrections, access controls, and documented KPI logic for audit and handover.",
    highlights: [
      "My contribution: semantic modeling, dashboard development, DAX, and reporting controls",
      "Operational dashboards covering 90+ KPIs",
      "Executive scorecards combining 19 KPIs into weighted performance scores",
      "Row-Level Security, source documentation, and automated PDF delivery",
    ],
    tags: ["Power BI", "DAX", "Data Modeling", "Power Automate"],
  },
  {
    id: "operational",
    image: operational,
    title: "Operational Performance Dashboard",
    client: "Logistics · Weekly Ops",
    tagline:
      "A Power BI dashboard tracking weekly inbound volumes, hours, labour costs and overtime impact across brands.",
    description:
      "I was tasked to build a professional dashboard to monitor weekly operational performance and key metrics. I designed a Power BI dashboard to track KPIs like inbound volumes, hours worked, labour costs and cost impacts — featuring KPI cards, bar/pie charts and trend analysis for labour allocation. Advanced Year, Month and Week filters provide tailored insights, supporting data-driven decision-making, efficient resource allocation and effective cost management.",
    highlights: [
      "KPI cards for inbound volume, hours and labour cost",
      "Trend analysis of hour allocation across brands",
      "Year / Month / Week filters with reset",
      "Overtime cost impact breakdown",
    ],
    tags: ["Power BI", "Data Visualization", "Operations Analytics", "Excel"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjNiZWVhYWEtYWMwZS00ZWVlLWI1YjAtNmQ0YWNlNzE5M2Q0IiwidCI6IjgzZTI1ZmUwLWIwOGUtNDQxZC05NmUzLTA5YzVhZmU5YTBjZCIsImMiOjl9",
  },
  {
    id: "wwi",
    image: wwi,
    title: "Wide World Importers Sales Dashboard",
    client: "Sample-data project · Microsoft Fabric",
    repository: "https://github.com/HammadAkram0/Microsoft-Fabric-WWI-Data-Engineering-Project",
    tagline:
      "End-to-end Fabric solution turning raw operational data into a polished sales analytics experience.",
    description:
      "Built an end-to-end data engineering and analytics solution on Microsoft Fabric for the Wide World Importers dataset. Ingested data from SQL Server and SharePoint into a Lakehouse using a medallion architecture, modelled a star schema semantic layer and surfaced it in a clean Power BI sales dashboard covering total sales, order performance over time, revenue by city, top customers and orders by size.",
    highlights: [
      "Lakehouse + medallion architecture (Bronze/Silver/Gold)",
      "Star schema semantic model in Fabric",
      "Sales, customer & city-level performance views",
      "Top customer and order-size analytics",
    ],
    tags: ["Microsoft Fabric", "Lakehouse", "Power BI", "SQL Server"],
  },
  {
    id: "automotive",
    image: automotive,
    title: "Profitability & Performance Dashboard",
    client: "Automotive Group · Executive BI",
    tagline:
      "Executive view of revenue, gross profit, net income and absorption across multiple automotive business units.",
    description:
      "An executive-level financial and operational dashboard analysing profitability across multiple automotive business units. It consolidates revenue, cost and profitability into a single interactive view so leadership can monitor performance, spot trends and make data-driven decisions. Includes KPI summary cards (Total Revenue, Gross Profit, Net Income, Margins, Fixed Absorption Rate), monthly revenue trends, company-level comparisons and drilldowns by company / location / time period.",
    highlights: [
      "KPI cards: Revenue, GP, Net Income, FAR",
      "Monthly revenue trend with seasonality",
      "Company-level performance comparison",
      "Interactive filters & partner drill-through",
    ],
    tags: ["Power BI", "Financial Reporting", "SQL Server", "DAX"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjU4ZGRlYWQtZmVmNy00NWE5LTljYTgtOTMxOWI3ZjkxNmJmIiwidCI6IjgzZTI1ZmUwLWIwOGUtNDQxZC05NmUzLTA5YzVhZmU5YTBjZCIsImMiOjl9",
  },
  {
    id: "cost",
    image: cost,
    title: "Cost Evaluation Dashboard",
    client: "Construction · Project Financials",
    tagline:
      "Comprehensive solution for visualising and managing project budgets, planned vs actual costs and progress.",
    description:
      "The Cost Evaluation Dashboard, crafted in Power BI, is a comprehensive solution for visualising and managing project financials and progress. It integrates KPIs for total budget, planned expenses, actual costs and any cost overruns for at-a-glance assessment. Donut charts break down budget by subcontractor, bar graphs compare planned vs actual costs by activity and timelines track activity progression. A unique focus on physical completion percentages alongside financial metrics ties spending to actual project progress for true holistic project management.",
    highlights: [
      "Budget vs Actual cost by activity",
      "Subcontractor budget allocation (donut)",
      "Weekly timeline & WBS filters",
      "Physical % complete vs spend correlation",
    ],
    tags: ["Power BI", "DAX", "Financial Analysis", "Excel"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiZmU3MDU0YTAtM2QyYy00ZmZjLWFmMTktNmUxNWI5NjU0NGI4IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
  },
  {
    id: "sales",
    image: sales,
    title: "Sales Performance Dashboard",
    client: "Retail · Multi-segment Analytics",
    tagline:
      "Power BI dashboard analysing sales across segments, regions and categories with year-over-year insights.",
    description:
      "The Sales Performance Dashboard, developed in Power BI, is a powerful tool for analysing and managing sales metrics across multiple dimensions. It tracks total sales, year-over-year growth and segment-wise distribution across Consumer, Corporate and Home Office, with regional performance and a category ranking system. Interactive line charts show monthly sales trends by category, bar graphs compare segment performance and pie charts break down sales by category — empowering leaders with real-time, data-driven insights to align sales strategy with organisational goals.",
    highlights: [
      "YoY growth by segment (2022 vs 2023)",
      "Sales by month, category and region",
      "Top customer and category rankings",
      "Interactive year & category switchers",
    ],
    tags: ["Power BI", "DAX", "Sales Analysis", "Business Intelligence"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjk2YzcwZTctODIxMy00NjU1LThmY2QtMGQ1MzMwZGFlMGM1IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9",
  },
  {
    id: "orders",
    image: orders,
    title: "Order Delays & Resolution Report",
    client: "Supply Chain · Issue Tracking",
    tagline:
      "Issue-tracking dashboard surfacing affected vendors, customers and resolution analytics across locations.",
    description:
      "A Power BI report that consolidates order delay issues across the supply chain into a single source of truth. It tracks total issues, affected vendors and customers, with breakdowns by issue location, SO customer, season and SO status. The Resolutions view ranks the most common resolution types (Rework, Released stock, RTM, Cancellation, Qty reduction) and ties them back to location — enabling root-cause analysis and faster operational response.",
    highlights: [
      "Issues by location, customer & season",
      "Resolution-type ranking & analytics",
      "SO status distribution (donut)",
      "Affected vendor / customer KPIs",
    ],
    tags: ["Power BI", "Reporting", "Root Cause Analysis", "DAX"],
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  return (
    <Section
      id="projects"
      number="04"
      title="Featured Projects"
      subtitle="// Professional case studies and dashboard projects — open the details to explore."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group text-left glass rounded-xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-500 shadow-card-soft flex flex-col"
          >
            <div className="relative bg-secondary p-3 border-b border-border">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <span className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground truncate">
                  {p.image ? `${p.id}.pbix` : "Project case study"}
                </span>
              </div>
              <div className="rounded-md overflow-hidden bg-background/60">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-video object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  />
                ) : (
                  <div className="aspect-video flex items-center justify-center p-6 text-center">
                    <p className="text-2xl font-bold text-primary">{p.outcome}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-[11px] font-mono text-primary mb-1.5 uppercase tracking-wider">
                {p.client}
              </p>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {p.title}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <button
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setOpen(p);
                  }}
                  aria-label={`View details: ${p.title}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground font-mono text-xs font-semibold hover:shadow-glow transition-all"
                >
                  View Details
                </button>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-primary/40 text-primary font-mono text-xs font-semibold hover:bg-primary/10 transition-all"
                  >
                    Live <ExternalLink size={12} />
                  </a>
                )}
                {p.repository && (
                  <a
                    href={p.repository}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-primary hover:underline"
                  >
                    Source <ExternalLink className="inline" size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <ProjectModal
          project={open}
          onClose={() => setOpen(null)}
          onRestoreFocus={() => trigger.current?.focus()}
        />
      )}
    </Section>
  );
}

function ProjectModal({
  project,
  onClose,
  onRestoreFocus,
}: {
  project: Project;
  onClose: () => void;
  onRestoreFocus: () => void;
}) {
  return (
    <Dialog.Root
      open
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="project-overlay" />
        <Dialog.Content
          className="project-dialog glass rounded-2xl shadow-glow"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            onRestoreFocus();
          }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                {project.image ? `${project.id}.pbix` : "Project case study"}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
          </div>

          {project.image && (
            <div className="p-3 md:p-5 bg-background/40 border-b border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-top rounded-md"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
              {project.client}
            </p>
            <Dialog.Title className="text-2xl md:text-3xl font-bold mb-4">
              {project.title}
            </Dialog.Title>
            {project.outcome && (
              <p className="text-xl font-semibold text-primary mb-4">{project.outcome}</p>
            )}
            <Dialog.Description className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </Dialog.Description>

            <h3 className="font-mono text-sm text-primary mb-3">// Highlights</h3>
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:shadow-glow transition-all"
              >
                View Live Dashboard <ExternalLink size={16} />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Explore the source on GitHub <ExternalLink size={16} />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
