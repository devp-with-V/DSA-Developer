import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdvancedAlgorithmsPage() {
  const topics = [
    {
      name: "Dynamic Programming",
      href: "/learn/advanced-algorithms/dynamic-programming",
      description: "Technique for solving complex problems by breaking them down into simpler subproblems.",
    },
    {
      name: "Greedy Algorithms",
      href: "/learn/advanced-algorithms/greedy-algorithms",
      description: "Algorithms that make locally optimal choices at each step to find a global optimum.",
    },
    {
      name: "Backtracking",
      href: "/learn/advanced-algorithms/backtracking",
      description:
        "Algorithmic technique for solving problems recursively by trying to build a solution incrementally.",
    },
    {
      name: "Graph Algorithms",
      href: "/learn/advanced-algorithms/graph-algorithms",
      description: "Algorithms for solving problems related to graph data structures.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Advanced Algorithms</h1>
      <p className="text-xl text-slate-300 mb-8">
        Dive into more complex algorithmic paradigms and techniques used to solve challenging computational problems.
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

