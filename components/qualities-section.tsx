"use client"

import { useState } from "react"
import { Heart, Lightbulb, Hand as Hands, Cross, Smile, Users } from "lucide-react"

export default function QualitiesSection() {
  const qualities = [
    {
      title: "Radiant Heart",
      description: "Your warmth lights up every room you enter",
      goodness:
        "This quality makes you a beacon of hope. Your radiant heart has the power to heal wounds, lift spirits, and remind everyone around you that love is real and worth giving.",
      impact:
        "Your warmth has touched so many hearts around you. Everyone feels genuinely seen and loved in your presence. You've taught us what true compassion means.",
      icon: Heart,
    },
    {
      title: "Creative Spirit",
      description: "Your imagination brings beauty to the world",
      goodness:
        "Your creativity is a gift that transforms the mundane into the magnificent. It shows you see the world differently, and that unique perspective makes everything you touch more beautiful and meaningful.",
      impact:
        "Your creativity inspires me and those around you to think differently and dream bigger. You turn ordinary moments into something extraordinary and memorable.",
      icon: Lightbulb,
    },
    {
      title: "Genuine Kindness",
      description: "You care deeply and show it through your actions",
      goodness:
        "In a world that often feels transactional, your genuine kindness is revolutionary. It costs nothing to give, yet it's worth everything to receive. Your kindness proves that goodness still exists.",
      impact:
        "Your kindness has restored faith in humanity for so many. In a world that often feels cold, you remind us to be better, to give more, and to care deeper.",
      icon: Hands,
    },
    {
      title: "Strong Faith",
      description: "Your belief in God guides you with grace",
      goodness:
        "Your strong faith is an anchor that keeps you grounded and peaceful. It gives you purpose, direction, and the strength to overcome any storm. Your faith is contagious and inspiring.",
      impact:
        "Your unwavering faith has been a beacon of hope for everyone around you. During tough times, your spiritual strength lifts us up and reminds us to trust.",
      icon: Cross,
    },
    {
      title: "Infectious Joy",
      description: "Your smile is contagious and uplifting",
      goodness:
        "Joy from a genuine heart is rare and precious. Your infectious joy doesn't just brighten your own days—it elevates everyone around you and proves that happiness is something worth chasing.",
      impact:
        "Your joy is like a light that chases away darkness. I've seen you turn sad faces into smiling ones with just your presence and laughter.",
      icon: Smile,
    },
    {
      title: "Loyal Friend",
      description: "You stand by those you love with unwavering devotion",
      goodness:
        "Loyalty is the foundation of every meaningful relationship. Your unwavering devotion shows that you understand what it truly means to love—not just in words, but in consistent, selfless action.",
      impact:
        "Your loyalty has taught me what real friendship means. You've shown up for me and everyone around you in ways that will never be forgotten.",
      icon: Users,
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Your Beautiful Qualities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((quality, index) => {
          const Icon = quality.icon
          return (
            <div
              key={index}
              className="group cursor-pointer h-full"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="relative h-full bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/60">
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                    expandedIndex === index
                      ? "from-rose-100 to-pink-100 opacity-100"
                      : "from-transparent to-transparent opacity-0"
                  }`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-8 h-8 text-rose-500 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                      {quality.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-medium mb-4">{quality.goodness}</p>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed font-medium mb-3">{quality.description}</p>
                    <div className="h-px bg-gradient-to-r from-rose-300 to-pink-300 mb-3"></div>
                    <p className="text-gray-600 leading-relaxed italic text-sm">{quality.impact}</p>
                  </div>

                  {/* Animated underline */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-blob"></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
