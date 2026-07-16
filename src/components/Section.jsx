import { motion } from 'framer-motion'
import { useInViewOnce } from '../hooks/useUtils'
import ColorBlobs from './ColorBlobs'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  blobs = false,
}) {
  const [ref, inView] = useInViewOnce({ threshold: 0.15 })
  return (
    <section id={id} className={`section ${className}`}>
      {blobs && <ColorBlobs />}
      <div className="container-x" ref={ref}>
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && (
              <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
