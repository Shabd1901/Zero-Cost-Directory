"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { tools, categories, subcategories, getCategoryColor } from "@/lib/tools-data"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [noCreditCardOnly, setNoCreditCardOnly] = useState(false)
  const [active24x7Only, setActive24x7Only] = useState(false)

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === "all") return []
    return subcategories(selectedCategory)
  }, [selectedCategory])

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      if (selectedCategory !== "all" && tool.category !== selectedCategory) return false
      if (selectedSubcategory !== "all" && tool.subcategory !== selectedSubcategory) return false
      if (noCreditCardOnly && !tool.noCreditCard) return false
      if (active24x7Only && !tool.active24x7) return false
      return true
    })
  }, [selectedCategory, selectedSubcategory, noCreditCardOnly, active24x7Only])

  const totalTools = tools.length

  return (
    <section id="tools" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Filters */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Filter Tools</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => {
                    setSelectedCategory(value)
                    setSelectedSubcategory("all")
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Subcategory</Label>
                <Select
                  value={selectedSubcategory}
                  onValueChange={setSelectedSubcategory}
                  disabled={selectedCategory === "all"}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subcategories</SelectItem>
                    {availableSubcategories.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="no-cc"
                    checked={noCreditCardOnly}
                    onCheckedChange={(checked) => setNoCreditCardOnly(checked === true)}
                  />
                  <Label
                    htmlFor="no-cc"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    No Credit Card
                  </Label>
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="active"
                    checked={active24x7Only}
                    onCheckedChange={(checked) => setActive24x7Only(checked === true)}
                  />
                  <Label
                    htmlFor="active"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Active 24/7
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {filteredTools.length} out of {totalTools} results
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => {
              const colors = getCategoryColor(tool.category)
              return (
                <Link key={tool.id} href={`/tools/${tool.id}`}>
                  <Card className="group h-full overflow-hidden transition-all duration-200 hover:border-foreground/30 hover:shadow-lg">
                    {/* Gradient header with category, name, and subcategory */}
                    <div
                      className="px-6 py-5"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
                      }}
                    >
                      <div className="space-y-2">
                        <div className="text-xs font-medium uppercase tracking-wide text-white/80">{tool.category}</div>
                        <div className="text-xl font-semibold text-white leading-tight">{tool.name}</div>
                        <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {tool.subcategory}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardDescription className="text-pretty text-sm leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {(tool.noCreditCard || tool.active24x7) && (
                        <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                          {tool.noCreditCard && <span>No Credit Card</span>}
                          {tool.noCreditCard && tool.active24x7 && <span>·</span>}
                          {tool.active24x7 && <span>Active 24/7</span>}
                        </div>
                      )}

                      <div className="space-y-2">
                        <p className="text-xs font-medium">Best for</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tool.bestFor.map((item) => (
                            <Badge key={item} variant="secondary" className="text-xs font-normal">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
