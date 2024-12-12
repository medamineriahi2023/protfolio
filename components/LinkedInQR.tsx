import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export function LinkedInQR() {
  return (
    <Card className="w-fit mx-auto mt-12">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Connect with me on LinkedIn</h2>
        <Image
          src="/linkedin-qr.png"
          alt="LinkedIn QR Code"
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="text-center mt-4 text-sm text-muted-foreground">Scan this QR code to view my LinkedIn profile</p>
      </CardContent>
    </Card>
  )
}

