const LOGO_SRC = 'logo.png'

export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-bold text-white shadow-glow">
        <img
          src={LOGO_SRC}
          alt="Stack Crafts Studio"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 h-full w-full rounded-xl object-contain"
        />
        <span className="pointer-events-none">SC</span>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        Stack<span className="text-brand-500">Crafts</span>
      </span>
    </a>
  )
}
