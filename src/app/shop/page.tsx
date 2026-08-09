import Link from "next/link"
import { products } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">The Collection</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our full range of carefully curated garments, crafted with the finest materials.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>
            <Accordion defaultValue={["category", "size"]} className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger className="font-medium">Category</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {["Dresses", "Outerwear", "Accessories", "Tops", "Bottoms"].map((cat) => (
                      <li key={cat} className="flex items-center space-x-2">
                        <input type="checkbox" id={cat} className="rounded border-input text-primary focus:ring-primary" />
                        <label htmlFor={cat} className="text-sm cursor-pointer">{cat}</label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="size">
                <AccordionTrigger className="font-medium">Size</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <li key={size} className="flex items-center space-x-2">
                        <input type="checkbox" id={`size-${size}`} className="rounded border-input text-primary focus:ring-primary" />
                        <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">{size}</label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="color">
                <AccordionTrigger className="font-medium">Color</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {["Black", "White", "Navy", "Camel"].map((color) => (
                      <li key={color} className="flex items-center space-x-2">
                        <input type="checkbox" id={`color-${color}`} className="rounded border-input text-primary focus:ring-primary" />
                        <label htmlFor={`color-${color}`} className="text-sm cursor-pointer">{color}</label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
            <span>Showing {products.length} products</span>
            <select className="border-none bg-transparent outline-none cursor-pointer">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  {/* Quick View Button */}
                  <Dialog>
                    <DialogTrigger render={<Button 
                        variant="secondary" 
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-11/12 rounded-none"
                      />}>
                        Quick View
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl rounded-none p-0 overflow-hidden border-none">
                      <div className="grid md:grid-cols-2 h-[500px]">
                        <div className="bg-muted">
                          <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-3xl mb-2">{product.title}</DialogTitle>
                            <DialogDescription className="text-xl text-foreground font-serif">
                              ${product.price.toFixed(2)}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="my-6">
                            <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                            <div className="space-y-4">
                              <div>
                                <span className="text-sm font-medium">Color:</span>
                                <div className="flex gap-2 mt-2">
                                  {product.colors.map(c => (
                                    <button key={c} className="px-3 py-1 border text-xs hover:border-primary transition-colors">{c}</button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full rounded-none" size="lg">Add to Cart</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg tracking-tight mb-1">{product.title}</h3>
                  <div className="flex gap-3">
                    <span className="font-serif text-muted-foreground">${product.price.toFixed(2)}</span>
                    {product.compareAtPrice && (
                      <span className="font-serif text-muted-foreground/50 line-through">${product.compareAtPrice.toFixed(2)}</span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
