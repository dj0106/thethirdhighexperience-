# 🚀 Blog API Documentation

## Overview

You can now manage your blogs via REST API using Postman or any HTTP client!

---

## 🔑 Authentication

Most endpoints require an API key for security.

**Header Required:**
```
x-api-key: your-secret-api-key-change-this
```

**⚠️ IMPORTANT:** Change the default API key!

### How to Set Your API Key:

1. **Create `.env.local` file** in your project root:
```bash
BLOG_API_KEY=your-super-secret-key-here
```

2. **Restart your development server**

---

## 📍 Base URL

**Local Development:**
```
http://localhost:3000/api/blogs
```

**Production:**
```
https://your-domain.com/api/blogs
```

---

## 🔗 API Endpoints

### 1. **GET /api/blogs** - Get All Blogs
Fetch all blog posts.

**Authentication:** ❌ Not required

**Request:**
```bash
GET http://localhost:3000/api/blogs
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "slug": "cosmic-consciousness",
      "title": "Cosmic Consciousness",
      "date": "March 1, 2025",
      "excerpt": "Journey into...",
      "coverImage": "https://...",
      "content": ["Para 1", "Para 2"]
    }
  ],
  "count": 6
}
```

---

### 2. **GET /api/blogs/:slug** - Get Single Blog
Fetch a specific blog by slug.

**Authentication:** ❌ Not required

**Request:**
```bash
GET http://localhost:3000/api/blogs/cosmic-consciousness
```

**Response:**
```json
{
  "success": true,
  "data": {
    "slug": "cosmic-consciousness",
    "title": "Cosmic Consciousness",
    "date": "March 1, 2025",
    "excerpt": "Journey into...",
    "coverImage": "https://...",
    "content": ["Para 1", "Para 2"]
  }
}
```

---

### 3. **POST /api/blogs** - Add New Blog
Create a new blog post.

**Authentication:** ✅ Required

**Headers:**
```
Content-Type: application/json
x-api-key: your-secret-api-key-change-this
```

**Request Body:**
```json
{
  "slug": "new-blog-post",
  "title": "My New Blog Post",
  "date": "January 1, 2026",
  "excerpt": "A short description of the blog",
  "coverImage": "https://images.unsplash.com/photo-123",
  "content": [
    "First paragraph of content",
    "Second paragraph of content",
    "Third paragraph of content"
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog added successfully",
  "data": { /* the new blog object */ }
}
```

**Validation:**
- ✅ `slug` must be unique
- ✅ All fields are required: `slug`, `title`, `date`, `excerpt`, `content`
- ✅ `content` must be an array of strings

---

### 4. **PUT /api/blogs/:slug** - Update Specific Blog
Update an existing blog post.

**Authentication:** ✅ Required

**Headers:**
```
Content-Type: application/json
x-api-key: your-secret-api-key-change-this
```

**Request:**
```bash
PUT http://localhost:3000/api/blogs/cosmic-consciousness
```

**Request Body:**
```json
{
  "slug": "cosmic-consciousness",
  "title": "Updated Title",
  "date": "March 1, 2025",
  "excerpt": "Updated excerpt",
  "coverImage": "https://new-image-url.com",
  "content": [
    "Updated paragraph 1",
    "Updated paragraph 2"
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog updated successfully",
  "data": { /* updated blog object */ }
}
```

---

### 5. **DELETE /api/blogs/:slug** - Delete Specific Blog
Delete a blog post by slug.

**Authentication:** ✅ Required

**Headers:**
```
x-api-key: your-secret-api-key-change-this
```

**Request:**
```bash
DELETE http://localhost:3000/api/blogs/cosmic-consciousness
```

**Response:**
```json
{
  "success": true,
  "message": "Blog deleted successfully",
  "data": { /* deleted blog object */ }
}
```

---

### 6. **PUT /api/blogs** - Replace All Blogs
Replace the entire blogs.json file.

**Authentication:** ✅ Required  
**⚠️ WARNING:** This replaces ALL blogs!

**Headers:**
```
Content-Type: application/json
x-api-key: your-secret-api-key-change-this
```

**Request Body:**
```json
{
  "posts": [
    {
      "slug": "blog-1",
      "title": "Blog 1",
      "date": "Jan 1, 2026",
      "excerpt": "Excerpt",
      "coverImage": "https://...",
      "content": ["Content"]
    }
  ]
}
```

---

## 📦 Using Postman

### Import Collection:
1. Open Postman
2. Click **Import**
3. Select `Blog_API_Postman_Collection.json`
4. All endpoints will be ready to use!

### Set API Key:
1. In Postman, go to each request
2. Find the **Headers** tab
3. Update `x-api-key` value with your actual key

---

## 🔒 Security Best Practices

1. **Change the default API key immediately!**
2. **Never commit `.env.local` to Git**
3. **Use strong, random API keys in production**
4. **Consider adding rate limiting for production**
5. **Use HTTPS in production**

---

## 🧪 Testing with cURL

### Get all blogs:
```bash
curl http://localhost:3000/api/blogs
```

### Add a new blog:
```bash
curl -X POST http://localhost:3000/api/blogs \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-api-key-change-this" \
  -d '{
    "slug": "test-blog",
    "title": "Test Blog",
    "date": "Jan 1, 2026",
    "excerpt": "Test excerpt",
    "coverImage": "https://example.com/image.jpg",
    "content": ["Test content"]
  }'
```

### Update a blog:
```bash
curl -X PUT http://localhost:3000/api/blogs/test-blog \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-api-key-change-this" \
  -d '{
    "slug": "test-blog",
    "title": "Updated Test Blog",
    "date": "Jan 2, 2026",
    "excerpt": "Updated excerpt",
    "coverImage": "https://example.com/new-image.jpg",
    "content": ["Updated content"]
  }'
```

### Delete a blog:
```bash
curl -X DELETE http://localhost:3000/api/blogs/test-blog \
  -H "x-api-key: your-secret-api-key-change-this"
```

---

## ❌ Error Responses

### 401 Unauthorized:
```json
{
  "success": false,
  "error": "Unauthorized - Invalid API key"
}
```

### 404 Not Found:
```json
{
  "success": false,
  "error": "Blog not found"
}
```

### 400 Bad Request:
```json
{
  "success": false,
  "error": "Missing required fields: slug, title, date, excerpt, content"
}
```

### 500 Server Error:
```json
{
  "success": false,
  "error": "Failed to update blog"
}
```

---

## 🎯 Quick Examples

### Example 1: Add a Blog via Postman
1. Open Postman
2. Create new POST request to `http://localhost:3000/api/blogs`
3. Add header: `x-api-key: your-secret-api-key-change-this`
4. Add header: `Content-Type: application/json`
5. In Body (raw JSON), paste your blog data
6. Click Send!

### Example 2: Update a Blog
1. Create PUT request to `http://localhost:3000/api/blogs/your-slug`
2. Add same headers as above
3. In Body, paste updated blog data
4. Click Send!

---

## 📝 Notes

- Changes are immediately reflected in `public/data/blogs.json`
- The website will show updates after refresh
- All endpoints return JSON responses
- GET endpoints don't require authentication
- POST, PUT, DELETE require API key

---

## 🆘 Troubleshooting

**Problem:** 401 Unauthorized  
**Solution:** Check your API key in headers

**Problem:** 400 Bad Request  
**Solution:** Ensure all required fields are present

**Problem:** 404 Not Found  
**Solution:** Verify the blog slug exists

**Problem:** Changes not showing on website  
**Solution:** Refresh the page or clear cache

---

**Happy API testing!** 🎉

