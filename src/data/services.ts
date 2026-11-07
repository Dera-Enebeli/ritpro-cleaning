export type ServiceCategory = "Residential" | "Commercial";

export type ServiceOption = {
  value: string;
  label: string;
  tagline: string;
  description: string;
};

export const serviceCategories: {
  value: ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    value: "Residential",
    label: "Residential",
    description: "Homes, apartments and short-term rentals",
  },
  {
    value: "Commercial",
    label: "Commercial",
    description: "Offices, retail, medical and specialist sites",
  },
];

export const residentialServices: ServiceOption[] = [
  {
    value: "general-clean",
    label: "General Clean",
    tagline: "Weekly · Fortnightly · Monthly",
    description:
      "The same thorough routine every visit — kitchens, bathrooms, floors, surfaces and the small details that keep a home feeling looked after.",
  },
  {
    value: "deep-clean",
    label: "Deep Clean",
    tagline: "One-off reset",
    description:
      "A top-to-bottom reset for built-up dust, grout, appliances and the areas a regular clean does not reach.",
  },
  {
    value: "end-of-lease",
    label: "End of Lease / Bond Clean",
    tagline: "Bond-back guarantee",
    description:
      "A checklist-driven move-out clean built around the exit condition report, with a bond-back guarantee.",
  },
  {
    value: "move-in",
    label: "Move in Clean",
    tagline: "Fresh start",
    description:
      "Cupboards, appliances, surfaces and floors cleaned before you unpack, so your new home starts spotless.",
  },
  {
    value: "airbnb",
    label: "Airbnb / Short-Term Rental Cleaning",
    tagline: "Guest turnovers",
    description:
      "Fast, guest-ready turnover cleans between bookings — presentation, linen changes and the details guests notice.",
  },
];

export const commercialServices: ServiceOption[] = [
  {
    value: "office",
    label: "Office Space",
    tagline: "Offices · Co-working",
    description:
      "Scheduled office cleaning that stays consistent. Checklists, compliance documentation and quality reporting included.",
  },
  {
    value: "warehouses",
    label: "Warehouses",
    tagline: "Warehouses · Industrial",
    description:
      "Large-footprint cleaning with the right equipment and OHS protocols for warehouses and industrial sites.",
  },
  {
    value: "medical",
    label: "Medical Centre",
    tagline: "Clinics · Healthcare",
    description:
      "Infection-control cleaning for medical centres and clinics, delivered around patient hours with documented protocols.",
  },
  {
    value: "hospitality",
    label: "Hospitality Venues",
    tagline: "Cafés · Restaurants · Venues",
    description:
      "After-hours cleaning for cafés, restaurants and venues, built around service times and food-safety requirements.",
  },
  {
    value: "retail",
    label: "Retail Spaces",
    tagline: "Shops · Showrooms",
    description:
      "Shopfront, floor and back-of-house cleaning that keeps presentation sharp without disrupting trading hours.",
  },
  {
    value: "fitness",
    label: "Fitness Centre & Gym",
    tagline: "Gyms · Studios",
    description:
      "High-touch, high-traffic cleaning for gyms and studios — equipment, change rooms, floors and shared spaces.",
  },
  {
    value: "other",
    label: "Others",
    tagline: "Strata · Schools · Specialist sites",
    description:
      "Strata and body corporate common areas, schools, post-construction and other specialist sites, scoped individually.",
  },
];

export function servicesFor(category: ServiceCategory): ServiceOption[] {
  return category === "Residential" ? residentialServices : commercialServices;
}
