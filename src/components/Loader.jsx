import { motion } from 'framer-motion'

export default function Loader({ done }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070710]"
    >
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-20 blur-2xl" />
        {/* orbiting track */}
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
        {/* center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xs font-semibold tracking-[0.25em] text-slate-500">
            SC
          </span>
        </div>
        {/* logo photo moving round */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ marginLeft: -28, marginTop: -28 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
        >
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 -rotate-180">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 shadow-glow ring-2 ring-brand-400/40">
                <img
                  src="pic.png"
                  alt="Stack Crafts Studio"
                  className="h-10 w-10 rounded-xl object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="mt-8 font-display text-sm tracking-[0.3em] text-slate-400">
        STACK CRAFTS STUDIO
      </p>
      <p className="mt-2 text-xs tracking-wide text-slate-600">Loading…</p>
    </motion.div>
  )
}
