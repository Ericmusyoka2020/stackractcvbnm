import { motion } from 'framer-motion'
import Section from '../components/Section'
import { PROJECTS } from '../data/content'

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      blobs
      eyebrow="Portfolio"
      title="Recent projects we’re proud of"
      subtitle="A glimpse of platforms we’ve designed, built and shipped."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="card group overflow-hidden p-0 hover:-translate-y-1 hover:shadow-glow-lg"
          >
            <div className="relative h-48 overflow-hidden bg-slate-950">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-3 top-3 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
