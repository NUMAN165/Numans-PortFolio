'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Layers,
  Database,
  Sparkles,
  Cpu,
  CheckCircle2,
  Copy,
  Download,
  GraduationCap,
  Briefcase,
  Calendar,
  Check,
  X,
  Eye,
  Camera,
  Bot
} from 'lucide-react'

// Official Clean SVG Icons for GitHub & LinkedIn
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

// Assets
const heroAvatar = '/numan-hero.jpg'
const aboutAvatar = '/numan-about.jpg'
const realPhotos = [
  { src: '/numan-real-1.jpg', label: 'Casual & Scenic' },
  { src: '/numan-real-2.jpg', label: 'Tech & Greenery' },
  { src: '/numan-real-3.jpg', label: 'Outdoor Lifestyle' },
]

const githubUrl = 'https://github.com/NUMAN165'
const linkedinUrl = 'https://www.linkedin.com/in/numan-contact-19900831b/'
const emailAddress = 'Contactnuman165@gmail.com'
const phoneNumber = '+91 9594757037'

// Animation Helper
function FadeIn({
  children,
  delay = 0,
  y = 30,
  x = 0,
  duration = 0.7,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  x?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Interactive Magnetic Effect
function Magnet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0,0,0)')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      const active = Math.abs(x) < r.width / 2 + 180 && Math.abs(y) < r.height / 2 + 180
      setTransform(active ? `translate3d(${x / 4}px,${y / 4}px,0)` : 'translate3d(0,0,0)')
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      style={{ transform, transition: 'transform .35s cubic-bezier(0.25, 0.1, 0.25, 1)', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

// Navigation Bar
function Navigation({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <nav className="main-nav">
      <div className="brand-badge">
        <span className="brand-dot" />
        <span>NUMAN SHAIKH</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <GithubIcon size={18} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon size={18} />
        </a>
        <button
          onClick={onOpenResume}
          className="ghost-button"
          title="View Resume"
        >
          <Eye size={14} /> Resume
        </button>
      </div>
    </nav>
  )
}

// Hero Section
function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section className="hero-section" id="hero">
      <Navigation onOpenResume={onOpenResume} />

      <div className="hero-subtitle-bar">
        <span className="hero-status-pill">
          <span className="brand-dot" /> Available for Opportunities
        </span>
        <span>• MERN Stack & Full Stack Developer • Mumbai, IN</span>
      </div>

      <FadeIn className="hero-title" delay={0.15} y={40}>
        <h1 className="hero-heading">HI, I&apos;M NUMAN</h1>
      </FadeIn>

      <FadeIn className="hero-portrait" delay={0.4} y={30}>
        <Magnet>
          <div className="hero-avatar-frame">
            <img src={heroAvatar} alt="3D Animated Avatar of Numan Shaikh" />
            <div className="hero-avatar-badge">
              <Code2 size={16} className="text-cyan-400" />
              <span>Full Stack Developer @ Acevin Solutions</span>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      <div className="hero-bottom">
        <div className="hero-desc">
          <FadeIn delay={0.35} y={20}>
            <p>Architecting scalable enterprise platforms, IoT telemetry & responsive Next.js web applications.</p>
            <div className="hero-tags">
              <span className="hero-tag">Next.js 16</span>
              <span className="hero-tag">React 19</span>
              <span className="hero-tag">Node.js</span>
              <span className="hero-tag">MongoDB</span>
              <span className="hero-tag">Azure DevOps</span>
            </div>
          </FadeIn>
        </div>

        <div className="hero-ctas">
          <FadeIn delay={0.5} y={20}>
            <a href="#projects" className="live-button">
              Explore Projects <ArrowUpRight size={16} />
            </a>
          </FadeIn>
          <FadeIn delay={0.55} y={20}>
            <a href="#contact" className="contact-button">
              Contact Me <ArrowUpRight size={16} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Tech Stack & Metrics Marquee
function Marquee() {
  const row1 = [
    'React.js 19',
    'Next.js 16',
    'Node.js & Express',
    'MongoDB & Mongoose',
    'TypeScript & ES6+',
    'Tailwind CSS v4',
    'Azure DevOps REST APIs',
    'RESTful APIs & JWT',
    'React Native',
    'IoT Real-time Sync',
    'Framer Motion',
  ]

  const row2 = [
    '1,000+ IoT Street Lights Automated',
    '~35% API Response Latency Drop',
    '~80% Reduced Manual Operations',
    'B.E. in CS (AI & ML) — 8.4 CGPA',
    'Granular RBAC Architecture',
    'QR Code Ticketing Engine',
    'Audit Trail & DevOps Integration',
  ]

  return (
    <section className="marquee-section">
      <div className="marquee-row">
        <motion.div
          className="marquee-track"
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        >
          {[...row1, ...row1, ...row1].map((text, i) => (
            <div className="marquee-pill highlight" key={i}>
              <Sparkles size={14} className="text-cyan-400" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="marquee-row">
        <motion.div
          className="marquee-track"
          animate={{ x: [-1400, 0] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
        >
          {[...row2, ...row2, ...row2].map((text, i) => (
            <div className="marquee-pill" key={i}>
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Animated Text Reveal
const aboutStory =
  "I am a passionate Full Stack & MERN Developer with a Bachelor of Engineering in Computer Science (Artificial Intelligence & Machine Learning). At Acevin Solutions, I build mission-critical enterprise systems: from automating 1,000+ smart street lights with live map telemetry to building Azure DevOps integrated test management platforms. I bridge high-throughput backends with immersive, high-speed user interfaces."

function AnimatedText() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.25'] })

  return (
    <p ref={ref} className="animated-text">
      {aboutStory.split('').map((char, i) => (
        <Character key={i} char={char} index={i} total={aboutStory.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = useTransform(progress, [index / total, Math.min(1, index / total + 0.12)], [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

// About Me Section with 3D Persona / Real World Photo Gallery Toggle
function About() {
  const [activeTab, setActiveTab] = useState<'3d' | 'real'>('3d')
  const [realPhotoIndex, setRealPhotoIndex] = useState(0)

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <FadeIn>
            <span className="text-cyan-400 text-sm tracking-widest uppercase font-semibold">Discovery</span>
            <h2 className="hero-heading">About Me</h2>
          </FadeIn>

          <AnimatedText />

          <FadeIn delay={0.2}>
            <div className="education-box">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <div className="education-info">
                <h4>B.E. in Computer Science — AI & ML</h4>
                <p>M.H. Saboo Siddik College of Engineering, Mumbai (2020 – 2024)</p>
                <span className="education-badge">CGPA: 8.4 / 10 • Distinction</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-3 flex-wrap">
              <a href="#experience" className="live-button">
                Work Experience <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="contact-button">
                Let&apos;s Connect <ArrowUpRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Dual Persona Showcase (3D Animated Avatar vs Real Photographs) */}
        <FadeIn delay={0.25} className="about-gallery-card">
          <div className="gallery-tabs">
            <button
              onClick={() => setActiveTab('3d')}
              className={`gallery-tab ${activeTab === '3d' ? 'active' : ''}`}
            >
              <Bot size={14} className="inline mr-1.5" /> 3D Digital Avatar
            </button>
            <button
              onClick={() => setActiveTab('real')}
              className={`gallery-tab ${activeTab === 'real' ? 'active' : ''}`}
            >
              <Camera size={14} className="inline mr-1.5" /> Real World Shots
            </button>
          </div>

          <div className="gallery-image-viewport">
            {activeTab === '3d' ? (
              <motion.img
                key="3d"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={aboutAvatar}
                alt="3D Animated Stylized Avatar of Numan in emerald overshirt"
              />
            ) : (
              <motion.img
                key={realPhotoIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={realPhotos[realPhotoIndex].src}
                alt={`Real photo of Numan Shaikh - ${realPhotos[realPhotoIndex].label}`}
              />
            )}
          </div>

          {activeTab === 'real' && (
            <div className="gallery-real-nav">
              {realPhotos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setRealPhotoIndex(idx)}
                  className={`gallery-dot ${realPhotoIndex === idx ? 'active' : ''}`}
                  title={realPhotos[idx].label}
                  aria-label={realPhotos[idx].label}
                />
              ))}
            </div>
          )}

          <div className="mt-3 flex justify-between items-center text-xs text-slate-400">
            <span>{activeTab === '3d' ? '3D Render • Pixar & Spline style' : realPhotos[realPhotoIndex].label}</span>
            <span>Mumbai, Maharashtra</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Professional Experience Timeline
const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Acevin Solutions',
    period: 'Sep 2025 – Present',
    project: 'Acevin Testing Tool (DevOps Platform)',
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Azure REST APIs'],
    highlights: [
      'Engineered a structured Test Case Management module integrated with project workflows, enabling multi-project execution tracking.',
      'Built a comprehensive Azure DevOps integration leveraging Azure REST APIs to replicate full ticket lifecycle management (create, edit, delete, assign, comment) directly in the portal.',
      'Developed a standalone Manual Task Management system with file attachments, comment threads, and assignment for non-Azure clients.',
      'Implemented an Audit Log module capturing granular activity trails per user for full enterprise accountability.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Acevin Solutions',
    period: 'Oct 2024 – Aug 2025',
    project: 'CMCS — Smart Street Light Automation Platform',
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'IoT Telemetry'],
    highlights: [
      'Built a scalable Smart Street Light Automation platform with dynamic intensity scheduling, 1,000+ asset tracking, and interactive map integration — reducing manual intervention by ~80% and zone onboarding time by ~60%.',
      'Engineered optimized MongoDB queries with lean projections, achieving a ~35% reduction in API response latency.',
      'Collaborated with hardware/firmware teams to integrate real-time sensor data sync protocols.',
      'Implemented granular RBAC across admin, operator, and field-technician roles, ensuring secure multi-tenant access.',
      'Developed responsive, mobile-first Next.js UI component library, cutting UI development time for new modules by ~40%.',
    ],
  },
]

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="text-cyan-400 text-sm tracking-widest uppercase font-semibold">Career History</span>
          <h2 className="hero-heading">Experience</h2>
        </div>
      </FadeIn>

      <div className="experience-timeline">
        {experienceData.map((item, index) => (
          <FadeIn key={index} delay={index * 0.15}>
            <article className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3 className="exp-role">{item.role}</h3>
                  <p className="exp-company">{item.company}</p>
                </div>
                <div className="exp-period">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="exp-project-name">
                <span>Platform: {item.project}</span>
              </div>

              <ul className="experience-bullets">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              <div className="exp-tech-tags">
                {item.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="exp-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// Technical Skills (Replaces generic services)
const skillCategories = [
  {
    num: '01',
    title: 'Frontend Architecture',
    desc: 'Engineering accessible, ultra-responsive, component-driven client applications with modern state management, high performance, and fluid micro-animations.',
    badges: ['React.js 19', 'Next.js 16', 'React Native', 'TypeScript', 'Tailwind CSS v4', 'HTML5 & CSS3', 'Framer Motion'],
  },
  {
    num: '02',
    title: 'Backend & RESTful Services',
    desc: 'Designing robust API contracts, asynchronous event processors, secure token authentication, role-based authorization, and real-time hardware telemetry pipelines.',
    badges: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Granular RBAC', 'Sensor Protocols', 'Middleware Architecture'],
  },
  {
    num: '03',
    title: 'Database & Data Optimization',
    desc: 'Structuring normalized and denormalized document schemas, writing lean projection queries, optimizing index performance, and building aggregation pipelines.',
    badges: ['MongoDB', 'Mongoose ODM', 'Lean Projections', 'Aggregation Pipelines', 'Query Optimization', 'Index Tuning'],
  },
  {
    num: '04',
    title: 'DevOps & Enterprise Integration',
    desc: 'Connecting enterprise ecosystems through bi-directional REST APIs, version-controlled CI/CD environments, and developer productivity tooling.',
    badges: ['Azure DevOps REST APIs', 'Git & GitHub', 'Postman', 'Vercel Deployment', 'Turbopack', 'Audit Logging'],
  },
  {
    num: '05',
    title: 'Computer Science & AI/ML Core',
    desc: 'Solid academic foundation in Artificial Intelligence, Machine Learning algorithms, Data Structures, and clean software engineering principles.',
    badges: ['AI & ML Foundations', 'Algorithms & Data Structures', 'CGPA 8.4 / 10', 'System Architecture', 'Clean Code'],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <FadeIn>
        <span className="block text-center text-purple-600 text-sm tracking-widest uppercase font-semibold mb-2">Technical Arsenal</span>
        <h2>Skills</h2>
      </FadeIn>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.num} delay={i * 0.1}>
            <article className="skill-category-card">
              <strong className="skill-num">{cat.num}</strong>
              <div className="skill-info">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className="skill-badges">
                  {cat.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="skill-badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// Featured Projects with Interactive Sticky Stacking Cards
const projectsData = [
  {
    num: '01',
    category: 'Enterprise IoT & Cloud',
    title: 'CMCS — Smart Street Light Automation',
    image: '/project-cmcs.jpg',
    desc: 'Full-stack platform designed to automate and monitor 1,000+ smart street lights with live map integration, dynamic intensity scheduling, and hardware telemetry synchronization.',
    features: [
      'Reduced manual field intervention by ~80%',
      'Optimized MongoDB queries with lean projections (-35% API latency)',
      'Granular RBAC for admin, operator, and field technicians',
      'Modular mobile-first Next.js UI architecture (-40% module dev time)',
    ],
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'IoT Telemetry'],
    linkText: 'Live Project',
    github: githubUrl,
  },
  {
    num: '02',
    category: 'Tourism & QR Ticketing',
    title: 'Heritage Pass — Indian Monument Platform',
    image: '/project-heritage.jpg',
    desc: 'End-to-end digital ticketing platform for Indian museums and iconic national monuments (Taj Mahal, Red Fort, etc.), covering the full visitor journey from discovery to instant QR pass generation.',
    features: [
      'Complete booking flow with real-time slot availability',
      'Automated digital QR pass delivery and fast verification scanner',
      'Admin control center for monument listings, pricing & quota management',
      'User dashboard with booking history & instant download pass',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    linkText: 'GitHub Repo',
    github: githubUrl,
  },
  {
    num: '03',
    category: 'Developer Platform & SaaS',
    title: 'TestOps Engine & Azure DevOps Suite',
    image: '/project-testops.jpg',
    desc: 'Comprehensive Test Case Management portal built for Acevin Solutions with direct bi-directional Azure DevOps REST API synchronization and user audit logging.',
    features: [
      'Replicated full ticket lifecycle directly from Azure DevOps',
      'Manual task management with comments and file attachments',
      'Detailed audit log module capturing granular create/update/delete activity',
      'Structured execution tracking across concurrent cross-functional projects',
    ],
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Azure APIs'],
    linkText: 'Enterprise Suite',
    github: githubUrl,
  },
]

function ProjectCard({ project, index }: { project: (typeof projectsData)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (2 - index) * 0.03])

  return (
    <div ref={ref} className="project-wrap">
      <motion.article className="project-card" style={{ scale, top: `${4.5 + index * 1.5}rem` }}>
        <div className="project-meta">
          <strong>{project.num}</strong>
          <div>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
          </div>
          <div className="project-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="live-button"
            >
              {project.linkText} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="project-content-grid">
          <div className="project-preview-wrap">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>

          <div className="project-details-pane">
            <p className="project-desc-text">{project.desc}</p>

            <ul className="project-feature-list">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx}>{feat}</li>
              ))}
            </ul>

            <div className="project-stack-pills">
              {project.stack.map((tech, tIdx) => (
                <span key={tIdx} className="project-stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <FadeIn>
        <span className="block text-center text-cyan-400 text-sm tracking-widest uppercase font-semibold mb-2">Portfolio</span>
        <h2 className="hero-heading">Featured Projects</h2>
      </FadeIn>

      <div className="projects-list">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

// Contact Section with Quick Copy & Email Compose
function Contact({ onOpenResume }: { onOpenResume: () => void }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${emailAddress}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`
    window.location.href = mailto
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <FadeIn className="contact-header">
          <span className="text-cyan-400 text-sm tracking-widest uppercase font-semibold">Get In Touch</span>
          <h2 className="hero-heading">Let&apos;s Build Together</h2>
          <p>
            Whether you are looking to hire a Full Stack / MERN Developer, automate IoT systems, or collaborate on a dynamic product, feel free to reach out.
          </p>
        </FadeIn>

        <div className="contact-cards-grid">
          <FadeIn delay={0.1} className="contact-card">
            <div className="contact-card-icon">
              <Mail size={22} />
            </div>
            <h4>Email</h4>
            <div className="card-value">{emailAddress}</div>
            <button
              onClick={() => copyToClipboard(emailAddress, 'email')}
              className="copy-badge"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </FadeIn>

          <FadeIn delay={0.2} className="contact-card">
            <div className="contact-card-icon">
              <Phone size={22} />
            </div>
            <h4>Phone / WhatsApp</h4>
            <div className="card-value">{phoneNumber}</div>
            <button
              onClick={() => copyToClipboard(phoneNumber, 'phone')}
              className="copy-badge"
            >
              {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedPhone ? 'Copied!' : 'Copy Phone'}</span>
            </button>
          </FadeIn>

          <FadeIn delay={0.3} className="contact-card">
            <div className="contact-card-icon">
              <LinkedinIcon size={22} />
            </div>
            <h4>LinkedIn</h4>
            <div className="card-value">Numan Shaikh</div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="copy-badge"
            >
              <ExternalLink size={12} />
              <span>Connect on LinkedIn</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4} className="contact-card">
            <div className="contact-card-icon">
              <GithubIcon size={22} />
            </div>
            <h4>GitHub</h4>
            <div className="card-value">@NUMAN165</div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="copy-badge"
            >
              <ExternalLink size={12} />
              <span>Explore Repos</span>
            </a>
          </FadeIn>
        </div>

        {/* Quick Message Form */}
        <FadeIn delay={0.25} className="quick-message-box">
          <h3>Send Direct Message</h3>
          <p>Drop your inquiry or project brief. This opens a direct email draft instantly.</p>

          <form onSubmit={handleSendMessage} className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. John Doe"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@company.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={3}
                placeholder="Hello Numan, I saw your work on the Smart Street Light platform and would love to discuss a project..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="form-group form-group-full flex gap-3 items-center flex-wrap pt-2">
              <button type="submit" className="contact-button">
                Send Email Now <ArrowUpRight size={16} />
              </button>
              <button
                type="button"
                onClick={onOpenResume}
                className="live-button"
              >
                <Download size={16} /> View & Download Resume
              </button>
            </div>
          </form>
        </FadeIn>

        {/* Footer */}
        <footer className="portfolio-footer">
          <div>
            <span>© {new Date().getFullYear()} NUMAN SHAIKH. Crafted with Next.js, React & Framer Motion.</span>
          </div>

          <div className="footer-socials">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <span>•</span>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${emailAddress}`} className="hover:text-white transition">
              Email
            </a>
            <span>•</span>
            <a href="#hero" className="back-to-top">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

// Resume Viewer Modal
function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>

          <div className="border-b border-slate-700/60 pb-6 mb-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white uppercase">NUMAN SHAIKH</h2>
                <p className="text-cyan-400 font-semibold tracking-wider text-sm uppercase mt-1">MERN Stack Developer</p>
                <p className="text-slate-400 text-xs mt-1">Mumbai, India | +91 9594757037 | Contactnuman165@gmail.com</p>
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${emailAddress}?subject=Interview Invitation for Numan Shaikh`}
                  className="contact-button text-xs py-2 px-4"
                >
                  Hire Numan
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
              <GraduationCap size={16} /> Education
            </h3>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex justify-between flex-wrap text-sm font-bold text-white">
                <span>B.E. in Computer Science — AI & ML</span>
                <span className="text-cyan-400">2020 – 2024</span>
              </div>
              <div className="flex justify-between flex-wrap text-xs text-slate-300 mt-1">
                <span>M.H. Saboo Siddik College of Engineering, Mumbai</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold">CGPA: 8.4 / 10</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
              <Cpu size={16} /> Technical Skills
            </h3>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs space-y-2">
              <p><strong className="text-white">Languages:</strong> JavaScript (ES6+), TypeScript</p>
              <p><strong className="text-white">Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS, React Native</p>
              <p><strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication, MongoDB</p>
              <p><strong className="text-white">Database:</strong> MongoDB, Mongoose ODM</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
              <Briefcase size={16} /> Professional Experience
            </h3>

            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
                <div className="flex justify-between flex-wrap font-bold text-white text-sm">
                  <span>Full Stack Developer — Acevin Solutions</span>
                  <span className="text-cyan-400">Sep 2025 – Present</span>
                </div>
                <p className="text-purple-300 font-mono mt-0.5 mb-2">Acevin Testing Tool | Next.js · Node.js · Express.js · MongoDB</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-300 leading-relaxed">
                  <li>Engineered a Test Case Management module integrated with project workflows.</li>
                  <li>Built comprehensive Azure DevOps integration leveraging Azure REST APIs to replicate ticket lifecycle directly in the portal.</li>
                  <li>Developed Manual Task Management system for clients without third-party platforms.</li>
                  <li>Implemented Audit Log module capturing granular activity trails per user for full accountability.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
                <div className="flex justify-between flex-wrap font-bold text-white text-sm">
                  <span>Software Developer — Acevin Solutions</span>
                  <span className="text-cyan-400">Oct 2024 – Aug 2025</span>
                </div>
                <p className="text-purple-300 font-mono mt-0.5 mb-2">CMCS | Next.js · Node.js · Express.js · MongoDB</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-300 leading-relaxed">
                  <li>Built scalable full-stack Smart Street Light platform with dynamic scheduling, 1,000+ assets, and interactive maps — reducing manual intervention by ~80% and zone onboarding by ~60%.</li>
                  <li>Engineered optimized MongoDB queries with lean projections, achieving ~35% API latency reduction.</li>
                  <li>Implemented granular RBAC with permission-layered authorization across admin, operator, and field roles.</li>
                  <li>Developed responsive Next.js component system cutting UI development time by ~40%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
              <Layers size={16} /> Featured Projects
            </h3>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
              <div className="flex justify-between flex-wrap font-bold text-white text-sm">
                <span>Heritage Pass</span>
                <span className="text-cyan-400">Node.js · Express.js · MongoDB · JWT · React</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 mt-2 leading-relaxed">
                <li>End-to-end ticket booking platform for Indian museums and monuments with QR code e-ticket delivery.</li>
                <li>Secure authentication, real-time availability, integrated payment processing, automated confirmation.</li>
                <li>Admin panel for managing monument listings, availability, and pricing.</li>
                <li>User dashboard with booking history and digital QR pass system for monument entry.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

// Main Portfolio Page Component
export default function Portfolio() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <main className="portfolio">
      <div className="ambient-glow ambient-1" />
      <div className="ambient-glow ambient-2" />
      <div className="ambient-glow ambient-3" />
      <div className="ambient-glow ambient-4" />

      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact onOpenResume={() => setIsResumeOpen(true)} />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  )
}
