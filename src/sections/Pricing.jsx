import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { PRICING } from '../data/content'

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple, transparent pricing"
      subtitle="Pick a package or request a custom quote — no surprises."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {PRICING.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`card relative flex flex-col ${
              plan.featured
                ? 'border-brand-400/50 shadow-glow lg:scale-[1.04]'
                : ''
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-glow">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {plan.desc}
            </p>
            <div className="mt-5 flex items-end gap-1">
              <span className="font-display text-3xl font-bold">{plan.price}</span>
              <span className="mb-1 text-xs text-slate-400">{plan.period}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
            >
              Contact Us
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
