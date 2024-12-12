"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Led the development of cutting-edge web applications using React and Next.js. Implemented state-of-the-art UI/UX designs and improved overall performance.",
    achievements: ["Reduced load time by 40%", "Implemented CI/CD pipeline"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: ["Increased user engagement by 25%", "Mentored junior developers"]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    period: "2016 - 2018",
    description: "Started my career working on various web development projects. Gained extensive experience in HTML, CSS, and JavaScript.",
    achievements: ["Developed 10+ responsive websites", "Learned React and Node.js"]
  }
]

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      {experiences.map((exp, index) => (
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
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, i) => (
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

