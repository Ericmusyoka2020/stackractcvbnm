import { motion } from 'framer-motion'
import Section from '../components/Section'

const values = [
  {
    title: 'Our Mission',
    desc: 'To empower businesses and institutions with smart, reliable digital systems that are fast, secure and beautifully crafted.',
  },
  {
    title: 'Our Vision',
    desc: 'To become East Africa’s most trusted software studio — setting the standard for premium, future-ready digital products.',
  },
  {
    title: 'Why Trust Us',
    desc: 'Transparent process, senior engineers, and proven delivery across 160+ happy clients and 248+ completed projects.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="Crafting digital products that matter"
      subtitle="Stack Crafts Studio is a modern software company blending engineering excellence with thoughtful design."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card"
        >
          <h3 className="font-display text-xl font-semibold">Who we are</h3>
          <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
            We are a team of product engineers and designers building websites, web
            applications, payment systems, SEO strategies and institution management
            systems. From startups to enterprises, we turn complex ideas into
            polished, scalable products.
          </p>
          <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
            Our approach is simple: listen closely, design with intent, and engineer
            with care — so every solution we ship performs and lasts.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card hover:border-brand-400/40"
            >
              <h4 className="font-display text-lg font-semibold text-brand-500 dark:text-brand-300">
                {v.title}
              </h4>
              <p className="mt-2 leading-relaxed text-slate-500 dark:text-slate-400">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
