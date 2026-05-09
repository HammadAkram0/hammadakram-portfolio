import { Section } from "./Section";
import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    initials: "GL",
    color: "from-amber-400 to-orange-500",
    name: "Ghislain Lauzin",
    role: "Business Development & BI",
    relation: "Client · October 2024",
    linkedin: "https://www.linkedin.com/in/glauzin/",
    text: "Hammad has an exceptional ability to combine technical expertise with creative design. He excels at developing complex formulas and translating data into clear, impactful visuals — both detail-oriented and strategic. A proactive collaborator who consistently exceeds expectations.",
  },
  {
    initials: "HZ",
    color: "from-violet-400 to-fuchsia-500",
    name: "Hamza Zafar",
    role: "UI/UX Designer · ML Engineer",
    relation: "Colleague · April 2024",
    linkedin: "https://www.linkedin.com/in/hamza-zafar-/",
    text: "A skilled and diligent data analyst. Hammad distills complex information into actionable insights with excellent communication skills, conveying findings effectively to stakeholders at all levels. A proactive, adaptable team member.",
  },
  {
    initials: "MA",
    color: "from-emerald-400 to-teal-500",
    name: "Muhammad Ateeb Shakeel",
    role: "Client Success Specialist",
    relation: "Colleague · December 2024",
    linkedin: "https://www.linkedin.com/in/ateebshakeel/",
    text: "A skilled Power BI expert with exceptional ability in transforming complex data into actionable insights. Hammad excels in dynamic dashboards, optimized data models and integrating diverse data sources — consistently delivering impactful solutions.",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      number="06"
      title="What People Say"
      subtitle="// Recommendations from colleagues and clients."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="glass rounded-xl p-6 flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <Quote className="text-primary mb-4" size={26} />
            <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              {t.text}
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white text-sm shadow-lg shrink-0`}>
                {t.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground text-sm truncate">{t.name}</span>
                  <a href={t.linkedin} target="_blank" rel="noreferrer" aria-label={`${t.name} LinkedIn`} className="text-muted-foreground hover:text-primary">
                    <Linkedin size={13} />
                  </a>
                </div>
                <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                <div className="text-[11px] text-primary font-mono mt-0.5">{t.relation}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
