import { useTheme } from '../context/ThemeContext'
import Icon from './Icon'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`btn-ghost relative h-10 w-10 !px-0 ${className}`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="h-5 w-5" />
    </button>
  )
}
