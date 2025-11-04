"use client"

import { Sparkles } from "lucide-react"

export default function PrayerSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-white/60 via-rose-50/60 to-pink-50/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/80 shadow-2xl">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Sparkles className="w-10 h-10 text-rose-500" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Prayers for Your Special Day</h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="text-center italic animate-fade-in-delay">
            Dear Lord, on this beautiful day we celebrate Oluwafiifunmi Praise Richard. We thank you for blessing us
            with her presence and the joy she brings to our lives.
          </p>

          <div className="border-l-4 border-rose-300 pl-6 py-4 animate-fade-in-delay-2 bg-white/40 rounded-r-lg">
            <p>
              Bless her with continued health, strength, and vitality. May her heart remain pure and kind, and may she
              always walk in your light. Guide her steps as she journeys through this year, and open doors of
              opportunity for her growth and happiness.
            </p>
          </div>

          <div className="border-l-4 border-pink-300 pl-6 py-4 animate-fade-in-delay-3 bg-white/40 rounded-r-lg">
            <p>
              Grant her wisdom in her decisions, courage in her challenges, and peace in her heart. May she continue to
              be a light to those around her, spreading love and positivity wherever she goes.
            </p>
          </div>

          <div className="border-l-4 border-amber-300 pl-6 py-4 animate-fade-in-delay-4 bg-white/40 rounded-r-lg">
            <p>
              Lord, bless her with an abundance of love and laughter. Surround her with wonderful people who celebrate
              her beauty and affirm her worth. May her faith grow deeper with each passing day, and may she always
              remember that she is fearfully and wonderfully made in Your image.
            </p>
          </div>

          <div className="border-l-4 border-rose-300 pl-6 py-4 animate-fade-in-delay-5 bg-white/40 rounded-r-lg">
            <p>
              Protect her from all harm and negativity. Fill her days with purpose, her heart with joy, and her life
              with meaningful moments. May her dreams come true and her aspirations become reality through Your divine
              guidance and grace.
            </p>
          </div>

          <div className="border-l-4 border-pink-300 pl-6 py-4 animate-fade-in-delay-6 bg-white/40 rounded-r-lg">
            <p>
              As she celebrates another year of life, we pray for her prosperity, success, and continued blessings. May
              she live boldly, love fiercely, and impact the world with her unique gifts. May her journey ahead be
              filled with miracles and divine breakthroughs.
            </p>
          </div>

          <p className="text-center italic animate-fade-in-delay-7">
            On this day and every day, may she feel Your presence and know that she is deeply loved, cherished, and
            blessed beyond measure.
          </p>

          <p className="text-center font-semibold text-rose-600 animate-fade-in-delay-8">Amen 🙏</p>
        </div>
      </div>
    </section>
  )
}
