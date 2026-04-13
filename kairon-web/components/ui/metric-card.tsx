"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export default function MetricCard({
  value,
  suffix = "",
  prefix = "",
  label,
  icon: Icon,
  className = "",
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <Icon className="mx-auto mb-2 h-6 w-6 text-kairon-red" />
      )}
      <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-kairon-gray">{label}</div>
    </motion.div>
  );
}
