'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TabbedContent } from "@/components/TabbedContent"
import { LinkedInQR } from "@/components/LinkedInQR"
import { GradientText } from "@/components/GradientText"

const TypedText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typeText = () => {
      if (charIndex < text.length) {
        setDisplayText(prev => prev + text[charIndex])
        setCharIndex(charIndex + 1)
      } else {
        // Reset after 5 seconds
        setTimeout(() => {
          setCharIndex(0)
          setDisplayText('')
        }, 5000)
      }
    }

    const timer = setTimeout(typeText, 100)
    return () => clearTimeout(timer)
  }, [charIndex, text])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>
              <TypedText text="Hello, I'm Mohamed Amine Riahi" />
            </GradientText>
          </h2>
          <p className="text-xl mb-4">
            A passionate web developer crafting modern, responsive web experiences.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
          </div>
          <Button asChild>
            <a href="/contact">Get in touch</a>
          </Button>
        </div>
        <Card className="md:w-1/2">
          <CardContent className="p-6">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
      
      <TabbedContent />
      <LinkedInQR />
    </div>
  )
}

