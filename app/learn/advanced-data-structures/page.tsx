import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Description } from "@radix-ui/react-toast"
import Link from "next/link"

export default function AdvancedDataStructuresPage() {
  const topics = [
    { name: "Trees", href: "/learn/advanced-data-structures/trees", description: "A tree is a hierarchical data structure consisting of nodes connected by edges." },
    { name: "Graphs", href: "/learn/advanced-data-structures/graphs", description: "A graph is a collection of nodes connected by edges." },
    { name: "Hash Tables", href: "/learn/advanced-data-structures/hash-tables", desription: "A hash table is a data structure that stores key-value pairs." },
    { name: "Heaps", href: "/learn/advanced-data-structures/heaps", description: "A heap is a binary tree data structure that satisfies the heap property." },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Advanced Data Structures</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Card key={topic.name} className="bg-slate-800/50 hover:bg-slate-800 transition-colors border-slate-700">
            <CardHeader>
              <CardTitle>
                <Link href={topic.href} className="hover:underline">
                  {topic.name}
                </Link>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

