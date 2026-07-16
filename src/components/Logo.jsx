const LOGO_SRC = '/logo.png'

export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={LOGO_SRC}
        alt="Stack Crafts Studio"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const fallback = e.currentTarget.nextElementSibling
          if (fallback) fallback.style.display = 'flex'
        }}
        className="h-9 w-9 rounded-xl object-contain shadow-glow"
      />
      <span
        className="relative hidden h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-bold text-white shadow-glow"
      >
        SC
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        Stack<span className="text-brand-500">Crafts</span>
      </span>
    </a>
  )
}
