import profile from "@/assets/profile-hammad.jpg";
import { Github, Linkedin, Mail, ArrowDown, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center w-full relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>
          <p className="text-primary font-mono text-sm mb-3">
            <span className="text-muted-foreground">$</span> whoami
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
            Hammad Akram<span className="text-primary animate-blink">_</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground tracking-tight leading-[1.1] mb-6">
            I build <span className="text-gradient">data solutions</span> that scale.
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-8">
            Data Analytics Engineer specializing in Power BI, Microsoft Fabric and
            Azure Data Engineering. I architect scalable pipelines and dashboards
            that turn messy data into business decisions.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:shadow-glow transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-primary/40 text-primary font-mono text-sm font-semibold hover:bg-primary/10 transition-all"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/HammadAkram0" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/hammadakram0/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://substack.com/@hammadakrm" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="Substack"><BookOpen size={20} /></a>
            <a href="mailto:hammadakram167@gmail.com" className="hover:text-primary transition-colors" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className="relative mx-auto md:mx-0 animate-fade-up">
          <div className="glass rounded-2xl p-1 terminal-border shadow-card-soft w-full max-w-sm">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">~/profile.tsx</span>
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-b-xl bg-secondary">
              <img
                src={profile}
                alt="Hammad Akram"
                width={768}
                height={768}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 glass rounded-lg px-3 py-2 font-mono text-[11px] shadow-card-soft">
            <span className="text-primary">●</span> <span className="text-muted-foreground">4+ years exp</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
