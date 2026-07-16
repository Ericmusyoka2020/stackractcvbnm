import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import { CONTACT } from '../data/content'

export default function LiveChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-strong mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl p-4 shadow-glow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white">
                <Icon name="chat" className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-slate-900" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Live Chat
                </p>
                <p className="text-xs text-green-500">Online now</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Hi {CONTACT.name.split(' ')[0]}! 👋 How can the Stack Crafts team help you today?
            </p>
            <div className="mt-3 flex gap-2">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-primary flex-1 !py-2 text-xs">
                Start on WhatsApp
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-secondary !py-2 text-xs">
                Message us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open live chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow hover:shadow-glow-lg"
      >
        <Icon name={open ? 'close' : 'chat'} className="h-6 w-6" />
      </button>
    </div>
  )
}
