import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// This route should be dynamic (not statically exported)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BLOGS_FILE_PATH = path.join(process.cwd(), 'public/data/blogs.json');

// GET - Fetch a single blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);
    
    const blog = data.posts.find((post: any) => post.slug === slug);
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to read blog' },
      { status: 500 }
    );
  }
}

// PUT - Update a specific blog by slug
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const updatedBlog = await request.json();

    // Read existing blogs
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);

    // Find blog index
    const blogIndex = data.posts.findIndex((post: any) => post.slug === slug);
    
    if (blogIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Update blog (preserve slug if not provided)
    data.posts[blogIndex] = {
      ...updatedBlog,
      slug: updatedBlog.slug || slug
    };

    // Write back to file
    await fs.writeFile(BLOGS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully',
      data: data.posts[blogIndex]
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a specific blog by slug
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Read existing blogs
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);

    // Find blog
    const blogIndex = data.posts.findIndex((post: any) => post.slug === slug);
    
    if (blogIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Remove blog
    const deletedBlog = data.posts.splice(blogIndex, 1)[0];

    // Write back to file
    await fs.writeFile(BLOGS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
      data: deletedBlog
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}

