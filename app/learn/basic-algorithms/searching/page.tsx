import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SearchingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Searching Algorithms</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Searching Algorithms</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Searching algorithms are designed to check for an element or retrieve an element from any data structure
            where it is stored. These algorithms are fundamental to computer science and are used in many applications.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Common Searching Algorithms:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Linear Search</li>
            <li>Binary Search</li>
            <li>Jump Search</li>
            <li>Interpolation Search</li>
            <li>Exponential Search</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Searching Algorithms" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Searching Algorithms</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Linear Search</h3>
          <p>
            A simple search algorithm that checks every element in the list until a match is found or the whole list has
            been searched.
          </p>
          <VideoPlayer placeholder="Add linear search video URL here" title="Linear Search Algorithm" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Binary Search</h3>
          <p>
            An efficient algorithm that works on sorted arrays. It repeatedly divides the search interval in half until
            the element is found or it is clear the element is not in the array.
          </p>
          <VideoPlayer placeholder="Add binary search video URL here" title="Binary Search Algorithm" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Jump Search</h3>
          <p>
            A searching algorithm for sorted arrays that works by skipping a fixed number of elements and then
            performing a linear search.
          </p>
          <VideoPlayer placeholder="Add jump search video URL here" title="Jump Search Algorithm" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-algorithms/sorting">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Sorting)
          </Button>
        </Link>
        <Link href="/learn/basic-algorithms/recursion">
          <Button variant="outline">
            Next (Recursion)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

