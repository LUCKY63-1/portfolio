import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function usePageMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-hero-line]")
      const reveals = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]")
      const metrics = gsap.utils.toArray<HTMLElement>("[data-metric]")
      const portrait = document.querySelector<HTMLElement>("[data-portrait]")

      gsap.set(lines, { yPercent: 110, opacity: 1 })
      gsap.set(reveals, { y: 28, opacity: 0 })
      gsap.set(metrics, { y: 24, opacity: 0 })
      if (portrait) gsap.set(portrait, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 })

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })
      timeline
        .to(lines, { yPercent: 0, duration: 1.05, stagger: 0.12 }, 0.08)
        .to(reveals, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }, 0.28)
      if (portrait) {
        timeline.to(portrait, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15 }, 0.18)
      }
      timeline.to(metrics, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 0.5)

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%" },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}
