import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GraphsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Graphs in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Graphs</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also
            referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Graphs are used to represent networks</li>
            <li>The edges may be directed or undirected</li>
            <li>Graphs can be weighted or unweighted</li>
            <li>Graphs can be represented using adjacency matrix or adjacency list</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Types of Graphs:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Directed Graph (Digraph)</li>
            <li>Undirected Graph</li>
            <li>Weighted Graph</li>
            <li>Complete Graph</li>
            <li>Bipartite Graph</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Graphs in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Graph Traversals</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Breadth-First Search (BFS)</h3>
          <p>BFS explores all the vertices of a graph in breadth-first order.</p>
          <VideoPlayer placeholder="Add BFS video URL here" title="Breadth-First Search" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Depth-First Search (DFS)</h3>
          <p>DFS explores as far as possible along each branch before backtracking.</p>
          <VideoPlayer placeholder="Add DFS video URL here" title="Depth-First Search" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/advanced-data-structures/trees">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Trees)
          </Button>
        </Link>
        <Link href="/learn/advanced-data-structures/hash-tables">
          <Button variant="outline">
            Next (Hash Tables)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

