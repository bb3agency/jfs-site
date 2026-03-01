import { Category, Product, Testimonial, FaqItem, Transformation, CoachingPackage } from './types';

// --- Vite Glob Import for all product images ---
// This automatically resolves all .webp files in the products_images directory at build time.
const imageModules = import.meta.glob('./assets/products_images/**/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

function img(path: string): string {
  const key = `./assets/products_images/${path}`;
  return imageModules[key] || '';
}

// --- Vite Glob Import for transformation images ---
const transImageModules = import.meta.glob('./assets/transformations/*.jpeg', { eager: true, import: 'default' }) as Record<string, string>;

function imgTrans(filename: string): string {
  const key = `./assets/transformations/${filename}`;
  return transImageModules[key] || '';
}

// --- Vite Glob Import for brand logos ---
const logoImageModules = import.meta.glob('./assets/Logos/*.(jpg|jpeg|png|webp|svg|avif)', { eager: true, import: 'default' }) as Record<string, string>;

function imgLogo(filename: string): string {
  const key = `./assets/Logos/${filename}`;
  return logoImageModules[key] || '';
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
    price: 2200,
    mrp: 4000,
    discount: 45,
    image: img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA greenApple/dna-pharma-bcaa-green-apple.webp'),
    images: [
      img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA greenApple/dna-pharma-bcaa-green-apple.webp'),
      img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA litchi/dna-pharma-bcaa-litchi.webp'),
      img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA orange/dna-pharma-bcaa-orange.webp'),
      img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA watermelon/dna-pharma-bcaa-watermelon.webp'),
    ],
    description: 'Premium BCAA formula for enhanced recovery and muscle endurance. Available in multiple refreshing flavours.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA greenApple/dna-pharma-bcaa-green-apple.webp') },
      { name: 'Litchi', image: img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA litchi/dna-pharma-bcaa-litchi.webp') },
      { name: 'Orange', image: img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA orange/dna-pharma-bcaa-orange.webp') },
      { name: 'Watermelon', image: img('BCAA-EAA/DNA pharma BCAA-4k_2.2k/DNA watermelon/dna-pharma-bcaa-watermelon.webp') },
    ],
  },
  {
    id: 'bcaa-2',
    name: 'HM EAA+ BCAA',
    brand: 'Healthmania',
    category: Category.BCAA_EAA,
    price: 1600,
    mrp: 2400,
    discount: 33,
    image: img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp'),
    images: [
      img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp'),
      img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_2.webp'),
      img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_3.webp'),
      img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/Orange_splash/HM_EAA_BCAA_1.webp'),
      img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/Watermelon_splash/BCAAWatermelon_1.webp'),
    ],
    description: 'Complete EAA + BCAA complex with all 9 essential amino acids for maximum recovery and hydration.',
    isTrending: true,
    flavours: [
      { name: 'Black Currant', image: img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp') },
      { name: 'Orange', image: img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/Orange_splash/HM_EAA_BCAA_1.webp') },
      { name: 'Watermelon', image: img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/Watermelon_splash/BCAAWatermelon_1.webp') },
    ],
  },
  {
    id: 'bcaa-3',
    name: 'Incredi Bull BCAA',
    brand: 'Incredi Bull',
    category: Category.BCAA_EAA,
    price: 1200,
    mrp: 2000,
    discount: 40,
    image: img('BCAA-EAA/Incredi Bull BCAA-2k_1.2k/incredi_bull_BCAA.webp'),
    images: [
      img('BCAA-EAA/Incredi Bull BCAA-2k_1.2k/incredi_bull_BCAA.webp'),
    ],
    description: 'Budget-friendly BCAA supplement for intra-workout recovery and endurance.',
  },

  // ── Fat Burners ─────────────────────────────────────────────
  {
    id: 'fat-1',
    name: 'Blade Fat Burner',
    brand: 'Blade',
    category: Category.FAT_BURNER,
    price: 3500,
    mrp: 3500,
    image: img('Fat Burners/Blade Fat Burner-3.5k/BLDE_FAT.webp'),
    images: [
      img('Fat Burners/Blade Fat Burner-3.5k/BLDE_FAT.webp'),
    ],
    description: 'Thermogenic fat burner for accelerated metabolism and lean body composition.',
  },
  {
    id: 'fat-2',
    name: 'RFN Fat Storm Xtreme',
    brand: 'RFN',
    category: Category.FAT_BURNER,
    price: 2500,
    mrp: 2500,
    image: img('Fat Burners/RFN Fat Strom Xtreme-2.5k/RFN-Fat-Burner_1.webp'),
    images: [
      img('Fat Burners/RFN Fat Strom Xtreme-2.5k/RFN-Fat-Burner_1.webp'),
      img('Fat Burners/RFN Fat Strom Xtreme-2.5k/RFN fat burner_left_2.webp'),
      img('Fat Burners/RFN Fat Strom Xtreme-2.5k/RFN fat burner_right_3.webp'),
    ],
    description: 'Extreme thermogenic formula with green tea extract and L-Carnitine for maximum fat oxidation.',
    isTrending: true,
  },
  {
    id: 'fat-3',
    name: 'Swiss Life Fat Cutter',
    brand: 'Swiss Life',
    category: Category.FAT_BURNER,
    price: 7000,
    mrp: 7000,
    image: img('Fat Burners/Swiss Life Fat cutter-7k/swissFatCutter60_1.webp'),
    images: [
      img('Fat Burners/Swiss Life Fat cutter-7k/swissFatCutter60_1.webp'),
      img('Fat Burners/Swiss Life Fat cutter-7k/swissleft_2.webp'),
      img('Fat Burners/Swiss Life Fat cutter-7k/swisslyf_right_3.webp'),
    ],
    description: 'Natural fat cutter with 60 capsules for daily metabolic support and weight management.',
  },

  // ── Mass Gainers ────────────────────────────────────────────
  {
    id: 'mass-1',
    name: 'DNA Pharma Mass Gainer',
    brand: 'DNA Pharma',
    category: Category.MASS_GAINER,
    price: 3500,
    mrp: 5000,
    discount: 30,
    image: img('Mass Gainers/DNA Pharma Mass Gainer-5k_3.5k/dna-pharma-mass.webp'),
    images: [
      img('Mass Gainers/DNA Pharma Mass Gainer-5k_3.5k/dna-pharma-mass.webp'),
    ],
    description: 'High-calorie mass gainer loaded with complex carbs and quality protein for maximum gains.',
  },
  {
    id: 'mass-2',
    name: 'HM Pro Bulk 3kg',
    brand: 'Healthmania',
    category: Category.MASS_GAINER,
    price: 2800,
    mrp: 4100,
    discount: 32,
    weight: '3kg',
    image: img('Mass Gainers/HM pro bulk 3kg-4.1k_2.8k/PRO-BULK-_1.webp'),
    images: [
      img('Mass Gainers/HM pro bulk 3kg-4.1k_2.8k/PRO-BULK-_1.webp'),
      img('Mass Gainers/HM pro bulk 3kg-4.1k_2.8k/PRO-BULK-_2.webp'),
      img('Mass Gainers/HM pro bulk 3kg-4.1k_2.8k/PRO-BULK-_3.webp'),
    ],
    description: 'Premium mass gainer with high protein-to-carb ratio. Ideal for hard gainers looking to put on serious size.',
    isTrending: true,
  },
  {
    id: 'mass-3',
    name: 'HM Pro Bulk 5kg',
    brand: 'Healthmania',
    category: Category.MASS_GAINER,
    price: 5000,
    mrp: 7400,
    discount: 32,
    weight: '5kg',
    image: img('Mass Gainers/HM pro bulk 5kg-7.4k_5k/probulk_5kg_1.webp'),
    images: [
      img('Mass Gainers/HM pro bulk 5kg-7.4k_5k/probulk_5kg_1.webp'),
      img('Mass Gainers/HM pro bulk 5kg-7.4k_5k/probulk_5kgl_2.webp'),
      img('Mass Gainers/HM pro bulk 5kg-7.4k_5k/probulk_5kg_3.webp'),
      img('Mass Gainers/HM pro bulk 5kg-7.4k_5k/prob_last_4.webp'),
    ],
    description: 'Extra-large mass gainer pack for serious bulking. High calorie formula with sustained release carbs.',
  },
  {
    id: 'mass-4',
    name: 'Incredi Bull Mass Gainer 3kg',
    brand: 'Incredi Bull',
    category: Category.MASS_GAINER,
    price: 2300,
    mrp: 3500,
    discount: 34,
    weight: '3kg',
    image: img('Mass Gainers/Incredi Bull Premium Mass Gianer 3kg-3.5k_2.3k/Mass-Gainer-incredibull-3kg-Current-View.webp'),
    images: [
      img('Mass Gainers/Incredi Bull Premium Mass Gianer 3kg-3.5k_2.3k/Mass-Gainer-incredibull-3kg-Current-View.webp'),
    ],
    description: 'Premium mass gainer with 1200+ calories per serving. Perfect for bulking phase.',
  },
  {
    id: 'mass-5',
    name: 'Incredi Bull Mass Gainer 5kg',
    brand: 'Incredi Bull',
    category: Category.MASS_GAINER,
    price: 4000,
    mrp: 5200,
    discount: 23,
    weight: '5kg',
    image: img('Mass Gainers/Incredi Bull Premium Mass Gianer 5kg-5.2k_4k/incredB_5kg_massG.webp'),
    images: [
      img('Mass Gainers/Incredi Bull Premium Mass Gianer 5kg-5.2k_4k/incredB_5kg_massG.webp'),
    ],
    description: 'Value pack mass gainer delivering high calories, quality protein, and essential nutrients for size.',
  },

  // ── Pre-Workout ─────────────────────────────────────────────
  {
    id: 'pre-1',
    name: 'DNA BRO Code Pre-Workout',
    brand: 'DNA Pharma',
    category: Category.PRE_WORKOUT,
    price: 2200,
    mrp: 4500,
    discount: 51,
    image: img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp'),
    images: [
      img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp'),
      img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_orange/dna-pharma-preworkout-orange_1.webp'),
      img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_watermelon/dna-pharma-preworkout-watermelo_1.webp'),
    ],
    description: 'Explosive pre-workout formula for insane pumps, energy, and focus. Multiple flavour options.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_greenApple/dna-pharma-preworkout-green-apple_1.webp') },
      { name: 'Orange', image: img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_orange/dna-pharma-preworkout-orange_1.webp') },
      { name: 'Watermelon', image: img('Pre-workout/DNA BRO code pre-4.5k_2.2k/pre_watermelon/dna-pharma-preworkout-watermelo_1.webp') },
    ],
  },
  {
    id: 'pre-2',
    name: 'HM Pro Pump (Caffeine-Free)',
    brand: 'Healthmania',
    category: Category.PRE_WORKOUT,
    price: 1700,
    mrp: 3200,
    discount: 47,
    image: img('Pre-workout/HM pump-3.2k_1.7k/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp'),
    images: [
      img('Pre-workout/HM pump-3.2k_1.7k/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp'),
      img('Pre-workout/HM pump-3.2k_1.7k/beach_cocktail/pro.pump.2.webp'),
      img('Pre-workout/HM pump-3.2k_1.7k/beach_cocktail/pro.pump.3.webp'),
      img('Pre-workout/HM pump-3.2k_1.7k/hm_wildGrape/wild_grapes_PRO_PUMP_CAFFEINE_FREE_1.webp'),
    ],
    description: 'Stimulant-free pre-workout for clean pumps and endurance without caffeine jitters. Night-workout friendly.',
    isTrending: true,
    flavours: [
      { name: 'Beach Cocktail', image: img('Pre-workout/HM pump-3.2k_1.7k/beach_cocktail/beach_cocktail_PRO_PUMP_CAFFEINE_FREE_1.webp') },
      { name: 'Wild Grapes', image: img('Pre-workout/HM pump-3.2k_1.7k/hm_wildGrape/wild_grapes_PRO_PUMP_CAFFEINE_FREE_1.webp') },
    ],
  },
  {
    id: 'pre-3',
    name: 'Incredi Bull Pre-Workout',
    brand: 'Incredi Bull',
    category: Category.PRE_WORKOUT,
    price: 1200,
    mrp: 1700,
    discount: 29,
    weight: '180g',
    image: img('Pre-workout/Incredi Bull pre-1.7k_1.2k/incredibull-pre-workout-180-g-Current-View.webp'),
    images: [
      img('Pre-workout/Incredi Bull pre-1.7k_1.2k/incredibull-pre-workout-180-g-Current-View.webp'),
    ],
    description: 'Budget-friendly pre-workout with essential energy boosters for intense training sessions.',
  },
  {
    id: 'pre-4',
    name: 'Kevin Levrone Shaaboom Pump',
    brand: 'Kevin Levrone',
    category: Category.PRE_WORKOUT,
    price: 2200,
    mrp: 3960,
    discount: 44,
    image: img('Pre-workout/Kevin Levron Shaboom pre-3.96k_2.2k/levrone-shaaboom-pump_1.webp'),
    images: [
      img('Pre-workout/Kevin Levron Shaboom pre-3.96k_2.2k/levrone-shaaboom-pump_1.webp'),
      img('Pre-workout/Kevin Levron Shaboom pre-3.96k_2.2k/facts_2.webp'),
    ],
    description: 'Legendary pump formula by Kevin Levrone. Maximum vasodilation and skin-splitting pumps.',
    isTrending: true,
  },
  {
    id: 'pre-6',
    name: 'MB The Wolf Pre-Workout',
    brand: 'MuscleBlaze',
    category: Category.PRE_WORKOUT,
    price: 1700,
    mrp: 3000,
    discount: 43,
    image: img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_GreenApple/MB_GA_1.webp'),
    images: [
      img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_GreenApple/MB_GA_1.webp'),
      img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_GreenApple/MB_GA_2.webp'),
      img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_cola/m-b-muscle-builder_1.webp'),
      img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_pinecolada/MB_wolf_1.webp'),
    ],
    description: 'Hardcore pre-workout by MuscleBlaze with beta-alanine, citrulline, and caffeine for maximum performance.',
    isTrending: true,
    flavours: [
      { name: 'Green Apple', image: img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_GreenApple/MB_GA_1.webp') },
      { name: 'Cola', image: img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_cola/m-b-muscle-builder_1.webp') },
      { name: 'Pina Colada', image: img('Pre-workout/MB The Wolf pre-3k_1.7k/MB_pinecolada/MB_wolf_1.webp') },
    ],
  },

  // ── Whey Isolate ────────────────────────────────────────────
  {
    id: 'iso-1',
    name: 'DNA Pharma Whey Isolate',
    brand: 'DNA Pharma',
    category: Category.WHEY_ISOLATE,
    price: 6500,
    mrp: 12000,
    discount: 46,
    image: img('Whey Isolate/DNA isolate-12k-6.5k/dna-pharma-isolate-whey-chocolate-browni.webp'),
    images: [
      img('Whey Isolate/DNA isolate-12k-6.5k/dna-pharma-isolate-whey-chocolate-browni.webp'),
    ],
    description: 'Ultra-filtered whey isolate with chocolate brownie flavour. Fast-absorbing, low fat, zero sugar.',
    flavours: [
      { name: 'Chocolate Brownie', image: img('Whey Isolate/DNA isolate-12k-6.5k/dna-pharma-isolate-whey-chocolate-browni.webp') },
    ],
  },
  {
    id: 'iso-2',
    name: 'HM Iso Zero 2kg',
    brand: 'Healthmania',
    category: Category.WHEY_ISOLATE,
    price: 6500,
    mrp: 11000,
    discount: 41,
    weight: '2kg',
    image: img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp'),
    images: [
      img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp'),
      img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakeleft.webp'),
      img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakeright.webp'),
      img('Whey Isolate/HM isolate-11k_6.5k/HM_ChocolateIcecream/IsoZero2kgchocolateice-creamfront.webp'),
    ],
    description: 'Premium zero-sugar whey isolate with 28g protein per scoop. Ultra-clean filtering for pure performance.',
    isTrending: true,
    flavours: [
      { name: 'Blueberry Cheesecake', image: img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp') },
      { name: 'Chocolate Ice-Cream', image: img('Whey Isolate/HM isolate-11k_6.5k/HM_ChocolateIcecream/IsoZero2kgchocolateice-creamfront.webp') },
    ],
  },
  {
    id: 'iso-3',
    name: 'Incredi Bull Isolate 2kg',
    brand: 'Incredi Bull',
    category: Category.WHEY_ISOLATE,
    price: 5500,
    mrp: 8500,
    discount: 35,
    weight: '2kg',
    image: img('Whey Isolate/Incredi Bull isolate-8.5k_5.5k/Isolate-incredibull-2kg-Current-View.webp'),
    images: [
      img('Whey Isolate/Incredi Bull isolate-8.5k_5.5k/Isolate-incredibull-2kg-Current-View.webp'),
    ],
    description: 'Affordable whey isolate with rapid absorption and minimal lactose for sensitive stomachs.',
  },

  // ── Whey Protein ────────────────────────────────────────────
  {
    id: 'whey-1',
    name: 'Bullion Whey Protein',
    brand: 'Bullion',
    category: Category.WHEY_PROTEIN,
    price: 6000,
    mrp: 9000,
    discount: 33,
    image: img('Whey Protein/Bullion Whey-9k_6k/Bullionwhey.webp'),
    images: [
      img('Whey Protein/Bullion Whey-9k_6k/Bullionwhey.webp'),
      img('Whey Protein/Bullion Whey-9k_6k/Bullion2.webp'),
      img('Whey Protein/Bullion Whey-9k_6k/Bullion3.webp'),
      img('Whey Protein/Bullion Whey-9k_6k/bullion4.webp'),
    ],
    description: 'Premium whey protein concentrate with rich taste and easy digestibility. Ideal for daily protein needs.',
  },
  {
    id: 'whey-2',
    name: 'HM Whey Protein',
    brand: 'Healthmania',
    category: Category.WHEY_PROTEIN,
    price: 4900,
    mrp: 8000,
    discount: 39,
    image: img('Whey Protein/HM whey-8k_4.9k/SALTED-CARAMEL-_1.webp'),
    images: [
      img('Whey Protein/HM whey-8k_4.9k/SALTED-CARAMEL-_1.webp'),
      img('Whey Protein/HM whey-8k_4.9k/SALTED-CARAMEL-_2.webp'),
      img('Whey Protein/HM whey-8k_4.9k/SALTED-CARAMEL-_3.webp'),
    ],
    description: 'High-quality whey protein with 24g protein per serving. Smooth texture and delicious salted caramel taste.',
    isTrending: true,
    flavours: [
      { name: 'Salted Caramel', image: img('Whey Protein/HM whey-8k_4.9k/SALTED-CARAMEL-_1.webp') },
    ],
  },
  {
    id: 'whey-3',
    name: 'Incredi Bull Whey Protein',
    brand: 'Incredi Bull',
    category: Category.WHEY_PROTEIN,
    price: 4900,
    mrp: 7200,
    discount: 32,
    image: img('Whey Protein/Incredi Bull-7.2k_4.9k/whey-incredibull-2kg-Current-View.webp'),
    images: [
      img('Whey Protein/Incredi Bull-7.2k_4.9k/whey-incredibull-2kg-Current-View.webp'),
      img('Whey Protein/Incredi Bull-7.2k_4.9k/whey-protein-premium-whey-protein-high-quality-fast-absorbing-original-imagn45eh3r4wm2q.webp'),
    ],
    description: 'Affordable, fast-absorbing whey concentrate for daily protein supplementation. Great value for money.',
  },
  {
    id: 'whey-4',
    name: 'V-Whey Protein',
    brand: 'V-Whey',
    category: Category.WHEY_PROTEIN,
    price: 6000,
    mrp: 10000,
    discount: 40,
    image: img('Whey Protein/V-Whey_10k_6k/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp'),
    images: [
      img('Whey Protein/V-Whey_10k_6k/vwhey.webp'),
      img('Whey Protein/V-Whey_10k_6k/Vwhey2.webp'),
      img('Whey Protein/V-Whey_10k_6k/Vwhey3.webp'),
      img('Whey Protein/V-Whey_10k_6k/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp'),
    ],
    description: 'Ultra-smooth whey protein with rich chocolate flavour. Mixes instantly with no clumps.',
    isTrending: true,
    flavours: [
      { name: 'Chocolate', image: img('Whey Protein/V-Whey_10k_6k/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp') },
    ],
  },
  {
    id: 'whey-5',
    name: 'DNA Pharma Whey Protein',
    brand: 'DNA Pharma',
    category: Category.WHEY_PROTEIN,
    price: 5500,
    mrp: 10000,
    discount: 45,
    image: img('Whey Protein/dna pharma-10k_5.5k/dna-pharma-whey.webp'),
    images: [
      img('Whey Protein/dna pharma-10k_5.5k/dna-pharma-whey.webp'),
      img('Whey Protein/dna pharma-10k_5.5k/dnapharma2.webp'),
    ],
    description: 'Lab-tested whey protein with FSSAI certification. 24g protein, 5.5g BCAAs per serving.',
  },
];

// ============================================================
// CATEGORY IMAGES (for Home page category display)
// ============================================================

export const CATEGORIES_LIST = [
  { name: 'Whey Protein', image: img('Whey Protein/V-Whey_10k_6k/chocolate_a74ca11a-3233-4b62-b511-fdd40e815fe3.webp') },
  { name: 'Whey Isolate', image: img('Whey Isolate/HM isolate-11k_6.5k/HM_Blueberrycheesecake/IsoZero2kgblueberrycheesecakefront.webp') },
  { name: 'Mass Gainer', image: img('Mass Gainers/Incredi Bull Premium Mass Gianer 3kg-3.5k_2.3k/Mass-Gainer-incredibull-3kg-Current-View.webp') },
  { name: 'Pre-Workout', image: img('Pre-workout/Incredi Bull pre-1.7k_1.2k/incredibull-pre-workout-180-g-Current-View.webp') },
  { name: 'BCAA & EAA', image: img('BCAA-EAA/HM EAA+ BCAA-2.4k_1.6k/BlackCurrent_splash/black-currant-EAA_BCAA-_1.webp') },
  { name: 'Fat Burner', image: img('Fat Burners/RFN Fat Strom Xtreme-2.5k/RFN-Fat-Burner_1.webp') },
];

// ============================================================
// BRANDS
// ============================================================

export interface BrandInfo {
  name: string;
  logo: string;
}

export const BRANDS_LIST: BrandInfo[] = [
  { name: 'Wellcore', logo: imgLogo('wellversed-logo_618-75px.svg') },
  { name: 'DNA Pharma', logo: imgLogo('DNA_Pharma_1-1.jpg') },
  { name: 'V-Whey', logo: imgLogo('V_SHAPE_90x.avif') },
  { name: 'Bullion', logo: imgLogo('Bullion_1080_445px.jpg') },
  { name: 'Incredi Bull', logo: imgLogo('IncrediBull_1-1.webp') },
  { name: 'MuscleBlaze', logo: imgLogo('muscleblaze_1-1.png') },
  { name: 'Kevin Levrone', logo: imgLogo('kevinlevrone_1-1.png') },
  { name: 'Labrada', logo: imgLogo('labrada_3840-2160px.webp') },
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
    id: "ct1",
    name: "Transformation 1",
    duration: "12 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.19 PM (1) 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "Incredible results in just 12 weeks. The diet plan was key.",
    result: "Major Fat Loss & Toning"
  },
  {
    id: "ct2",
    name: "Transformation 2",
    duration: "16 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.19 PM 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "Consistent effort and the right guidance made all the difference.",
    result: "Complete Body Recomposition"
  },
  {
    id: "ct5",
    name: "Transformation 5",
    duration: "16 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.20 PM 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "Diet and training synergy delivered incredible results.",
    result: "Shredded Physique"
  },
  {
    id: "ct4",
    name: "Transformation 4",
    duration: "20 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.20 PM (2) 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "From overweight to fit. Prabha Joy's coaching is world class.",
    result: "20kg Weight Loss"
  },
  {
    id: "ct3",
    name: "Transformation 3",
    duration: "12 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.20 PM (1) 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "The training program pushed me beyond my limits.",
    result: "Lean Muscle Gain"
  },
  {
    id: "ct6",
    name: "Transformation 6",
    duration: "24 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.21 PM 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "Six months of dedication paid off big time.",
    result: "Complete Transformation"
  },
  {
    id: "ct7",
    name: "Transformation 7",
    duration: "12 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.22 PM (1) 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "Quick results with the right supplement stack.",
    result: "Rapid Fat Loss"
  },
  {
    id: "ct8",
    name: "Transformation 8",
    duration: "16 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.22 PM (2) 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "The personalized approach made all the difference.",
    result: "Muscle Definition"
  },
  {
    id: "ct9",
    name: "Transformation 9",
    duration: "20 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.22 PM 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "Best investment I ever made in myself.",
    result: "Total Body Overhaul"
  },
  {
    id: "ct10",
    name: "Transformation 10",
    duration: "12 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.23 PM (1) 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "Visible abs in just 12 weeks. Unbelievable progress.",
    result: "Six Pack Achieved"
  },
  {
    id: "ct11",
    name: "Transformation 11",
    duration: "16 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.23 PM (2) 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "Strength gains and fat loss simultaneously.",
    result: "Body Recomposition"
  },
  {
    id: "ct12",
    name: "Transformation 12",
    duration: "24 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.23 PM 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "A complete lifestyle change guided by JFS.",
    result: "Lifestyle Transformation"
  },
  {
    id: "ct13",
    name: "Transformation 13",
    duration: "12 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.24 PM (1) 4-3.jpeg"),
    aspectRatio: "4-3",
    testimonial: "Incredible coaching and nutritional guidance.",
    result: "Lean & Mean"
  },
  {
    id: "ct14",
    name: "Transformation 14",
    duration: "16 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.24 PM (2) 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "From beginner to beast mode in 16 weeks.",
    result: "Massive Gains"
  },
  {
    id: "ct15",
    name: "Transformation 15",
    duration: "20 Weeks",
    image: imgTrans("WhatsApp Image 2026-02-26 at 9.33.24 PM 1-1.jpeg"),
    aspectRatio: "1-1",
    testimonial: "Prabha Joy's expertise is unmatched. Life-changing results.",
    result: "Peak Physique"
  }
];

export const COACHING_PACKAGES: CoachingPackage[] = [
  {
    id: "c1",
    title: "1-on-1 Personal Training",
    duration: "Customized Duration",
    features: [
      "In-Person Custom Training",
      "Macro-Calculated Diet Plan",
      "Scientific Split Routine",
      "Supplement Guidance",
      "Form Correction & Spotting",
      "Weekly Progress Tracking"
    ]
  },
  {
    id: "c2",
    title: "Online Coaching",
    duration: "Remote Training",
    features: [
      "Periodized Workout Program",
      "Advanced Diet Protocols",
      "Supplement Stacks",
      "24/7 WhatsApp Support",
      "Video Form Analysis",
      "Bi-weekly Video Call Consultations"
    ]
  }
];