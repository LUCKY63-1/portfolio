import { useState } from "react"
import { ArrowUpRight, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SectionLabel, TypographyH2, TypographyH3, TypographyMeta, TypographyP } from "@/components/shared/Typography"
import { certifications, education, hobbies, profile, skills, traits } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="page-container pt-24 pb-12 sm:pt-32" aria-labelledby="about-title">
      <div className="mb-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end" data-reveal>
        <div>
          <SectionLabel number="03">About</SectionLabel>
          <TypographyH2 id="about-title">
            The person
            <br />
            <span className="font-editorial text-[0.85em] font-normal italic normal-case">behind the models.</span>
          </TypographyH2>
        </div>
        <TypographyP>
          Final-year B.Tech Information Technology student at SVKM&apos;s Institute of Technology, Dhule. I build
          end-to-end systems across machine learning, computer vision, and analytics — and I am currently self-studying
          NLP outside the curriculum.
        </TypographyP>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div data-reveal>
          <p className="editorial-copy mb-6">Curiosity is the starting point. Rigour is how it becomes useful.</p>
          <TypographyP className="mb-6">
            I look for roles where analytical thinking meets real-world impact — data analyst and data scientist work
            that starts with a messy question and ends with a decision someone can trust.
          </TypographyP>
          <TypographyMeta className="mb-3 block text-muted-foreground">How I work</TypographyMeta>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <Badge key={trait} variant="outline" className="h-8 rounded-none px-3 font-mono text-[11px] font-normal">
                {trait}
              </Badge>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs tracking-wider text-muted-foreground">
            Off the clock: {hobbies.join(" · ")}.
          </p>
        </div>
        <VideoResume />
      </div>

      <div className="mt-20" data-reveal>
        <TypographyH3 className="mb-2 text-2xl">The toolkit</TypographyH3>
        <TypographyP className="mb-6 max-w-xl">Languages, models, and tools I reach for when a problem needs a system, not a slide.</TypographyP>
        <div>
          {skills.map((skill) => (
            <div key={skill.label} className="skill-row">
              <TypographyMeta className="text-muted-foreground">{skill.label}</TypographyMeta>
              <p className="text-sm leading-7">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20" data-reveal>
        <TypographyH3 className="mb-8 text-2xl">Education</TypographyH3>
        <div className="grid gap-px bg-border sm:grid-cols-3">
          {education.map((item) => (
            <article key={item.degree} className="bg-background py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <TypographyMeta className="mb-4 block text-primary">{item.date}</TypographyMeta>
              <h4 className="font-heading text-2xl leading-tight tracking-tight">{item.degree}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.institute}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.board}</p>
              <p className="mt-6 font-mono text-3xl tracking-tighter">
                {item.result}
                <span className="ml-2 text-xs tracking-wider text-muted-foreground">{item.unit}</span>
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20" data-reveal>
        <TypographyH3 className="mb-8 text-2xl">Certifications</TypographyH3>
        <ul>
          {certifications.map((item) => (
            <li key={item.title} className="border-b border-border py-5 first:border-t">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <h4 className="font-heading text-xl tracking-tight">{item.title}</h4>
                  <TypographyMeta className="mt-2 block text-muted-foreground">{item.issuer}</TypographyMeta>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
                {item.href ? <CertificatePreview title={item.title} href={item.href} /> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function VideoResume() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative w-full overflow-hidden border border-border text-left"
          data-reveal
          aria-label="Play video résumé"
        >
          <span className="relative block aspect-video overflow-hidden bg-secondary">
            <img
              src={profile.portrait}
              alt=""
              className="portrait-image"
            />
            <span className="absolute inset-0 bg-background/25 transition-colors group-hover:bg-background/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center border border-primary bg-background/80 text-primary backdrop-blur-sm transition-transform group-hover:scale-105">
                <Play className="size-6! fill-current" aria-hidden="true" />
              </span>
            </span>
          </span>
          <span className="flex items-center justify-between px-5 py-4">
            <TypographyMeta>Video résumé</TypographyMeta>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">WATCH</span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-none border border-border p-0 sm:max-w-3xl">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-heading text-2xl">Video résumé</DialogTitle>
          <DialogDescription>Lucky Narayani — a short introduction to the work and the person.</DialogDescription>
        </DialogHeader>
        {open ? (
          <video
            className="aspect-video w-full bg-black"
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={profile.portrait}
          >
            <source src={profile.video} type="video/mp4" />
            Your browser does not support the video résumé.
          </video>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

function CertificatePreview({ title, href }: { title: string; href: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="project-action shrink-0">
          View certificate <ArrowUpRight aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none border border-border p-4 sm:max-w-3xl sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{title}</DialogTitle>
          <DialogDescription>Certificate of achievement.</DialogDescription>
        </DialogHeader>
        <img src={href} alt={`${title} certificate`} className="w-full border border-border" />
      </DialogContent>
    </Dialog>
  )
}
