"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTrail, animated } from '@react-spring/web'
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'GraphQL', level: 70 },
  { name: 'CSS/Sass', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Redux', level: 75 },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const trail = useTrail(skills.length, {
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
  })

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trail.map((props, index) => (
          <animated.div key={skills[index].name} style={props}>
            <Card 
              className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
              onMouseEnter={() => setHoveredSkill(skills[index].name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{skills[index].name}</h3>
                  <span className="text-sm font-medium">{skills[index].level}%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${skills[index].level}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>
                <AnimatePresence>
                  {hoveredSkill === skills[index].name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-2 text-sm text-muted-foreground">
                        {getSkillDescription(skills[index].name)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

function getSkillDescription(skillName: string): string {
  switch (skillName) {
    case 'React':
      return 'Extensive experience building complex UIs and single-page applications with React hooks and context API.'
    case 'Next.js':
      return 'Proficient in server-side rendering, static site generation, and creating optimized React applications with Next.js.'
    case 'TypeScript':
      return 'Strong typing skills for building scalable and maintainable applications, including advanced type inference and generics.'
    case 'Node.js':
      return 'Backend development and API creation using Express, Nest.js, and other Node.js frameworks.'
    case 'GraphQL':
      return 'Designing and implementing efficient APIs with Apollo Server and Client, including schema design and resolvers.'
    case 'CSS/Sass':
      return 'Creating responsive layouts and implementing modern design principles, including CSS Grid and Flexbox.'
    case 'Tailwind CSS':
      return 'Rapid UI development with utility-first CSS framework, including custom configuration and component extraction.'
    case 'Redux':
      return 'State management for large-scale applications, including Redux Toolkit usage and integration with middleware.'
    default:
      return 'Proficient in various aspects of web development and constantly learning new technologies.'
  }
}

