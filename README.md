# Najam Academy - Online Quran Learning

![App Preview](https://imgix.cosmicjs.com/fd130310-5f75-11f1-9be4-7363224ab631-autopilot-photo-1438761681033-6461ffad8d80-1780509578682.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, responsive online Quran academy website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Learn Quran with experienced and dedicated tutors through engaging online classes designed for students of all ages — covering Tajweed, recitation, memorization, and Quran understanding.

## Features

- 🏠 **Engaging Homepage** with hero, featured courses, tutors, pricing, and testimonials
- 📚 **Courses** listing and detailed individual course pages with connected tutors
- 👨‍🏫 **Tutors** directory with experience, specializations, and bios
- 💳 **Pricing Plans** with highlighted "most popular" plan
- 💬 **Testimonials** with star ratings from real students
- 📱 **Fully responsive** modern design with smooth animations
- ⚡ **Server-rendered** with the App Router for performance and SEO

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a206b0fd66dd9646b9de820&clone_repository=6a206c5ad66dd9646b9de886)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Learn Quran with experienced and dedicated tutors through engaging online classes designed for students of all ages. Our lessons cover Tajweed, recitation, memorization, and Quran understanding using simple and effective teaching methods. With Affordable Online Quran Academy students can enjoy flexible schedules, one-on-one guidance, and personalized support from home. We focus on making Quran education accessible, convenient, and effective for every learner seeking steady progress.
>
> IMPORTANT: The user provided reference URLs (https://najamacademy.com/, https://www.instagram.com/najamacademy/, https://www.facebook.com/najamacademyofficial). External web content from these URLs is included in this message. Use the actual titles, descriptions, and content found on those pages as the basis for demo objects. Do NOT generate generic placeholder content when real content is available from the crawled pages.
>
> The user is rebuilding an existing website and provided these design notes: Najam Academy. Factor these preferences into the content structure."

### Code Generation Prompt

> "Build a Next.js application for a website called 'Learn Quran experienced'. Learn Quran with experienced and dedicated tutors through engaging online classes designed for students of all ages. Our lessons cover Tajweed, recitation, memorization, and Quran understanding using simple and effective teaching methods. With Affordable Online Quran Academy students can enjoy flexible schedules, one-on-one guidance, and personalized support from home. We focus on making Quran education accessible, convenient, and effective for every learner seeking steady progress."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with the content types: `tutors`, `courses`, `pricing-plans`, `testimonials`

### Installation

```bash
bun install
bun run dev
```

Set environment variables (added automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all courses with connected tutors
const { objects: courses } = await cosmic.objects
  .find({ type: 'courses' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single tutor
const { object: tutor } = await cosmic.objects
  .findOne({ type: 'tutors', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app reads four content types from your bucket — `tutors`, `courses`, `pricing-plans`, and `testimonials` — using the [Cosmic SDK](https://www.cosmicjs.com/docs). All fetching happens in server components for security, with `depth(1)` used to resolve connected objects (e.g., a course's tutors).

## Deployment Options

- **Vercel**: Import the repo and add the `COSMIC_*` environment variables.
- **Netlify**: Set the same environment variables in the dashboard.

<!-- README_END -->