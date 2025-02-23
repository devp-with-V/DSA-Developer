import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BasicAlgorithmsPage() {
  const topics = [
    {
      name: "Sorting",
      href: "/learn/basic-algorithms/sorting",
      description: "Techniques for arranging data in a specific order.",
    },
    {
      name: "Searching",
      href: "/learn/basic-algorithms/searching",
      description: "Methods for finding specific elements in a data structure.",
    },
    {
      name: "Recursion",
      href: "/learn/basic-algorithms/recursion",
      description: "Problem-solving technique where a function calls itself.",
    },
    {
      name: "Two Pointers",
      href: "/learn/basic-algorithms/two-pointers",
      description: "Technique using two pointers to solve array-based problems.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Basic Algorithms</h1>
      <p className="text-xl text-slate-300 mb-8">
        Explore fundamental algorithmic techniques that form the building blocks of more complex algorithms and
        problem-solving strategies.
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

