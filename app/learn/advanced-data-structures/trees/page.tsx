import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TreesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Trees in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Trees</h2>
        <div className="prose prose-invert max-w-none">
          <p>
          A tree is a hierarchical data structure consisting of nodes, with a single node as the root, and sub-nodes as children, forming a parent-child relationship It is a non-linear data
            structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>One node is marked as Root node</li>
            <li>Every node other than the root is associated with one parent node</li>
            <li>Each node can have an arbitrary number of child nodes</li>
            <li>Nodes with no children are called leaf nodes</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Common Types of Trees:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Binary Tree</li>
            <li>Binary Search Tree (BST)</li>
            <li>AVL Tree</li>
            <li>Red-Black Tree</li>
            <li>N-ary Tree</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Trees in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Tree Traversals</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Inorder Traversal</h3>
          <p>Algorithm: Left, Root, Right</p>
          <VideoPlayer placeholder="Add inorder traversal video URL here" title="Inorder Tree Traversal" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Preorder Traversal</h3>
          <p>Algorithm: Root, Left, Right</p>
          <VideoPlayer placeholder="Add preorder traversal video URL here" title="Preorder Tree Traversal" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Postorder Traversal</h3>
          <p>Algorithm: Left, Right, Root</p>
          <VideoPlayer placeholder="Add postorder traversal video URL here" title="Postorder Tree Traversal" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Link href="/learn/advanced-data-structures/graphs">
          <Button variant="outline">
            Next (Graphs)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

