"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";
import { Quote } from "lucide-react";

export const Mission = () => {
  return (
 <section className="section-padding bg-white dark:bg-neutral-900">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/mission.jpg" 
            alt="Missionary calling in Africa"
            fill
            className="object-cover"
          />

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            My Calling Into Mission Work
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I began my missionary journey with a simple but profound conviction: 
            <span className="font-semibold text-gray-900 dark:text-white"> every soul matters to God.</span> 
            As I visited remote villages across Kenya, I witnessed both physical need 
            and deep spiritual hunger. It was in those quiet places that God stirred my heart 
            to commit my life to spreading the Gospel and planting churches where the light of Christ 
            had not yet reached.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Through faith, prayer, and the support of faithful partners, I have been able to 
            teach, disciple, encourage, and empower communities—bringing hope 
            where many felt forgotten. This mission continues to grow, not because of my strength, 
            but through God’s grace and the generosity of people like you.
          </p>

          {/* SCRIPTURE BOX */}
          <div className="mt-8 p-6 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-neutral-800 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <p className="italic text-gray-700 dark:text-gray-200 text-lg">
                “How beautiful are the feet of those who bring good news.”  
                <br />
                <span className="font-semibold">— Romans 10:15</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
