export default function ColorBlobs({ variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob left-[-6%] top-[-10%] h-72 w-72 bg-yellow-400/25 animate-blob-a" />
        <div className="blob right-[-4%] top-[10%] h-80 w-80 bg-blue-500/25 animate-blob-b" />
        <div className="blob left-[20%] bottom-[-10%] h-64 w-64 bg-pink-500/20 animate-blob-a" />
        <div className="blob right-[15%] bottom-[5%] h-56 w-56 bg-emerald-400/20 animate-blob-b" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob -left-10 top-10 h-72 w-72 bg-gradient-to-br from-yellow-400/20 to-amber-400/10 animate-blob-a" />
      <div className="blob -right-10 bottom-10 h-80 w-80 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 animate-blob-b" />
      <div className="blob left-1/3 top-1/2 h-56 w-56 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/10 animate-blob-a" />
    </div>
  )
}
