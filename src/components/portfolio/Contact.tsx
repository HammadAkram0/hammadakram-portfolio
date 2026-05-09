import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 scroll-mt-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.15_180/0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-2xl mx-auto relative">
        <p className="text-primary font-mono text-sm mb-4">07. What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          I'm always open to discussing new opportunities, data analytics projects,
          or simply connecting with fellow professionals. Got an idea? Let's talk.
        </p>
        <a
          href="mailto:hammadakram167@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-gradient text-primary-foreground font-semibold text-lg hover:shadow-glow hover:scale-105 transition-all"
        >
          <Mail size={20} /> Say Hello
        </a>
        <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground">
          <a href="https://github.com/HammadAkram0" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/hammadakram0/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://substack.com/@hammadakrm" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="Substack">
            <BookOpen size={22} />
          </a>
          <a href="mailto:hammadakram167@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
      <footer className="mt-20 text-xs text-muted-foreground font-mono">
        Designed & built by Hammad Akram · © {new Date().getFullYear()}
      </footer>
    </section>
  );
}
