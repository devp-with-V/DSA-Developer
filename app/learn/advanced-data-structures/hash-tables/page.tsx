import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HashTablesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Hash Tables in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Hash Tables</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A hash table is a data structure that implements an associative array abstract data type, a structure that
            can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from
            which the desired value can be found.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fast data retrieval</li>
            <li>Uses key-value pairs for storing data</li>
            <li>Hash function converts keys into array indices</li>
            <li>Efficient for both small and large data sets</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Average Case: O(1) for search, insert, and delete</li>
            <li>Worst Case: O(n) when many collisions occur</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Hash Tables in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Hash Table Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Insertion</h3>
          <p>Process of adding a new key-value pair to the hash table.</p>
          <VideoPlayer placeholder="Add insertion video URL here" title="Hash Table Insertion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Deletion</h3>
          <p>Process of removing a key-value pair from the hash table.</p>
          <VideoPlayer placeholder="Add deletion video URL here" title="Hash Table Deletion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Search</h3>
          <p>Process of finding a value associated with a given key in the hash table.</p>
          <VideoPlayer placeholder="Add search video URL here" title="Hash Table Search" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/advanced-data-structures/graphs">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Graphs)
          </Button>
        </Link>
        <Link href="/learn/advanced-data-structures/heaps">
          <Button variant="outline">
            Next (Heaps)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

