/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'NOHO Markkët',
  tagline: '.Websites for North Hollywood & San Fernando Valley businesses.',
  description:
    'A fast, mobile-first small-business website template built with Astro 7 and Tailwind v4. Fully customisable for any trade or service business.',
  url: 'https://noho.markket.place',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  // license: 'Lic# 123456',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'noho@markket.place',
  phoneForTel: '',
  phoneFormatted: '',
  address: {
    lineOne: '12456 Oxnard St',
    lineTwo: '',
    city: 'Valley Glen',
    state: 'CA',
    zip: '91606',
    country: 'US',
    mapLink: 'https://share.google/zH4TZiVq4ntDuDdKz',
  },
  hours: [
    { days: 'Monday - Thursday', time: '10:00 AM - 9:00 PM' },
    { days: 'Saturday', time: 'Closed' },
    { days: 'Sunday', time: '11:00 AM - 4:00 PM' },
  ],
  emergencyService: '',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    // facebook: 'https://www.facebook.com/',
    // instagram: 'https://www.instagram.com/',
    // google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    // { label: 'Home', href: '/' },
    // { label: 'About', href: '/about' },
    // { label: 'Services', href: '/services' },
    // { label: 'Reviews', href: '/reviews' },
    // { label: 'Blog', href: '/blog' },
    // { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Websites & Landing Pages',
      description:
        'Get a professional website that tells your story, showcases your work, and makes it easy for customers to contact you. From simple landing pages to full business websites, we\'ll help you get online',
    },
    {
      title: 'Google & Local SEO',
      description:
        "Help nearby customers find you online. We'll improve your website's search basics, strengthen your local presence, and help you put your best foot forward on Google",
    },
    {
      title: 'Booking & Business Tools',
      description:
        "Spend less time juggling admin. Add contact forms, appointment booking, online payments, customer management, and other tools that make running your business easier",
    },
    {
      title: 'Photography & Content',
      description:
        "Show customers the people and work behind your business. Get professional photos and clear, engaging website content that helps your business stand out",
    },
    {
      title: 'Website Updates & Support',
      description:
        "Already have a website? We can help update pages, fix issues, improve the design, and keep your information current without starting from scratch",
    },
    {
      title: "Online Stores & Custom Projects",
      description: 'Ready to do more online? We can help you sell products, accept payments, organize your operations, or build custom digital solutions around the way your business works'
    }
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "They showed up on time, explained everything clearly, and finished the job faster than expected. Best service experience we've had.", name: 'Sarah M.', location: 'Denver, CO', rating: 5 },
    { quote: "Honest pricing and top-notch work. I've used them for three different projects now and they never disappoint.", name: 'James R.', location: 'Aurora, CO', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: [
      { name: 'John Smith', role: 'Founder & Lead Technician', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { name: 'Maria Garcia', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
      { name: 'David Chen', role: 'Senior Technician', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Web Design' },
    { label: 'Google & SEO' },
    { label: 'Business Tools', },
    { label: 'Photography', /**value: '2,500+' */ },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        // { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        // { label: 'Reviews', href: '/reviews' },
        // { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        // { label: 'Privacy', href: '/privacy' },
        // { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
