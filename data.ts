import { Category, Product, Testimonial, FaqItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'JFS Gold Whey Standard',
    category: Category.WHEY_PROTEIN,
    price: 65.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070&auto=format&fit=crop',
    description: 'Premium whey protein concentrate for muscle recovery.',
    isTrending: true,
    discount: 31,
  },
  {
    id: '2',
    name: 'Iso-Pure Zero Carb',
    category: Category.WHEY_ISOLATE,
    price: 85.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1974&auto=format&fit=crop',
    description: '100% Whey Protein Isolate with zero carbs and zero sugar.',
    isTrending: true,
    discount: 17,
  },
  {
    id: '3',
    name: 'Mass Monster 5000',
    category: Category.MASS_GAINER,
    price: 55.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    description: 'High calorie mass gainer for hard gainers.',
    discount: 8,
  },
  {
    id: '4',
    name: 'Ignite Pre-Workout',
    category: Category.PRE_WORKOUT,
    price: 35.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1623875604107-166299d6387a?q=80&w=1974&auto=format&fit=crop',
    description: 'Explosive energy and focus for your workouts.',
    isTrending: true,
    discount: 33,
  },
  {
    id: '5',
    name: 'Amino Recovery BCAA',
    category: Category.BCAA_EAA,
    price: 28.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1616646545733-41a4959db4b8?q=80&w=1974&auto=format&fit=crop',
    description: 'Essential amino acids to prevent muscle breakdown.',
    discount: 25,
  },
  {
    id: '6',
    name: 'Thermo Shred',
    category: Category.FAT_BURNER,
    price: 40.00,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070&auto=format&fit=crop',
    description: 'Advanced thermogenic fat burner.',
  },
  {
    id: '7',
    name: 'Liquid L-Carnitine 3000',
    category: Category.L_CARNITINE,
    price: 25.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    description: 'Convert fat into energy with high potency L-Carnitine.',
  },
  {
    id: '8',
    name: 'Hydro Whey Pro',
    category: Category.WHEY_ISOLATE,
    price: 90.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1974&auto=format&fit=crop',
    description: 'Fastest absorbing hydrolyzed whey protein.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Nancy Verma',
    role: 'Olympic Medalist',
    content: 'I am thrilled with my experience at JFS! As a fitness enthusiast, their extensive range of Indian and imported supplements cater to all my nutritional needs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'Ajay Singh',
    role: 'Fitness Enthusiast',
    content: 'The seamless online shopping experience, prompt delivery, and quality products make JFS my go-to destination for all things fitness. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 't3',
    name: 'Raman Sharma',
    role: 'Doctor',
    content: 'JFS is my trusted source for genuine supplements. Their commitment to providing authentic products sets them apart. I rely on them for original, high-quality supplements.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Are JFS products lab tested?',
    answer: 'Yes, every batch is third-party lab tested for purity and banned substances. We believe that every scoop should be genuine.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days. Express shipping options are available at checkout.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently we ship to US, Canada, and UK. We are expanding to more regions soon.',
  },
  {
    question: 'What is the return policy?',
    answer: 'We offer a 30-day money-back guarantee on unopened products. If you are not satisfied, contact our support team.',
  },
];

export const CATEGORIES_LIST = [
  { name: 'EAA/BCAA', image: '' },
  { name: 'Fat Burner', image: '' },
  { name: 'Mass Gainer', image: '' },
  { name: 'Multivitamin', image: '' },
  { name: 'Oats/Muesli', image: '' },
  { name: 'Whey Protein', image: '' },
  { name: 'Whey Isolate', image: '' },
  { name: 'Shilajit', image: '' },
];

export const BRANDS_LIST = [
  'Optimum Nutrition', 'Dymatize', 'Best Nutrition', 'Muscletech', 'Fast&Up',
  'MuscleBlaze', 'PVL', 'Doctors Choice', 'GNC', 'BigMuscles'
];

export const FEATURES_LIST = [
  { title: 'PROVEN BY SCIENCE', desc: 'Backed by rigorous research and testing, our formulations deliver results grounded in solid data.' },
  { title: 'CRAFTED BY NUTRITIONISTS', desc: 'Our products are born from the expertise of nutritionists who obsess over every detail.' },
  { title: 'CERTIFIED BY THIRD PARTIES', desc: 'Trusted third-party certifications ensure quality, safety, and performance are never compromised.' },
  { title: 'QUALITY FROM START TO FINISH', desc: 'We control every step of production, from sourcing the best ingredients to manufacturing, ensuring pure quality.' },
];