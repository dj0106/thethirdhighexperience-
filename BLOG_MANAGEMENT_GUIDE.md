# 📝 Blog Management Guide

## How to Add, Edit, or Delete Blogs

Your blogs are now managed through a simple JSON file. No coding required!

---

## 📍 Location

The blog data is stored in:
```
public/data/blogs.json
```

---

## ✏️ How to Edit Blogs

### 1. **Open the JSON file**
   - Navigate to `public/data/blogs.json`
   - Open it with any text editor (VS Code, Notepad, etc.)

### 2. **Understanding the Structure**

Each blog post has the following fields:

```json
{
  "slug": "unique-url-identifier",
  "title": "Your Blog Title",
  "date": "March 1, 2025",
  "excerpt": "A short description that appears on the blog listing page",
  "coverImage": "https://image-url.com/image.jpg",
  "content": [
    "First paragraph of your blog post.",
    "Second paragraph of your blog post.",
    "Third paragraph of your blog post."
  ]
}
```

**Field Descriptions:**
- **slug**: URL-friendly identifier (use lowercase, hyphens instead of spaces)
  - Example: `"my-new-blog"` → URL will be `/blogs/my-new-blog`
- **title**: The main heading of your blog
- **date**: Publication date (any format you prefer)
- **excerpt**: Short summary (2-3 sentences)
- **coverImage**: URL to an image (use Unsplash, your own hosting, etc.)
- **content**: Array of paragraphs (each string is a new paragraph)

---

## ➕ How to Add a New Blog

1. Open `public/data/blogs.json`
2. Add a comma after the last blog post
3. Copy this template and paste it:

```json
{
  "slug": "your-blog-slug",
  "title": "Your Blog Title Here",
  "date": "January 1, 2026",
  "excerpt": "A compelling description of your blog post that will appear on the listing page.",
  "coverImage": "https://images.unsplash.com/photo-XXXXXXXXX",
  "content": [
    "Your first paragraph goes here.",
    "Your second paragraph goes here.",
    "Add as many paragraphs as you need."
  ]
}
```

4. Fill in your content
5. Save the file
6. Refresh your website - the new blog will appear!

---

## 🗑️ How to Delete a Blog

1. Open `public/data/blogs.json`
2. Find the blog post you want to delete
3. Delete the entire blog object (from `{` to `}`)
4. Make sure to remove any extra commas
5. Save the file

**Important:** Make sure your JSON remains valid (no trailing commas, proper brackets)

---

## ✏️ How to Edit an Existing Blog

1. Open `public/data/blogs.json`
2. Find the blog you want to edit (search by title or slug)
3. Modify any field you want
4. Save the file
5. Refresh your website to see changes

---

## 🖼️ Finding Cover Images

**Free Image Sources:**
- [Unsplash](https://unsplash.com) - High-quality free images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

**How to get Unsplash URLs:**
1. Go to unsplash.com
2. Find an image you like
3. Right-click → "Copy Image Address"
4. Paste the URL in the `coverImage` field

---

## ⚠️ Important Tips

1. **Always validate your JSON** after editing
   - Use [JSONLint](https://jsonlint.com) to check for errors
   - Common mistakes: missing commas, extra commas, unclosed brackets

2. **Slug must be unique** - no two blogs can have the same slug

3. **Keep backups** - Before making major changes, save a copy of your JSON file

4. **Test locally first** - If running locally, test changes before deploying

---

## 📋 Example: Complete blogs.json Structure

```json
{
  "posts": [
    {
      "slug": "first-blog",
      "title": "My First Blog",
      "date": "January 1, 2026",
      "excerpt": "This is my first blog post.",
      "coverImage": "https://images.unsplash.com/photo-123456",
      "content": [
        "Welcome to my first blog post!",
        "This is the second paragraph."
      ]
    },
    {
      "slug": "second-blog",
      "title": "My Second Blog",
      "date": "January 5, 2026",
      "excerpt": "This is my second blog post.",
      "coverImage": "https://images.unsplash.com/photo-789012",
      "content": [
        "This is my second blog.",
        "More content here."
      ]
    }
  ]
}
```

---

## 🚀 Deployment

After editing `blogs.json`:
1. Save the file
2. Commit changes to Git (if using version control)
3. Deploy to your hosting platform
4. Changes will be live!

---

## 🆘 Troubleshooting

**Problem:** Blogs not showing up
- **Solution:** Check browser console for errors, validate JSON syntax

**Problem:** JSON syntax error
- **Solution:** Use JSONLint.com to find and fix the error

**Problem:** Image not loading
- **Solution:** Make sure the image URL is publicly accessible

---

## 📞 Need Help?

If you encounter any issues, check:
1. JSON syntax is valid
2. All required fields are present
3. No duplicate slugs
4. Image URLs are accessible

Happy blogging! ✨

