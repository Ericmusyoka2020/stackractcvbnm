import { NAV_LINKS, CONTACT, SOCIALS } from '../data/content'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="container-x grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            We build smart digital solutions — websites, web apps, payment systems and
            institution platforms.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-100 text-slate-600 transition-colors hover:bg-brand-gradient hover:text-white dark:bg-white/5 dark:text-slate-300"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-500 transition-colors hover:text-brand-500 dark:text-slate-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-brand-500">
                <Icon name="phone" className="h-4 w-4" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-brand-500">
                <Icon name="mail" className="h-4 w-4" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-500">
                <Icon name="whatsapp" stroke={false} className="h-4 w-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
            Legal
          </h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="#" className="text-sm text-slate-500 transition-colors hover:text-brand-500 dark:text-slate-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-slate-500 transition-colors hover:text-brand-500 dark:text-slate-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-sm text-slate-400">
          <p>© {year} Stack Crafts Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
