import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
    <Card className="glass-effect border-white/10">
      <CardContent className="pt-6">
        <p className="text-gray-300">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="text-sm font-semibold text-white">{author}</div>
        <div className="text-sm text-gray-400">{company}</div>
      </CardFooter>
    </Card>
  );
}
