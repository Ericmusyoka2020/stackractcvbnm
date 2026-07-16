const paths = {
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  app: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16" />
      <path d="M18 21V9h2a2 2 0 012 2v10M8 7h2M8 11h2M8 15h2" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  design: (
    <>
      <path d="M12 19l7-7a2.8 2.8 0 00-4-4l-7 7-2 6 6-2z" />
      <path d="M16 6l2 2" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />,
  star: (
    <path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.4l6-.9z" />
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm0 16a7 7 0 01-3.6-.98l-.26-.16-2.5.66.66-2.44-.17-.26A7 7 0 1112 19zm3.9-4.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-1 .9c-.1.2-.3.2-.5.1a5.6 5.6 0 01-2.7-2.3c-.2-.4.2-.4.5-1.2.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3c-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.9 4.2 1.7.7 2.3.8 3.1.6.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1z" />
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L16 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  twitter: <path d="M4 4l7 9-7 7h2l6-6 5 6h4l-7-9 7-7h-2l-6 6-5-6z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0012 2z" />
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-4 3v-3H4z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
}

export default function Icon({ name, className = 'w-6 h-6', stroke = true, ...props }) {
  const node = paths[name]
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: stroke ? 'none' : 'currentColor',
    stroke: stroke ? 'currentColor' : 'none',
    strokeWidth: stroke ? 1.8 : 0,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  }
  return <svg {...common}>{node}</svg>
}
