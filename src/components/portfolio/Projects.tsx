import { useEffect, useState } from "react";
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
  image: string;
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
    title: "World Wide Importers Sales Dashboard",
    client: "Microsoft Fabric · Lakehouse",
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

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Section
      id="projects"
      number="04"
      title="Featured Projects"
      subtitle="// Selected dashboards & data platforms — click any card to explore."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group text-left glass rounded-xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-500 shadow-card-soft flex flex-col cursor-pointer"
            onClick={() => setOpen(p)}
          >
            <div className="relative bg-secondary p-3 border-b border-border">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <span className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground truncate">{p.id}.pbix</span>
              </div>
              <div className="rounded-md overflow-hidden bg-background/60">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-[11px] font-mono text-primary mb-1.5 uppercase tracking-wider">{p.client}</p>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {p.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <button
                  onClick={(e) => { e.stopPropagation(); setOpen(p); }}
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl max-w-6xl w-full my-8 overflow-hidden shadow-glow animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">{project.id}.pbix</span>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        <div className="p-3 md:p-5 bg-background/40 border-b border-border">
          <img src={project.image} alt={project.title} className="w-full h-auto max-h-[55vh] object-contain object-top rounded-md" />
        </div>

        <div className="p-6 md:p-8">
          <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{project.client}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

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
              <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono">
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
        </div>
      </div>
    </div>
  );
}
