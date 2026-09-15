import { ArrowRight, Grape, Milk, Package, ScanLine } from "lucide-react"
import { TypographyMeta } from "@/components/shared/Typography"
import type { Project } from "@/data/portfolio"

export function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "purchase-intent") {
    return <div className="project-art flex h-full min-h-96! flex-col justify-between bg-background p-6 text-foreground sm:p-8" aria-label="Purchase intent pipeline schematic">
      <div className="flex justify-between border-b border-border pb-4"><TypographyMeta>01 / Purchase intelligence</TypographyMeta><span className="font-mono text-[10px] text-muted-foreground">PIPELINE SCHEMATIC</span></div>
      <div className="relative flex items-center justify-between gap-5 py-7">
        <div><div className="mb-2 font-mono text-6xl tracking-tighter text-primary sm:text-7xl">1.6M<span className="text-3xl">+</span></div><TypographyMeta className="text-muted-foreground">Sessions. Signals. Intent.</TypographyMeta></div>
        <div className="dot-matrix absolute -right-3 w-32 opacity-80 sm:w-40" aria-hidden="true">{Array.from({ length: 126 }, (_, index) => <span key={index} />)}</div>
      </div>
      <div className="relative grid grid-cols-3 gap-2 border-y border-border py-5 font-mono text-xs"><div><span className="mb-2 block text-muted-foreground">INPUT</span>Session data</div><div className="border-x border-border px-3"><span className="mb-2 block text-muted-foreground">PROCESS</span>5 ML models</div><div className="pl-3"><span className="mb-2 block text-primary">OUTPUT</span>Purchase intent</div></div>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground"><span>PYTHON → TRAIN → EVALUATE → STREAMLIT</span><ArrowRight className="size-4! text-primary!" aria-hidden="true" /></div>
    </div>
  }
  if (project.id === "waste-segregation") {
    return <div className="project-art technical-grid h-full min-h-96!" aria-label="Waste classification schematic showing packaging categories, not live inference">
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute top-6 right-6 left-6 flex justify-between"><TypographyMeta>02 / Object perception</TypographyMeta><ScanLine className="text-primary!" aria-hidden="true" /></div>
      <div className="detection-box top-24 left-[14%] h-40 w-28 -rotate-6" data-label="PLASTIC"><Milk aria-hidden="true" /></div>
      <div className="detection-box top-36 right-[13%] h-28 w-36 rotate-6" data-label="CARDBOARD"><Package aria-hidden="true" /></div>
      <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between border-t border-border pt-4"><div><span className="font-mono text-4xl tracking-tighter">0.925</span><span className="ml-2 font-mono text-xs text-muted-foreground">mAP50</span></div><span className="text-right font-mono text-[10px] leading-5 text-muted-foreground">15 CATEGORIES<br />PIPELINE SCHEMATIC</span></div>
    </div>
  }
  return <div className="project-art technical-grid flex h-full min-h-96! flex-col justify-between p-6 sm:p-8" aria-label="Grape yield estimation pipeline schematic, development in progress">
    <div className="absolute inset-0 bg-background/70" />
    <div className="relative flex justify-between"><TypographyMeta>03 / Vineyard intelligence</TypographyMeta><span className="size-2 rounded-full bg-primary" /></div>
    <div className="relative mx-auto my-3 flex size-44 items-center justify-center border border-dashed border-primary/60"><Grape className="size-32! text-primary!" strokeWidth={0.8} aria-hidden="true" /><span className="absolute -bottom-2 bg-background px-2 font-mono text-[10px] text-muted-foreground">INSTANCE → VOLUME</span><span className="portrait-corner -top-px -left-px border-t-2 border-l-2" /><span className="portrait-corner -right-px -bottom-px border-r-2 border-b-2" /></div>
    <div className="relative"><div className="mb-3 flex justify-between font-mono text-[10px] text-muted-foreground"><span>CLASSIFY</span><ArrowRight className="size-3!" /><span>SEGMENT</span><ArrowRight className="size-3!" /><span>ESTIMATE</span></div><div className="flex items-center justify-between border-t border-border pt-4"><span className="font-editorial text-2xl italic">A growing body of work.</span><TypographyMeta className="text-primary">In progress</TypographyMeta></div></div>
  </div>
}
