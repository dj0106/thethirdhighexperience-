# Images Folder Structure

This folder contains all the images and assets for the MahaShivratri 2026 website.

## Folder Organization

### `/public/images/`
Main images directory - all files here are publicly accessible via `/images/filename.ext`

### `/public/images/icons/`
- Small icons and symbols
- Navigation icons
- Social media icons
- UI elements

### `/public/images/backgrounds/`
- Background images
- Texture files
- Pattern images
- Hero section backgrounds

### `/public/images/logos/`
- Logo files
- Brand assets
- Shiva images/vectors
- Religious symbols

## How to Use Images in Your Code

### In React Components (Next.js):
```jsx
import Image from 'next/image'

// For optimized images
<Image 
  src="/images/logos/shiva.png" 
  alt="Shiva" 
  width={500} 
  height={500} 
/>

// For regular img tags
<img src="/images/backgrounds/stars.jpg" alt="Starry background" />
```

### In CSS:
```css
.hero-background {
  background-image: url('/images/backgrounds/night-sky.jpg');
}
```

## Recommended Image Formats

- **PNG**: For images with transparency (logos, icons)
- **JPG/JPEG**: For photographs and complex images
- **SVG**: For scalable vector graphics (icons, simple illustrations)
- **WebP**: For modern browsers (better compression)

## File Naming Convention

- Use lowercase letters
- Use hyphens instead of spaces: `shiva-image.png`
- Be descriptive: `hero-background.jpg`, `countdown-circle.svg`
- Include size if multiple versions: `logo-small.png`, `logo-large.png`

## Example Usage for Shiva Image

Once you add your Shiva image to `/public/images/logos/shiva.png`, you can use it like this:

```jsx
<Image 
  src="/images/logos/shiva.png" 
  alt="Lord Shiva" 
  width={687} 
  height={400}
  className="absolute"
  style={{
    left: 'calc(50% - 343.5px)',
    top: '2.37%',
    filter: 'drop-shadow(0px 0px 250px rgba(255, 220, 65, 0.1))'
  }}
/>
```
