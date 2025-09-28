export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  coverImage?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "shoonyata-meditation",
    title: "Shoonyata Meditation: Entering the Vast Stillness",
    date: "March 1, 2025",
    excerpt:
      "An introduction to Shoonyata (emptiness) meditation — a gentle descent beyond mind into the luminous stillness within.",
    content: [
      "Shoonyata is not an absence; it is a fullness beyond concepts. When the mind rests and the senses soften, one recognizes the vast spaciousness that has always been present.",
      "Begin simply: sit comfortably, relax the breath, and allow attention to widen. Notice the silence between thoughts. Rest there. No force, only presence.",
      "With practice, the sense of a separate ‘me’ begins to relax. What remains is clarity, ease, and a quiet joy that needs nothing to be complete.",
    ],
  },
  {
    slug: "aum-chanting",
    title: "AUM Chanting: Harmonizing Body, Breath, and Being",
    date: "March 5, 2025",
    excerpt:
      "Explore the primordial sound AUM as a living practice — aligning the breath and nervous system with the rhythm of the cosmos.",
    content: [
      "AUM is not merely a sound; it is a vibration that attunes your system to coherence. Each syllable — A, U, M — massaging different regions of the body and the brain.",
      "Chant slowly. Let the ‘A’ resonate in the abdomen, the ‘U’ in the chest and throat, and the ‘M’ in the skull — buzzing like a bee. Feel the after-silence as the most potent part.",
      "A few minutes daily can calm anxiety, deepen focus, and open subtle perception. Consistency matters more than intensity.",
    ],
  },
  {
    slug: "mandukya-wisdom",
    title: "Mandukya Wisdom in Daily Life",
    date: "March 10, 2025",
    excerpt:
      "Non‑dual pointers from the Mandukya — how waking, dream, and deep sleep reveal the ever‑present Awareness.",
    content: [
      "The Mandukya points to Turiya — the fourth — not as a separate state, but as the ever‑present background in which all states appear and dissolve.",
      "Notice moments between activities, breaths, and thoughts. These gaps are doorways. Abide as the knower of all experiences without getting entangled.",
      "Living this understanding brings natural compassion, simplicity, and fearlessness — not as an achievement, but as your original nature.",
    ],
  },
];

