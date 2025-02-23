import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GreedyAlgorithmsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Greedy Algorithms</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Greedy Algorithms</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Greedy algorithms are a simple, intuitive class of algorithms that make the locally optimal choice at each
            step with the hope of finding a global optimum. In many problems, a greedy strategy does not usually produce
            an optimal solution, but nonetheless, a greedy heuristic may yield locally optimal solutions that
            approximate a global optimal solution in a reasonable time.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Greedy Choice Property: A globally optimal solution can be arrived at by making locally optimal choices
            </li>
            <li>Optimal Substructure: An optimal solution to the problem contains optimal solutions to subproblems</li>
            <li>Often used for optimization problems</li>
            <li>May not always yield the best solution, but can be very efficient</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Greedy Algorithms" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Greedy Algorithm Examples</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Coin Change Problem</h3>
          <p>Using a greedy approach to find the minimum number of coins that make a given value.</p>
          <VideoPlayer
            placeholder="Add coin change video URL here"
            title="Coin Change Problem using Greedy Algorithm"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Activity Selection Problem</h3>
          <p>
            Selecting the maximum number of activities that can be performed by a single person, assuming that a person
            can only work on a single activity at a time.
          </p>
          <VideoPlayer
            placeholder="Add activity selection video URL here"
            title="Activity Selection Problem using Greedy Algorithm"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Huffman Coding</h3>
          <p>A greedy algorithm used for lossless data compression.</p>
          <VideoPlayer placeholder="Add Huffman coding video URL here" title="Huffman Coding using Greedy Algorithm" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/advanced-algorithms/dynamic-programming">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Dynamic Programming)
          </Button>
        </Link>
        <Link href="/learn/advanced-algorithms/backtracking">
          <Button variant="outline">
            Next (Backtracking)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

