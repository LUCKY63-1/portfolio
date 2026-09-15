import { ArrowUp } from "lucide-react"
import { profile } from "@/data/portfolio"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="page-container flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#top" className="font-heading text-3xl font-medium tracking-tighter" aria-label="Lucky Narayani — home">
            L<span className="text-primary">/</span>N<span className="text-primary">.</span>
          </a>
          <p className="mt-3 font-mono text-[10px] tracking-widest text-muted-foreground">DATA. MODELS. MEANING.</p>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6 sm:flex-col sm:items-end">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {profile.name}
            <span className="mt-1 block">{profile.location}</span>
          </p>
          <a href="#top" className="inline-flex min-h-11 items-center gap-3 font-mono text-xs tracking-wider hover:text-primary">
            BACK TO TOP <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
