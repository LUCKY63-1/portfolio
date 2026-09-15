import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TypographyH3, TypographyMeta, TypographyP } from "@/components/shared/Typography"
import { ProjectVisual } from "./ProjectVisual"
import { ProjectDialog } from "./ProjectDialog"
import { cn } from "@/lib/utils"
import type { Project } from "@/data/portfolio"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const paper = index !== 1
  return <article data-reveal aria-labelledby={`title-${project.id}`}>
    <Card className={cn("group rounded-none border border-border p-0 ring-0", paper && "project-paper")}>
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className={cn("order-2 flex flex-col items-start justify-center px-6 py-9 sm:p-10 lg:p-12", index === 1 ? "md:order-2" : "md:order-1")}>
          <div className="mb-5 flex w-full flex-wrap justify-between gap-2"><TypographyMeta className="text-muted-foreground">{project.number} / {project.category}</TypographyMeta>{project.status === "in-progress" && <TypographyMeta className="text-primary">In progress</TypographyMeta>}</div>
          <TypographyH3 id={`title-${project.id}`} className="max-w-sm">{project.title}</TypographyH3>
          <TypographyP className="mt-5 max-w-md">{project.summary}</TypographyP>
          <div className="mt-6 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <Badge variant="outline" key={item} className="h-6 rounded-none border-border px-2 font-mono text-[11px] font-normal text-muted-foreground">{item}</Badge>)}</div>
          <div className="mt-8 flex w-full items-center justify-between gap-2">
            <Dialog><DialogTrigger asChild><Button variant="ghost" className="project-action" aria-label={`View project: ${project.title}`}>View project <ArrowUpRight aria-hidden="true" /></Button></DialogTrigger><ProjectDialog project={project} /></Dialog>
            <TypographyMeta className="hidden text-muted-foreground lg:inline">{project.period}</TypographyMeta>
          </div>
        </div>
        <div className={cn("order-1 overflow-hidden border-border p-3 sm:p-5", index === 1 ? "md:order-1 md:border-r" : "md:order-2 md:border-l")}><ProjectVisual project={project} /></div>
      </CardContent>
    </Card>
  </article>
}
