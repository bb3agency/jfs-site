export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: string;
  price: number;
  mrp?: number;
  image: string;
  images?: string[];
  description: string;
  weight?: string;
  isTrending?: boolean;
  discount?: number;
  flavours?: Flavour[];
}

export interface Flavour {
  name: string;
  image: string;
}

export enum Category {
  WHEY_PROTEIN = 'Whey Protein',
  WHEY_ISOLATE = 'Whey Isolate',
  MASS_GAINER = 'Mass Gainer',
  PRE_WORKOUT = 'Pre-Workout',
  BCAA_EAA = 'BCAA & EAA',
  FAT_BURNER = 'Fat Burner',
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Transformation {
  id: string;
  name: string;
  duration: string;
  imageBefore?: string;
  imageAfter?: string;
  image?: string;
  aspectRatio?: '1-1' | '4-3';
  testimonial: string;
  result: string;
}

export interface CoachingPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  features: string[];
}