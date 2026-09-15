import { ArrowUpRight } from "lucide-react"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TypographyH3, TypographyMeta } from "@/components/shared/Typography"
import { profile, type Project } from "@/data/portfolio"

export function ProjectDialog({ project }: { project: Project }) {
  return <DialogContent className="max-h-[85dvh] overflow-y-auto rounded-none border border-border p-6 sm:max-w-2xl sm:p-10">
    <DialogHeader>
      <TypographyMeta className="pr-8 text-primary">PROJECT {project.number} / {project.category}</TypographyMeta>
      <DialogTitle className="pr-7 pt-3 font-heading text-4xl leading-tight">{project.title}</DialogTitle>
      <DialogDescription className="pt-3 text-base leading-relaxed">{project.summary}</DialogDescription>
    </DialogHeader>
    <div className="my-2 flex flex-wrap items-center justify-between gap-3 border-y border-border py-4"><TypographyMeta>{project.period}</TypographyMeta><Badge variant="outline" className="rounded-none px-2 py-3">{project.status === "in-progress" ? "In progress" : "Completed project"}</Badge></div>
    <div><TypographyH3 className="mb-4 text-2xl">The approach</TypographyH3><ul className="space-y-3">{project.highlights.map((text) => <li key={text} className="flex gap-3 text-sm leading-7 text-muted-foreground"><span className="mt-3 h-px w-3 shrink-0 bg-primary" />{text}</li>)}</ul></div>
    <div className="my-3"><TypographyMeta className="mb-3 block">The toolkit</TypographyMeta><div className="flex flex-wrap gap-2">{project.stack.map((item) => <Badge key={item} variant="outline" className="h-7 rounded-none font-mono text-xs">{item}</Badge>)}</div></div>
    <Button asChild className="action-button w-fit"><a href={profile.github} target="_blank" rel="noreferrer">Visit my GitHub profile <ArrowUpRight aria-hidden="true" /></a></Button>
  </DialogContent>
}
