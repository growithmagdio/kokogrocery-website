import { Product, Category, GlobalMarket } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-rice',
    name: 'Rice',
    slug: 'rice',
    description: 'Premium Indian rice varieties including Ponni, Idly Rice, Seeraga Samba, Sona Masoori, Basmati, and Karuppu Kavuni rice.',
    count: 33,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-millets',
    name: 'Millets',
    slug: 'millets',
    description: 'Nutritious traditional Indian millets such as Foxtail Millet, Little Millet, Kodo Millet, Barnyard Millet, Finger Millet, Pearl Millet, and Sorghum.',
    count: 14,
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-pulses',
    name: 'Pulses',
    slug: 'pulses',
    description: 'High-quality lentils and pulses including Toor Dal, Urad Dal, Moong Dal, Chana Dal, Masoor Dal, Lobia, and whole pulses.',
    count: 21,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-spices',
    name: 'Spices & Seasonings',
    slug: 'spices-seasonings',
    description: 'A complete range of authentic Indian spices, spice powders, whole spices, masalas, and seasoning blends.',
    count: 94,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-coffee',
    name: 'Coffee',
    slug: 'coffee',
    description: 'Premium filter coffee, instant coffee, coffee powders, and specialty coffee products.',
    count: 12,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-frozen',
    name: 'Frozen Foods',
    slug: 'frozen-foods',
    description: 'Frozen vegetables, ready-to-cook products, frozen snacks, and convenience foods.',
    count: 19,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-snacks',
    name: 'Snacks & Sweets',
    slug: 'snacks-sweets',
    description: 'Traditional Indian snacks, savouries, sweets, bakery products, and ready-to-eat foods.',
    count: 97,
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cat-grocery',
    name: 'Grocery Products',
    slug: 'grocery-products',
    description: 'Pickles, flour, papad, jaggery, coconut products, dry fruits, ready mixes, beverages, and other essential grocery items.',
    count: 140,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
  },
];

export const PRODUCTS: Product[] = [
  // 1. SOUTH INDIAN PONNI BOILED RICE
  {
    id: 'prod-excel-01',
    name: 'South Indian Ponni Boiled Rice',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Mild, natural rice aroma. Soft, fluffy, and non-sticky raw parboiled medium grains. Ideal for everyday meals, pongal, idlis, and South Indian dishes.',
    briefing: 'Sourced from the fertile paddy fields nourished by the Cauvery River, Ponni Boiled Rice reflects the rich agricultural heritage of the region. The parboiling process locks in nutrients, giving each grain a soft texture and superior taste. Naturally aged for over 18 months, this rice cooks into fluffy, aromatic grains that perfectly complement South Indian meals like sambar rice, rasam rice, and curd rice.',
    specialFeatures: [
      'Naturally rich in carbohydrates, making it a wholesome choice for everyday meals and suitable for all age groups.',
      'Sourced from the Cauvery Delta region, Tamil Nadu.',
      'Naturally aged for over 18 months for enhanced flavor and texture.',
      'Non-sticky and easy to digest.'
    ],
    packFeatures: [
      'Sourced from the Cauvery Delta region',
      'Naturally aged for enhanced flavor and texture',
      'Non-sticky and easy to digest',
      'Ideal for daily meals and traditional South Indian dishes',
      'Hygienically processed and packed to retain freshness'
    ],
    origin: 'Cauvery Delta, Tamil Nadu',
    productType: 'Medium-grain rice',
    colour: 'Light golden',
    aroma: 'Mild, natural rice aroma',
    texture: 'Soft, fluffy, and non-sticky',
    usage: 'Ideal for everyday meals, pongal, idlis, and South Indian dishes',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['5 kg', '10 kg', '25 kg']
  },

  // 2. SOUTH INDIAN IDLY RICE
  {
    id: 'prod-excel-02',
    name: 'South Indian Idly Rice',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Raw short-grain white idly rice. Plump non-sticky raw grains for superior batter fermentation. Ideal for idli, dosa, and South Indian breakfasts.',
    briefing: 'Our premium South Indian Idly Rice, sourced from the fertile Cauvery fields. Short-grain, non-sticky, and naturally aromatic, it ensures soft, fluffy, and delicious breakfasts the authentic way.',
    specialFeatures: [
      'With ideal water absorption and non-sticky texture, it ensures perfect fermentation every time.',
      'Natural aroma and authentic flavor make every dish a true South Indian delight.',
      'Soft, spongy idlis and crispy dosas guaranteed.'
    ],
    packFeatures: [
      'Premium South Indian Idly Rice – soft, spongy idlis, crispy dosas, and authentic flavor in every grain',
      'Hygienically double-cleaned and optical color sorted',
      'Food-grade moisture-barrier packaging'
    ],
    origin: 'Andhra Pradesh, Telangana, Karnataka',
    productType: 'Short-grain raw rice',
    colour: 'White',
    aroma: 'Mild, natural rice aroma',
    texture: 'Soft and fluffy after steaming',
    usage: 'Ideal for idli, dosa, and other South Indian dishes',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=800&auto=format&fit=crop',
    packSizes: ['5 kg', '10 kg', '25 kg']
  },

  // 3. SEERAGA SAMBA RICE
  {
    id: 'prod-excel-03',
    name: 'Seeraga Samba Rice',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Raw short-grain aromatic rice. Tiny cumin-like raw grains with distinctive fragrance. Slightly firm, holds shape after cooking. Ideal for Biryani.',
    briefing: 'Seeraga Samba is one of the aromatic rice varieties preferred to make soulful biryani in the southern part of India. It contains selenium, which helps to prevent colon and intestine issues.',
    specialFeatures: [
      'The oil in seeraga samba rice helps reduce cholesterol, rich in dietary fiber.',
      'Reduces Low-Density Lipoprotein (LDL) cholesterol and increases High-Density Lipoprotein (HDL).',
      'Tiny grains absorb spices deeply without breaking during cooking.'
    ],
    packFeatures: [
      'Grown in the fertile soils of the Cauvery Delta, Tamil Nadu',
      'Naturally aromatic with a rich, earthy flavor for authentic South Indian dishes',
      'Slightly firm, non-sticky grains that remain fluffy after cooking',
      'Perfect for sambar, biryani, pongal, and traditional festive recipes',
      'Hygienically processed and packed to retain freshness, aroma, and premium quality'
    ],
    origin: 'Tamil Nadu',
    productType: 'Short-grain raw aromatic rice',
    colour: 'Light brown',
    aroma: 'Distinctive aromatic fragrance',
    texture: 'Slightly firm, holds shape after cooking',
    usage: 'Ideal for biryani, pulav, and traditional South Indian recipes',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 4. SONNA MASOORI RICE
  {
    id: 'prod-excel-04',
    name: 'Sonna Masoori Rice',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Medium-grain raw white rice. Soft, non-sticky, low starch, easy to digest. Ideal for daily meals, sambar, rasam, and South Indian dishes.',
    briefing: 'Sona Masoori, often called "Bangaru Theegalu" or Golden Ivy due to the golden hue of its plants, is a unique rice variety born from the union of Sona and Masoori. Originating from Andhra Pradesh, Telangana, and Karnataka, it is primarily cultivated in South India. This medium-grain rice is aromatic, flavorful, and packed with nutrients.',
    specialFeatures: [
      'Low in starch, making it ideal for light, easy-to-digest meals.',
      'Sona masoori rice is nutrient-rich, packed with essential nutrients and energy-giving properties.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Andhra Pradesh, Telangana, and Karnataka',
      'Naturally light and aromatic for a flavorful dining experience',
      'Soft, fluffy, and non-sticky grains, easy to digest',
      'Perfect for everyday meals, idlis, pongal, and traditional South Indian dishes',
      'Hygienically processed and packed to preserve freshness and quality'
    ],
    origin: 'Cauvery Delta, Karnataka',
    productType: 'Medium-grain raw rice',
    colour: 'White',
    aroma: 'Mild, natural aroma',
    texture: 'Soft, non-sticky, easy to digest',
    usage: 'Ideal for daily meals, sambar, rasam, and South Indian dishes',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['5 kg', '10 kg', '20 kg']
  },

  // 5. BASMATHI RICE
  {
    id: 'prod-excel-05',
    name: 'Basmathi Rice',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Extra long slender raw Basmati rice. Nutty fragrance, long slender grains. Fluffy and separate grains after cooking. Ideal for biryani and pilaf.',
    briefing: 'Basmati Rice, often called the "Queen of Aromatic Rice", is a premium long-grain variety known for its distinct aroma, slender grains, and fluffy texture. Originating from the fertile plains of Punjab, Haryana, and Uttarakhand, it is cultivated with care to retain its natural fragrance and flavor.',
    specialFeatures: [
      'Basmati Rice is nutrient-rich, packed with essential vitamins and minerals for a healthy, wholesome diet.',
      'Elongates up to 2x after cooking with zero clumping.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Punjab, Haryana, and Uttarakhand',
      'Naturally aromatic with a delicate flavor for a premium dining experience',
      'Long, slender, and fluffy grains that remain non-sticky and easy to digest',
      'Perfect for everyday meals, biryani, pulao, fried rice, and other flavorful dishes',
      'Hygienically processed and packed to preserve freshness, aroma, and premium quality'
    ],
    origin: 'Haryana, Punjab, Uttarakhand',
    productType: 'Long-grain raw rice',
    colour: 'White',
    aroma: 'Nutty and fragrant',
    texture: 'Fluffy and separate grains after cooking',
    usage: 'Ideal for biryani, pilaf, and special occasions',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '10 kg', '25 kg']
  },

  // 6. KARUPUKAVINI RICE (BLACK KAVUNI RICE)
  {
    id: 'prod-excel-27',
    name: 'Karuppu Kavuni Rice (Black Kavuni Rice)',
    category: 'Rice',
    categorySlug: 'rice',
    description: 'Traditional raw heritage black rice. Deep black to dark purple grains. Rich, chewy, and aromatic. Ideal for healthy meals, sweet kavuni arisi, and porridge.',
    briefing: 'Karuppu Kavuni is an ancient black rice with origins in the southern part of India. The rice was only available to royalty in ancient times ("Kavuni" translates into "gates of a fort" implying it was meant for consumption only within the gates of the fort). It is our endeavor to make it available to everyone.',
    specialFeatures: [
      'Famous for its deep purple hue and nutty aroma, it cooks glossy and slightly chewy, delivering a royal, antioxidant-rich meal.',
      'High anthocyanin antioxidant content exceeding blueberries.'
    ],
    packFeatures: [
      'Grown in nutrient-rich soil of Tamil Nadu following traditional farming practices',
      'High anthocyanin antioxidant content',
      'Deep black to dark purple color',
      'Ideal for healthy meals, kavuni arisi sweet, porridge',
      'Hygienically packed to retain freshness'
    ],
    origin: 'Tamil Nadu, Kerala',
    productType: 'Traditional raw heritage black rice',
    colour: 'Deep black to dark purple',
    aroma: 'Nutty aroma',
    texture: 'Rich, chewy, and aromatic when cooked',
    usage: 'Ideal for healthy meals, sweet dishes like kavuni arisi, porridge, and modern fusion recipes',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 7. TOOR DAL
  {
    id: 'prod-excel-06',
    name: 'Toor Dal',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw golden yellow split pigeon peas. Soft, fluffy, and cooks evenly. Ideal for sambar, dal fry, soups, and curries.',
    briefing: 'Toor dal or arhar dal is a rich source of protein, carbohydrates, and fibre. This humble pulse is known to meet your daily demands of iron and calcium. Besides these, toor dal is an incredible source of folic acids which is essential for fetal growth.',
    specialFeatures: [
      'High in protein and fiber, making it ideal for wholesome, easy-to-digest meals.',
      'Meets daily demands of iron, calcium, and essential folic acid.'
    ],
    packFeatures: [
      'Grown in the fertile regions of Maharashtra and Karnataka',
      'Naturally golden and aromatic',
      'Cooks soft and fluffy for authentic flavor',
      'Perfect for sambar, dal fry, and traditional dishes',
      'Cleaned, graded, and hygienically packed for purity'
    ],
    origin: 'Andhra Pradesh, Telangana, Karnataka',
    productType: 'Split pigeon peas',
    colour: 'Golden yellow',
    aroma: 'Mild, earthy aroma',
    texture: 'Soft, fluffy, and cooks evenly',
    usage: 'Ideal for sambar, dal fry, soups, and curries',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '2 kg', '5 kg', '25 kg']
  },

  // 8. MOONG DAL
  {
    id: 'prod-excel-07',
    name: 'Moong Dal',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw split green gram lentils. Soft, cooks quickly, easy to digest. Ideal for soups, dals, khichdi, and healthy meals.',
    briefing: 'Moong dal is a powerhouse of protein, dietary fibre, and essential nutrients. This wholesome pulse helps in maintaining good digestion and overall health.',
    specialFeatures: [
      'Rich in iron, potassium, and magnesium, moong dal supports heart health and energy levels.',
      'Excellent source of folate and antioxidants, making it ideal for a balanced and nourishing diet.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Rajasthan, Maharashtra, and Karnataka',
      'Naturally green and mildly sweet for a wholesome dining experience',
      'Cooks soft, light, and easily digestible, perfect for everyday meals',
      'Hygienically processed and packed to retain freshness and premium quality'
    ],
    origin: 'Rajasthan, Maharashtra, Karnataka',
    productType: 'Split green gram',
    colour: 'Light green',
    aroma: 'Mild, natural pulse aroma',
    texture: 'Soft, cooks quickly, easy to digest',
    usage: 'Ideal for soups, dals, khichdi, and healthy meals',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 9. MASOOR DAL
  {
    id: 'prod-excel-08',
    name: 'Masoor Dal (Red Lentils)',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw bright orange-red split lentils. Soft, creamy, and cooks quickly. Ideal for everyday meals like dal fry, soups, curries, stews.',
    briefing: 'Masoor dal is a rich source of protein, dietary fibre, and vital minerals. This nutritious pulse supports muscle growth, boosts energy, and aids in maintaining heart health. Its high iron and folate content make it especially beneficial for overall wellness and a balanced diet.',
    specialFeatures: [
      'Masoor Dal helps improve blood circulation and boosts energy levels.',
      'Excellent source of folate and antioxidants, promoting heart health and supporting overall wellness.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Madhya Pradesh, Uttar Pradesh, and Maharashtra',
      'Naturally red and earthy in flavor for a wholesome dining experience',
      'Cooks soft, creamy, and easily digestible, perfect for everyday meals',
      'Hygienically processed and packed to retain freshness and premium quality'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh, Maharashtra',
    productType: 'Split red lentils',
    colour: 'Orange-red',
    aroma: 'Earthy natural aroma',
    texture: 'Soft, creamy, and cooks quickly',
    usage: 'Ideal for everyday meals like dal fry, soups, curries, stews, and other wholesome Indian dishes',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 10. CHANA DAL
  {
    id: 'prod-excel-09',
    name: 'Chana Dal',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw split Bengal gram. Golden yellow, firm yet tender, cooks evenly. Ideal for dal tadka, curries, soups, and snacks.',
    briefing: 'Packed with protein, fiber, and essential minerals, Chana Dal fuels your body, supports digestion, and keeps your heart healthy. Rich in folate, magnesium, and potassium, it is the perfect pulse for a balanced and energetic lifestyle.',
    specialFeatures: [
      'Chana Dal supports muscle strength, aids digestion, and promotes heart health.',
      'Low glycemic index ideal for sustained energy without blood sugar spikes.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Madhya Pradesh, Uttar Pradesh, and Maharashtra',
      'Naturally golden and mildly nutty in flavor for a wholesome dining experience',
      'Cooks firm yet tender, easy to digest, perfect for everyday meals',
      'Hygienically processed and packed to retain freshness and premium quality'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh, Maharashtra',
    productType: 'Split Bengal gram',
    colour: 'Golden yellow',
    aroma: 'Mild, nutty aroma',
    texture: 'Firm yet tender, cooks evenly',
    usage: 'Ideal for dal tadka, curries, soups, and snacks',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 11. URAD DAL WHOLE WHITE
  {
    id: 'prod-excel-10',
    name: 'Urad Dal (White Dehusked)',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw dehusked white split black gram. Soft, creamy, and cooks evenly. Ideal for dals, idli, dosa batter, soups, curries.',
    briefing: 'Packed with protein, dietary fiber, and essential minerals, Urad Dal strengthens muscles, supports digestion, and promotes heart health. Rich in iron, folate, and potassium, it is the perfect pulse for a balanced lifestyle.',
    specialFeatures: [
      'Urad Dal is a protein-rich, iron-packed pulse with a soft, creamy texture.',
      'High mucilage content essential for fluffy idli and crispy dosa batter fermentation.'
    ],
    packFeatures: [
      'Grown in the fertile soils of Madhya Pradesh, Uttar Pradesh, and Maharashtra',
      'Naturally white and mildly earthy in flavor for a wholesome dining experience',
      'Cooks soft yet holds shape, easy to digest, perfect for everyday meals',
      'Hygienically processed and packed to retain freshness and premium quality'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh, Maharashtra',
    productType: 'Split black gram (dehusked)',
    colour: 'White',
    aroma: 'Mild, earthy aroma',
    texture: 'Soft, creamy, and cooks evenly',
    usage: 'Ideal for everyday meals like dals, idli, dosa batter, soups, curries, and other traditional Indian dishes',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 12. RAJMA RED LOBIA
  {
    id: 'prod-excel-11',
    name: 'Rajma Red Lobia',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw deep red kidney beans. Plump, firm, cooks soft. Ideal for rajma curry, soups, and salads.',
    briefing: 'Loaded with protein, fiber, and iron, Rajma supports energy and heart health while keeping you full and strong. A perfect addition to hearty meals.',
    specialFeatures: [
      'Distinct in flavor and texture, it cooks soft yet holds shape, absorbing spices perfectly for flavorful North Indian curries.',
      'Cultivated in the Himalayan foothills and northern plains.'
    ],
    packFeatures: [
      'Cultivated in the Himalayan foothills and northern plains',
      'Deep red color and firm texture',
      'Cooks soft while retaining shape',
      'Ideal for rajma masala and North Indian gravies',
      'Packed fresh to lock in nutrients and taste'
    ],
    origin: 'Jammu & Kashmir, Himachal Pradesh',
    productType: 'Kidney beans',
    colour: 'Deep red',
    aroma: 'Mild, earthy aroma',
    texture: 'Firm, cooks soft',
    usage: 'Ideal for rajma curry, soups, and salads',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 13. CHAWLA WHITE LOBIA
  {
    id: 'prod-excel-12',
    name: 'Chawla White Lobia',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw creamy white black-eyed cowpeas. Mildly nutty, wholesome for curries, stews, and healthy meals.',
    briefing: 'Rich in protein, fiber, and vitamins, White Lobia supports digestion, energy, and muscle health. A wholesome pulse for soups, stews, and curries.',
    specialFeatures: [
      'Naturally soft and mildly nutty, it cooks evenly and blends well with spices.',
      'Ideal for wholesome stews, gravies, and high-protein salads.'
    ],
    packFeatures: [
      'Premium quality sourced from Maharashtra and Madhya Pradesh',
      'Naturally creamy white and mildly nutty',
      'Cooks evenly with rich texture',
      'Ideal for curries, stews, and salads',
      'Hygienically processed and sealed for freshness'
    ],
    origin: 'Madhya Pradesh, Rajasthan',
    productType: 'Cowpeas / White Lobia',
    colour: 'Creamy white',
    aroma: 'Mild, earthy aroma',
    texture: 'Firm, cooks evenly',
    usage: 'Ideal for curries, stews, and healthy meals',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 14. ROASTED GRAM DAL
  {
    id: 'prod-excel-13',
    name: 'Roasted Gram Dal',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Dry-roasted split Bengal gram. Golden brown, crunchy, ready-to-eat. Ideal for snacks, chutneys, and health mixes.',
    briefing: 'High in protein and fiber, Roasted Gram Dal boosts energy, supports digestion, and makes a perfect guilt-free snack for anytime nutrition.',
    specialFeatures: [
      'Crunchy, protein-rich, and ready to eat, it offers instant nutrition and perfect crispness for snacks and chutneys.',
      'Dry-roasted to perfection with zero added oil or preservatives.'
    ],
    packFeatures: [
      'Made from high-quality Bengal gram',
      'Dry-roasted to perfection for crunch and aroma',
      'Protein-rich, ready to eat, and shelf-stable',
      'Ideal for snacks, chutneys, and health mixes',
      'Packed to preserve crispness and taste'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh',
    productType: 'Roasted split chickpeas',
    colour: 'Golden brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Crunchy, ready-to-eat',
    usage: 'Ideal for snacks, soups, and dals',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 15. KABULI CHANNA
  {
    id: 'prod-excel-14',
    name: 'Kabuli Channa',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw large beige chickpeas. Firm, cooks soft. Ideal for chole curries, salads, hummus, and snacks.',
    briefing: 'Packed with protein, fiber, and minerals, Kabuli Channa fuels your body, supports heart health, and promotes balanced energy for your daily meals.',
    specialFeatures: [
      'With plump, creamy texture and nutty taste, it adds flavor and protein to salads, curries, and hummus.',
      'Imported from select farms for superior extra-large grain quality.'
    ],
    packFeatures: [
      'Imported from select farms for superior quality',
      'Large, creamy grains with mild nutty flavor',
      'High in protein and minerals',
      'Ideal for chole, salads, and hummus',
      'Hygienically processed and packed airtight'
    ],
    origin: 'Madhya Pradesh, Rajasthan',
    productType: 'Chickpeas',
    colour: 'Light beige',
    aroma: 'Mild, nutty aroma',
    texture: 'Firm, cooks soft',
    usage: 'Ideal for curries, salads, hummus, and snacks',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 16. KALACHANA
  {
    id: 'prod-excel-15',
    name: 'Kalachana',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw whole black chickpeas. Dark brown / black, firm, cooks evenly. Ideal for stews, curries, chaat, and sprouts.',
    briefing: 'Rich in protein, fiber, and antioxidants, Kala Chana strengthens immunity, supports digestion, and helps maintain heart health naturally.',
    specialFeatures: [
      'Dark, robust, and rich in flavor, it holds shape well after cooking, perfect for curries, chaat, and power-packed meals.',
      'High fiber content aids weight management and diabetic wellness.'
    ],
    packFeatures: [
      'Sourced from Indian heartlands known for premium pulses',
      'Naturally dark brown and rich in nutrients',
      'Retains shape and taste after cooking',
      'Perfect for chaat, curries, and sprouts',
      'Packed under hygienic conditions to preserve freshness'
    ],
    origin: 'Madhya Pradesh, Maharashtra',
    productType: 'Black chickpeas',
    colour: 'Dark brown / black',
    aroma: 'Mild, earthy aroma',
    texture: 'Firm, cooks evenly',
    usage: 'Ideal for stews, curries, and healthy meals',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 17. DRY GREEN PEAS
  {
    id: 'prod-excel-16',
    name: 'Dry Green Peas',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw whole green peas. Green, firm, cooks soft. Ideal for soups, dals, patties, and curries.',
    briefing: 'High in protein, fiber, and vital nutrients, Dry Green Peas support digestion, sustain energy, and keep your body active and healthy.',
    specialFeatures: [
      'Retains a vibrant green hue and natural sweetness after cooking — ideal for curries, patties, and stews.',
      'Grown in cool, fertile regions of North India.'
    ],
    packFeatures: [
      'Grown in cool, fertile regions of North India',
      'Naturally green and high in protein',
      'Cooks soft with rich earthy taste',
      'Ideal for curries, gravies, and patties',
      'Cleaned and packed to maintain quality'
    ],
    origin: 'Rajasthan, Madhya Pradesh',
    productType: 'Whole green peas',
    colour: 'Green',
    aroma: 'Mild, natural pulse aroma',
    texture: 'Firm, cooks soft',
    usage: 'Ideal for soups, dals, and curries',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 18. DRY WHITE PEAS
  {
    id: 'prod-excel-17',
    name: 'Dry White Peas',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw whole white peas. Creamy white, firm, cooks evenly. Ideal for street-style ragda, soups, and stews.',
    briefing: 'Loaded with protein and minerals, Dry White Peas support heart health, digestion, and balanced nutrition for your everyday diet.',
    specialFeatures: [
      'Cooks tender with a mild earthy taste, perfect for traditional street-style ragda and nutritious soups.',
      'Harvested from nutrient-rich soils of Madhya Pradesh.'
    ],
    packFeatures: [
      'Harvested from nutrient-rich soils of Madhya Pradesh',
      'Naturally white and mild in flavor',
      'Softens evenly when cooked',
      'Perfect for ragda, soups, and curries',
      'Hygienically processed and packed airtight'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh',
    productType: 'Whole white peas',
    colour: 'Creamy white',
    aroma: 'Mild, natural pulse aroma',
    texture: 'Firm, cooks evenly',
    usage: 'Ideal for soups, stews, and healthy meals',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 19. URADU DHAL WHOLE BLACK
  {
    id: 'prod-excel-18',
    name: 'Uradu Dhal Whole Black',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw whole black gram with glossy skin and creamy white interior. Ideal for authentic Dal Makhani, idli batter, and curries.',
    briefing: 'Rich in protein, iron, and fiber, Whole Black Urad strengthens muscles, improves stamina, and supports digestion and heart health.',
    specialFeatures: [
      'Known for its creamy texture and deep flavor, it makes rich dals and is essential for authentic Punjabi dishes like Dal Makhani.',
      'Grown in fertile plains of Tamil Nadu and Maharashtra.'
    ],
    packFeatures: [
      'Grown in fertile plains of Tamil Nadu and Maharashtra',
      'Naturally black with a creamy white interior',
      'Cooks soft and creamy with rich aroma',
      'Ideal for dal makhani and traditional dishes',
      'Processed and packed to retain purity and freshness'
    ],
    origin: 'Madhya Pradesh, Uttar Pradesh, Maharashtra',
    productType: 'Whole black gram',
    colour: 'Black',
    aroma: 'Mild, earthy aroma',
    texture: 'Firm and glossy, softens upon cooking',
    usage: 'Ideal for dals, idli/dosa batter, soups, and curries',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 20. GREEN MOONG WHOLE
  {
    id: 'prod-excel-19',
    name: 'Green Moong Whole',
    category: 'Pulses',
    categorySlug: 'pulses',
    description: 'Raw whole green gram. Green, firm, cooks evenly. Highly digestible, ideal for sprouts, dals, khichdi, and salads.',
    briefing: 'Packed with plant protein, vitamins, and minerals, Green Moong boosts energy, supports digestion, and strengthens immunity for everyday wellness.',
    specialFeatures: [
      'Naturally green and easy to sprout, it stays soft after cooking, perfect for soups, salads, and light meals.',
      'Premium quality sourced from Rajasthan and Karnataka.'
    ],
    packFeatures: [
      'Premium quality sourced from Rajasthan and Karnataka',
      'Naturally clean green grains',
      'Ideal for sprouting and digestive health',
      'Hygienically sorted and packed'
    ],
    origin: 'Rajasthan, Maharashtra',
    productType: 'Whole green gram',
    colour: 'Green',
    aroma: 'Mild, natural pulse aroma',
    texture: 'Firm, cooks evenly',
    usage: 'Ideal for sprouts, dals, khichdi, and salads',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    packSizes: ['1 kg', '5 kg', '25 kg']
  },

  // 21. PEARL MILLET / KAMBU
  {
    id: 'prod-excel-20',
    name: 'Pearl Millet / Kambu',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw small round Pearl Millet / Kambu / Bajra whole grains. High fiber, iron, and protein. Ideal for porridge and traditional flatbreads.',
    briefing: 'High in fiber, protein, and iron, Pearl Millet boosts stamina, improves digestion, and supports heart health for a strong, energetic lifestyle.',
    specialFeatures: [
      'With a distinct nutty taste and high fiber content, it cooks soft and fluffy, making it perfect for porridge and traditional flatbreads.',
      'Grown in drylands of Rajasthan and Maharashtra.'
    ],
    packFeatures: [
      'Grown in drylands of Rajasthan and Maharashtra',
      'High fiber and iron content',
      'Ideal for porridge and rotis',
      'Hygienically sorted and packed'
    ],
    origin: 'Rajasthan, Maharashtra',
    productType: 'Whole millet',
    colour: 'Light brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Cooks soft, slightly chewy',
    usage: 'Ideal for porridge, flatbreads, and healthy meals',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 22. JOWAR MILLET / CHOLAM
  {
    id: 'prod-excel-21',
    name: 'Jowar Millet / Cholam',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw whole Jowar (Sorghum) millet grains. Gluten-free, light brown, soft. Ideal for flatbreads, porridge, and rotis.',
    briefing: 'Loaded with fiber, protein, and essential minerals, Jowar Millet fuels your body, aids digestion, and supports energy balance throughout the day.',
    specialFeatures: [
      'Naturally gluten-free and mildly sweet, it offers a light texture and blends well in dosas, rotis, and breakfast dishes.',
      'Sourced from Maharashtra and Karnataka.'
    ],
    packFeatures: [
      'Sourced from Maharashtra and Karnataka',
      'Gluten-free whole grain',
      'Easy to digest and nutrient-dense',
      'Hygienically packed'
    ],
    origin: 'Maharashtra, Karnataka',
    productType: 'Whole millet',
    colour: 'Light brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Soft, cooks evenly',
    usage: 'Ideal for flatbreads, porridge, and rotis',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 23. RAGI MILLET / KEZHVARAGU
  {
    id: 'prod-excel-22',
    name: 'Ragi Millet / Kezhvaragu',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw whole dark reddish-brown Ragi finger millet grains. Contains 3x more calcium than milk. Ideal for porridge, malt, and rotis.',
    briefing: 'Rich in calcium, fiber, and antioxidants, Ragi strengthens bones, supports digestion, and boosts energy — perfect for a healthy, active lifestyle.',
    specialFeatures: [
      'Known for its smooth texture and high calcium content, it thickens beautifully for porridge, malt, and baked goods.',
      'Contains 3x more calcium than milk.'
    ],
    packFeatures: [
      'Harvested in Karnataka and Tamil Nadu',
      'Highest calcium content among all cereals',
      'Great for baby food, malt, and rotis',
      'Hygienically packed'
    ],
    origin: 'Karnataka, Tamil Nadu',
    productType: 'Whole millet',
    colour: 'Dark brown',
    aroma: 'Earthy, mild aroma',
    texture: 'Soft, cooks evenly',
    usage: 'Ideal for porridge, rotis, and healthy snacks',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 24. BARNYARD MILLET / KUTHIRAIVALI
  {
    id: 'prod-excel-23',
    name: 'Barnyard Millet / Kuthiraivali',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw whole Barnyard millet grains. Light brown, fast cooking, low-GI. Ideal for porridge, upma, and healthy meals.',
    briefing: 'Packed with fiber, protein, and minerals, Barnyard Millet supports heart health, controls blood sugar, and provides long-lasting energy.',
    specialFeatures: [
      'Cooks quickly with a soft, fluffy texture and mild flavor, ideal for healthy upma, pongal, and pilafs.',
      'Grown in Tamil Nadu and Karnataka.'
    ],
    packFeatures: [
      'Grown in Tamil Nadu and Karnataka',
      'Fast cooking low-GI grain',
      'Soft and non-sticky texture',
      'Hygienically packed'
    ],
    origin: 'Tamil Nadu, Karnataka',
    productType: 'Whole millet',
    colour: 'Light brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Soft, quick cooking',
    usage: 'Ideal for porridge, upma, and healthy meals',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 25. LITTLE MILLET / SAMAI
  {
    id: 'prod-excel-24',
    name: 'Little Millet / Samai',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw whole Little millet grains. Light brown, small-grained, non-sticky rice substitute for daily meals.',
    briefing: 'Rich in fiber, iron, and protein, Little Millet improves digestion, promotes heart wellness, and keeps you energized all day.',
    specialFeatures: [
      'Naturally small-grained and aromatic, it cooks light and non-sticky — a perfect rice alternative for daily meals.',
      'Harvested in South India.'
    ],
    packFeatures: [
      'Harvested in South India',
      'Highly digestible and low GI',
      'Perfect rice substitute for daily meals',
      'Hygienically packed'
    ],
    origin: 'Tamil Nadu, Karnataka',
    productType: 'Whole millet',
    colour: 'Light brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Soft, cooks quickly',
    usage: 'Ideal for porridge, upma, and rotis',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 26. KODO MILLET / VARAGU
  {
    id: 'prod-excel-25',
    name: 'Kodo Millet / Varagu',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw whole Kodo millet grains. Light brown, high in fiber and polyphenols. Ideal for porridge, rotis, and healthy meals.',
    briefing: 'High in dietary fiber, protein, and minerals, Kodo Millet supports digestion, boosts energy, and promotes overall wellness naturally.',
    specialFeatures: [
      'With firm, non-sticky grains and a subtle flavor, it stays fluffy after cooking and suits a variety of Indian dishes.',
      'Organically cultivated in Tamil Nadu.'
    ],
    packFeatures: [
      'Organically cultivated in Tamil Nadu',
      'Rich in polyphenols and antioxidants',
      'Maintains shape when cooked',
      'Hygienically packed'
    ],
    origin: 'Tamil Nadu, Karnataka',
    productType: 'Whole millet',
    colour: 'Light brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Soft, cooks evenly',
    usage: 'Ideal for porridge, rotis, and healthy meals',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  },

  // 27. FOXTAIL MILLET / THINAI
  {
    id: 'prod-excel-26',
    name: 'Foxtail Millet / Thinai',
    category: 'Millets',
    categorySlug: 'millets',
    description: 'Raw tiny golden yellow Foxtail Millet whole grains. High in magnesium, fiber, and B-complex vitamins for upma and pulao.',
    briefing: 'Loaded with fiber, protein, and essential minerals, Foxtail Millet supports heart health, digestion, and sustained energy throughout the day.',
    specialFeatures: [
      'Known for its golden color and mild sweetness, it cooks soft yet separate — perfect for idlis, dosas, and desserts.',
      'Heritage grain from Tamil Nadu & Karnataka.'
    ],
    packFeatures: [
      'Heritage grain from Tamil Nadu & Karnataka',
      'High magnesium and B-complex vitamins',
      'Great for Upma, Pulao, and healthy meals',
      'Hygienically packed'
    ],
    origin: 'Tamil Nadu, Karnataka',
    productType: 'Whole millet',
    colour: 'Golden brown',
    aroma: 'Mild, nutty aroma',
    texture: 'Soft, cooks quickly',
    usage: 'Ideal for porridge, upma, and healthy dishes',
    image: 'https://images.unsplash.com/photo-1627736631541-74513ede9a8a?q=80&w=800&auto=format&fit=crop',
    packSizes: ['500g', '1 kg', '5 kg']
  }
];

export const ABOUT_CONTENT = {
  mainTitle: 'About KOKO Global Distributor',
  tagline: 'Connecting India to Global Markets with Quality, Trust, and Excellence',
  introParagraphs: [
    `KOKO Global Distributor is an India-based export, import, sourcing, and distribution company dedicated to delivering premium-quality Indian food products to customers across the globe. Headquartered in Chennai, Tamil Nadu, we serve as a trusted bridge between India's leading manufacturers and international buyers by offering complete export solutions under one roof.`,
    `Founded with a vision to promote the richness of Indian food products worldwide, KOKO Global Distributor specializes in identifying reliable manufacturers, sourcing premium-quality products, ensuring international quality standards, and managing the complete export process from procurement to final delivery.`,
    `As global demand for authentic Indian food continues to grow, KOKO Global Distributor is committed to making Indian products accessible in international markets while maintaining the highest standards of quality, transparency, compliance, and customer satisfaction.`
  ],

  whoWeAre: {
    title: 'Who We Are',
    paragraphs: [
      `KOKO Global Distributor is more than an export company—we are a strategic business partner that helps connect Indian manufacturers with customers worldwide.`,
      `We understand that exporting is not simply about shipping products; it requires careful planning, quality control, regulatory compliance, documentation, logistics coordination, market understanding, and reliable customer support. Our experienced team manages every stage of the supply chain to ensure products reach their destination safely, efficiently, and in full compliance with international regulations.`,
      `By combining strong supplier relationships with global market knowledge, we provide complete sourcing and export solutions for importers, distributors, wholesalers, retailers, supermarket chains, restaurants, food service companies, and private-label brands.`
    ]
  },

  ourJourney: {
    title: 'Our Journey',
    paragraphs: [
      `India is one of the world's largest producers of agricultural and food products. The country's rich culinary heritage, diverse climate, and extensive farming network make it a global source of premium rice, spices, millets, pulses, coffee, snacks, frozen foods, and grocery products.`,
      `However, many manufacturers face challenges in expanding into international markets due to complex export procedures, documentation requirements, regulatory compliance, quality certifications, logistics management, and overseas market access.`,
      `Recognizing these challenges, KOKO Global Distributor was established to bridge the gap between Indian manufacturers and international buyers.`,
      `Our objective is to simplify international trade by providing end-to-end export management services while creating long-term business opportunities for manufacturers and reliable sourcing solutions for customers worldwide.`
    ]
  },

  businessPhilosophy: {
    title: 'Our Business Philosophy',
    intro: `At KOKO Global Distributor, we believe that successful international business is built on three essential principles:`,
    pillars: [
      {
        number: '01',
        title: 'Trust',
        description: 'Strong business relationships begin with honesty, transparency, and ethical business practices.'
      },
      {
        number: '02',
        title: 'Quality',
        description: 'Every product supplied through our network is carefully sourced to meet customer expectations and international quality standards.'
      },
      {
        number: '03',
        title: 'Partnership',
        description: 'We believe long-term relationships create sustainable growth for both manufacturers and buyers.'
      }
    ],
    outro: `These values form the foundation of every business relationship we build.`
  },

  whatWeDo: {
    title: 'What We Do',
    subtitle: 'KOKO Global Distributor provides complete international trade solutions designed to simplify global sourcing and export operations.',
    intro: 'Our core business activities include:',
    services: [
      {
        title: 'Global Product Sourcing',
        description: 'We identify reliable manufacturers across India and source premium-quality food products based on customer requirements.'
      },
      {
        title: 'Export Management',
        description: 'We manage every aspect of export operations, including procurement, quality inspections, documentation, customs clearance, freight coordination, and shipping.'
      },
      {
        title: 'Import & Distribution',
        description: 'We work with overseas importers and distributors to ensure smooth customs clearance and timely delivery in destination markets.'
      },
      {
        title: 'Private Label Solutions',
        description: 'We support businesses looking to develop their own brands by offering customized packaging, labeling, barcode support, and export-ready product solutions.'
      },
      {
        title: 'Quality Assurance',
        description: 'We work closely with manufacturers to ensure products comply with international food safety and quality standards before shipment.'
      },
      {
        title: 'International Logistics',
        description: 'Our logistics team coordinates both air and sea shipments, ensuring efficient transportation and timely delivery worldwide.'
      }
    ]
  },

  industriesWeServe: [
    'Importers',
    'Wholesalers',
    'Retail Chains',
    'Supermarkets',
    'Hypermarkets',
    'Food Service Companies',
    'Hotels',
    'Restaurants',
    'Catering Businesses',
    'E-commerce Grocery Platforms',
    'Private Label Brands',
    'Distributors'
  ],

  productPortfolio: {
    title: 'Product Portfolio',
    intro: 'Our extensive product range includes:',
    items: [
      { category: 'Rice', detail: 'Premium Indian rice varieties including Ponni, Idly Rice, Seeraga Samba, Sona Masoori, Basmati, and Karuppu Kavuni rice.' },
      { category: 'Millets', detail: 'Nutritious traditional Indian millets such as Foxtail Millet, Little Millet, Kodo Millet, Barnyard Millet, Finger Millet, Pearl Millet, and Sorghum.' },
      { category: 'Pulses', detail: 'High-quality lentils and pulses including Toor Dal, Urad Dal, Moong Dal, Chana Dal, Masoor Dal, Lobia, and whole pulses.' },
      { category: 'Spices & Seasonings', detail: 'A complete range of authentic Indian spices, spice powders, whole spices, masalas, and seasoning blends.' },
      { category: 'Coffee', detail: 'Premium filter coffee, instant coffee, coffee powders, and specialty coffee products.' },
      { category: 'Frozen Foods', detail: 'Frozen vegetables, ready-to-cook products, frozen snacks, and convenience foods.' },
      { category: 'Snacks & Sweets', detail: 'Traditional Indian snacks, savouries, sweets, bakery products, and ready-to-eat foods.' },
      { category: 'Grocery Products', detail: 'Pickles, flour, papad, jaggery, coconut products, dry fruits, ready mixes, beverages, and other essential grocery items.' }
    ]
  },

  globalPresence: {
    title: 'Our Global Presence',
    paragraphs: [
      `While our operations are based in India, our vision is global. We are strengthening our international presence by building relationships with buyers and distributors across multiple countries.`,
      `We continue to explore new international opportunities while expanding our global distribution network.`
    ],
    markets: [
      'Japan',
      'United States',
      'United Arab Emirates (UAE)',
      'South Africa',
      'Australia',
      'Europe',
      'Canada',
      'Singapore'
    ]
  },

  qualityCompliance: {
    title: 'Quality & Compliance',
    paragraphs: [
      `Quality is at the heart of everything we do.`,
      `We understand that international buyers expect products that are safe, consistent, and compliant with destination-country regulations. To meet these expectations, we work with trusted manufacturers and maintain strict quality standards throughout the sourcing and export process.`,
      `Our operations are supported by business registrations and certifications relevant to our activities, including GST, IEC, FSSAI, and APEDA registrations, helping us conduct import and export operations in accordance with applicable regulations.`
    ],
    certifications: [
      { name: 'GST', full: 'Goods & Services Tax Registered' },
      { name: 'IEC', full: 'Import Export Code (Ministry of Commerce)' },
      { name: 'FSSAI', full: 'Food Safety and Standards Authority of India' },
      { name: 'APEDA', full: 'Agricultural & Processed Food Products Export Development Authority' }
    ]
  },

  ourCommitment: {
    title: 'Our Commitment',
    paragraphs: [
      `At KOKO Global Distributor, we are committed to delivering more than products—we deliver reliability, professionalism, and long-term value.`,
      `Every inquiry is handled with care. Every shipment is managed with attention to detail. Every partnership is built on trust.`,
      `Our goal is to become a preferred global sourcing partner by connecting the best of India's food industry with customers around the world through quality, integrity, and dependable service.`
    ],
    slogan: 'KOKO Global Distributor – Connecting India to Global Markets with Quality, Trust, and Excellence.'
  }
};

export const GLOBAL_MARKETS: GlobalMarket[] = [
  { country: 'Japan', region: 'East Asia', coordinates: { x: 82, y: 38 }, highlights: 'Strict quality compliance & custom Japanese labeling' },
  { country: 'United States', region: 'North America', coordinates: { x: 22, y: 35 }, highlights: 'FDA registered food distribution pipeline' },
  { country: 'United Arab Emirates', region: 'Middle East', coordinates: { x: 60, y: 44 }, highlights: 'Hub for GCC retail chains & supermarket distribution' },
  { country: 'South Africa', region: 'Africa', coordinates: { x: 55, y: 75 }, highlights: 'Direct bulk exports to African ethnic food markets' },
  { country: 'Australia', region: 'Oceania', coordinates: { x: 86, y: 72 }, highlights: 'Biosecurity compliant spice & rice shipments' },
  { country: 'Europe', region: 'Europe', coordinates: { x: 50, y: 28 }, highlights: 'EU pesticide residue compliant organic lines' },
  { country: 'Canada', region: 'North America', coordinates: { x: 20, y: 24 }, highlights: 'CFIA compliant distribution to Canadian wholesalers' },
  { country: 'Singapore', region: 'Southeast Asia', coordinates: { x: 75, y: 55 }, highlights: 'Express air & sea freight logistics hub' }
];

export const WHY_KOKO_FEATURES = [
  {
    title: 'QUALITY',
    desc: 'Carefully sourced products meeting customer expectations and stringent international food safety standards.',
    icon: 'ShieldCheck'
  },
  {
    title: 'TRUST',
    desc: 'Transparent, ethical, and reliable business relationships built for long-term global growth.',
    icon: 'HeartHandshake'
  },
  {
    title: 'GLOBAL SOURCING',
    desc: 'Deep network of reliable farm producers and ISO/HACCP certified food manufacturers across India.',
    icon: 'Globe'
  },
  {
    title: 'EXPORT MANAGEMENT',
    desc: 'Complete end-to-end export coordination from phytosanitary inspection to custom port clearance.',
    icon: 'Briefcase'
  },
  {
    title: 'QUALITY ASSURANCE',
    desc: 'Strict batch testing, moisture control, and international destination compliance inspections.',
    icon: 'Award'
  },
  {
    title: 'LOGISTICS',
    desc: 'Seamless air freight and ocean sea container shipment coordination with real-time cargo tracking.',
    icon: 'Truck'
  }
];
