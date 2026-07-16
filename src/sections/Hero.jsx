import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import ColorBlobs from '../components/ColorBlobs'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <ColorBlobs variant="hero" />

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="section-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            Premium Software Studio
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            We Build{' '}
            <span className="text-gradient-rainbow">Smart Digital</span> Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg"
          >
            From high-performance websites and web apps to secure payment systems,
            SEO and institution management platforms — we craft technology that
            grows your business.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Get Started
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-secondary w-full sm:w-auto">
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-green-500" /> React & Tailwind
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-green-500" /> M-Pesa & Stripe
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-green-500" /> SEO Optimized
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-strong rounded-3xl p-2 shadow-glow-lg">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-slate-400">stackcrafts.studio</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 animate-float"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <div className="mb-3 h-2 w-2/3 rounded-full bg-brand-500/60" />
                    <div className="mb-2 h-2 w-full rounded-full bg-white/10" />
                    <div className="mb-2 h-2 w-5/6 rounded-full bg-white/10" />
                    <div className="h-8 w-1/2 rounded-lg bg-brand-gradient/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -inset-x-10 -bottom-10 -z-10 h-40 bg-brand-gradient opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
