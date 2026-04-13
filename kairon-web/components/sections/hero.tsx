"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Users } from "lucide-react";
import Button from "@/components/ui/button";
import MetricCard from "@/components/ui/metric-card";

const words = ["Transforms", "Repetitive", "Tasks", "Into", "Automatic", "Workflows"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-kairon-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 52, 96, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 52, 96, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kairon-red/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
        {/* Animated Headline */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-kairon-white md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-kairon-gray md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Kairon turns your most repetitive tasks into automatic workflows — so
          your business runs at full speed, even when you&rsquo;re not watching.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button href="/book" size="lg">
            Book a Free Strategy Call
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            See Our Work
          </Button>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <MetricCard
            value={50}
            suffix="+"
            label="Workflows Automated"
            icon={Zap}
          />
          <MetricCard
            value={200}
            suffix="+"
            label="Hours Saved Monthly"
            icon={Clock}
          />
          <MetricCard
            value={98}
            suffix="%"
            label="Client Retention"
            icon={Users}
          />
        </motion.div>
      </div>
    </section>
  );
}
