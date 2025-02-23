import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeapsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Heaps in Data Structures</h1>
        <div className="flex gap-4 mb-6">
          <Link href="/learn/advanced-data-structures">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Advanced Data Structures
            </Button>
          </Link>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction to Heaps</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps
            can be of two types: Max-Heap and Min-Heap.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete Binary Tree</li>
            <li>
              Heap Property: All nodes are either greater than or equal to (Max-Heap) or less than or equal to
              (Min-Heap) each of its children
            </li>
            <li>Efficient for priority queue operations</li>
            <li>Can be represented as an array</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Insertion: O(log n)</li>
            <li>Deletion: O(log n)</li>
            <li>Get Max/Min: O(1)</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Heaps in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Heap Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Insertion</h3>
          <p>Process of adding a new element to the heap.</p>
          <VideoPlayer placeholder="Add insertion video URL here" title="Heap Insertion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Deletion</h3>
          <p>Process of removing the root element from the heap.</p>
          <VideoPlayer placeholder="Add deletion video URL here" title="Heap Deletion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Heapify</h3>
          <p>Process of creating a heap from an array.</p>
          <VideoPlayer placeholder="Add heapify video URL here" title="Heapify" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/advanced-data-structures/hash-tables">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Hash Tables)
          </Button>
        </Link>
        <Button variant="outline" disabled>
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

