// Navigation and section metadata - safe for client components (no fs/path)

export interface SectionMeta {
  title: string;
  description: string;
  color: string;
}

export const sections: Record<string, SectionMeta> = {
  consciousness: {
    title: "Consciousness vs Awareness",
    description: "Exploring the nature of consciousness, awareness, and their interplay",
    color: "teal",
  },
  ouroboros: {
    title: "The Ouroboic Birth",
    description: "The self-referential nature of consciousness awakening to itself",
    color: "amber",
  },
  fields: {
    title: "Fields of Consciousness",
    description: "The spatial and energetic dimensions of meditative experience",
    color: "emerald",
  },
  adversity: {
    title: "Adversity & Spirituality",
    description: "How suffering and challenge catalyze spiritual growth",
    color: "rose",
  },
  love: {
    title: "Love & Spirituality",
    description: "Love as the fundamental force in spiritual awakening",
    color: "pink",
  },
  civilization: {
    title: "Civilization & Consciousness",
    description: "The relationship between cultural evolution and inner awareness",
    color: "indigo",
  },
  inspirators: {
    title: "Spiritual Inspirators",
    description: "Portraits of beings who embodied meditative consciousness",
    color: "violet",
  },
};

export type SectionKey = keyof typeof sections;

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What is Meditation", href: "/what-is-meditation" },
  { label: "Techniques", href: "/meditation-techniques" },
  { label: "Inspirators", href: "/spiritual-inspirators" },
  { label: "Western Mystics", href: "/western-mystics" },
  {
    label: "Consciousness",
    href: "/consciousness/consciousness-and-evolution",
    children: [
      { label: "Consciousness & Evolution", href: "/consciousness/consciousness-and-evolution" },
      { label: "Defining Awareness & Consciousness", href: "/consciousness/defining-awareness-consciousness" },
      { label: "The Mystery of Awareness", href: "/consciousness/the-mystery-of-awareness" },
      { label: "Consciousness Beyond Qualia", href: "/consciousness/consciousness-beyond-qualia" },
      { label: "Between Nothing and Something", href: "/consciousness/between-nothing-and-something" },
      { label: "The Hierarchy of Awareness", href: "/consciousness/hierarchy-of-awareness" },
    ],
  },
  {
    label: "Ouroboros",
    href: "/ouroboros/atman-job-son-of-shame",
    children: [
      { label: "Atman, Job & the Son of Shame", href: "/ouroboros/atman-job-son-of-shame" },
      { label: "Ouroboros Consciousness", href: "/ouroboros/ouroboros-consciousness" },
      { label: "The Embodiment of Ouroboros", href: "/ouroboros/embodiment-of-ouroboros" },
      { label: "A New Ouroboic Intelligence", href: "/ouroboros/new-ouroboic-intelligence" },
    ],
  },
  {
    label: "Fields",
    href: "/fields/meditative-pixelation",
    children: [
      { label: "Meditative Pixelation", href: "/fields/meditative-pixelation" },
      { label: "Spatialization of the inner Body", href: "/fields/inner-spatialization" },
      { label: "The Spheric Eversion of the Soul", href: "/fields/spheric-eversion" },
      { label: "Fields of Consciousness", href: "/fields/fields-of-consciousness" },
    ],
  },
  {
    label: "Adversity",
    href: "/adversity/integral-suffering-and-happiness",
    children: [
      { label: "Integral Suffering and Happiness", href: "/adversity/integral-suffering-and-happiness" },
      { label: "Trauma and Transcendence", href: "/adversity/trauma-and-transcendence" },
    ],
  },
  {
    label: "Love",
    href: "/love/the-glue-of-love",
    children: [
      { label: "The Glue of Love", href: "/love/the-glue-of-love" },
      { label: "God wants to be Human", href: "/love/god-wants-to-be-human" },
      { label: "The Super-Awake Flow", href: "/love/the-super-awake-flow" },
    ],
  },
  {
    label: "Civilization",
    href: "/civilization/inner-and-outer-person",
    children: [
      { label: "The inner and the outer Person", href: "/civilization/inner-and-outer-person" },
      { label: "Eastern vs Western Consciousness", href: "/civilization/eastern-versus-western-consciousness" },
      { label: "Liberation from or of the Body", href: "/civilization/liberation-from-or-of-the-body" },
      { label: "Modern Forms of Suffering", href: "/civilization/modern-forms-of-suffering" },
      { label: "Civilization and Consciousness", href: "/civilization/civilization-and-consciousness" },
      { label: "Civilization and Consciousness II", href: "/civilization/civilization-and-consciousness-ii" },
    ],
  },
];
