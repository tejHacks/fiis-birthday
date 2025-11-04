"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"
import QualitiesSection from "@/components/qualities-section"
import PrayerSection from "@/components/prayer-section"
import MusicPlayer from "@/components/music-player"

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4s"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-16 px-4">
          <div className="mb-4 flex justify-center gap-2 animate-bounce">
            <Sparkles className="w-8 h-8 text-rose-500" />
            <Sparkles className="w-8 h-8 text-pink-500" />
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 animate-fade-in">
            Happy Birthday
          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-rose-700 mb-2 animate-fade-in-delay">
            Oluwafiifunmi Praise Richard
          </p>

          <p className="text-lg text-gray-700 animate-fade-in-delay-2">🎉 Today is your special day 🎉</p>
        </header>

        {/* Music Player */}
        <div className="flex justify-center px-4 mb-12">
          <MusicPlayer />
        </div>

        {/* Qualities Section */}
        <QualitiesSection />

        {/* Prayer Section */}
        <PrayerSection />

        {/* Footer with heart */}
        <footer className="text-center py-16 px-4">
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10 text-rose-500 animate-pulse" />
          </div>
          <p className="text-gray-700 text-lg">
            Wishing you a year filled with blessings, joy, and endless possibilities ✨
          </p>
        </footer>
      </div>
    </main>
  )
}
