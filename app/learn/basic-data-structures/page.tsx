import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BasicDataStructuresPage() {
  const topics = [
    {
      name: "Arrays",
      href: "/learn/basic-data-structures/arrays",
      description: "Contiguous memory locations that store elements of the same type.",
    },
    {
      name: "Linked Lists",
      href: "/learn/basic-data-structures/linked-lists",
      description: "Linear data structure where elements are stored in nodes connected by pointers.",
    },
    {
      name: "Stacks",
      href: "/learn/basic-data-structures/stacks",
      description: "Last-In-First-Out (LIFO) data structure for storing and retrieving elements.",
    },
    {
      name: "Queues",
      href: "/learn/basic-data-structures/queues",
      description: "First-In-First-Out (FIFO) data structure for storing and retrieving elements.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Basic Data Structures</h1>
      <p className="text-xl text-slate-300 mb-8">
        Explore the fundamental building blocks of computer science and learn how to use these essential data structures
        in your programs.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Card key={topic.name} className="bg-slate-800/50 hover:bg-slate-800 transition-colors border-slate-700">
            <CardHeader>
              <CardTitle>
                <Link href={topic.href} className="text-2xl hover:underline">
                  {topic.name}
                </Link>
              </CardTitle>
              <p className="text-slate-300 mt-2">{topic.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

