"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50/60 to-amber-100/40 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-5xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/50 dark:bg-zinc-900/40 shadow-xl rounded-3xl border border-amber-200/40 dark:border-zinc-700/40 p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Reaching the Unreached
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            God is moving powerfully across Africa. Through evangelism, church planting,
            outreach missions, and community impact, lives are being transformed.
            Your partnership in prayer, giving, or going helps advance the Gospel 
            to villages and communities that have never heard it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/support">
              <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
                Support the Mission
              </Button>
            </Link>

            <Link href="/mission-trips">
              <Button 
                size="lg" 
                variant="ghost"
                className="px-8 py-6 text-lg rounded-xl text-amber-800 dark:text-amber-300"
              >
                Mission Trips
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
