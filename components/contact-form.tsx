"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <Card className="glass-effect border-white/10">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                className="glass-effect border-white/10 text-white placeholder:text-gray-400"
                placeholder="First name"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                className="glass-effect border-white/10 text-white placeholder:text-gray-400"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              className="glass-effect border-white/10 text-white placeholder:text-gray-400"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              className="glass-effect border-white/10 text-white placeholder:text-gray-400"
              placeholder="Phone"
              type="tel"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              className="glass-effect border-white/10 text-white placeholder:text-gray-400 min-h-[100px]"
              placeholder="Tell us about your business..."
              required
            />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

