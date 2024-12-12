"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Designing distributed systems and implementing high-performance solutions on AWS.",
    certificateImage: "/placeholder.svg?height=600&width=800",
    trainingDetails: [
      "Completed 40 hours of online training",
      "Passed practice exams with 90% score",
      "Hands-on labs with EC2, S3, and Lambda"
    ]
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    description: "Managing and scaling containerized applications using Kubernetes.",
    certificateImage: "/placeholder.svg?height=600&width=800",
    trainingDetails: [
      "Completed 50 hours of instructor-led training",
      "Built and managed Kubernetes clusters",
      "Implemented security best practices"
    ]
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2021",
    description: "Developing scalable and secure applications using Google Cloud technologies.",
    certificateImage: "/placeholder.svg?height=600&width=800",
    trainingDetails: [
      "Completed Google's official training program",
      "Developed serverless applications with Cloud Functions",
      "Implemented CI/CD pipelines with Cloud Build"
    ]
  }
]

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
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
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <Badge variant="secondary">{cert.date}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{cert.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedCert(cert)}>View Certificate</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{selectedCert?.name}</DialogTitle>
                      <DialogDescription>{selectedCert?.issuer} - {selectedCert?.date}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <Image
                        src={selectedCert?.certificateImage || ''}
                        alt={`${selectedCert?.name} Certificate`}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2">Training Details:</h4>
                      <ul className="list-disc pl-5">
                        {selectedCert?.trainingDetails.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

