import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "About",
  description: "The story behind Lart Fashion — craftsmanship, vision, and modern luxury.",
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2000&auto=format&fit=crop"
            alt="Fashion Atelier"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto font-light opacity-90">
            Crafted with intention. Worn with confidence.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558171814-2e52c2e41590?q=80&w=1000&auto=format&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold tracking-tight">
                Where Tradition Meets Tomorrow
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2020, Lart Fashion was born from a simple belief: that modern fashion
                can be both artful and accessible. We design every piece to bridge the gap between
                runway innovation and everyday wearability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our atelier team brings decades of combined experience from the world&apos;s
                leading fashion houses, channeling that expertise into collections that speak
                to the discerning, contemporary individual.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every stitch, every choice, every detail reflects our commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sustainable Craft",
                description:
                  "We source responsibly, produce ethically, and design pieces that transcend seasonal trends—fashion that lasts.",
                image: "https://images.unsplash.com/photo-1523199455310-87b16c0e96e2?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Modern Elegance",
                description:
                  "Clean silhouettes, luxurious fabrics, and understated details. Our designs empower—never overpower.",
                image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Inclusive Design",
                description:
                  "Fashion should welcome everyone. We offer an extended size range and design for diverse lifestyles and identities.",
                image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden mb-6 bg-muted">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Atelier CTA */}
      <section className="py-24 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-4xl font-bold tracking-tight">
              Visit Our Atelier
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Step inside our design studio in the heart of New York. Book a private appointment to
              explore upcoming collections and experience our craftsmanship firsthand.
            </p>
            <Link
              href="/shop"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-none mt-4" })}
            >
              Explore the Collection
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
