import { createBucketClient } from '@cosmicjs/sdk'
import type { Tutor, Course, PricingPlan, Testimonial } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getTutors(): Promise<Tutor[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tutors' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Tutor[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch tutors')
  }
}

export async function getTutor(slug: string): Promise<Tutor | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tutors', slug })
      .depth(1)
    return response.object as Tutor
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch tutor')
  }
}

export async function getCourses(): Promise<Course[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'courses' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Course[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch courses')
  }
}

export async function getCourse(slug: string): Promise<Course | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'courses', slug })
      .depth(1)
    return response.object as Course
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch course')
  }
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-plans' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as PricingPlan[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch pricing plans')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch testimonials')
  }
}