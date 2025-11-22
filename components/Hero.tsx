"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/mission1.jpg"
          alt="Missionary outreach in Africa"
          fill
          priority
          className="object-cover object-center brightness-[0.45]"
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Taking the Gospel to the Heart of Tanzania
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Empowering communities across Tanzania with the message of Christ —
          planting churches, discipling believers, and transforming lives
          through the love of God.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition"
            asChild
          >
            <a href="/get-involved" className="flex items-center gap-2">
              Join the Mission <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition"
            asChild
          >
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </motion.div>

      {/* Subtle Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
