export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  coverImage?: string;
};

// Fetch blog posts from JSON file (client-side only)
let cachedPosts: BlogPost[] | null = null;

export async function fetchPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  try {
    // Client-side: Use fetch with basePath for GitHub Pages
    const base = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '';
    const response = await fetch(`${base}/data/blogs.json`, {
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const data = await response.json();
    cachedPosts = data.posts;
    return data.posts;
  } catch (error) {
    console.error('Error loading blogs:', error);
    return [];
  }
}

// For backward compatibility - synchronous access (will be empty on first load)
export const posts: BlogPost[] = [];
