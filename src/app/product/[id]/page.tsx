import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Since this is a static site without a real database, we'll use generateStaticParams
export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-muted w-full overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-[3/4] bg-muted overflow-hidden">
                  <img src={img} alt={`${product.title} detail`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info (Sticky) */}
        <div>
          <div className="sticky top-24 space-y-8">
            <div>
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
                &larr; Back to Shop
              </Link>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                {product.title}
              </h1>
              <div className="flex gap-4 items-center">
                <span className="font-serif text-2xl">${product.price.toFixed(2)}</span>
                {product.compareAtPrice && (
                  <span className="font-serif text-lg text-muted-foreground/50 line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-6 pt-6 border-t">
              {/* Colors */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Color</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(c => (
                    <button key={c} className="px-4 py-2 border hover:border-primary transition-colors text-sm">
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Size</span>
                  <button className="text-sm underline text-muted-foreground hover:text-foreground">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(s => (
                    <button key={s} className="min-w-[3rem] px-4 py-2 border hover:border-primary transition-colors text-sm">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-6">
              <Button size="lg" className="w-full rounded-none h-14 text-lg">
                Add to Cart
              </Button>
              <p className="text-sm text-center text-muted-foreground">Free shipping and returns on all orders.</p>
            </div>

            {/* Tabs */}
            <div className="pt-8">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger value="description" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent px-4 py-2">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="details" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent px-4 py-2">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent px-4 py-2">
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4 text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </TabsContent>
                <TabsContent value="details" className="pt-4 text-muted-foreground text-sm leading-relaxed">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>100% premium materials</li>
                    <li>Designed in-house</li>
                    <li>Dry clean only</li>
                    <li>Made with sustainable practices</li>
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4 text-muted-foreground text-sm leading-relaxed">
                  Complimentary standard shipping on all orders. Express shipping available at checkout. 
                  Returns are accepted within 30 days of delivery in original condition.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
