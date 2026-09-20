import { Section } from "./Section";
import { Award, ExternalLink } from "lucide-react";
import pl300 from "@/assets/cert-pl300.png";
import dp900 from "@/assets/cert-dp900.png";
import dp600 from "@/assets/cert-dp600.png";
import databricks from "@/assets/cert-databricks.png";

const certs: { badge?: string; name: string; code: string; issuer: string; url?: string }[] = [
  {
    badge: dp600,
    name: "Fabric Analytics Engineer Associate",
    code: "DP-600",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/hammadakram-5687/credentials/5d714200032604db",
  },
  {
    badge: pl300,
    name: "Power BI Data Analyst Associate",
    code: "PL-300",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/hammadakram-1650/credentials/56ffad5d1370b09d",
  },
  {
    badge: dp900,
    name: "Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/hammadakram-5687/credentials/dfa9ac37d3e0c121",
  },
  { name: "Azure AI Fundamentals", code: "AI-900", issuer: "Microsoft" },
  { name: "AI Business Professional", code: "AB-730", issuer: "Microsoft" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      number="05"
      title="Certifications"
      subtitle="// Five Microsoft certifications across analytics, data, and AI."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div
            key={c.name}
            className="group glass rounded-xl p-5 hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col items-center text-center"
          >
            <div className="h-32 w-full flex items-center justify-center mb-4">
              {c.badge ? (
                <img
                  src={c.badge}
                  alt={`${c.name} badge`}
                  loading="lazy"
                  className={`object-contain group-hover:scale-105 transition-transform ${c.code === "DP-600" ? "h-full w-full scale-125" : "h-full w-full"}`}
                />
              ) : (
                <Award className="text-primary h-16 w-16" aria-hidden="true" />
              )}
            </div>
            <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1">
              {c.code}
            </p>
            <h3 className="font-bold text-foreground leading-tight mb-1 text-sm">{c.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">Issued by {c.issuer}</p>
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
              >
                View Credential <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 glass rounded-xl p-5">
        <h3 className="font-bold mb-4">Training & Professional Development</h3>
        <div className="flex items-center gap-4">
          <img
            src={databricks}
            alt="Databricks Fundamentals badge"
            loading="lazy"
            className="h-16 w-16 object-contain"
          />
          <div>
            <p className="text-sm font-semibold">Databricks Fundamentals</p>
            <a
              href="https://credentials.databricks.com/e896c1f4-5a94-4651-aead-40025ad8f9bd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View Credential <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
