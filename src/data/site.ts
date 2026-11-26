// Single source of truth for contact details and outbound links.
// Any URL set to PLACEHOLDER renders as a "coming soon" link (clickable, but goes nowhere).
export const PLACEHOLDER = "#";

export const site = {
  name: "My Canvas Dreams",
  artist: "Ayontika Naha",
  city: "Mumbai, India",

  email: "hello@mycanvasdreams.com", // TODO: confirm address
  whatsapp: {
    number: "919987931564", // wa.me format (country code, no +)
    display: "+91 99879 31564",
  },

  links: {
    instagram: PLACEHOLDER, // TODO: real Instagram profile URL
    instagramHandle: "@mycanvasdreams", // TODO: confirm handle
    researchPaper: PLACEHOLDER, // TODO: link to the GST paper (PDF or Google Drive)
    sevaSahayog: "https://sevasahayog.org/",
  },

  // Shown on the order page.
  bank: {
    accountName: "Ayontika Naha U/G Purabi Naha",
    bankName: "HDFC Bank",
    accountNumber: "50100419070192",
    accountType: "Savings Account",
    ifsc: "HDFC0000543",
  },

  donationShare: "50–75%",
  ngo: "Seva Sahayog",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
