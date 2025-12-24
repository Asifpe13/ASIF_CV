import { useEffect, useState, useRef, forwardRef } from 'react'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Code,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  Phone,
  Network,
  Server,
  Shield,
  Star,
  Users,
  Monitor,
  Award,
} from 'lucide-react'
import './index.css'

const data = {
  timeline: [
    {
      period: '2017',
      title: 'High School Graduation',
      titleHe: 'סיום תיכון',
      items: [
        'Majors: 5 units Math, Physics, English; 10 units Electronics',
      ],
      itemsHe: [
        'מגמות: 5 יח"ל מתמטיקה, פיזיקה, אנגלית; 10 יח"ל אלקטרוניקה',
      ],
    },
    {
      period: '2017–2020',
      title: 'IDF – Signal Battalion 481 (Gaza Division)',
      titleHe: 'צה״ל – גדוד תקשוב 481 (אוגדת עזה)',
      items: [
        'Started as PC tech → Helpdesk → IT technician (endpoints, Windows, basic networks)',
        'Promoted to NOC Shift Supervisor: monitoring, infra incidents, shift management',
        'Worked with SCCM, monitoring/command systems, cameras, endpoint & comms gear',
      ],
      itemsHe: [
        'התחלה כטכנאי PC → Helpdesk → טכנאי IT (עמדות קצה, Windows, רשת בסיסית)',
        'קידום ל-NOC Shift Supervisor: ניטור, תקלות רוחב, ניהול משמרות',
        'עבודה עם SCCM, מערכות שליטה ובקרה, מצלמות, עמדות קצה וציוד תקשורת',
      ],
    },
    {
      period: '2022',
      title: "IT Support – Be'er Sheva Municipality",
      titleHe: 'תומך IT – עיריית באר שבע',
      items: [
        'Support for hundreds of users, hardware/software troubleshooting',
        'SAP, Office/Outlook, remote & on-site, deployments/configs',
        'High-pressure environment, real-time service',
      ],
      itemsHe: [
        'תמיכה למאות משתמשים, טיפול בתקלות חומרה/תוכנה',
        'SAP, Office/Outlook, תמיכה מרחוק ובשטח, התקנות ותצורות',
        'סביבה לחוצה, שירות בזמן אמת',
      ],
    },
    {
      period: '2021–2026',
      title: 'B.Sc. Software Engineering (Year 4)',
      titleHe: 'B.Sc הנדסת תוכנה (שנה ד׳)',
      items: [
        'Academics: C, C++, Python, Java, C#, JS/TS, HTML/CSS, SQL, MongoDB',
        'Core courses: Data Structures, Algorithms, IS, Computer Networks, Systems',
        'Compilation project: Lex, Yacc, AST',
      ],
      itemsHe: [
        'לימודים: C, C++, Python, Java, C#, JS/TS, HTML/CSS, SQL, MongoDB',
        'קורסי ליבה: מבני נתונים, אלגוריתמים, מערכות מידע, תקשורת מחשבים, מערכות',
        'פרויקט קומפילציה: Lex, Yacc, AST',
      ],
    },
    {
      period: '2023–Present',
      title: 'Active Reserves – Gaza Division IT Dept',
      titleHe: 'מילואים פעילים – מחלקת מחשוב אוגדת עזה',
      items: [
        'Acting head of IT dept (~1 year), led 4 soldiers; trained to full proficiency',
        'Rebuilt full IT infra after base relocation: ~120 endpoints, comms gear, infra',
        'Senior assistant after handover; ongoing ops in high-pressure environment',
      ],
      itemsHe: [
        'ממלא מקום ראש מחלקת מחשוב (~שנה), הובלת 4 חיילים; הכשרה מלאה',
        'הקמת תשתית מחשוב מלאה מחדש לאחר מעבר בסיס: ~120 עמדות, ציוד תקשורת, תשתיות',
        'עוזר בכיר לאחר חפיפה; תפעול רציף בסביבה לחוצה',
      ],
    },
  ],
  experience: [
    {
      role: 'Acting IT Team Lead & Computer Technician (Reserves)',
      roleHe: 'ממלא מקום ראש צוות IT וטכנאי מחשבים (מילואים)',
      company: 'IDF - Gaza Division, Communication Division',
      period: '2023 – Present',
      description:
        'Led a team of 4, rebuilt critical IT for ~120 endpoints in operational urgency, trained personnel, and delivered hardware/network escalations.',
      descriptionHe:
        'ניהול צוות של 4, הקמה מחדש של IT קריטי ~120 עמדות תחת לחץ מבצעי, הדרכת צוותים וטיפול תקלות חומרה/רשת.',
      tags: ['Leadership', 'Infrastructure Setup', 'Crisis Management'],
    },
    {
      role: 'IT Support Specialist',
      roleHe: 'תומך IT',
      company: "Be'er Sheva Municipality",
      period: '2022',
      description: 'Support for municipal staff across workstations, mobile, LAN. Work with SAP & Office.',
      descriptionHe: 'תמיכה בעובדי העירייה: עמדות קצה, מובייל, LAN. עבודה עם SAP ו-Office.',
      tags: ['Technical Support', 'SAP', 'Troubleshooting'],
    },
    {
      role: 'IT Systems Technician & NOC Shift Supervisor',
      roleHe: 'טכנאי מערכות וניהול משמרת NOC',
      company: 'IDF - Signal Battalion 481',
      period: '2017 – 2020',
      description: 'Managed Windows networks for 1,000+ users, 24/7 NOC supervision, SCCM, AD, network security.',
      descriptionHe: 'ניהול רשתות Windows ל-1000+ משתמשים, ניהול משמרות NOC, SCCM, AD, אבטחת רשת.',
      tags: ['NOC', 'SCCM', 'Active Directory', 'Network Security'],
    },
  ],
  skills: {
    'Professional (hands-on)': [
      'Enterprise IT support (municipality/IDF)',
      'Hardware/software troubleshooting',
      'Windows (server/client)',
      'VDI / Remote Desktop',
      'SCCM, SAP, monitoring/C2, cameras',
      'Practical networking: switches, routers, LAN, VLAN, DHCP, TCP/IP',
      'Active Directory (users/groups management)',
      'Office 2019 + 365, Exchange, Outlook',
      'Switches, telephony, printers',
      'Team lead (IT reserves)',
      'Endpoint rollout & cabling',
      'NOC operations & incident handling',
    ],
    'Basic familiarity': [
      'Linux (Ubuntu)',
      'Oracle VirtualBox',
      'VMware (basic virtualization)',
      'Fiber infrastructure & servers',
      'Docker (installed, basic use, conceptual)',
      'Jenkins (basic CI/CD with guidance)',
    ],
    'Academic only': [
      'C, C++, Python, Java, C#',
      'HTML, CSS, JS, TS',
      'SQL, MongoDB',
      'Compiler project: Lex, Yacc, AST',
      'Git/GitHub (academic/projects)',
      'DevOps / CI/CD (theoretical)',
    ],
  },
  skillsHe: {
    'כישורים מקצועיים (שטח)': [
      'תמיכה טכנית לארגונים גדולים (עירייה/צה״ל)',
      'פתרון תקלות חומרה/תוכנה',
      'Windows (שרת/לקוח)',
      'VDI / Remote Desktop',
      'SCCM, SAP, מערכות שליטה ובקרה, מצלמות',
      'הבנה מעשית ברשתות: סוויצ׳ים, נתבים, LAN, VLAN, DHCP, TCP/IP',
      'Active Directory (ניהול משתמשים וקבוצות)',
      'Office 2019 + 365, Exchange, Outlook',
      'מתגים, טלפוניה, מדפסות',
      'ניהול צוות (ראש צוות מחשוב במילואים)',
      'הקמת עמדות מחשב ותשתיות תקשורת',
      'תפעול NOC ותקלות רוחב',
    ],
    'כישורים בסיסיים': [
      'Linux (Ubuntu)',
      'Oracle VirtualBox',
      'VMware (היכרות בסיסית)',
      'תשתיות סיבים ושרתים',
      'Docker (מותקן, שימוש בסיסי/קונספטואלי)',
      'Jenkins (התנסות בסיסית ב-CI/CD)',
    ],
    'כישורים אקדמיים בלבד': [
      'C, C++, Python, Java, C#',
      'HTML, CSS, JS, TS',
      'SQL, MongoDB',
      'פרויקט קומפילציה: Lex, Yacc, AST',
      'Git/GitHub (אקדמי/אישי)',
      'DevOps / CI/CD (תיאורטי)',
    ],
  },
  certs: [
    {
      title: 'B.Sc. in Software Engineering',
      titleHe: 'B.Sc. בהנדסת תוכנה',
      issuer: 'Sami Shamoon College of Engineering',
      issuerHe: 'סמי שמעון',
      year: '2026 (Expected)',
      details: 'Current Avg: ~87',
      detailsHe: 'ממוצע נוכחי ~87',
    },
    {
      title: 'Advanced Communication Systems Technician (09)',
      titleHe: 'טכנאי מערכות תקשורת מתקדם (09)',
      issuer: 'IDF - C4I Corps',
      issuerHe: 'צה״ל - חיל התקשוב',
      year: '2017',
      details: 'Comprehensive training in military communication systems and RF.',
      detailsHe: 'הכשרה מקיפה במערכות תקשוב ו-RF צבאיות.',
    },
    {
      title: 'Outstanding Senior Commander Award',
      titleHe: 'הצטיינות מפקד בכיר',
      issuer: 'Brigadier General (Tat-Aluf)',
      issuerHe: 'תת-אלוף',
      year: '2020',
      details: 'Awarded for excellence in service and exceptional performance.',
      detailsHe: 'הוקרה על הצטיינות בביצועים ובשירות.',
    },
  ],
  transcript: [
    {
      semester: 'Year 3 - Semester B (2025)',
      semesterHe: 'שנה ג׳ - סמסטר ב׳ (2025)',
      courses: [
        { name: 'Data Security', nameHe: 'אבטחת מידע', grade: 100, credits: 3.5 },
        { name: 'Computer Networks', nameHe: 'תקשורת מחשבים', grade: 100, credits: 3.5 },
        { name: 'Operating Systems', nameHe: 'מערכות הפעלה', grade: 96, credits: 4.5 },
        { name: 'Intro to Compilation', nameHe: 'מבוא לקומפילציה', grade: 93, credits: 5.0 },
        { name: 'Software Project Management', nameHe: 'ניהול פרויקטי תוכנה', grade: 90, credits: 3.5 },
      ],
    },
    {
      semester: 'Year 3 - Semester A (2025)',
      semesterHe: 'שנה ג׳ - סמסטר א׳ (2025)',
      courses: [
        { name: 'Intro to Prob & Statistics', nameHe: 'מבוא להסתברות וסטטיסטיקה', grade: 99, credits: 5.0 },
        { name: 'Databases', nameHe: 'מסדי נתונים', grade: 87, credits: 6.0 },
        { name: 'Intro to Computer Networks', nameHe: 'מבוא לתקשורת מחשבים', grade: 86, credits: 4.5 },
        { name: 'Computability & Complexity', nameHe: 'חישוביות וסיבוכיות', grade: 86, credits: 3.5 },
        { name: 'Numerical Analysis', nameHe: 'אנליזה נומרית', grade: 86, credits: 3.5 },
      ],
    },
    {
      semester: 'Year 2 - Semester B (2024)',
      semesterHe: 'שנה ב׳ - סמסטר ב׳ (2024)',
      courses: [
        { name: 'Software Testing & QA', nameHe: 'בדיקות תוכנה ואיכות', grade: 93, credits: 4.0 },
        { name: 'Advanced Object Oriented Programming', nameHe: 'תכנות מונחה עצמים מתקדם', grade: 89, credits: 4.0 },
        { name: 'Algorithms I', nameHe: 'אלגוריתמים א׳', grade: 87, credits: 4.0 },
      ],
    },
    {
      semester: 'Year 2 - Semester A (2023)',
      semesterHe: 'שנה ב׳ - סמסטר א׳ (2023)',
      courses: [
        { name: 'Intro to Software Engineering', nameHe: 'מבוא להנדסת תוכנה', grade: 93, credits: 4.0 },
        { name: 'Automata & Formal Languages', nameHe: 'אוטומטים ושפות פורמליות', grade: 86, credits: 4.0 },
        { name: 'Data Structures', nameHe: 'מבני נתונים', grade: 83, credits: 4.0 },
      ],
    },
    {
      semester: 'Year 1 - Semester B (2022)',
      semesterHe: 'שנה א׳ - סמסטר ב׳ (2022)',
      courses: [
        { name: 'Computer Architecture II', nameHe: 'ארכיטקטורת מחשבים ב׳', grade: 84, credits: 4.0 },
        { name: 'Physics for SE', nameHe: 'פיזיקה להנדסת תוכנה', grade: 82, credits: 5.0 },
        { name: 'Calculus II', nameHe: 'חשבון דיפרנציאלי ואינטגרלי ב׳', grade: 81, credits: 5.0 },
        { name: 'Logic & Discrete Math II', nameHe: 'לוגיקה ומתמטיקה בדידה ב׳', grade: 77, credits: 4.0 },
        { name: 'Object Oriented Programming', nameHe: 'תכנות מונחה עצמים', grade: 68, credits: 4.0 },
      ],
    },
    {
      semester: 'Year 1 - Semester A (2022)',
      semesterHe: 'שנה א׳ - סמסטר א׳ (2022)',
      courses: [
        { name: 'Intro to Computer Science', nameHe: 'מבוא למדעי המחשב', grade: 95, credits: 4.5 },
        { name: 'Logic & Discrete Math I', nameHe: 'לוגיקה ומתמטיקה בדידה א׳', grade: 95, credits: 4.0 },
        { name: 'Computer Architecture I', nameHe: 'ארכיטקטורת מחשבים א׳', grade: 90, credits: 4.0 },
        { name: 'Calculus I', nameHe: 'חשבון דיפרנציאלי ואינטגרלי א׳', grade: 89, credits: 5.0 },
        { name: 'Linear Algebra', nameHe: 'אלגברה ליניארית', grade: 75, credits: 5.0 },
      ],
    },
  ],
  metrics: [
    { icon: Users, value: '1,000+', label: 'Users Supported', labelHe: 'משתמשים נתמכים' },
    { icon: Monitor, value: '600+', label: 'Endpoints Deployed', labelHe: 'עמדות שהוקמו' },
    { icon: Server, value: '24/7', label: 'NOC Operations', labelHe: 'תפעול NOC' },
    { icon: Award, value: '7+', label: 'Years Experience', labelHe: 'שנות ניסיון' },
  ],
}

const ui = {
  en: {
    dir: 'ltr',
    name: 'Asif Perets',
    title: 'CV - ASIF PERETS',
    about: {
      intro:
        'Software Engineering student with deep, hands-on IT practice across infrastructure, systems, and team leadership — delivering calmly in mission-critical environments.',
      analytical:
        'I tackle problems with precise analytical and mathematical thinking, breaking complex challenges into clear, actionable steps to ship reliable systems fast.',
      personal: 'Off-shift I recharge with football, music, and standout series — keeping balance and creativity sharp.',
    },
    heroTags: ['IT Leadership', 'System Hardening', 'Network Ops'],
    ctaPrimary: 'Download CV',
    ctaSecondary: 'Contact me',
    sections: {
      metrics: 'Key Metrics',
      experience: 'Experience',
      timeline: 'Timeline',
      skills: 'Skills Matrix',
      education: 'Education, Certifications & Awards',
      transcript: 'Academic Transcript',
      contact: 'Contact',
    },
    transcriptHint: 'Core highlights: Security, Networks, Operating Systems',
    coreCategories: {
      systems: 'Systems & Security',
      development: 'Software Development',
      analytics: 'Data & Analytics',
    },
    creditsLabel: 'credits',
    contactFields: [
      {
        label: 'Email',
        value: 'asif13perets13@gmail.com',
        icon: Mail,
        href: 'mailto:asif13perets13@gmail.com?subject=Contact%20from%20CV&body=Hi%20Asif,%20I%27d%20like%20to%20connect%20regarding...',
      },
      { label: 'Phone', value: '050-2972020', icon: Phone, href: 'tel:0502972020' },
      { label: 'LinkedIn', value: 'linkedin.com/in/asif-perets-285520366', icon: ExternalLink, href: 'https://linkedin.com/in/asif-perets-285520366' },
    ],
    langLabel: 'EN',
  },
  he: {
    dir: 'rtl',
    name: 'אסיף פרץ',
    title: 'קורות חיים - אסיף פרץ',
    about: {
      intro:
        'סטודנט להנדסת תוכנה עם ניסיון שטח עמוק ב-IT, ניהול מערכות והובלת צוותים — עם ביצועים מוכחים גם תחת לחץ.',
      analytical:
        'אני מפרק בעיה מורכבת לצעדים ברורים בעזרת חשיבה אנליטית ומתמטית, כדי לספק מערכות אמינות ומהירות.',
      personal: 'מחוץ למסך אני נטען עם כדורגל, מוזיקה וסדרות טובות — שומר על איזון ויצירתיות.',
    },
    heroTags: ['הובלת IT', 'הקשחת מערכות', 'תפעול רשת'],
    ctaPrimary: 'הורדת קו״ח',
    ctaSecondary: 'צור קשר',
    sections: {
      metrics: 'מדדים מרכזיים',
      experience: 'ניסיון',
      timeline: 'ציר זמן',
      skills: 'כישורים',
      education: 'השכלה, הסמכות ופרסים',
      transcript: 'גיליון ציונים',
      contact: 'יצירת קשר',
    },
    transcriptHint: 'קורסי ליבה: אבטחה, רשתות, מערכות הפעלה',
    coreCategories: {
      systems: 'מערכות ואבטחה',
      development: 'פיתוח תוכנה',
      analytics: 'נתונים ואנליטיקה',
    },
    creditsLabel: 'נק״ז',
    contactFields: [
      {
        label: 'אימייל',
        value: 'asif13perets13@gmail.com',
        icon: Mail,
        href: 'mailto:asif13perets13@gmail.com?subject=יצירת%20קשר%20מהאתר&body=היי%20אסיף,%20אשמח%20ליצור%20קשר%20לגבי...',
      },
      { label: 'טלפון', value: '050-2972020', icon: Phone, href: 'tel:0502972020' },
      { label: 'LinkedIn', value: 'linkedin.com/in/asif-perets-285520366', icon: ExternalLink, href: 'https://linkedin.com/in/asif-perets-285520366' },
    ],
    langLabel: 'עב',
  },
}

const Section = forwardRef(({ title, icon: Icon, children, id }, ref) => (
  <section
    id={id}
    ref={ref}
    className="scroll-mt-20 rounded-3xl border border-slate-200/80 bg-panel p-6 shadow-sm transition-all duration-700 snap-start scroll-snap-align-start opacity-0 translate-y-4 hover:shadow-md hover:border-accent/20"
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-accent2/10 text-accent">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h2 className="font-mono text-xl font-semibold text-text">{title}</h2>
    </div>
    {children}
  </section>
))
Section.displayName = 'Section'

const Tag = ({ label }) => (
  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-textLight">{label}</span>
)

const Card = ({ children }) => (
  <div className="rounded-2xl border border-slate-200 bg-panel p-4 shadow-sm">{children}</div>
)

const ProgressBar = ({ level }) => {
  const levels = { Professional: 100, Basic: 60, Academic: 40 }
  const width = levels[level] || 50
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-all duration-1000"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

const MetricCard = ({ icon: Icon, value, label }) => (
  <div className="rounded-2xl border border-slate-200 bg-panel p-6 text-center shadow-sm">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-accent2/10 text-accent">
      <Icon size={24} />
    </div>
    <p className="font-mono text-3xl font-bold text-text">{value}</p>
    <p className="mt-1 text-sm text-textLight">{label}</p>
  </div>
)

function App() {
  const [lang, setLang] = useState('en')
  const [openSemester, setOpenSemester] = useState(0)
  const contactRef = useRef(null)

  useEffect(() => {
    document.documentElement.dir = ui[lang].dir
    document.documentElement.lang = lang
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [lang])

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            entry.target.classList.remove('opacity-0', 'translate-y-4')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[class*="snap-start"]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [lang])

  const t = ui[lang]
  const skills = lang === 'en' ? data.skills : data.skillsHe
  const skillLevels = {
    'Professional (hands-on)': 'Professional',
    'כישורים מקצועיים (שטח)': 'Professional',
    'Basic familiarity': 'Basic',
    'כישורים בסיסיים': 'Basic',
    'Academic only': 'Academic',
    'כישורים אקדמיים בלבד': 'Academic',
  }

  const [viewMode, setViewMode] = useState('gradesCore') // gradesCore | gradesFull
  
  // Top courses by category
  const topCourses = {
    systems: [
      { name: 'Data Security', nameHe: 'אבטחת מידע', grade: 100, credits: 3.5 },
      { name: 'Computer Networks', nameHe: 'תקשורת מחשבים', grade: 100, credits: 3.5 },
      { name: 'Operating Systems', nameHe: 'מערכות הפעלה', grade: 96, credits: 4.5 },
    ],
    development: [
      { name: 'Software Testing & QA', nameHe: 'בדיקות תוכנה ואיכות', grade: 93, credits: 4.0 },
      { name: 'Intro to Software Engineering', nameHe: 'מבוא להנדסת תוכנה', grade: 93, credits: 4.0 },
      { name: 'Advanced Object Oriented Programming', nameHe: 'תכנות מונחה עצמים מתקדם', grade: 89, credits: 4.0 },
    ],
    analytics: [
      { name: 'Intro to Prob & Statistics', nameHe: 'מבוא להסתברות וסטטיסטיקה', grade: 99, credits: 5.0 },
      { name: 'Databases', nameHe: 'מסדי נתונים', grade: 87, credits: 6.0 },
      { name: 'Algorithms I', nameHe: 'אלגוריתמים א׳', grade: 87, credits: 4.0 },
    ],
  }

  const handleEmailClick = (item) => {
    if (!item) return
    const mailto = item.href?.startsWith('mailto')
      ? item.href
      : `mailto:${item.value}?subject=Hello%20Asif&body=Hi%20Asif,%20I%27d%20like%20to%20connect...`
    window.location.href = mailto
  }

  return (
    <div className="bg-surface min-h-screen text-text">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-panel/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white font-mono font-black">
              AP
            </div>
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.08em] text-accent">{t.name}</p>
              <p className="text-xs text-textLight">{lang === 'en' ? 'IT Systems · DevOps · Cloud' : 'מערכות IT · DevOps · ענן'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-text hover:border-accent hover:text-accent transition bg-panel"
            >
              <Languages size={16} />
              {lang === 'en' ? 'עב' : 'EN'}
            </button>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="Asif_Perets_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white shadow-sm hover:shadow-md transition"
            >
              <Download size={16} />
              {t.ctaPrimary}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 snap-y snap-proximity">
        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-panel p-8 shadow-sm lg:grid-cols-2 snap-start scroll-snap-align-start animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-mono text-3xl font-semibold text-text sm:text-4xl">{t.title}</h1>
            <div className="space-y-3 text-textLight">
              <p>{t.about.intro}</p>
              <p>{t.about.analytical}</p>
              <p>{t.about.personal}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download="Asif_Perets_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white shadow-sm hover:shadow-md transition"
              >
                <Download size={16} />
                {t.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 font-semibold text-text hover:border-accent hover:text-accent transition bg-panel"
              >
                {t.ctaSecondary} <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-textLight">
              {t.heroTags.map((chip) => (
                <Tag key={chip} label={chip} />
              ))}
              {['Football', 'Music', 'Series'].map((chip) => (
                <Tag key={chip} label={lang === 'en' ? chip : chip === 'Football' ? 'כדורגל' : chip === 'Music' ? 'מוזיקה' : 'טלוויזיה'} />
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {[
              { icon: Server, title: lang === 'en' ? 'Systems' : 'מערכות', body: 'Windows / Linux · AD · SCCM · VMware · TCP/IP' },
              { icon: Shield, title: lang === 'en' ? 'Security-forward' : 'חשיבה אבטחתית', body: 'Data Security 100 · Networks 100 · OS 96' },
              { icon: Code, title: 'Automation', body: 'Git/GitHub · Python/Bash scripting' },
            ].map((item) => (
              <Card key={item.title}>
                <div className="flex gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2 text-accent">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="text-sm text-textLight">{item.body}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Section title={t.sections.metrics} icon={Star}>
          <div className="grid gap-4 md:grid-cols-4">
            {data.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                icon={metric.icon}
                value={metric.value}
                label={lang === 'en' ? metric.label : metric.labelHe}
              />
            ))}
          </div>
        </Section>

        <Section title={t.sections.experience} icon={Server}>
          <div className="grid gap-4">
            {data.experience.map((exp) => (
              <Card key={exp.role}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-text">{lang === 'en' ? exp.role : exp.roleHe}</p>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <span className="text-xs text-textLight">{exp.period}</span>
                </div>
                <p className="mt-2 text-sm text-textLight">{lang === 'en' ? exp.description : exp.descriptionHe}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title={t.sections.timeline} icon={Calendar}>
          <div className="space-y-4">
            {data.timeline.map((item) => (
              <Card key={item.period}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-sm text-accent">{item.period}</p>
                  <div className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                    {lang === 'en' ? 'Milestones' : 'אבני דרך'}
                  </div>
                </div>
                <p className="mt-1 font-semibold text-text">{lang === 'en' ? item.title : item.titleHe}</p>
                <ul className="mt-2 space-y-1 text-sm text-textLight">
                  {(lang === 'en' ? item.items : item.itemsHe).map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 text-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section title={t.sections.skills} icon={Code}>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => {
              const level = skillLevels[category] || 'Basic'
              return (
                <Card key={category}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-semibold text-text">{category}</p>
                    <span className="text-xs text-accent">{level}</span>
                  </div>
                  <ProgressBar level={level} />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Tag key={skill} label={skill} />
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section title={t.sections.education} icon={GraduationCap}>
          <div className="grid gap-3 md:grid-cols-2">
            {data.certs.map((item) => (
              <Card key={item.title}>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-text">{lang === 'en' ? item.title : item.titleHe}</p>
                  <span className="text-xs text-textLight">{item.year}</span>
                </div>
                <p className="text-sm text-accent">{lang === 'en' ? item.issuer : item.issuerHe}</p>
                <p className="mt-2 text-sm text-textLight">{lang === 'en' ? item.details : item.detailsHe}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section title={t.sections.transcript} icon={BookOpen}>
          <div className="mb-3 flex flex-wrap gap-2">
            <button
              onClick={() => setViewMode('gradesCore')}
              className={`rounded-lg px-3 py-2 text-sm border transition ${viewMode === 'gradesCore' ? 'border-accent text-accent bg-accent/10' : 'border-slate-200 text-textLight hover:border-accent/50 bg-panel'}`}
            >
              {lang === 'en' ? 'Top Grades' : 'ציונים גבוהים'}
            </button>
            <button
              onClick={() => setViewMode('gradesFull')}
              className={`rounded-lg px-3 py-2 text-sm border transition ${viewMode === 'gradesFull' ? 'border-accent text-accent bg-accent/10' : 'border-slate-200 text-textLight hover:border-accent/50 bg-panel'}`}
            >
              {lang === 'en' ? 'Full transcript' : 'גליון מלא'}
            </button>
          </div>

          {viewMode === 'gradesCore' && (
            <div className="grid gap-6 md:grid-cols-3">
              {Object.entries(topCourses).map(([category, courses]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-mono text-sm font-semibold text-accent mb-3">
                    {t.coreCategories[category]}
                  </h3>
                  {courses.map((c) => (
                    <Card key={c.name}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                              {c.credits} {t.creditsLabel}
                            </span>
                            <p className="text-sm font-semibold text-text">
                              {lang === 'en' ? c.name : c.nameHe}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-lg font-bold text-accent">{c.grade}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          )}

          {viewMode === 'gradesFull' && (
            <div className="space-y-3">
              {data.transcript.map((sem, idx) => {
                const isOpen = openSemester === idx
                return (
                  <div key={sem.semester} className="overflow-hidden rounded-2xl border border-slate-200 bg-panel">
                    <button
                      onClick={() => setOpenSemester(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-text"
                    >
                      <div>
                        <p className="font-semibold">{lang === 'en' ? sem.semester : sem.semesterHe}</p>
                        <p className="text-xs text-textLight">{t.transcriptHint}</p>
                      </div>
                      <ChevronDown
                        className={`transition ${isOpen ? 'rotate-180 text-accent' : 'text-textLight'}`}
                        size={18}
                      />
                    </button>
                    <div className={`transition-all ${isOpen ? 'max-h-[520px]' : 'max-h-0'} overflow-hidden`}>
                      <div className="divide-y divide-slate-200 border-t border-slate-200">
                        {sem.courses.map((c) => (
                          <div key={c.name} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="rounded-full bg-accent/10 px-2 py-1 text-[11px] font-semibold text-accent">
                                {c.credits} {t.creditsLabel}
                              </span>
                              <p className="text-text">{lang === 'en' ? c.name : (c.nameHe || c.name)}</p>
                            </div>
                            <span className="font-semibold text-accent">{c.grade}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Section>

        <Section title={t.sections.contact} icon={Network} id="contact" ref={contactRef}>
          <div className="grid gap-3 md:grid-cols-3">
            {t.contactFields.map((item) => (
              <a
                key={item.label}
                href={item.href || (item.value.startsWith('http') ? `https://${item.value}` : `mailto:${item.value}`)}
                target={item.href?.startsWith('http') || item.value.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') || item.value.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={item.href?.startsWith('mailto') || item.value.includes('@') ? (e) => { e.preventDefault(); handleEmailClick(item) } : undefined}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-panel p-4 transition hover:border-accent/60 hover:shadow-md hover:-translate-y-0.5"
                aria-label={item.label}
              >
                <div className="rounded-lg bg-accent/10 p-2 text-accent">
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-textLight">{item.label}</p>
                  <p className="font-semibold text-text">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <footer className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-panel px-4 py-3 text-xs text-textLight">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-accent" />
            <span>{lang === 'en' ? 'Built for DevOps/Cloud/System roles.' : 'נבנה עבור תפקידי DevOps/Cloud/System.'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-accent" />
            <span>Vite + React + Tailwind</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
