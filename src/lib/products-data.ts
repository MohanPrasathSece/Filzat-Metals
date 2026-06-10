import siliconImg from "@/assets/product-silicon.jpg";
import zincImg from "@/assets/product-zinc.jpg";
import leadImg from "@/assets/product-lead.jpg";
import manganeseImg from "@/assets/product-manganese.jpg";
import micaImg from "@/assets/product-mica.jpg";
import aluminiumImg from "@/assets/product-aluminium.jpg";
import brassImg from "@/assets/product-brass.jpg";

// AI-generated unique product images
import zincDrossImg from "@/assets/product-zinc-dross.png";
import zincBlocksImg from "@/assets/product-zinc-blocks.png";
import manganeseFlakesImg from "@/assets/product-manganese-flakes.png";
import micaFlakesImg from "@/assets/product-mica-flakes.png";
import aluminiumBriquettesImg from "@/assets/product-aluminium-briquettes.png";
import aluminiumBilletsImg from "@/assets/product-aluminium-billets.png";

// Unique Unsplash images for brass sub-products and others
const BRASS_HEX_RODS =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"; // copper/brass rods
const BRASS_WIRE =
  "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80"; // wire spool
const BLANK_KEYS =
  "https://images.unsplash.com/photo-1558618047-f4e20b7be0c4?w=800&q=80"; // keys
const PADLOCKS =
  "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=800&q=80"; // padlock
const DEADBOLTS =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&crop=entropy"; // door hardware
const CYLINDER_LOCKS =
  "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80"; // lock cylinder
const TRUMPET_VALVES =
  "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80"; // brass instrument
const SAX_KEYS =
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80"; // saxophone
const MOUTHPIECES =
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"; // instrument close-up
const TUBING_BRACKETS =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"; // construction hardware
const CABINET_PULLS =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"; // cabinet hardware
const DOOR_HINGES =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&sat=-50"; // hinges
const WINDOW_LATCHES =
  "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?w=800&q=80"; // window hardware
const ECO_BRASS_INGOTS =
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"; // metal ingots

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
};

export type Category = {
  id: string;
  name: string;
  image: string;
  tagline: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "silicon",
    name: "Silicon",
    image: siliconImg,
    tagline: "Pure silicon materials engineered for advanced industries.",
    products: [
      {
        id: "eco-brass-ingots",
        name: "Eco-Brass Ingots",
        category: "Silicon",
        image: ECO_BRASS_INGOTS,
        description:
          "Lead-free, silicon-based brass alloy ingots offering exceptional machinability and corrosion resistance for sustainable manufacturing.",
        applications: [
          "Plumbing fittings",
          "Marine hardware",
          "Drinking water components",
          "Eco-conscious manufacturing",
        ],
        specs: [
          { label: "Composition", value: "Cu-Zn-Si alloy" },
          { label: "Lead Content", value: "< 0.09%" },
          { label: "Form", value: "Ingots" },
        ],
      },
    ],
  },
  {
    id: "zinc",
    name: "Zinc",
    image: zincImg,
    tagline: "Premium zinc products for industrial-grade applications.",
    products: [
      {
        id: "zinc-dross",
        name: "Zinc Dross",
        category: "Zinc",
        image: zincDrossImg,
        description:
          "High-purity zinc dross recovered through controlled processing, ideal for galvanising and downstream zinc recovery operations.",
        applications: [
          "Galvanising plants",
          "Zinc oxide production",
          "Die casting",
          "Chemical industries",
        ],
        specs: [
          { label: "Zinc Content", value: "92-95%" },
          { label: "Form", value: "Solidified dross" },
          { label: "Packaging", value: "Bulk / Pallets" },
        ],
      },
      {
        id: "zinc-blocks",
        name: "Zinc Blocks",
        category: "Zinc",
        image: zincBlocksImg,
        description:
          "Precision-cast SHG zinc blocks delivering consistent purity for hot-dip galvanising and high-performance alloying.",
        applications: [
          "Hot-dip galvanising",
          "Battery manufacturing",
          "Brass production",
          "Anti-corrosion coatings",
        ],
        specs: [
          { label: "Purity", value: "99.995% SHG" },
          { label: "Form", value: "Blocks" },
          { label: "Weight", value: "25 kg standard" },
        ],
      },
    ],
  },
  {
    id: "lead",
    name: "Lead",
    image: leadImg,
    tagline: "Refined lead solutions meeting global purity standards.",
    products: [
      {
        id: "refined-lead-ingots",
        name: "Refined Lead Ingots",
        category: "Lead",
        image: leadImg,
        description:
          "Ultra-refined 99.97% pure lead ingots, produced under strict quality control for battery, radiation shielding and alloying applications.",
        applications: [
          "Lead-acid batteries",
          "Radiation shielding",
          "Cable sheathing",
          "Lead alloys",
        ],
        specs: [
          { label: "Purity", value: "99.97% min" },
          { label: "Form", value: "Ingots" },
          { label: "Weight", value: "25 kg / piece" },
        ],
      },
    ],
  },
  {
    id: "manganese",
    name: "Manganese",
    image: manganeseImg,
    tagline: "Electrolytic manganese for the world's most demanding alloys.",
    products: [
      {
        id: "electrolytic-manganese-flakes",
        name: "Electrolytic Manganese Flakes",
        category: "Manganese",
        image: manganeseFlakesImg,
        description:
          "High-purity electrolytic manganese metal flakes used to enhance strength, hardness and corrosion resistance in steel and aluminium alloys.",
        applications: ["Stainless steel", "Aluminium alloys", "Specialty alloys", "Electronics"],
        specs: [
          { label: "Purity", value: "99.7% min" },
          { label: "Form", value: "Flakes" },
          { label: "Packaging", value: "1 MT super-sacks" },
        ],
      },
    ],
  },
  {
    id: "mica",
    name: "Mica",
    image: micaImg,
    tagline: "Engineered mica products for insulation and industrial coatings.",
    products: [
      {
        id: "micronized-mica-powder",
        name: "Micronized Mica Ground Powder",
        category: "Mica",
        image: micaImg,
        description:
          "Finely micronized mica powder offering superior aspect ratio for paints, plastics, cosmetics and insulation systems.",
        applications: [
          "Paints & coatings",
          "Plastics & rubber",
          "Cosmetics",
          "Electrical insulation",
        ],
        specs: [
          { label: "Particle Size", value: "10-325 mesh" },
          { label: "Form", value: "Powder" },
          { label: "Color", value: "White / Off-white" },
        ],
      },
      {
        id: "mica-flakes",
        name: "Mica Flakes",
        category: "Mica",
        image: micaFlakesImg,
        description:
          "Premium-grade mica flakes prized for thermal stability and high dielectric strength across industrial applications.",
        applications: [
          "Welding rods",
          "Asphalt coatings",
          "Decorative finishes",
          "Drilling fluids",
        ],
        specs: [
          { label: "Form", value: "Flakes" },
          { label: "Mesh Size", value: "10-80 mesh" },
          { label: "Moisture", value: "< 1%" },
        ],
      },
    ],
  },
  {
    id: "aluminium",
    name: "Aluminium",
    image: aluminiumImg,
    tagline: "From recycled briquettes to extrusion billets - built for scale.",
    products: [
      {
        id: "aluminium-scrap-briquettes",
        name: "Aluminium Scrap Briquettes",
        category: "Aluminium",
        image: aluminiumBriquettesImg,
        description:
          "Compacted aluminium scrap briquettes optimised for efficient melting and reduced oxidation in foundry operations.",
        applications: [
          "Secondary smelting",
          "Foundry charge",
          "Aluminium recycling",
          "Alloy production",
        ],
        specs: [
          { label: "Density", value: "2.4 g/cm³" },
          { label: "Form", value: "Briquettes" },
          { label: "Size", value: "Custom" },
        ],
      },
      {
        id: "6063-aluminium-extrusion-billets",
        name: "6063 Aluminium Extrusion Billets",
        category: "Aluminium",
        image: aluminiumBilletsImg,
        description:
          "Heat-treated 6063 aluminium billets engineered for high-quality extrusion profiles with excellent surface finish.",
        applications: [
          "Window & door frames",
          "Architectural profiles",
          "Electrical enclosures",
          "Heat sinks",
        ],
        specs: [
          { label: "Alloy", value: "6063 / T6 ready" },
          { label: "Diameter", value: '5" – 12"' },
          { label: "Length", value: "Custom" },
        ],
      },
    ],
  },
  {
    id: "brass",
    name: "Brass",
    image: brassImg,
    tagline: "From precision raw materials to finished components.",
    products: [
      {
        id: "brass-hex-rods",
        name: "Brass Hex Rods",
        category: "Brass",
        image: BRASS_HEX_RODS,
        description:
          "Precision-drawn hexagonal brass rods with consistent dimensions and superior machinability.",
        applications: ["Fasteners", "Valves", "Electrical fittings", "Decorative hardware"],
        specs: [
          { label: "Form", value: "Hex Rod" },
          { label: "Grade", value: "CW614N" },
          { label: "Length", value: "3 m std" },
        ],
      },
      {
        id: "brass-wires",
        name: "Brass Wires",
        category: "Brass",
        image: BRASS_WIRE,
        description:
          "High-tensile brass wires drawn to tight tolerances for industrial and decorative applications.",
        applications: ["Springs", "Fasteners", "Jewelry", "Electrical contacts"],
        specs: [
          { label: "Diameter", value: "0.5 – 6 mm" },
          { label: "Finish", value: "Bright" },
          { label: "Spools", value: "25 kg" },
        ],
      },
      {
        id: "blank-keys",
        name: "Blank Keys",
        category: "Brass · Security",
        image: BLANK_KEYS,
        description: "Solid brass key blanks precision-cut for OEM and locksmith requirements.",
        applications: ["Locksmiths", "OEM lock makers", "Security hardware"],
        specs: [
          { label: "Material", value: "Brass" },
          { label: "Customisation", value: "Available" },
        ],
      },
      {
        id: "padlocks",
        name: "Padlocks",
        category: "Brass · Security",
        image: PADLOCKS,
        description: "Solid brass padlocks built for durability and weather resistance.",
        applications: ["Gates", "Lockers", "Industrial security"],
        specs: [
          { label: "Body", value: "Solid Brass" },
          { label: "Shackle", value: "Hardened Steel" },
        ],
      },
      {
        id: "structural-deadbolts",
        name: "Structural Deadbolts",
        category: "Brass · Security",
        image: DEADBOLTS,
        description: "Heavy-duty deadbolts engineered for residential and commercial security.",
        applications: ["Doors", "Commercial buildings", "Residential"],
        specs: [
          { label: "Grade", value: "ANSI Grade 1" },
          { label: "Finish", value: "Polished / Satin" },
        ],
      },
      {
        id: "standard-cylinder-locks",
        name: "Standard Cylinder Locks",
        category: "Brass · Security",
        image: CYLINDER_LOCKS,
        description: "Pin-tumbler cylinder locks built from precision-machined brass.",
        applications: ["Doors", "Cabinets", "Lockers"],
        specs: [
          { label: "Mechanism", value: "Pin tumbler" },
          { label: "Body", value: "Brass" },
        ],
      },
      {
        id: "trumpet-valves",
        name: "Trumpet Valves",
        category: "Brass · Musical",
        image: TRUMPET_VALVES,
        description: "Precision-machined valve assemblies for professional brass instruments.",
        applications: ["Musical instruments", "OEM brass instruments"],
        specs: [
          { label: "Material", value: "Premium brass" },
          { label: "Finish", value: "Polished" },
        ],
      },
      {
        id: "saxophone-keys",
        name: "Saxophone Keys",
        category: "Brass · Musical",
        image: SAX_KEYS,
        description: "Ergonomically shaped saxophone keys for OEM instrument makers.",
        applications: ["Saxophones", "Wind instruments"],
        specs: [{ label: "Material", value: "Brass" }],
      },
      {
        id: "mouthpieces",
        name: "Mouthpieces",
        category: "Brass · Musical",
        image: MOUTHPIECES,
        description: "Acoustically tuned brass mouthpieces with smooth bore finishes.",
        applications: ["Trumpets", "Horns", "Wind instruments"],
        specs: [
          { label: "Material", value: "Brass" },
          { label: "Finish", value: "Silver / Gold plated optional" },
        ],
      },
      {
        id: "structural-tubing-brackets",
        name: "Structural Tubing Brackets",
        category: "Brass · Architectural",
        image: TUBING_BRACKETS,
        description: "Heavy-duty brass brackets engineered for architectural tubing systems.",
        applications: ["Railings", "Architecture", "Display systems"],
        specs: [{ label: "Load", value: "Heavy duty" }],
      },
      {
        id: "cabinet-pulls",
        name: "Cabinet Pulls",
        category: "Brass · Architectural",
        image: CABINET_PULLS,
        description: "Sculpted solid-brass cabinet pulls with premium hand-polished finishes.",
        applications: ["Furniture", "Kitchens", "Interior design"],
        specs: [{ label: "Material", value: "Solid Brass" }],
      },
      {
        id: "door-hinges",
        name: "Door Hinges",
        category: "Brass · Architectural",
        image: DOOR_HINGES,
        description: "Architectural-grade brass hinges for residential and commercial doors.",
        applications: ["Doors", "Cabinets", "Architecture"],
        specs: [{ label: "Material", value: "Solid Brass" }],
      },
      {
        id: "heavy-window-latches",
        name: "Heavy Window Latches",
        category: "Brass · Architectural",
        image: WINDOW_LATCHES,
        description: "Robust solid-brass window latches built for premium fenestration systems.",
        applications: ["Windows", "Architecture"],
        specs: [{ label: "Material", value: "Solid Brass" }],
      },
    ],
  },
];

export const allProducts: Product[] = categories.flatMap((c) => c.products);
