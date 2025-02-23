import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SystemDesignPage() {
  const topics = [
    {
      name: "Scalability",
      href: "/learn/system-design/scalability",
      description: "Techniques for designing systems that can handle growth in users, traffic, and data.",
    },
    {
      name: "Load Balancing",
      href: "/learn/system-design/load-balancing",
      description:
        "Distributing network traffic across multiple servers to ensure no single server bears too much demand.",
    },
    {
      name: "Caching",
      href: "/learn/system-design/caching",
      description: "Storing copies of frequently accessed data to improve system performance.",
    },
    {
      name: "Database Design",
      href: "/learn/system-design/database-design",
      description: "Principles and practices for designing efficient and scalable database systems.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">System Design Basics</h1>
      <p className="text-xl text-slate-300 mb-8">
        Explore fundamental concepts and principles of designing large-scale distributed systems.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Card key={topic.name} className="bg-slate-800/50 hover:bg-slate-800 transition-colors border-slate-700">
            <CardHeader>
              <CardTitle>
                <Link href={topic.href} className="text-2xl hover:underline">
                  {topic.name}
                </Link>
              </CardTitle>
              <p className="text-slate-300 mt-2">{topic.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

