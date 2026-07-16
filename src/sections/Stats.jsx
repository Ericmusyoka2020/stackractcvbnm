import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { useCountUp, useInViewOnce } from '../hooks/useUtils'
import { STATS } from '../data/content'

function Stat({ stat, index }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.4 })
  const value = useCountUp(stat.value, { start: inView })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card text-center"
    >
      <p className="font-display text-4xl font-bold text-gradient-rainbow sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  const [, inView] = useInViewOnce({ threshold: 0.2 })
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-radial" />
      <Section
        id="stats"
        blobs
        eyebrow="By the numbers"
        title="Results that speak for themselves"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={s.label} stat={s} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mt-10 text-center text-xs text-slate-400"
        />
      </Section>
    </section>
  )
}
