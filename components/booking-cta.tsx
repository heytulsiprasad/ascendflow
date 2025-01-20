import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function BookingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white font-medium
          glass-effect border border-white/20 shadow-lg 
          hover:shadow-purple-500/40 hover:border-white/40 hover:from-purple-600/90 hover:to-blue-600/90
          transition-all duration-300 backdrop-blur-xl
          px-6 py-6 text-base glow"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Book a Meeting
      </Button>
    </div>
  );
}
