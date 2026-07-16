import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { FAQ } from '../data/content'

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <div className="card overflow-hidden !p-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display font-semibold">{item.q}</span>
        <Icon
          name={isOpen ? 'close' : 'arrow'}
          className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 leading-relaxed text-slate-500 dark:text-slate-400">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Frequently asked questions"
      subtitle="Everything you need to know before getting started."
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {FAQ.map((item, i) => (
          <FaqItem
            key={i}
            index={i}
            item={item}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </Section>
  )
}
