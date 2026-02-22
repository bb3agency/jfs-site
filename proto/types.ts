export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand: string;
  rating: number;
  ingredients?: string;
  benefits?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Transformation {
  id: string;
  name: string;
  duration: string;
  imageBefore: string;
  imageAfter: string;
  testimonial: string;
  result: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface CoachingPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  features: string[];
}
