import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function RecursionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Recursion in Algorithms</h1>
        <div className="flex gap-4 mb-6">
          <Link href="/learn/basic-algorithms">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Basic Algorithms
            </Button>
          </Link>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction to Recursion</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Recursion is a method of solving problems where the solution depends on solutions to smaller instances of
            the same problem. In programming, recursion occurs when a function calls itself directly or indirectly.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Concepts:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Base Case: The condition that stops the recursion</li>
            <li>Recursive Case: The part where the function calls itself</li>
            <li>Stack: Each recursive call adds a new layer to the call stack</li>
            <li>Tail Recursion: A special case of recursion that can be optimized by some compilers</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Recursion" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recursive Algorithms Examples</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Factorial Calculation</h3>
          <p>A classic example of recursion, calculating the factorial of a number.</p>
          <VideoPlayer
            placeholder="Add factorial recursion video URL here"
            title="Factorial Calculation using Recursion"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Fibonacci Sequence</h3>
          <p>Generating Fibonacci numbers using recursion.</p>
          <VideoPlayer
            placeholder="Add Fibonacci recursion video URL here"
            title="Fibonacci Sequence using Recursion"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Tree Traversal</h3>
          <p>Recursive algorithms for traversing tree data structures.</p>
          <VideoPlayer placeholder="Add tree traversal video URL here" title="Tree Traversal using Recursion" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-algorithms/searching">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Searching)
          </Button>
        </Link>
        <Link href="/learn/basic-algorithms/two-pointers">
          <Button variant="outline">
            Next (Two Pointers)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

