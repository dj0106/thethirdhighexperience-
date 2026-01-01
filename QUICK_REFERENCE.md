# 📋 Quick Reference - Blog Management

## 🎯 One-Minute Guide

### File to Edit
```
public/data/blogs.json
```

---

## ➕ Add a Blog (Copy & Paste)

```json
{
  "slug": "my-new-blog",
  "title": "My New Blog Title",
  "date": "January 1, 2026",
  "excerpt": "Short description here",
  "coverImage": "https://images.unsplash.com/photo-XXXXX",
  "content": [
    "First paragraph",
    "Second paragraph",
    "Third paragraph"
  ]
}
```

**Steps:**
1. Open `public/data/blogs.json`
2. Add comma after last blog
3. Paste template above
4. Customize content
5. Save & refresh

---

## ✏️ Edit a Blog

1. Open `public/data/blogs.json`
2. Find blog by title
3. Change any field
4. Save & refresh

---

## 🗑️ Delete a Blog

1. Open `public/data/blogs.json`
2. Delete entire `{ ... }` block
3. Remove extra commas
4. Save & refresh

---

## 🖼️ Free Images

- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

---

## ✅ Validate JSON

Before saving, check syntax at:
- [JSONLint.com](https://jsonlint.com)

---

## 📁 File Structure

```
public/
  └── data/
      └── blogs.json  ← Edit this file
```

---

## 🚨 Common Mistakes

❌ Missing comma between blogs
❌ Extra comma after last blog
❌ Duplicate slugs
❌ Unclosed brackets

✅ Use JSONLint to catch errors!

---

## 💡 Pro Tips

1. **Backup first** - Copy blogs.json before major changes
2. **Unique slugs** - Each blog needs a different slug
3. **Test locally** - Check changes before deploying
4. **Keep it simple** - Start with small edits

---

## 📚 Full Documentation

See `BLOG_MANAGEMENT_GUIDE.md` for detailed instructions.

---

**That's it! You're ready to manage your blogs!** 🎉

