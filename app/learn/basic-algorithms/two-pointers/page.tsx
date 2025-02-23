import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TwoPointersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Two Pointers Technique</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Two Pointers</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            The Two Pointers technique is an algorithmic pattern where two pointers iterate through the data structure
            in tandem until one or both of the pointers hit a certain condition. It's often used within a loop to solve
            problems in a linear time complexity.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Concepts:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opposite Directional: Two pointers start from opposite ends and move towards each other</li>
            <li>Same Directional: Both pointers move in the same direction</li>
            <li>Fast and Slow Pointers: One pointer moves faster than the other</li>
            <li>Sliding Window: A variation where the window size between pointers can change</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Introduction to Two Pointers Technique" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Two Pointers Examples</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Reverse Array In-place</h3>
          <p>Using two pointers to reverse an array without using extra space.</p>
          <VideoPlayer placeholder="Add reverse array video URL here" title="Reverse Array using Two Pointers" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Find Pair with Given Sum</h3>
          <p>Using two pointers to find a pair of elements in a sorted array that sum to a target value.</p>
          <VideoPlayer placeholder="Add pair sum video URL here" title="Find Pair with Given Sum using Two Pointers" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Remove Duplicates from Sorted Array</h3>
          <p>Using two pointers to remove duplicates from a sorted array in-place.</p>
          <VideoPlayer
            placeholder="Add remove duplicates video URL here"
            title="Remove Duplicates using Two Pointers"
          />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-algorithms/recursion">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Recursion)
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

