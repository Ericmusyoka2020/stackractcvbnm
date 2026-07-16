const C = {
  bg: '#0b1020',
  panel: '#141a2e',
  panel2: '#1b2240',
  line: '#2a3354',
  text: '#e2e8f0',
  muted: '#7c89b8',
  indigo: '#facc15',
  purple: '#3b82f6',
  blue: '#38bdf8',
  green: '#34d399',
  pink: '#f472b6',
  amber: '#facc15',
}

function Frame({ children, label }) {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label={label}>
      <rect width="400" height="240" fill={C.bg} />
      {/* browser chrome */}
      <rect width="400" height="34" fill={C.panel} />
      <circle cx="18" cy="17" r="5" fill="#ef4444" />
      <circle cx="34" cy="17" r="5" fill="#eab308" />
      <circle cx="50" cy="17" r="5" fill="#22c55e" />
      <rect x="68" y="9" width="300" height="16" rx="8" fill={C.panel2} />
      <rect x="80" y="14" width="200" height="6" rx="3" fill={C.line} />
      <g transform="translate(0,34)">{children}</g>
    </svg>
  )
}

function Sidebar({ items = 5 }) {
  return (
    <g>
      <rect x="0" y="0" width="64" height="206" fill={C.panel} />
      <rect x="14" y="14" width="36" height="10" rx="5" fill={C.indigo} />
      {Array.from({ length: items }).map((_, i) => (
        <rect
          key={i}
          x="12"
          y={40 + i * 26}
          width="40"
          height="14"
          rx="5"
          fill={i === 0 ? C.indigo : C.line}
          opacity={i === 0 ? 1 : 0.7}
        />
      ))}
    </g>
  )
}

function mockDashboard() {
  return (
    <Frame label="Finance dashboard screenshot">
      <Sidebar />
      <rect x="78" y="12" width="150" height="14" rx="5" fill={C.text} opacity="0.85" />
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${78 + i * 108}, 40)`}>
            <rect width="96" height="56" rx="10" fill={C.panel2} />
            <rect x="10" y="10" width="40" height="6" rx="3" fill={C.muted} />
            <rect x="10" y="24" width="56" height="12" rx="4" fill={i === 1 ? C.green : C.indigo} />
          </g>
        ))}
      </g>
      {/* chart */}
      <rect x="78" y="110" width="312" height="86" rx="10" fill={C.panel2} />
      <polyline
        points="92,170 130,150 168,162 206,128 244,140 282,104 320,120 362,92"
        fill="none"
        stroke={C.purple}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[92, 130, 168, 206, 244, 282, 320, 362].map((x, i) => (
        <circle key={i} cx={x} cy={[170, 150, 162, 128, 140, 104, 120, 92][i]} r="3" fill={C.purple} />
      ))}
    </Frame>
  )
}

function mockLms() {
  return (
    <Frame label="Learning platform screenshot">
      <Sidebar items={6} />
      <rect x="78" y="12" width="180" height="14" rx="5" fill={C.text} opacity="0.85" />
      <g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${78 + (i % 2) * 158}, ${40 + Math.floor(i / 2) * 78})`}>
            <rect width="142" height="66" rx="10" fill={C.panel2} />
            <rect x="0" y="0" width="142" height="30" rx="10" fill={i % 2 ? C.purple : C.indigo} opacity="0.8" />
            <rect x="12" y="40" width="90" height="7" rx="3" fill={C.text} opacity="0.8" />
            <rect x="12" y="52" width="60" height="6" rx="3" fill={C.muted} />
            <rect x="12" y="40" width={70 + i * 12} height="3" rx="1.5" fill={C.green} transform="translate(0,18)" />
          </g>
        ))}
      </g>
    </Frame>
  )
}

function mockStore() {
  return (
    <Frame label="E-commerce store screenshot">
      <rect x="0" y="0" width="400" height="30" fill={C.panel} />
      <rect x="20" y="9" width="70" height="12" rx="6" fill={C.pink} />
      <rect x="300" y="9" width="16" height="12" rx="3" fill={C.line} />
      <rect x="330" y="9" width="16" height="12" rx="3" fill={C.line} />
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${20 + i * 128}, 50)`}>
            <rect width="112" height="120" rx="12" fill={C.panel2} />
            <rect x="0" y="0" width="112" height="70" rx="12" fill={i === 1 ? C.purple : C.indigo} opacity="0.75" />
            <rect x="12" y="82" width="70" height="7" rx="3" fill={C.text} opacity="0.8" />
            <rect x="12" y="96" width="40" height="7" rx="3" fill={C.amber} />
            <rect x="12" y="108" width="50" height="9" rx="4" fill={C.green} />
          </g>
        ))}
      </g>
      <rect x="20" y="182" width="360" height="22" rx="8" fill={C.indigo} />
      <rect x="150" y="190" width="100" height="7" rx="3" fill="#fff" opacity="0.9" />
    </Frame>
  )
}

function mockPortfolio() {
  return (
    <Frame label="Marketing website screenshot">
      <rect x="0" y="0" width="400" height="206" fill={C.bg} />
      <rect x="0" y="0" width="400" height="120" fill={C.panel} />
      <rect x="30" y="22" width="80" height="10" rx="5" fill={C.blue} />
      <rect x="260" y="22" width="30" height="8" rx="4" fill={C.line} />
      <rect x="300" y="22" width="30" height="8" rx="4" fill={C.line} />
      <rect x="340" y="18" width="40" height="16" rx="8" fill={C.purple} />
      <rect x="40" y="56" width="220" height="14" rx="6" fill={C.text} />
      <rect x="40" y="78" width="160" height="14" rx="6" fill={C.text} opacity="0.7" />
      <rect x="40" y="104" width="90" height="14" rx="7" fill={C.indigo} />
      <rect x="40" y="140" width="100" height="44" rx="10" fill={C.panel2} />
      <rect x="150" y="140" width="100" height="44" rx="10" fill={C.panel2} />
      <rect x="260" y="140" width="100" height="44" rx="10" fill={C.panel2} />
      <rect x="52" y="154" width="60" height="7" rx="3" fill={C.muted} />
      <rect x="162" y="154" width="60" height="7" rx="3" fill={C.muted} />
      <rect x="272" y="154" width="60" height="7" rx="3" fill={C.muted} />
    </Frame>
  )
}

function mockHospital() {
  return (
    <Frame label="Hospital management screenshot">
      <Sidebar items={6} />
      <rect x="78" y="12" width="160" height="14" rx="5" fill={C.text} opacity="0.85" />
      <rect x="78" y="40" width="312" height="58" rx="10" fill={C.panel2} />
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${92 + i * 100}, 54)`}>
            <circle cx="8" cy="8" r="8" fill={i === 0 ? C.green : C.indigo} />
            <rect x="0" y="24" width="60" height="6" rx="3" fill={C.muted} />
            <rect x="0" y="34" width="44" height="6" rx="3" fill={C.text} opacity="0.7" />
          </g>
        ))}
      </g>
      <rect x="78" y="110" width="312" height="86" rx="10" fill={C.panel2} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={92 + c * 100}
            y={122 + r * 18}
            width="86"
            height="11"
            rx="4"
            fill={C.line}
            opacity={r === 0 ? 0.5 : 0.4}
          />
        )),
      )}
    </Frame>
  )
}

function mockBooking() {
  return (
    <Frame label="Booking app screenshot">
      <rect x="0" y="0" width="400" height="206" fill={C.bg} />
      <rect x="140" y="14" width="120" height="14" rx="6" fill={C.text} opacity="0.85" />
      <rect x="20" y="44" width="120" height="150" rx="12" fill={C.panel2} />
      <rect x="32" y="58" width="96" height="40" rx="8" fill={C.indigo} opacity="0.7" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="32" y={108 + i * 20} width="96" height="12" rx="4" fill={C.line} opacity="0.7" />
      ))}
      <rect x="156" y="44" width="224" height="150" rx="12" fill={C.panel} />
      <rect x="168" y="58" width="120" height="10" rx="4" fill={C.text} opacity="0.8" />
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${168 + (i % 3) * 74}, ${80 + Math.floor(i / 3) * 52})`}>
            <rect width="62" height="42" rx="9" fill={i === 2 ? C.green : C.panel2} />
            <rect x="10" y="10" width="42" height="7" rx="3" fill={C.muted} />
            <rect x="10" y="24" width="30" height="7" rx="3" fill={i === 2 ? C.text : C.indigo} />
          </g>
        ))}
      </g>
    </Frame>
  )
}

const MAP = {
  dashboard: mockDashboard,
  lms: mockLms,
  store: mockStore,
  portfolio: mockPortfolio,
  hospital: mockHospital,
  booking: mockBooking,
}

export default function ProjectMockup({ type, className = '' }) {
  const Render = MAP[type] || mockDashboard
  return <div className={className}>{Render()}</div>
}
