import { ArrowUpRight } from "lucide-react"
import { SectionLabel, TypographyH2, TypographyP } from "@/components/shared/Typography"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects, profile } from "@/data/portfolio"

export function Projects() {
  return <section id="work" className="page-container pt-24 pb-12 sm:pt-32" aria-labelledby="work-title">
    <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end" data-reveal>
      <div><SectionLabel number="01">Selected work</SectionLabel><TypographyH2 id="work-title">Less theory.<br /><span className="font-editorial text-[0.85em] font-normal italic normal-case">More real-world impact.</span></TypographyH2></div>
      <div className="max-w-xs"><TypographyP>From a million browsing sessions to a single grape. Different problems, the same drive to make data useful.</TypographyP><a href={profile.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-5 font-mono text-xs hover:text-primary">EXPLORE GITHUB <ArrowUpRight aria-hidden="true" /></a></div>
    </div>
    <div className="space-y-7">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
    <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground"><span>BUILT WITH CURIOSITY. TESTED WITH INTENT.</span><span>2024 — 2026</span></div>
  </section>
}
