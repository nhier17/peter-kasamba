"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Church, Globe, Droplet, Clock, Icon } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { areas, testimonials, history, values } from "@/constants";


export default function AboutPage() {
    return (
      <AnimatePresence mode="wait">
   <div className="section-padding">
     <section className="relative w-full h-[420px] md:h-[520px] lg:min-h-[80vh] xl:min-h-[90vh] overflow-hidden bg-black">
      <motion.div
        initial={{ scale: 1.15, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/bap.jpg"
          alt="Pastor Peter Kasamba preaching in an outdoor village"
          fill
          priority
          className="object-cover object-center brightness-[0.55]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.5))]" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full bg-amber-400/90"></div>
              <p className="text-sm tracking-widest uppercase text-amber-300/90">
                About the Mission
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-bebas-neue tracking-wide">
              Pastor Peter Kasamba
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Missionary Pastor — church planting, outreach evangelism, and
              community development across Tanzania since 2010.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="relative section-padding bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30">
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-xl-clip shadow-xl"
          >
            <Image
              src="/images/miss.JPG"
              alt="Pastor Peter Kasamba preaching during outreach"
              width={700}
              height={300}
              className="object-cover object-[50%_30%] img-soft"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-3">My Calling</p>

            <h2 className="heading-2 mb-5 font-bebas-neue tracking-wide">
              Called to Serve, Called to Go
            </h2>

            <p className="body-large text-muted-foreground mb-6">
              Since 2010, God placed a deep burden in my heart for the 
              unreached and underserved communities in Tanzania. What began 
              as a simple step of obedience soon grew into a lifelong mission 
              to plant churches, disciple believers, and bring hope where the 
              Gospel had not yet been heard.
            </p>

            <p className="body-regular text-muted-foreground mb-8">
              Through door-to-door evangelism, village outreach meetings, and 
              long journeys into the interior regions, the Lord has continued 
              to open doors for ministry. Every soul reached, every church 
              planted, and every community impacted is a testimony of His 
              faithfulness.
            </p>

            <div className="mt-6">
              <button className="btn-primary rounded-xl">Join the Mission</button>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 h-1 w-24 bg-amber-400/30 mx-auto rounded-full" />
      </div>
    </section>

    <section className="section-padding">
      <div className="text-center mb-10">
        <h3 className="heading-2">Ministry Focus</h3>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {areas.map((a, i) => (
          <motion.article
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image 
                src={a.image} 
                alt={a.title} 
                fill 
                className="object-cover"  
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <a.icon className="w-6 h-6 text-amber-600"  />
                <h4 className="text-lg font-semibold">{a.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{a.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="section bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 rounded-xl">
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">Purpose & Direction</p>

            <h2 className="heading-3 mb-6 font-bebas-neue tracking-wide">
              The Heart of the Mission
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Mission
              </h3>
              <p className="body-regular text-muted-foreground">
                To make Christ known by reaching the unreached, discipling believers,
                and serving communities with compassion through church planting,
                evangelism, and practical community development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Vision
              </h3>
              <p className="body-regular text-muted-foreground">
                To see lives changed, churches established, and communities uplifted
                through God’s love across Tanzania and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">What Guides the Work</p>

            <h3 className="heading-4 mb-6 font-semibold">
              Core Values
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <Card
                  key={value}
                  className="card hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-5 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center italic text-muted-foreground max-w-2xl mx-auto"
        >
          “How can they hear without someone preaching to them? And how can
          anyone preach unless they are sent?” — Romans 10:14–15
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center mb-8">
        <h2 className="heading-2">Our Journey</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-amber-600" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="relative after:absolute after:left-1/2 after:top-0 after:h-full after:w-0.5 after:-translate-x-1/2 after:bg-border">
          {history.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative mb-8 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-1/2"></div>

              <div className="absolute left-1/2 top-0 z-10 -mt-1 -translate-x-1/2 transform">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-white">
                  <Clock className="h-4 w-4" />
                </div>
              </div>

              <Card className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                <CardContent className="p-6">
                  <span className="mb-2 inline-block rounded bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
                    {event.year}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="text-center mb-10">
        <h3 className="heading-2">Testimonies</h3>
      </div>

      <div>
          <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
    </div>
    </AnimatePresence>
    );
};