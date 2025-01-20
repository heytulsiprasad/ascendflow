import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

export function TestimonialCard({
  quote,
  author,
  company,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect transition-all duration-300 hover:glow relative overflow-hidden"
    >
      <Card className="border-purple-500/10 bg-transparent">
        <CardContent className="pt-6">
          <p className="text-gray-300">&ldquo;{quote}&rdquo;</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="text-sm font-semibold text-white">{author}</div>
          <div className="text-sm text-gray-400">{company}</div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
