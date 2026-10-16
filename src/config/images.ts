/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single file to edit when swapping placeholder images for a
 * client's real photos. Astro will automatically optimize every local image
 * at build time (WebP/AVIF conversion, srcset generation, CLS-safe dimensions).
 *
 * HOW TO ADD YOUR OWN IMAGES
 * ──────────────────────────
 * 1. Drop your image file into the correct folder under src/assets/images/
 * 2. Uncomment the matching import below and update the filename
 * 3. Export it — the component picks it up automatically
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 *
 * FOLDER STRUCTURE
 * ────────────────
 *   src/assets/images/
 *     hero/      ← one image used in the homepage Hero section
 *     about/     ← one image used in the About section and About page
 *     gallery/   ← all project photos (drop any number of files here)
 *
 * Until you add local files the components fall back to placeholder URLs
 * served from Unsplash. Those are fine for development/demo but are NOT
 * optimized by Astro. Swap them for local files before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

// ── Hero ──────────────────────────────────────────────────────────────────────
// Recommended: landscape, at least 1600 × 1200 px
// To swap: replace the file in src/assets/images/hero/ and update the filename.
import heroImage from '../assets/images/hero/hero.avif';
export { heroImage };

// ── About ─────────────────────────────────────────────────────────────────────
// Recommended: portrait or square, at least 900 × 700 px
// To use: drop your file into src/assets/images/about/, then uncomment the
// import below, update the filename, and change the export to: export { aboutImage };
//
import aboutImage from '../assets/images/about/team.jpg';
export { aboutImage };
//comment out above and uncomment below to use your own image
// export { aboutImage };

// ── Gallery — auto-discovered ─────────────────────────────────────────────────
// Drop any number of image files into src/assets/images/gallery/ and they will
// appear in the gallery automatically — no code changes needed.
//
// The file name becomes the alt text:
//   kitchen-remodel.jpg    → "Kitchen Remodel"
//   deck-installation.jpg  → "Deck Installation"
//
// Recommended: landscape images, at least 800 × 600 px each.
// Aim for consistent proportions (4:3 works best with the gallery grid).

export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[-_]/g, ' ')          // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Title Case
}));

// Unsplash placeholders used when the gallery folder is empty.
// Replace by adding your own images — the placeholders are removed automatically.
const placeholders: GalleryImage[] = [
  { src: '/images/barbershop-26.png', alt: 'Barbershop 26, North Hollywood' },
  { src: '/images/betmidrash.png', alt: 'Beth Midrash HaChidah' },
  { src: '/images/homepage.png', alt: 'Startups & MVPs' },
  { src: '/images/real-estate.png', alt: 'Real Estate & Constractors' },
  { src: '/images/daveed.png', alt: 'Consultants & Portfolios' },
];

export const galleryImages: GalleryImage[] = discovered.length > 0 ? discovered : placeholders;
