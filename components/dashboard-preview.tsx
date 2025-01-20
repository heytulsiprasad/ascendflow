"use client";

import {
  Bot,
  ChevronUp,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Renovation Expert",
    avatar: "SJ",
    message: "Increased leads by 156%",
    rating: 5,
  },
  {
    name: "Mike Peters",
    role: "Construction Manager",
    avatar: "MP",
    message: "Doubled our revenue",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Interior Designer",
    avatar: "LT",
    message: "Amazing AI features",
    rating: 5,
  },
];

export function DashboardPreview() {
  const [count, setCount] = useState(156);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === 156 ? 157 : 156));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[550px] aspect-square mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-3xl" />
      <div className="relative glass-effect border border-white/10 rounded-xl p-6 h-full">
        <div className="flex flex-col h-full gap-6">
          {/* Header Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-200">Users</span>
              </div>
              <p className="text-2xl font-bold text-white mt-2">2.1k</p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>12%</span>
              </div>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-200">Chats</span>
              </div>
              <p className="text-2xl font-bold text-white mt-2">{count}</p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>8%</span>
              </div>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-pink-400" />
                <span className="text-sm text-gray-200">AI</span>
              </div>
              <p className="text-2xl font-bold text-white mt-2">99%</p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>4%</span>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="glass-effect rounded-lg p-4 border border-white/5 relative h-32">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Growth</span>
              </div>
              <div className="text-xs text-gray-400">Last 30 days</div>
            </div>
            <div className="flex items-end justify-between h-16 gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-purple-500/20 to-blue-500/20 rounded-sm"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="glass-effect rounded-lg p-3 border border-white/5 flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
                  {item.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      {item.name}
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{item.role}</p>
                  <p className="text-xs text-gray-300 mt-1">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
