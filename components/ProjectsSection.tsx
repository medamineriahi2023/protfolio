"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["Next.js", "Stripe", "Tailwind CSS"]
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "DnD", "Redux"]
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that integrates with a third-party API to display real-time weather data.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "API", "Chart.js"]
  }
]

export function ProjectsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <motion.a 
                  href={project.link} 
                  className="text-primary hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

