import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <Section
      id="services"
      blobs
      eyebrow="Services"
      title="Everything you need to go digital"
      subtitle="End-to-end engineering and design services under one roof."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const iconBg = [
            'bg-gradient-to-br from-yellow-400 to-amber-500',
            'bg-gradient-to-br from-blue-500 to-cyan-400',
            'bg-gradient-to-br from-pink-500 to-fuchsia-500',
            'bg-gradient-to-br from-emerald-400 to-teal-500',
            'bg-gradient-to-br from-orange-400 to-rose-500',
            'bg-gradient-to-br from-violet-500 to-indigo-500',
            'bg-gradient-to-br from-sky-400 to-blue-600',
          ][i % 7]
          return (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="card group relative overflow-hidden hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-glow"
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-br from-yellow-400/40 via-pink-500/30 to-blue-500/40`} />
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-glow ${iconBg}`}>
              <Icon name={s.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {s.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand-400/20 bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-600 dark:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
