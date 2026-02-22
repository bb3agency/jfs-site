import { Product, Transformation, Testimonial, CoachingPackage } from './types';

export const WHATSAPP_NUMBER = "919000421844"; // Updated number for orders

export const HERO_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop", // Moody Bodybuilder (Main)
    alt: "Build Muscle",
    tagline: "ELITE PERFORMANCE"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop", // Transformation 1
    alt: "Transformation Journey",
    tagline: "REAL RESULTS"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Gold Standard Whey Protein",
    price: 6499,
    category: "Whey Protein",
    brand: "Optimum Nutrition",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop",
    description: "The world's best-selling whey protein. 24g of protein per serving to support muscle building and recovery.",
    benefits: ["24g Protein per serving", "5.5g BCAAs", "Gluten Free"],
    ingredients: "Whey Protein Isolate, Whey Protein Concentrate, Cocoa, Natural Flavor"
  },
  {
    id: "p2",
    name: "NitroTech Ripped",
    price: 5699,
    category: "Whey Isolate",
    brand: "MuscleTech",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
    description: "Advanced protein formula featuring L-carnitine and CLA for weight loss support.",
    benefits: ["30g Protein", "500mg L-Carnitine", "250mg CLA"],
    ingredients: "Isolate Protein Matrix, L-Carnitine L-Tartrate, CLA"
  },
  {
    id: "p3",
    name: "Serious Mass Gainer",
    price: 3499,
    category: "Mass Gainer",
    brand: "Optimum Nutrition",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1550505963-f93315a6b093?q=80&w=800&auto=format&fit=crop",
    description: "High-calorie weight gainer for building serious muscle mass.",
    benefits: ["1250 Calories", "50g Protein", "250g Carbs"],
    ingredients: "Maltodextrin, Protein Blend, Vitamin Blend"
  },
  {
    id: "p4",
    name: "C4 Original Pre-Workout",
    price: 2199,
    category: "Pre Workout",
    brand: "Cellucor",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop",
    description: "Explosive energy, heightened focus and an overwhelming urge to tackle any challenge.",
    benefits: ["150mg Caffeine", "1.6g CarnoSyn Beta-Alanine", "Creatine Nitrate"],
    ingredients: "CarnoSyn Beta-Alanine, Micronized Creatine Monohydrate, Caffeine Anhydrous"
  },
  {
    id: "p5",
    name: "Micronized Creatine Monohydrate",
    price: 999,
    category: "Creatine",
    brand: "MuscleBlaze",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585298915152-475a7c2e3658?q=80&w=800&auto=format&fit=crop",
    description: "Pure micronized creatine monohydrate for improved strength and power.",
    benefits: ["3g Creatine per serving", "Unflavored", "Micronized for absorption"],
    ingredients: "Creatine Monohydrate"
  },
  {
    id: "p6",
    name: "Animal Pak Multivitamin",
    price: 3200,
    category: "Multivitamin",
    brand: "Universal Nutrition",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    description: "The complete nutritional training pack for the hard-training athlete.",
    benefits: ["Vitamin Complex", "Amino Acid Complex", "Performance Complex"],
    ingredients: "Vitamin A, C, D, E, B-Complex, Minerals, Amino Acids"
  },
  {
    id: "p7",
    name: "Hydroxycut Hardcore",
    price: 1899,
    category: "Fat Burner",
    brand: "MuscleTech",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop",
    description: "Powerful weight loss formula for extreme energy and focus.",
    benefits: ["Extreme Energy", "Enhanced Focus", "Weight Loss Support"],
    ingredients: "Caffeine Anhydrous, Green Coffee Extract, Yohimbe"
  },
  {
    id: "p8",
    name: "Gym Shaker Bottle",
    price: 299,
    category: "Accessories",
    brand: "JFS Gear",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=800&auto=format&fit=crop",
    description: "Leak-proof shaker bottle with blender ball.",
    benefits: ["Leak Proof", "BPA Free", "700ml Capacity"],
    ingredients: "N/A"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "t1",
    name: "Rahul Sharma",
    duration: "12 Weeks",
    imageBefore: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
    testimonial: "The coaching changed my life. I lost 15kg and gained pure muscle.",
    result: "Lost 15kg Fat, Gained 4kg Muscle"
  },
  {
    id: "t2",
    name: "Vikram Singh",
    duration: "24 Weeks",
    imageBefore: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400&auto=format&fit=crop",
    testimonial: "JFS Protein plans are intense but worth every drop of sweat.",
    result: "Comp Prep Ready"
  },
  {
    id: "t3",
    name: "Amit Patel",
    duration: "16 Weeks",
    imageBefore: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
    testimonial: "From skinny to muscular. The mass gainer stack works wonders.",
    result: "Gained 12kg Lean Mass"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tm1",
    name: "Nancy Verma",
    role: "Olympic Medalist",
    rating: 5,
    text: "I am thrilled with my experience at JFS Protein! Their extensive range of supplements cater to all my nutritional needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "tm2",
    name: "Ajay Singh",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "The seamless online shopping experience, prompt delivery, and quality products make JFS Protein my go-to destination.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const COACHING_PACKAGES: CoachingPackage[] = [
  {
    id: "c1",
    title: "12 Week Transformation",
    duration: "12 Weeks",
    price: 12000,
    features: [
      "Customized Diet Plan",
      "Workout Split Routine",
      "Supplement Guidance",
      "Weekly Check-ins via WhatsApp",
      "Form Correction"
    ]
  },
  {
    id: "c2",
    title: "24 Week Pro Athlete",
    duration: "24 Weeks",
    price: 20000,
    features: [
      "Advanced Carb Cycling Diet",
      "Periodized Workout Program",
      "Advanced Supplement Stack",
      "24/7 WhatsApp Support",
      "Video Call Consultations (Bi-weekly)"
    ]
  }
];

export const CATEGORIES = [
  { 
    name: "Creatine", 
    image: "https://images.unsplash.com/photo-1585298915152-475a7c2e3658?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "EAA/BCAA", 
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Fat Burner", 
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Mass Gainer", 
    image: "https://images.unsplash.com/photo-1550505963-f93315a6b093?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Multivitamin", 
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Oats/Muesli", 
    image: "https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Whey Protein", 
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Whey Isolate", 
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&auto=format&fit=crop"
  }
];