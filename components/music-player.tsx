"use client"

import { useState, useRef } from "react"
import { Play, Pause, Music } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log("Playback error:", error)
      setIsPlaying(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 shadow-xl">
        {/* Music Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
            <Music className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        <h3 className="text-white text-center font-bold text-lg mb-2">Who Am I Mortal Man Awesome God</h3>
        <p className="text-white/80 text-center text-sm mb-6">Noella</p>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          className="w-full bg-white hover:bg-white/90 text-rose-600 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>Play Music</span>
            </>
          )}
        </button>

        {/* Info */}
        <p className="text-white/70 text-center text-xs mt-4">🎵 A prayerful blessing for your special day</p>

        <audio ref={audioRef} onEnded={() => setIsPlaying(false)} crossOrigin="anonymous">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Noella_-_Who_Am_I_Mortal_Man_Awesome_God__Kingdomflavour.com-4FyXUd42oEuhVGSpvuFJ7lip8devHa.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Info text */}
      <p className="text-center text-sm text-gray-600 mt-4 italic">
        💡 Tip: A beautiful spiritual song for the birthday celebration!
      </p>
    </div>
  )
}
