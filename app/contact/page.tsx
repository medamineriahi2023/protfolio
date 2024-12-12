import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Contact() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Fill out the form below to get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
            <Textarea id="message" name="message" required rows={4} />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Send Message</Button>
      </CardFooter>
    </Card>
  )
}

