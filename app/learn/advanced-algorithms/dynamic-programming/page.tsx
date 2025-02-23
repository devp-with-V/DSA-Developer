import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DynamicProgrammingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dynamic Programming</h1>
        <div className="flex gap-4 mb-6">
          <Link href="/learn/advanced-algorithms">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Advanced Algorithms
            </Button>
          </Link>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction to Dynamic Programming</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler
            subproblems. It is mainly an optimization over plain recursion. The idea is to simply store the results of
            subproblems, so that we do not have to re-compute them when needed later.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Concepts:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Optimal Substructure: An optimal solution can be constructed from optimal solutions of its subproblems
            </li>
            <li>Overlapping Subproblems: Same subproblems are solved multiple times</li>
            <li>Memoization: Top-down approach</li>
            <li>Tabulation: Bottom-up approach</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Dynamic Programming" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Dynamic Programming Examples</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Fibonacci Sequence</h3>
          <p>Using DP to efficiently calculate Fibonacci numbers.</p>
          <VideoPlayer
            placeholder="Add Fibonacci DP video URL here"
            title="Fibonacci Sequence using Dynamic Programming"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Longest Common Subsequence</h3>
          <p>Finding the longest subsequence present in given two sequences in the same order.</p>
          <VideoPlayer
            placeholder="Add LCS video URL here"
            title="Longest Common Subsequence using Dynamic Programming"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. 0/1 Knapsack Problem</h3>
          <p>Solving the classic knapsack problem using dynamic programming.</p>
          <VideoPlayer
            placeholder="Add knapsack video URL here"
            title="0/1 Knapsack Problem using Dynamic Programming"
          />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Link href="/learn/advanced-algorithms/greedy-algorithms">
          <Button variant="outline">
            Next (Greedy Algorithms)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

