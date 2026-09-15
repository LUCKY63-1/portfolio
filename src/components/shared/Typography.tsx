import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function TypographyH1({ className, ...props }: ComponentProps<"h1">) {
  return <h1 className={cn("type-hero", className)} {...props} />
}
export function TypographyH2({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("type-section", className)} {...props} />
}
export function TypographyH3({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cn("type-title", className)} {...props} />
}
export function TypographyP({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("type-body", className)} {...props} />
}
export function TypographyMeta({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("type-meta", className)} {...props} />
}
export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="mb-7 flex items-center gap-3"><span className="h-px w-7 bg-primary" /><TypographyMeta className="text-muted-foreground">{number} / {children}</TypographyMeta></div>
}
