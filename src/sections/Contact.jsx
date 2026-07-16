import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { CONTACT, SOCIALS } from '../data/content'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      blobs
      eyebrow="Contact"
      title="Let’s build something great"
      subtitle="Tell us about your project — we usually reply within a few hours."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-5"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-4 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
              <Icon name="whatsapp" stroke={false} className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">WhatsApp</p>
              <p className="font-semibold">{CONTACT.phone}</p>
            </div>
          </a>

          <a href={CONTACT.phoneHref} className="card flex items-center gap-4 hover:-translate-y-1 hover:border-brand-400/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Icon name="phone" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="font-semibold">{CONTACT.phone}</p>
            </div>
          </a>

          <a href={`mailto:${CONTACT.email}`} className="card flex items-center gap-4 hover:-translate-y-1 hover:border-brand-400/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white">
              <Icon name="mail" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="font-semibold">{CONTACT.email}</p>
            </div>
          </a>

          <div className="card flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">Follow us</p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-100 text-slate-600 transition-colors hover:bg-brand-gradient hover:text-white dark:bg-white/5 dark:text-slate-300"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="card lg:col-span-3 space-y-4"
        >
          <input type="hidden" name="access_key" value="6ff52103-febf-48c8-83d9-64e549f2e411" />
          <input type="hidden" name="subject" value="New inquiry from Stack Crafts Studio website" />
          <input type="hidden" name="from_name" value="Stack Crafts Studio" />

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-slate-100/60 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:bg-white/5"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-slate-100/60 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:bg-white/5"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-white/10 bg-slate-100/60 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:bg-white/5"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-white/10 bg-slate-100/60 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:bg-white/5"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm text-green-500">
              Thanks! We’ll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-500">
              Something went wrong. Please try again or WhatsApp us.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}
