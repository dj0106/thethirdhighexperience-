import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { BlogPost } from './posts';

// Server-side only function to fetch blog posts from filesystem
let cachedPosts: BlogPost[] | null = null;

export async function fetchPostsServer(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  try {
    const filePath = path.join(process.cwd(), 'public/data/blogs.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    cachedPosts = data.posts;
    return data.posts;
  } catch (error) {
    console.error('Error loading blogs from server:', error);
    return [];
  }
}

