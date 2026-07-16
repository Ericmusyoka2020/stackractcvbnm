import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = TESTIMONIALS[index]

  const go = (dir) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <Section
      id="testimonials"
      blobs
      eyebrow="Testimonials"
      title="What our clients say"
      subtitle="Real feedback from founders and teams we’ve partnered with."
    >
      <div className="mx-auto max-w-3xl">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-8 -top-8 font-display text-9xl text-brand-500/10">
            “
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    stroke={false}
                    className={`h-5 w-5 ${i < t.rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-display font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-brand-500' : 'w-2 bg-slate-300 dark:bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} aria-label="Previous" className="btn-ghost h-10 w-10 !px-0">
                <Icon name="arrow" className="h-5 w-5 rotate-180" />
              </button>
              <button onClick={() => go(1)} aria-label="Next" className="btn-ghost h-10 w-10 !px-0">
                <Icon name="arrow" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
