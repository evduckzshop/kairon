"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Connector line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kairon-red font-[family-name:var(--font-display)] text-lg font-bold text-white"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: number * 0.15 }}
        >
          {number}
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-0.5 grow bg-gradient-to-b from-kairon-red to-kairon-teal"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: number * 0.15 + 0.2 }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: number * 0.15 + 0.1 }}
      >
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
          {title}
        </h3>
        <p className="mt-2 text-kairon-gray leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
}
