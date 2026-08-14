export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  briefing: string;
  specialFeatures: string[];
  packFeatures: string[];
  origin: string;
  productType: string;
  colour: string;
  aroma: string;
  texture: string;
  usage: string;
  image: string;
  packSizes: string[];
  moq?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productInterestedIn: string;
  message: string;
}

export interface GlobalMarket {
  country: string;
  region: string;
  coordinates: { x: number; y: number }; // Percentage for visual map
  highlights: string;
}
