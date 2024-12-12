"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { SkillsSection } from "@/components/SkillsSection"
import { EducationSection } from "@/components/EducationSection"
import { CertificationsSection } from "@/components/CertificationsSection"

export function TabbedContent() {
  const [activeTab, setActiveTab] = React.useState("projects")

  return (
    <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-5 mb-8">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
      </TabsList>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>
          <TabsContent value="experience">
            <ExperienceSection />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsSection />
          </TabsContent>
          <TabsContent value="education">
            <EducationSection />
          </TabsContent>
          <TabsContent value="certifications">
            <CertificationsSection />
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  )
}

