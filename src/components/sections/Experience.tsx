import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionLabel, TypographyH2, TypographyMeta, TypographyP } from "@/components/shared/Typography"
import { experiences } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="page-container pt-24 pb-12 sm:pt-32" aria-labelledby="experience-title">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end" data-reveal>
        <div>
          <SectionLabel number="02">Experience</SectionLabel>
          <TypographyH2 id="experience-title">
            Work that taught
            <br />
            <span className="font-editorial text-[0.85em] font-normal italic normal-case">how to think with data.</span>
          </TypographyH2>
        </div>
        <TypographyP className="max-w-xs">
          Research, simulations, and real briefs — each one a chance to turn messy inputs into a decision someone can use.
        </TypographyP>
      </div>
      <Accordion type="single" collapsible defaultValue={experiences[0]?.organisation} className="border-t border-border" data-reveal>
        {experiences.map((item, index) => (
          <AccordionItem key={item.organisation} value={item.organisation} className="border-border">
            <AccordionTrigger className="items-center rounded-none py-6 hover:no-underline focus-visible:ring-0">
              <div className="flex min-w-0 flex-1 flex-col gap-2 pr-4 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div className="min-w-0">
                  <TypographyMeta className="mb-2 block text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} / {item.type}
                  </TypographyMeta>
                  <span className="font-heading text-2xl tracking-tight sm:text-3xl">{item.role}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.organisation}</span>
                </div>
                <TypographyMeta className="shrink-0 text-muted-foreground">{item.date}</TypographyMeta>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <ul className="max-w-3xl space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                    <span className="mt-3 h-px w-3 shrink-0 bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
