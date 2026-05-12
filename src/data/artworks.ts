// Artworks sourced from https://mycanvasdreams.com/shop/
const modules = import.meta.glob("/src/assets/shop/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function get(name: string): string {
  const key = Object.keys(modules).find((k) => k.endsWith("/" + name));
  if (!key) throw new Error("Missing artwork asset: " + name);
  return modules[key];
}

export type Artwork = {
  title: string;
  file: string;
  price?: string; // INR amount, e.g. "20,000.00"
  sold?: boolean;
  slug: string;
  description?: string;
  dimension?: string;
  category?: string;
};

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const artworks: Artwork[] = [
  { title: "Periwinkle Petals", file: "periwinkle-petals.jpg", price: "20,000.00" },
  { title: "Blossom Wonder", file: "blossom-wonder.jpg", price: "12,000.00" },
  { title: "The Starry Night rendition", file: "the-starry-night-rendition.jpg", price: "18,000.00" },
  { title: "The Hurricane Lamp", file: "the-hurricane-lamp.jpg", price: "15,000.00" },
  { title: "Friends", file: "friends.jpg", price: "15,000.00", sold: true },
  { title: "Crimson Nectar", file: "crimson-nectar.jpg", price: "20,000.00", sold: true },
  { title: "Hues of Autumn", file: "hues-of-autumn.jpg", price: "25,000.00" },
  { title: "Autumn in France", file: "autumn-in-france.jpg", price: "15,000.00", sold: true },
  { title: "Paros Island, Greece", file: "paros-island-greece.jpeg", price: "10,000.00", sold: true },
  { title: "Jardin Majorelle — Yves Saint Laurent Garden", file: "jardin-majorelle-yves-saint-laurent-garden.jpeg", price: "10,000.00", sold: true },
  { title: "Calavera", file: "calavera.jpeg", price: "10,000.00", sold: true },
  { title: "Piercing Gaze", file: "piercing-gaze.jpeg", price: "20,000.00" },
  { title: "Expressions (Series)", file: "expressions-series.jpg" },
  { title: "A Bridge in the Monsoons", file: "a-bridge-in-the-monsoons.jpeg" },
  { title: "Kingfisher in Deep Woods", file: "kingfisher-in-deep-woods.jpeg", sold: true },
  { title: "Mumbai Meri Jaan", file: "mumbai-meri-jaan.jpeg", sold: true },
  { title: "Floral Bliss", file: "floral-bliss.jpeg", sold: true },
  { title: "The Kolkata Series", file: "the-kolkata-series.jpg", sold: true },
  { title: "Hues of Monsoon (Series II)", file: "hues-of-monsoon-series-ii.jpg", sold: true },
  { title: "The Leopard", file: "the-leopard.jpeg", sold: true },
  { title: "Hues of Monsoon", file: "hues-of-monsoon.jpg", sold: true },
  { title: "The Wine Glass", file: "the-wine-glass.jpg", sold: true },
  { title: "The Optimistic Kingfisher", file: "the-optimistic-kingfisher.jpg", sold: true },
  { title: "Metro Nightlife", file: "metro-nightlife.jpg", sold: true },
  { title: "The Roar", file: "the-roar.jpg" },
  { title: "The Majestic Elephant", file: "the-majestic-elephant.jpg" },
  { title: "Humanity", file: "humanity.jpeg" },
  { title: "Mother and Child – II", file: "mother-and-child-ii.jpeg" },
  { title: "Mother and Child – I", file: "mother-and-child-i.jpeg" },
  { title: "Devi Durga", file: "devi-durga.jpeg", sold: true },
  { title: "The Drummer", file: "the-drummer.jpeg" },
  { title: "The Divine Connection", file: "the-divine-connection.jpeg" },
  { title: "Floral", file: "floral.jpeg", sold: true },
  { title: "Rhythm of the Mind", file: "rhythm-of-the-mind.jpeg" },
  { title: "Chefchaouen", file: "chefchaouen.jpeg" },
  { title: "A Journey Called Life", file: "a-journey-called-life.jpeg" },
].map((a) => ({ ...a, file: get(a.file), slug: slugify(a.title) }));

export function findArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}
