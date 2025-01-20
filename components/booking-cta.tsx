import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function BookingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="glass-effect border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book a Meeting
      </Button>
    </div>
  )
}

