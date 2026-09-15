import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLabel, TypographyH2, TypographyMeta, TypographyP } from "@/components/shared/Typography"
import { contactLinks, profile } from "@/data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="page-container pt-24 pb-20 sm:pt-32 sm:pb-28" aria-labelledby="contact-title">
      <div className="mb-12" data-reveal>
        <SectionLabel number="04">Contact</SectionLabel>
        <TypographyH2 id="contact-title">
          Have a problem
          <br />
          <span className="font-editorial text-[0.85em] font-normal italic normal-case">worth solving?</span>
        </TypographyH2>
        <TypographyP className="mt-6 max-w-lg">
          Open to data analyst and data scientist roles. If you have a brief, a dataset, or a question that needs a
          clear answer — write to me.
        </TypographyP>
      </div>

      <div data-reveal>
        <a href={`mailto:${profile.email}`} className="contact-email group inline-flex max-w-full items-end gap-4">
          <span className="break-all">{profile.email}</span>
          <ArrowUpRight className="mb-2 hidden shrink-0 text-primary sm:block" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12" data-reveal>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-link"
            {...("download" in link ? { download: link.download } : {})}
            {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <TypographyMeta className="text-muted-foreground">{link.label}</TypographyMeta>
            <span className="flex min-w-0 items-center gap-3">
              <span className="truncate font-mono text-sm tracking-wide">{link.value}</span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5" data-reveal>
        <Button asChild className="action-button">
          <a href={`mailto:${profile.email}`}>
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="ghost" className="action-button px-0 hover:bg-transparent hover:text-primary">
          <a href={profile.resume}>
            Download résumé <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  )
}
