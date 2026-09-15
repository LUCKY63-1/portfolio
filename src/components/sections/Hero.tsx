import { ArrowDown, ArrowUpRight, Asterisk, Github, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyMeta, TypographyP } from "@/components/shared/Typography"
import { profile } from "@/data/portfolio"

const metrics = [
  { value: "1.6M+", label: "Sessions modelled", note: "Purchase intent prediction" },
  { value: "0.925", label: "mAP50 achieved", note: "Waste segmentation model" },
  { value: "03", label: "End-to-end projects", note: "From data to deployment" },
  { value: "7.31", label: "Current CGPA", note: "B.Tech · Information Technology" },
]

export function Hero() {
  return (
    <section aria-label="Introduction" className="page-container pt-10 sm:pt-14 lg:pt-16">
      <div className="mb-9 flex flex-wrap items-center justify-between gap-4" data-hero-reveal>
        <TypographyMeta className="flex items-center gap-2.5 text-muted-foreground"><span className="size-1.5 rounded-full bg-success" />Open to data & ML opportunities</TypographyMeta>
        <TypographyMeta className="hidden items-center gap-2 text-muted-foreground sm:flex"><MapPin className="size-3!" aria-hidden="true" />{profile.location}</TypographyMeta>
      </div>
      <div className="grid items-center gap-12 pb-14 md:grid-cols-[1.65fr_1fr] md:gap-10 lg:gap-16 lg:pb-16">
        <div className="min-w-0">
          <div data-hero-reveal className="mb-4 flex items-center gap-3"><TypographyMeta className="text-primary">Data analytics / Machine learning</TypographyMeta></div>
          <TypographyH1 className="mb-7">
            <span className="block overflow-hidden">
              <span data-hero-line className="flex items-center gap-6">LUCKY<Asterisk className="hero-asterisk size-14! text-primary! sm:size-20!" strokeWidth={1.3} aria-hidden="true" /></span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">NARAYANI<span className="text-primary">.</span></span>
            </span>
          </TypographyH1>
          <div data-hero-reveal>
            <p className="editorial-copy mb-4">Finding the signal.<br className="sm:hidden" /> Building what matters.</p>
            <TypographyP className="max-w-lg">Final-year IT student turning complex data into clear decisions. I build end-to-end systems at the intersection of machine learning, computer vision, and real-world problems.</TypographyP>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button asChild className="action-button"><a href="#work">Explore my work <ArrowDown aria-hidden="true" /></a></Button>
              <Button asChild variant="ghost" className="action-button px-0 hover:bg-transparent hover:text-primary"><a href={profile.resume}>Download résumé <ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md md:pt-3">
          <div className="portrait-frame">
            <div data-portrait className="relative aspect-[0.85] overflow-hidden border border-foreground/20 bg-secondary">
              <img src={profile.portrait} alt="Lucky Narayani wearing a dark blazer" width="1294" height="1216" fetchPriority="high" className="portrait-image" />
              <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between bg-background/90 px-5 py-4 backdrop-blur-sm"><TypographyMeta>Curiosity is the starting point.</TypographyMeta><ArrowUpRight className="text-primary!" aria-hidden="true" /></div>
              <span className="portrait-corner top-3 left-3 border-t-2 border-l-2" aria-hidden="true" /><span className="portrait-corner top-3 right-3 border-t-2 border-r-2" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between" data-hero-reveal>
            <TypographyMeta className="text-muted-foreground">A builder. A thinker. Always learning.</TypographyMeta>
            <div className="flex gap-1">
              <Button asChild variant="ghost" size="icon" className="size-10"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="Lucky Narayani on GitHub"><Github aria-hidden="true" /></a></Button>
              <Button asChild variant="ghost" size="icon" className="size-10"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Lucky Narayani on LinkedIn"><Linkedin aria-hidden="true" /></a></Button>
            </div>
          </div>
        </div>
      </div>
      <dl className="grid grid-cols-2 border-y border-border sm:grid-cols-4">
        {metrics.map((metric) => <div key={metric.label} className="metric-item py-6 pl-4 first:pl-0 sm:py-8 sm:pl-7 lg:pl-10" data-metric>
          <dd className="mb-2 font-mono text-4xl font-medium tracking-tighter sm:text-5xl">{metric.value}<span className="ml-1 text-primary">↗</span></dd>
          <dt className="font-mono text-xs text-foreground">{metric.label}</dt>
          <dd className="mt-1.5 hidden text-[11px] text-muted-foreground lg:block">{metric.note}</dd>
        </div>)}
      </dl>
    </section>
  )
}
