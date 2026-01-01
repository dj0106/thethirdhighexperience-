# 🚀 API Quick Start Guide

## Setup (2 Minutes)

### Step 1: Make Sure Server is Running
```bash
npm run dev
```

### Step 2: Import Postman Collection
1. Open Postman
2. Click **Import**
3. Select `Blog_API_Postman_Collection.json`
4. Done! ✅

---

## 🎯 Common Tasks

### ➕ Add a New Blog

**Postman:**
1. Select "Add New Blog" request
2. Edit the JSON body with your blog data
3. Click **Send**

**cURL:**
```bash
curl -X POST http://localhost:3000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "mindfulness-guide",
    "title": "Complete Guide to Mindfulness",
    "date": "January 15, 2026",
    "excerpt": "Learn mindfulness meditation step by step",
    "coverImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    "content": [
      "Mindfulness is the practice of being present.",
      "Start with 5 minutes daily.",
      "Gradually increase your practice time."
    ]
  }'
```

---

### ✏️ Update a Blog

**Postman:**
1. Select "Update Specific Blog" request
2. Change the slug in URL if needed
3. Update the JSON body
4. Click **Send**

**cURL:**
```bash
curl -X PUT http://localhost:3000/api/blogs/mindfulness-guide \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "mindfulness-guide",
    "title": "UPDATED: Complete Guide to Mindfulness",
    "date": "January 15, 2026",
    "excerpt": "Updated excerpt here",
    "coverImage": "https://images.unsplash.com/photo-new",
    "content": ["Updated content"]
  }'
```

---

### 🗑️ Delete a Blog

**Postman:**
1. Select "Delete Specific Blog" request
2. Change the slug in URL
3. Click **Send**

**cURL:**
```bash
curl -X DELETE http://localhost:3000/api/blogs/mindfulness-guide
```

---

### 📋 Get All Blogs

**Postman:**
1. Select "Get All Blogs" request
2. Click **Send** (no API key needed)

**cURL:**
```bash
curl http://localhost:3000/api/blogs
```

---

### 📄 Get Single Blog

**Postman:**
1. Select "Get Single Blog" request
2. Change slug in URL if needed
3. Click **Send** (no API key needed)

**cURL:**
```bash
curl http://localhost:3000/api/blogs/cosmic-consciousness
```

---

## 📝 Blog Data Template

```json
{
  "slug": "unique-url-slug",
  "title": "Your Blog Title",
  "date": "Month Day, Year",
  "excerpt": "Short description (2-3 sentences)",
  "coverImage": "https://image-url.com/image.jpg",
  "content": [
    "First paragraph of your blog",
    "Second paragraph",
    "Third paragraph",
    "Add as many as you need"
  ]
}
```

---

## ✅ Required Fields

- ✅ `slug` - Unique identifier (lowercase, use hyphens)
- ✅ `title` - Blog title
- ✅ `date` - Publication date
- ✅ `excerpt` - Short description
- ✅ `content` - Array of paragraphs

**Optional:**
- `coverImage` - Image URL (recommended)

---

## 🔑 API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Get all blogs |
| GET | `/api/blogs/:slug` | Get single blog |
| POST | `/api/blogs` | Add new blog |
| PUT | `/api/blogs/:slug` | Update blog |
| DELETE | `/api/blogs/:slug` | Delete blog |
| PUT | `/api/blogs` | Replace all blogs |

---

## 🎨 Finding Images

**Free Image Sources:**
- [Unsplash](https://unsplash.com) - `https://images.unsplash.com/photo-...`
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

**Tip:** Right-click image → Copy Image Address

---

## 🔒 Security Note

⚠️ **Important:** This API has no authentication. In production, consider adding:
- API key authentication
- Rate limiting
- CORS restrictions
- HTTPS only

---

## 🧪 Test Your Setup

### 1. Test GET:
```bash
curl http://localhost:3000/api/blogs
```
Should return all blogs ✅

### 2. Test POST:
```bash
curl -X POST http://localhost:3000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{"slug":"test","title":"Test","date":"Jan 1","excerpt":"Test","content":["Test"]}'
```
Should create a new blog ✅

### 3. Check the website:
Visit `http://localhost:3000/blogs` - new blog should appear! ✅

---

## 🆘 Common Issues

**400 Bad Request:**
- Ensure all required fields are present
- Check JSON syntax is valid

**Blog already exists:**
- Use a different slug
- Or use PUT to update existing blog

**500 Server Error:**
- Check server logs
- Verify `public/data/blogs.json` exists

---

## 📚 Full Documentation

For complete details, see: **API_DOCUMENTATION.md**

---

**You're ready to manage blogs via API!** 🎉

