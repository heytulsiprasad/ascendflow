import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  gradient?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  gradient = "from-purple-600 via-pink-600 to-blue-600",
}: CTASectionProps) {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 animate-gradient`}
      />
      <div className="  px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="text-xl text-gray-300 max-w-[600px]">{subtitle}</p>
          <Button
            size="lg"
            className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
