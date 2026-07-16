import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, CONTACT } from '../data/content'
import { useScrollProgress } from '../hooks/useUtils'
import Icon from './Icon'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

function scrollToHash(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const scrolled = useScrollProgress(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollToHash(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-primary hidden sm:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="btn-ghost h-10 w-10 !px-0 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
