import { useState } from "react"
import { ArrowUpRight, Download, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navigation, profile } from "@/data/portfolio"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="page-container flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Lucky Narayani — home">
          <span className="font-heading text-3xl font-medium tracking-tighter">L<span className="text-primary">/</span>N<span className="text-primary">.</span></span>
          <span className="hidden border-l border-border pl-3 font-mono text-[10px] leading-4 tracking-widest text-muted-foreground sm:block">DATA. MODELS.<br />MEANING.</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden h-10 gap-5 rounded-none px-4 font-mono text-xs sm:inline-flex"><a href={profile.resume}>RÉSUMÉ <Download aria-hidden="true" /></a></Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="size-11 md:hidden" aria-label="Open navigation"><Menu aria-hidden="true" /></Button></SheetTrigger>
            <SheetContent className="px-6 pt-8">
              <SheetHeader className="p-0"><SheetTitle className="font-heading text-3xl">LUCKY NARAYANI<span className="text-primary">.</span></SheetTitle><SheetDescription>Data. Models. Meaning.</SheetDescription></SheetHeader>
              <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">{navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-5 font-heading text-3xl">{item.label}<ArrowUpRight aria-hidden="true" /></a>)}</nav>
              <Button asChild className="action-button mt-6"><a href={profile.resume}>Download résumé <Download aria-hidden="true" /></a></Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
