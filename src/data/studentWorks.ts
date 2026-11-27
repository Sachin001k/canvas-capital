// Works by other artists (from the "WebsiteAyontika" PDF), shown separately from
// Ayontika's own paintings. These are display-only: no product page, no price.
const modules = import.meta.glob("/src/assets/students/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function get(name: string): string {
  const key = Object.keys(modules).find((k) => k.endsWith("/" + name));
  if (!key) throw new Error("Missing student artwork: " + name);
  return modules[key];
}

export type StudentWork = { artist: string; file: string };

const make = (artists: string[]): StudentWork[] =>
  artists.map((artist) => ({
    artist,
    file: get(artist.toLowerCase().replace(/\s+/g, "-") + ".jpg"),
  }));

// Charcoal, black & white.
export const blackAndWhiteWorks = make([
  "Arshi Sumit Kamal",
  "Shivan Gupta",
  "Akanksha Angane",
  "Ritik",
  "Simran Jaiswal",
  "Sonakshi Rajbhar",
  "Nisha Kumari",
  "Khushabu Shukla",
  "Zubair Shaikh",
  "Anuj Vishwakarma",
]);

// Oil pastel, colour.
export const colourWorks = make([
  "Pranjal Yadav",
  "Akansha Bairi",
  "Prachi Ahire",
  "Radha Saw",
  "Anushree More",
  "Manav Yadav",
  "Anshika Yadav",
  "Minakshi Saket",
  "Karan Sharma",
]);
