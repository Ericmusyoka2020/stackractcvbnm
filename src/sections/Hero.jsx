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
        </div>
      </div>
    </section>
  )
}
