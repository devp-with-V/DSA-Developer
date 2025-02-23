import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProblemSolvingPage() {
  const topics = [
    {
      name: "Sliding Window",
      href: "/learn/problem-solving/sliding-window",
      description: "Technique for solving array/string problems with contiguous elements.",
    },
    {
      name: "Divide & Conquer",
      href: "/learn/problem-solving/divide-and-conquer",
      description: "Strategy of breaking down a problem into smaller subproblems.",
    },
    {
      name: "BFS/DFS",
      href: "/learn/problem-solving/bfs-dfs",
      description: "Graph traversal techniques for exploring nodes in a graph or tree.",
    },
    {
      name: "Pattern Matching",
      href: "/learn/problem-solving/pattern-matching",
      description: "Algorithms for finding occurrences of a pattern within a larger dataset.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Problem Solving Patterns</h1>
      <p className="text-xl text-slate-300 mb-8">
        Learn common problem-solving patterns and techniques that can be applied to a wide range of algorithmic
        challenges.
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

