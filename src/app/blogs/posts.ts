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
    slug: "cosmic-consciousness",
    title: "Cosmic Consciousness: Awakening to Universal Awareness",
    date: "March 1, 2025",
    excerpt:
      "Journey into the vast expanse of cosmic consciousness and discover your connection to the infinite universe.",
    coverImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop&crop=center",
    content: [
      "Cosmic consciousness represents the expansion of awareness beyond the individual self into the recognition of universal oneness.",
      "Through deep meditation and contemplation, we begin to perceive the interconnected nature of all existence.",
      "This awakening brings profound peace, compassion, and understanding of our place in the cosmic dance.",
    ],
  },
  {
    slug: "chakra-meditation",
    title: "Chakra Meditation: Balancing Your Energy Centers",
    date: "March 5, 2025",
    excerpt:
      "Explore the ancient wisdom of chakra meditation to harmonize your energy centers and awaken inner vitality.",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&crop=center",
    content: [
      "The chakra system provides a map for understanding the subtle energies within our being.",
      "Each energy center corresponds to different aspects of our physical, emotional, and spiritual well-being.",
      "Regular chakra meditation helps maintain balance and promotes healing on all levels of existence.",
    ],
  },
  {
    slug: "ocean-meditation",
    title: "Ocean Meditation: Finding Peace in Fluid Awareness",
    date: "March 10, 2025",
    excerpt:
      "Dive deep into ocean meditation and discover the tranquil depths of your inner being.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    content: [
      "Like the ocean, consciousness has both surface waves and profound depths of stillness.",
      "Ocean meditation teaches us to dive beneath the turbulent thoughts into the peaceful depths within.",
      "In this practice, we learn to be both the wave and the ocean, movement and stillness unified.",
    ],
  },
  {
    slug: "divine-meditation",
    title: "Divine Meditation: Connecting with Sacred Presence",
    date: "March 15, 2025",
    excerpt:
      "Experience the transformative power of divine meditation and awaken to the sacred presence within.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    content: [
      "Divine meditation opens the heart to the sacred presence that permeates all existence.",
      "Through devotion and surrender, we dissolve the barriers between self and the divine.",
      "This practice cultivates humility, love, and recognition of the sacred in everyday life.",
    ],
  },
  {
    slug: "cosmic-eye",
    title: "The Cosmic Eye: Seeing Beyond the Veil",
    date: "March 20, 2025",
    excerpt:
      "Open your inner eye to perceive the cosmic patterns and hidden dimensions of reality.",
    coverImage: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop&crop=center",
    content: [
      "The cosmic eye represents the awakened perception that sees beyond ordinary reality.",
      "Through meditation and inner work, we develop the ability to perceive subtle energies and patterns.",
      "This expanded vision reveals the interconnected web of existence and our role within it.",
    ],
  },
  {
    slug: "enlightenment-path",
    title: "The Path to Enlightenment: A Journey Within",
    date: "March 25, 2025",
    excerpt:
      "Discover the timeless path to enlightenment and awaken to your true nature.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&sat=-100&con=20",
    content: [
      "Enlightenment is not a destination but a continuous awakening to what we already are.",
      "The path involves releasing illusions and recognizing the luminous awareness that is our essence.",
      "Each moment offers an opportunity to awaken more fully to the truth of our being.",
    ],
  },
];
