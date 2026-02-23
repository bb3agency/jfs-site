import { Category, Product, Testimonial, FaqItem, Transformation, CoachingPackage } from './types';

// --- Vite Glob Import for all product images ---
// This automatically resolves all .webp files in the products_images directory at build time.
const imageModules = import.meta.glob('./assets/products_images/**/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

function img(path: string): string {
  const key = `./assets/products_images/${path}`;
  return imageModules[key] || '';
}

// ============================================================
// PRODUCTS
// ============================================================

export const PRODUCTS: Product[] = [
  // ── BCAA & EAA ──────────────────────────────────────────────
  {
    id: 'bcaa-1',
    name: 'DNA Pharma BCAA',
    brand: 'DNA Pharma',
    category: Category.BCAA_EAA,
    price: 1299,
    image: img('BCAA-EAA/DNA pharma BCAA/DNA greenApple/dna-pharma-bcaa-green-apple.webp'),
    images: [
      img('BCAA-EAA/DNA pharma BCAA/DNA greenApple/dna-pharma-bcaa-green-apple.webp'),
      img('BCAA-EAA/DNA pharma BCAA/DNA litchi/dna-pharma-bcaa-litchi.webp'),
      img('BCAA-EAA/DNA pharma BCAA/DNA orange/dna-pharma-bcaa-orange.webp'),
      img('BCAA-EAA/DNA pharma BCAA/DNA watermelon/dna-pharma-bcaa-watermelon.webp'),
    ],
    description: 'Premium BCAA formula for enhanced recovery and muscle endurance. Available in multiple refreshing flavours.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('BCAA-EAA/DNA pharma BCAA/DNA greenApple/dna-pharma-bcaa-green-apple.webp') },
      { name: 'Litchi', image: img('BCAA-EAA/DNA pharma BCAA/DNA litchi/dna-pharma-bcaa-litchi.webp') },
      { name: 'Orange', image: img('BCAA-EAA/DNA pharma BCAA/DNA orange/dna-pharma-bcaa-orange.webp') },
      { name: 'Watermelon', image: img('BCAA-EAA/DNA pharma BCAA/DNA watermelon/dna-pharma-bcaa-watermelon.webp') },
    ],
  },
  {
    id: 'bcaa-2',
    name: 'HM EAA & BCAA',
    brand: 'Healthmania',
    category: Category.BCAA_EAA,
    price: 1499,
    image: img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp'),
    images: [
      img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp'),
      img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_2.webp'),
      img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_3.webp'),
      img('BCAA-EAA/HM EAA+ BCAA/Orange_splash/HM_EAA_BCAA_1.webp'),
      img('BCAA-EAA/HM EAA+ BCAA/Watermelon_splash/BCAAWatermelon_1.webp'),
    ],
    description: 'Complete EAA + BCAA complex with all 9 essential amino acids for maximum recovery and hydration.',
    isTrending: true,
    flavours: [
      { name: 'Black Currant', image: img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp') },
      { name: 'Orange', image: img('BCAA-EAA/HM EAA+ BCAA/Orange_splash/HM_EAA_BCAA_1.webp') },
      { name: 'Watermelon', image: img('BCAA-EAA/HM EAA+ BCAA/Watermelon_splash/BCAAWatermelon_1.webp') },
    ],
  },
  {
    id: 'bcaa-3',
    name: 'Incredi Bull BCAA',
    brand: 'Incredi Bull',
    category: Category.BCAA_EAA,
    price: 999,
    image: img('BCAA-EAA/Incredi Bull BCAA/incredi_bull_BCAA.webp'),
    images: [
      img('BCAA-EAA/Incredi Bull BCAA/incredi_bull_BCAA.webp'),
    ],
    description: 'Budget-friendly BCAA supplement for intra-workout recovery and endurance.',
  },

  // ── Fat Burners ─────────────────────────────────────────────
  {
    id: 'fat-1',
    name: 'Blade Fat Burner',
    brand: 'Blade',
    category: Category.FAT_BURNER,
    price: 1599,
    image: img('Fat Burners/Blade Fat Burner/BLDE_FAT.webp'),
    images: [
      img('Fat Burners/Blade Fat Burner/BLDE_FAT.webp'),
    ],
    description: 'Thermogenic fat burner for accelerated metabolism and lean body composition.',
  },
  {
    id: 'fat-2',
    name: 'RFN Fat Storm Xtreme',
    brand: 'RFN',
    category: Category.FAT_BURNER,
    price: 1899,
    image: img('Fat Burners/RFN Fat Strom Xtreme/RFN-Fat-Burner_1.webp'),
    images: [
      img('Fat Burners/RFN Fat Strom Xtreme/RFN-Fat-Burner_1.webp'),
      img('Fat Burners/RFN Fat Strom Xtreme/RFN fat burner_left_2.webp'),
      img('Fat Burners/RFN Fat Strom Xtreme/RFN fat burner_right_3.webp'),
    ],
    description: 'Extreme thermogenic formula with green tea extract and L-Carnitine for maximum fat oxidation.',
    isTrending: true,
  },
  {
    id: 'fat-3',
    name: 'Swiss Life Fat Cutter',
    brand: 'Swiss Life',
    category: Category.FAT_BURNER,
    price: 1399,
    image: img('Fat Burners/Swiss Life Fat cutter/swissFatCutter60_1.webp'),
    images: [
      img('Fat Burners/Swiss Life Fat cutter/swissFatCutter60_1.webp'),
      img('Fat Burners/Swiss Life Fat cutter/swissleft_2.webp'),
      img('Fat Burners/Swiss Life Fat cutter/swisslyf_right_3.webp'),
    ],
    description: 'Natural fat cutter with 60 capsules for daily metabolic support and weight management.',
  },

  // ── L-Carnitine ─────────────────────────────────────────────
  {
    id: 'lcar-1',
    name: 'Labrada Supercharge Cranberry',
    brand: 'Labrada',
    category: Category.L_CARNITINE,
    price: 1799,
    image: img('L-Carnitine/LabradaSuperchargeCranberry.webp'),
    images: [
      img('L-Carnitine/LabradaSuperchargeCranberry.webp'),
    ],
    description: 'Liquid L-Carnitine with cranberry flavour for efficient fat transport and energy production.',
    isTrending: true,
  },

  // ── Mass Gainers ────────────────────────────────────────────
  {
    id: 'mass-1',
    name: 'DNA Pharma Mass Gainer',
    brand: 'DNA Pharma',
    category: Category.MASS_GAINER,
    price: 2499,
    image: img('Mass Gainers/DNA Pharma Mass Gainer/dna-pharma-mass.webp'),
    images: [
      img('Mass Gainers/DNA Pharma Mass Gainer/dna-pharma-mass.webp'),
    ],
    description: 'High-calorie mass gainer loaded with complex carbs and quality protein for maximum gains.',
  },
  {
    id: 'mass-2',
    name: 'HM Pro Bulk 3kg',
    brand: 'Healthmania',
    category: Category.MASS_GAINER,
    price: 2799,
    weight: '3kg',
    image: img('Mass Gainers/HM pro bulk 3kg/PRO-BULK-_1.webp'),
    images: [
      img('Mass Gainers/HM pro bulk 3kg/PRO-BULK-_1.webp'),
      img('Mass Gainers/HM pro bulk 3kg/PRO-BULK-_2.webp'),
      img('Mass Gainers/HM pro bulk 3kg/PRO-BULK-_3.webp'),
    ],
    description: 'Premium mass gainer with high protein-to-carb ratio. Ideal for hard gainers looking to put on serious size.',
    isTrending: true,
  },
  {
    id: 'mass-3',
    name: 'HM Pro Bulk 5kg',
    brand: 'Healthmania',
    category: Category.MASS_GAINER,
    price: 3999,
    weight: '5kg',
    image: img('Mass Gainers/HM pro bulk 5kg/probulk_5kg_1.webp'),
    images: [
      img('Mass Gainers/HM pro bulk 5kg/probulk_5kg_1.webp'),
      img('Mass Gainers/HM pro bulk 5kg/probulk_5kgl_2.webp'),
      img('Mass Gainers/HM pro bulk 5kg/probulk_5kg_3.webp'),
      img('Mass Gainers/HM pro bulk 5kg/prob_last_4.webp'),
    ],
    description: 'Extra-large mass gainer pack for serious bulking. High calorie formula with sustained release carbs.',
  },
  {
    id: 'mass-4',
    name: 'Incredi Bull Mass Gainer 3kg',
    brand: 'Incredi Bull',
    category: Category.MASS_GAINER,
    price: 2299,
    weight: '3kg',
    image: img('Mass Gainers/Incredi Bull Premium Mass Gianer 3kg/Mass-Gainer-incredibull-3kg-Current-View.webp'),
    images: [
      img('Mass Gainers/Incredi Bull Premium Mass Gianer 3kg/Mass-Gainer-incredibull-3kg-Current-View.webp'),
    ],
    description: 'Premium mass gainer with 1200+ calories per serving. Perfect for bulking phase.',
  },
  {
    id: 'mass-5',
    name: 'Incredi Bull Mass Gainer 5kg',
    brand: 'Incredi Bull',
    category: Category.MASS_GAINER,
    price: 3499,
    weight: '5kg',
    image: img('Mass Gainers/Incredi Bull Premium Mass Gianer 5kg/incredB_5kg_massG.webp'),
    images: [
      img('Mass Gainers/Incredi Bull Premium Mass Gianer 5kg/incredB_5kg_massG.webp'),
    ],
    description: 'Value pack mass gainer delivering high calories, quality protein, and essential nutrients for size.',
  },

  // ── Pre-Workout ─────────────────────────────────────────────
  {
    id: 'pre-1',
    name: 'DNA BRO Code Pre-Workout',
    brand: 'DNA Pharma',
    category: Category.PRE_WORKOUT,
    price: 1499,
    image: img('Pre-workout/DNA BRO code pre/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp'),
    images: [
      img('Pre-workout/DNA BRO code pre/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp'),
      img('Pre-workout/DNA BRO code pre/pre_orange/dna-pharma-preworkout-orange_1.webp'),
      img('Pre-workout/DNA BRO code pre/pre_watermelon/dna-pharma-preworkout-watermelo_1.webp'),
    ],
    description: 'Explosive pre-workout formula for insane pumps, energy, and focus. Multiple flavour options.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('Pre-workout/DNA BRO code pre/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp') },
      { name: 'Orange', image: img('Pre-workout/DNA BRO code pre/pre_orange/dna-pharma-preworkout-orange_1.webp') },
      { name: 'Watermelon', image: img('Pre-workout/DNA BRO code pre/pre_watermelon/dna-pharma-preworkout-watermelo_1.webp') },
    ],
  },
  {
    id: 'pre-2',
    name: 'HM Pro Pump (Caffeine-Free)',
    brand: 'Healthmania',
    category: Category.PRE_WORKOUT,
    price: 1699,
    image: img('Pre-workout/HM pump/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp'),
    images: [
      img('Pre-workout/HM pump/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp'),
      img('Pre-workout/HM pump/beach_cocktail/pro.pump.2.webp'),
      img('Pre-workout/HM pump/beach_cocktail/pro.pump.3.webp'),
      img('Pre-workout/HM pump/hm_wildGrape/wild_grapes_PRO_PUMP_CAFFEINE_FREE_1.webp'),
    ],
    description: 'Stimulant-free pre-workout for clean pumps and endurance without caffeine jitters. Night-workout friendly.',
    isTrending: true,
    flavours: [
      { name: 'Beach Cocktail', image: img('Pre-workout/HM pump/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp') },
      { name: 'Wild Grapes', image: img('Pre-workout/HM pump/hm_wildGrape/wild_grapes_PRO_PUMP_CAFFEINE_FREE_1.webp') },
    ],
  },
  {
    id: 'pre-3',
    name: 'Incredi Bull Pre-Workout',
    brand: 'Incredi Bull',
    category: Category.PRE_WORKOUT,
    price: 999,
    weight: '180g',
    image: img('Pre-workout/Incredi Bull pre/incredibull-pre-workout-180-g-Current-View.webp'),
    images: [
      img('Pre-workout/Incredi Bull pre/incredibull-pre-workout-180-g-Current-View.webp'),
    ],
    description: 'Budget-friendly pre-workout with essential energy boosters for intense training sessions.',
  },
  {
    id: 'pre-4',
    name: 'Kevin Levrone Shaaboom Pump',
    brand: 'Kevin Levrone',
    category: Category.PRE_WORKOUT,
    price: 2999,
    image: img('Pre-workout/Kevin Levron Shaboom pre/levrone-shaaboom-pump_1.webp'),
    images: [
      img('Pre-workout/Kevin Levron Shaboom pre/levrone-shaaboom-pump_1.webp'),
      img('Pre-workout/Kevin Levron Shaboom pre/facts_2.webp'),
    ],
    description: 'Legendary pump formula by Kevin Levrone. Maximum vasodilation and skin-splitting pumps.',
    isTrending: true,
    discount: 10,
  },
  {
    id: 'pre-5',
    name: 'MB The Wolf Pre-Workout',
    brand: 'MuscleBlaze',
    category: Category.PRE_WORKOUT,
    price: 1999,
    image: img('Pre-workout/MB The Wolf pre/MB_GreenApple/MB_GA_1.webp'),
    images: [
      img('Pre-workout/MB The Wolf pre/MB_GreenApple/MB_GA_1.webp'),
      img('Pre-workout/MB The Wolf pre/MB_GreenApple/MB_GA_2.webp'),
      img('Pre-workout/MB The Wolf pre/MB_cola/m-b-muscle-builder_1.webp'),
      img('Pre-workout/MB The Wolf pre/MB_pinecolada/MB_wolf_1.webp'),
    ],
    description: 'Hardcore pre-workout by MuscleBlaze with beta-alanine, citrulline, and caffeine for maximum performance.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('Pre-workout/MB The Wolf pre/MB_GreenApple/MB_GA_1.webp') },
      { name: 'Cola', image: img('Pre-workout/MB The Wolf pre/MB_cola/m-b-muscle-builder_1.webp') },
      { name: 'Pina Colada', image: img('Pre-workout/MB The Wolf pre/MB_pinecolada/MB_wolf_1.webp') },
    ],
  },

  // ── Whey Isolate ────────────────────────────────────────────
  {
    id: 'iso-1',
    name: 'DNA Pharma Whey Isolate',
    brand: 'DNA Pharma',
    category: Category.WHEY_ISOLATE,
    price: 3499,
    image: img('Whey Isolate/DNA isolate/dna-pharma-isolate-whey-chocolate-browni.webp'),
    images: [
      img('Whey Isolate/DNA isolate/dna-pharma-isolate-whey-chocolate-browni.webp'),
    ],
    description: 'Ultra-filtered whey isolate with chocolate brownie flavour. Fast-absorbing, low fat, zero sugar.',
    flavours: [
      { name: 'Chocolate Brownie', image: img('Whey Isolate/DNA isolate/dna-pharma-isolate-whey-chocolate-browni.webp') },
    ],
  },
  {
    id: 'iso-2',
    name: 'HM Iso Zero 2kg',
    brand: 'Healthmania',
    category: Category.WHEY_ISOLATE,
    price: 4299,
    weight: '2kg',
    image: img('Whey Isolate/HM isolate/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp'),
    images: [
      img('Whey Isolate/HM isolate/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp'),
      img('Whey Isolate/HM isolate/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakeleft.webp'),
      img('Whey Isolate/HM isolate/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakeright.webp'),
      img('Whey Isolate/HM isolate/HM_ChocolateIcecream/IsoZero2kgchocolateice-creamfront.webp'),
    ],
    description: 'Premium zero-sugar whey isolate with 28g protein per scoop. Ultra-clean filtering for pure performance.',
    isTrending: true,
    discount: 15,
    flavours: [
      { name: 'Blueberry Cheesecake', image: img('Whey Isolate/HM isolate/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp') },
      { name: 'Chocolate Ice-Cream', image: img('Whey Isolate/HM isolate/HM_ChocolateIcecream/IsoZero2kgchocolateice-creamfront.webp') },
    ],
  },
  {
    id: 'iso-3',
    name: 'Incredi Bull Isolate 2kg',
    brand: 'Incredi Bull',
    category: Category.WHEY_ISOLATE,
    price: 2999,
    weight: '2kg',
    image: img('Whey Isolate/Incredi Bull isolate/Isolate-incredibull-2kg-Current-View.webp'),
    images: [
      img('Whey Isolate/Incredi Bull isolate/Isolate-incredibull-2kg-Current-View.webp'),
    ],
    description: 'Affordable whey isolate with rapid absorption and minimal lactose for sensitive stomachs.',
  },

  // ── Whey Protein ────────────────────────────────────────────
  {
    id: 'whey-1',
    name: 'Bullion Whey Protein',
    brand: 'Bullion',
    category: Category.WHEY_PROTEIN,
    price: 2999,
    image: img('Whey Protein/Bullion Whey/Bullionwhey.webp'),
    images: [
      img('Whey Protein/Bullion Whey/Bullionwhey.webp'),
      img('Whey Protein/Bullion Whey/Bullion2.webp'),
      img('Whey Protein/Bullion Whey/Bullion3.webp'),
      img('Whey Protein/Bullion Whey/bullion4.webp'),
    ],
    description: 'Premium whey protein concentrate with rich taste and easy digestibility. Ideal for daily protein needs.',
  },
  {
    id: 'whey-2',
    name: 'HM Whey Protein',
    brand: 'Healthmania',
    category: Category.WHEY_PROTEIN,
    price: 3199,
    image: img('Whey Protein/HM whey/SALTED-CARAMEL-_1.webp'),
    images: [
      img('Whey Protein/HM whey/SALTED-CARAMEL-_1.webp'),
      img('Whey Protein/HM whey/SALTED-CARAMEL-_2.webp'),
      img('Whey Protein/HM whey/SALTED-CARAMEL-_3.webp'),
    ],
    description: 'High-quality whey protein with 24g protein per serving. Smooth texture and delicious salted caramel taste.',
    isTrending: true,
    flavours: [
      { name: 'Salted Caramel', image: img('Whey Protein/HM whey/SALTED-CARAMEL-_1.webp') },
    ],
  },
  {
    id: 'whey-3',
    name: 'Incredi Bull Whey Protein',
    brand: 'Incredi Bull',
    category: Category.WHEY_PROTEIN,
    price: 2499,
    image: img('Whey Protein/Incredi Bull/whey-incredibull-2kg-Current-View.webp'),
    images: [
      img('Whey Protein/Incredi Bull/whey-incredibull-2kg-Current-View.webp'),
      img('Whey Protein/Incredi Bull/whey-protein-premium-whey-protein-high-quality-fast-absorbing-original-imagn45eh3r4wm2q.webp'),
    ],
    description: 'Affordable, fast-absorbing whey concentrate for daily protein supplementation. Great value for money.',
  },
  {
    id: 'whey-4',
    name: 'V-Whey Protein',
    brand: 'V-Whey',
    category: Category.WHEY_PROTEIN,
    price: 2799,
    image: img('Whey Protein/V-Whey/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp'),
    images: [
      img('Whey Protein/V-Whey/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp'),
      img('Whey Protein/V-Whey/Vwhey2.webp'),
      img('Whey Protein/V-Whey/Vwhey3.webp'),
      img('Whey Protein/V-Whey/vwhey.webp'),
    ],
    description: 'Ultra-smooth whey protein with rich chocolate flavour. Mixes instantly with no clumps.',
    isTrending: true,
    flavours: [
      { name: 'Chocolate', image: img('Whey Protein/V-Whey/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp') },
    ],
  },
  {
    id: 'whey-5',
    name: 'DNA Pharma Whey Protein',
    brand: 'DNA Pharma',
    category: Category.WHEY_PROTEIN,
    price: 2699,
    image: img('Whey Protein/dna pharma/dna-pharma-whey.webp'),
    images: [
      img('Whey Protein/dna pharma/dna-pharma-whey.webp'),
      img('Whey Protein/dna pharma/dnapharma2.webp'),
    ],
    description: 'Lab-tested whey protein with FSSAI certification. 24g protein, 5.5g BCAAs per serving.',
  },
];

// ============================================================
// CATEGORY IMAGES (for Home page category display)
// ============================================================

export const CATEGORIES_LIST = [
  { name: 'Whey Protein', image: img('Whey Protein/V-Whey/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp') },
  { name: 'Whey Isolate', image: img('Whey Protein/Incredi Bull/whey-incredibull-2kg-Current-View.webp') },
  { name: 'Mass Gainer', image: img('Mass Gainers/DNA Pharma Mass Gainer/dna-pharma-mass.webp') },
  { name: 'Pre-Workout', image: img('Pre-workout/Kevin Levron Shaboom pre/levrone-shaaboom-pump_1.webp') },
  { name: 'BCAA & EAA', image: img('BCAA-EAA/HM EAA+ BCAA/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp') },
  { name: 'Fat Burner', image: img('Fat Burners/RFN Fat Strom Xtreme/RFN-Fat-Burner_1.webp') },
  { name: 'L-Carnitine', image: img('L-Carnitine/LabradaSuperchargeCranberry.webp') },
];

// ============================================================
// BRANDS
// ============================================================

export const BRANDS_LIST = [
  'Healthmania', 'DNA Pharma', 'Incredi Bull', 'Bullion', 'V-Whey',
  'MuscleBlaze', 'Kevin Levrone', 'Labrada', 'RFN', 'Swiss Life', 'Blade',
];

// ============================================================
// FEATURES
// ============================================================

export const FEATURES_LIST = [
  { title: 'PROVEN BY SCIENCE', desc: 'Backed by rigorous research and testing, our formulations deliver results grounded in solid data.' },
  { title: 'CRAFTED BY NUTRITIONISTS', desc: 'Our products are born from the expertise of nutritionists who obsess over every detail.' },
  { title: 'CERTIFIED BY THIRD PARTIES', desc: 'Trusted third-party certifications ensure quality, safety, and performance are never compromised.' },
  { title: 'QUALITY FROM START TO FINISH', desc: 'We control every step of production, from sourcing the best ingredients to manufacturing, ensuring pure quality.' },
];

// ============================================================
// TESTIMONIALS
// ============================================================

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

// ============================================================
// FAQS
// ============================================================

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
    answer: 'Currently we ship within India. We are expanding to more regions soon.',
  },
  {
    question: 'What is the return policy?',
    answer: 'We offer a 30-day money-back guarantee on unopened products. If you are not satisfied, contact our support team.',
  },
];

// ============================================================
// WHATSAPP & TRANSFORMATIONS & COACHING (from proto)
// ============================================================

export const WHATSAPP_NUMBER = "919000421844";

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