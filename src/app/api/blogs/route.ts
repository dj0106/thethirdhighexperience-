import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// This route should be dynamic (not statically exported)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BLOGS_FILE_PATH = path.join(process.cwd(), 'public/data/blogs.json');

// GET - Fetch all blogs
export async function GET(request: NextRequest) {
  try {
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);
    
    return NextResponse.json({
      success: true,
      data: data.posts,
      count: data.posts.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to read blogs' },
      { status: 500 }
    );
  }
}

// POST - Add a new blog
export async function POST(request: NextRequest) {
  try {
    const newBlog = await request.json();
    
    // Validate required fields
    if (!newBlog.slug || !newBlog.title || !newBlog.date || !newBlog.excerpt || !newBlog.content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: slug, title, date, excerpt, content' },
        { status: 400 }
      );
    }

    // Read existing blogs
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);

    // Check if slug already exists
    const slugExists = data.posts.some((post: any) => post.slug === newBlog.slug);
    if (slugExists) {
      return NextResponse.json(
        { success: false, error: 'Blog with this slug already exists' },
        { status: 400 }
      );
    }

    // Add new blog
    data.posts.push(newBlog);

    // Write back to file
    await fs.writeFile(BLOGS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Blog added successfully',
      data: newBlog
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to add blog' },
      { status: 500 }
    );
  }
}

// PUT - Update all blogs (replace entire file)
export async function PUT(request: NextRequest) {
  try {
    const { posts } = await request.json();

    if (!Array.isArray(posts)) {
      return NextResponse.json(
        { success: false, error: 'Invalid data format. Expected { posts: [...] }' },
        { status: 400 }
      );
    }

    // Write to file
    await fs.writeFile(
      BLOGS_FILE_PATH,
      JSON.stringify({ posts }, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Blogs updated successfully',
      count: posts.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update blogs' },
      { status: 500 }
    );
  }
}

// DELETE - Delete all blogs (use with caution!)
export async function DELETE(request: NextRequest) {
  try {
    // Write empty array
    await fs.writeFile(
      BLOGS_FILE_PATH,
      JSON.stringify({ posts: [] }, null, 2),
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'All blogs deleted successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete blogs' },
      { status: 500 }
    );
  }
}

