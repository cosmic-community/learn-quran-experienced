export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export type Gender = 'Male' | 'Female';

export interface Tutor extends CosmicObject {
  type: 'tutors';
  metadata: {
    name?: string;
    photo?: CosmicImage;
    bio?: string;
    gender?: Gender | string;
    years_experience?: number;
    specializations?: string[];
  };
}

export interface Course extends CosmicObject {
  type: 'courses';
  metadata: {
    course_name?: string;
    featured_image?: CosmicImage;
    short_description?: string;
    full_description?: string;
    level?: string;
    age_group?: string;
    lesson_format?: string;
    tutors?: Tutor[];
  };
}

export interface PricingPlan extends CosmicObject {
  type: 'pricing-plans';
  metadata: {
    plan_name?: string;
    price?: number;
    billing_period?: string;
    classes_per_week?: number;
    class_duration?: string;
    features?: string;
    most_popular?: boolean;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name?: string;
    photo?: CosmicImage;
    location?: string;
    quote?: string;
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}