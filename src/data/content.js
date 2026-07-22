export const CONTACT = {
  phone: '0710911645',
  phoneHref: 'tel:+254710911645',
  whatsapp: 'https://wa.me/254710911645',
  email: 'stackcraftsstudio@gmail.com',
  name: 'Eric Thyaka',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: 'code',
    title: 'Website Development',
    desc: 'Blazing-fast, responsive websites built with modern frameworks and a pixel-perfect design system.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: 'app',
    title: 'Web App Development',
    desc: 'Scalable, secure web applications that automate workflows and grow with your business.',
    tags: ['Node', 'APIs', 'Cloud'],
  },
  {
    icon: 'building',
    title: 'Institution Systems',
    desc: 'School, college and enterprise management systems — admissions, fees, exams and reporting.',
    tags: ['ERP', 'LMS', 'Dashboards'],
  },
  {
    icon: 'seo',
    title: 'SEO Optimization',
    desc: 'Technical and on-page SEO that puts your brand on the first page and keeps it there.',
    tags: ['Audit', 'Content', 'Analytics'],
  },
  {
    icon: 'card',
    title: 'Payment Integration',
    desc: 'Secure M-Pesa, card and gateway integrations with reconciled, real-time transactions.',
    tags: ['M-Pesa', 'Stripe', 'PCI'],
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces that convert — design systems, prototypes and usability testing.',
    tags: ['Figma', 'System', 'A11y'],
  },
  {
    icon: 'server',
    title: 'Hosting & Maintenance',
    desc: 'Managed cloud hosting, monitoring, backups and continuous updates so you sleep easy.',
    tags: ['Cloud', 'CI/CD', '24/7'],
  },
]

export const PROJECTS = [
  {
    title: 'Aurora Finance Dashboard',
    category: 'Web App',
    desc: 'Real-time analytics dashboard for a fintech startup with role-based access.',
    tech: ['React', 'Node', 'PostgreSQL'],
    accent: 'from-yellow-400 to-blue-500',
    mock: 'dashboard',
    image: 'AuroraFinanceDashboard.png',
  },
  {
    title: 'EduSphere LMS',
    category: 'Institution System',
    desc: 'End-to-end learning platform for 12,000+ students with live classes & exams.',
    tech: ['Next.js', 'Supabase', 'Tailwind'],
    accent: 'from-amber-400 to-blue-600',
    mock: 'lms',
    image: 'EduSphereLMS.png',
  },
  {
    title: 'Lumière Store',
    category: 'E-commerce',
    desc: 'Conversion-focused storefront with M-Pesa & card checkout in under 2s.',
    tech: ['React', 'Stripe', 'M-Pesa'],
    accent: 'from-yellow-300 to-blue-500',
    mock: 'store',
    image: 'LumièreStore.png',
  },
  {
    title: 'Nova Portfolio',
    category: 'Website',
    desc: 'Award-style marketing site for a creative agency with smooth scroll.',
    tech: ['Vite', 'GSAP', 'Tailwind'],
    accent: 'from-yellow-400 to-cyan-400',
    mock: 'portfolio',
    image: 'NovaPortfolio.png',
  },
  {
    title: 'MedTrack HMS',
    category: 'Institution System',
    desc: 'Hospital management system handling appointments, billing and records.',
    tech: ['React', 'Node', 'MongoDB'],
    accent: 'from-amber-400 to-blue-600',
    mock: 'hospital',
    image: 'MedTrackHMS.png',
  },
  {
    title: 'Pulse Booking',
    category: 'Web App',
    desc: 'Appointment and scheduling platform for wellness clinics with reminders.',
    tech: ['Next.js', 'Twilio', 'Prisma'],
    accent: 'from-yellow-300 to-blue-500',
    mock: 'booking',
    image: 'PulseBooking.png',
  },
]

export const PRICING = [
  {
    name: 'Basic Website',
    price: 'KES 10,000',
    period: 'one-time',
    desc: 'Perfect for a clean, professional online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 round of revisions',
    ],
    featured: false,
  },
  {
    name: 'Business Website',
    price: 'KES 25,000',
    period: 'one-time',
    desc: 'For growing brands that need more power and polish.',
    features: [
      'Up to 15 pages',
      'CMS & blog',
      'Advanced SEO',
      'Animations & UI kit',
      'Payment integration',
      '3 rounds of revisions',
    ],
    featured: true,
  },
  {
    name: 'Custom System',
    price: 'Quote',
    period: 'tailored',
    desc: 'Web apps, ERPs and institution systems built to spec.',
    features: [
      'Bespoke architecture',
      'Auth & roles',
      'APIs & integrations',
      'Hosting & maintenance',
      'Dedicated support',
    ],
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Wanjiru',
    role: 'Founder, Lumière Store',
    rating: 5,
    quote:
      'Stack Crafts Studio delivered a store that loads instantly and doubled our conversions. The M-Pesa checkout just works.',
  },
  {
    name: 'David Omondi',
    role: 'Director, EduSphere',
    rating: 5,
    quote:
      'Our LMS went from idea to 12,000 students in months. Their institution system is robust and beautifully designed.',
  },
  {
    name: 'Grace Mwangi',
    role: 'CEO, Aurora Finance',
    rating: 5,
    quote:
      'The analytics dashboard they built is exactly what our team needed. Secure, fast and genuinely smart.',
  },
  {
    name: 'Kevin Mutua',
    role: 'Clinic Owner, Pulse',
    rating: 4,
    quote:
      'Booking automation saved us hours every week. Communication was clear and delivery was on time.',
  },
]

export const STATS = [
  { label: 'Projects Completed', value: 248, suffix: '+' },
  { label: 'Happy Clients', value: 160, suffix: '+' },
  { label: 'Support Availability', value: 24, suffix: '/7' },
  { label: 'Years Experience', value: 8, suffix: '' },
]

export const FAQ = [
  {
    q: 'How long does a typical website take?',
    a: 'A standard website takes 1–3 weeks, while custom web apps and institution systems range from 4–12 weeks depending on scope and integrations.',
  },
  {
    q: 'Do you build payment systems like M-Pesa?',
    a: 'Yes. We integrate M-Pesa (Daraja), card gateways like Stripe, and bank APIs with secure, reconciled transactions and real-time notifications.',
  },
  {
    q: 'Can you maintain and host my project?',
    a: 'Absolutely. Our Hosting & Maintenance plan includes managed cloud hosting, monitoring, backups and continuous updates.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We specialize in React, Next.js, Node.js, Tailwind CSS and modern cloud infrastructure — chosen for speed, security and scalability.',
  },
  {
    q: 'How do we get started?',
    a: 'Click “Get Started” or message us on WhatsApp. We’ll schedule a free discovery call, scope the project, and send a clear proposal.',
  },
]

export const SOCIALS = [
  { label: 'Twitter / X', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
]
