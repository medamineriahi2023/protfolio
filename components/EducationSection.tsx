"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    year: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Deep Learning Approaches for Natural Language Processing'.",
    achievements: ["Dean's List", "Best Thesis Award"]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Code College",
    year: "2014 - 2018",
    description: "Focused on full-stack development and software architecture. Completed multiple real-world projects with industry partners.",
    achievements: ["Summa Cum Laude", "Outstanding Junior Developer Award"]
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Web Wizards Academy",
    year: "Summer 2017",
    description: "Intensive 12-week program covering modern web technologies including React, Node.js, and MongoDB.",
    achievements: ["Best Final Project"]
  }
]

export function EducationSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
                <Badge variant="secondary">{edu.year}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, i) => (
                  <Badge key={i} variant="outline">{achievement}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

