import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  percentage: string;
  metric: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  percentage,
  metric,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect transition-all duration-300 hover:glow relative overflow-hidden"
    >
      <Card className="border-purple-500/10 bg-transparent">
        <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500/20 to-transparent px-4 py-1 rounded-bl-lg">
          <span className="text-purple-300 font-bold">{percentage}%</span>
          <span className="text-purple-300 text-sm ml-1">{metric}</span>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-purple-600/20 p-2 text-purple-400">
              {icon}
            </div>
            <CardTitle className="text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
