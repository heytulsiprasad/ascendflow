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
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Renovation Expert",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "Increased leads by 156%",
    rating: 5,
  },
  {
    name: "Mike Peters",
    role: "Construction Manager",
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    message: "Doubled our revenue",
    rating: 5,
  },
  {
    name: "Alex Woods",
    role: "Interior Designer",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
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
    <div className="relative w-full max-w-[550px] min-h-[550px] mx-auto p-8">
      {/* Outer glow/blur effect */}
      <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-3xl scale-105" />

      {/* Additional subtle glow layers */}
      <div className="absolute inset-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-[32px] blur-2xl scale-110" />
      <div className="absolute inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[32px] blur-2xl scale-110" />

      {/* Main content container */}
      <div className="relative glass-effect border border-white/10 rounded-3xl p-4 md:p-6 h-full backdrop-blur-xl bg-black/10">
        <div className="flex flex-col h-full gap-4 md:gap-6">
          {/* Rest of the component remains the same */}
          {/* Header Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="glass-effect rounded-lg p-3 md:p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-400" />
                <span className="text-xs md:text-sm text-gray-200">Users</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white mt-2">
                2.1k
              </p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>12%</span>
              </div>
            </div>
            <div className="glass-effect rounded-lg p-3 md:p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span className="text-xs md:text-sm text-gray-200">Chats</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white mt-2">
                {count}
              </p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>8%</span>
              </div>
            </div>
            <div className="glass-effect rounded-lg p-3 md:p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-pink-400" />
                <span className="text-xs md:text-sm text-gray-200">AI</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white mt-2">
                99%
              </p>
              <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                <ChevronUp className="h-3 w-3" />
                <span>4%</span>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="glass-effect rounded-lg p-3 md:p-4 border border-white/5 relative h-32">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-white">
                  Growth
                </span>
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
          <div className="space-y-2 md:space-y-3 overflow-y-auto max-h-[calc(100%-16rem)]">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="glass-effect rounded-lg p-3 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                      <p className="text-sm font-medium text-white truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mt-1">
                      <p className="text-xs text-gray-300 order-2 md:order-1">
                        {item.message}
                      </p>
                      <div className="flex gap-0.5 order-1 md:order-2">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
