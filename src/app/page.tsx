"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { categories, products } from "@/lib/mock-data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
            alt="Fashion Hero"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Fall/Winter 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg md:text-xl mb-8 max-w-lg mx-auto font-light"
          >
            Discover the new collection of elegant, timeless pieces designed for the modern individual.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Link href="/shop" className={buttonVariants({ size: "lg", variant: "default", className: "text-base rounded-none px-8 mt-4" })}>
              Shop New Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-serif text-3xl font-bold tracking-tight">Shop by Category</h2>
            <Link href="/shop" className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors">
              View All
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {categories.map((category) => (
                <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/shop?category=${category.slug}`}>
                    <Card className="border-0 shadow-none overflow-hidden group cursor-pointer rounded-none">
                      <CardContent className="p-0 relative aspect-[3/4]">
                        <img
                          src={category.heroImageUrl}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="font-serif text-2xl font-semibold">{category.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-12" />
              <CarouselNext className="-right-4 lg:-right-12" />
            </div>
          </Carousel>
        </ScrollReveal>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-4">Trending Now</h2>
              <p className="text-muted-foreground">The pieces everyone is talking about.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <div className="group">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-lg tracking-tight mb-1">{product.title}</h3>
                    <div className="flex gap-3">
                      <span className="font-serif text-muted-foreground">${product.price.toFixed(2)}</span>
                      {product.compareAtPrice && (
                        <span className="font-serif text-muted-foreground/50 line-through">${product.compareAtPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook / Story */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b95d466f363?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial Lookbook"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6 md:pl-10">
              <h2 className="font-serif text-4xl font-bold tracking-tight">The Art of Subtlety</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our latest collection explores the balance between bold silhouettes and understated details. 
                Designed for versatility, each piece transitions seamlessly from day to night.
              </p>
              <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-none mt-4" })}>
                Our Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
