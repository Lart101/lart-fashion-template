# Product Requirements Document: Lart Fashion Template

## 1. Overview
The **Lart Fashion Template** is a premium, high-impact Next.js template tailored for fashion brands, boutique clothing stores, and apparel designers. It emphasizes visual storytelling, dynamic product discovery, and a seamless shopping experience using modern web aesthetics.

## 2. Technical Stack & UI Architecture
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Component Library**: **Shadcn UI** (Buttons, Cards, Modals, Accordions, Carousel, Navigation Menu)
- **Themeing**: Full Dark/Light Mode support via `next-themes`. 
  - *Light Mode*: Muted neutrals, crisp white backgrounds, dark elegant typography.
  - *Dark Mode*: Deep rich blacks (`#0a0a0a`), soft gray texts, high-contrast borders.
- **Media**: All images and videos must be sourced from high-quality web URLs (e.g., Unsplash, Pexels) to simulate a real production environment. No local media files.

## 3. Comprehensive Theme & Aesthetics
- **Typography**: Elegant Serif fonts for headings (e.g., Playfair Display) paired with clean Sans-Serif for body text (e.g., Inter).
- **Vibe**: High-end, editorial, luxurious, and spacious.
- **Layout**: Asymmetrical grids, sticky sidebars, and full-bleed imagery.

## 4. Core Features & User Flow

### 4.1 Homepage
- **Hero Section**: Full-screen video or high-resolution web image background. Large, bold typography with a "Shop New Collection" CTA.
- **Featured Categories**: A Shadcn Carousel showcasing "Men", "Women", "Accessories".
- **Lookbook Section**: A masonry layout of lifestyle images. Hovering reveals "Shop the Look" tooltips.

### 4.2 Product Discovery
- **Product Grid**: Responsive 2-to-4 column grid. 
- **Filtering**: Shadcn Accordion and Checkboxes in a sidebar to filter by Size, Color, Price, and Material.
- **Quick View**: A Shadcn Dialog (Modal) allowing users to view product details and add to cart without leaving the page.

### 4.3 Shopping Experience
- **Product Details Page (PDP)**: 
  - Sticky product info on the right, scrolling image gallery on the left.
  - Shadcn Tabs for "Description", "Details", "Shipping".
- **Cart Drawer**: A Shadcn Sheet component sliding from the right to review items, edit quantities, and proceed to checkout.
- **Dark/Light Mode Toggle**: Located in the top navigation bar, using a smooth transition.

## 5. Data Structures (Mocked)
- **Product Object**: `{ id, title, price, compareAtPrice, images: [webUrls], sizes, colors, description, inStock }`
- **Category Object**: `{ id, title, slug, heroImageUrl }`
