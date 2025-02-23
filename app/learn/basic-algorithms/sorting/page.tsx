import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SortingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Sorting Algorithms</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Sorting Algorithms</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Sorting algorithms are used to rearrange a list of elements in a certain order, most commonly in numerical
            or lexicographical order. These algorithms are fundamental in computer science and are often used as
            building blocks for other algorithms.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Common Sorting Algorithms:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Heap Sort</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Sorting Algorithms" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Sorting Algorithms</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Bubble Sort</h3>
          <p>
            A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them
            if they are in the wrong order.
          </p>
          <VideoPlayer placeholder="Add bubble sort video URL here" title="Bubble Sort Algorithm" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Merge Sort</h3>
          <p>
            An efficient, stable, divide-and-conquer algorithm that divides the unsorted list into n sublists, each
            containing one element, and then repeatedly merges sublists to produce new sorted sublists until there is
            only one sublist remaining.
          </p>
          <VideoPlayer placeholder="Add merge sort video URL here" title="Merge Sort Algorithm" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Quick Sort</h3>
          <p>
            An efficient, in-place sorting algorithm that uses divide-and-conquer strategy to sort the elements. It
            picks an element as a pivot and partitions the array around the pivot.
          </p>
          <VideoPlayer placeholder="Add quick sort video URL here" title="Quick Sort Algorithm" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Link href="/learn/basic-algorithms/searching">
          <Button variant="outline">
            Next (Searching)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

