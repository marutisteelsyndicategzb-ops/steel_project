import crSheetsImg from '../assets/cr-sheets.png';
import hrSheetsImg from '../assets/hr-sheets.png';
import chequeredSheetsImg from '../assets/chequered-sheets.png';

export const companyDetails = {
  name: "Maruti Steel Syndicate",
  shortName: "MSS",
  tagline: "Forging Industrial Excellence",
  phone: "+91 90215 54396",
  email: "marutisteelsyndicategzb@gmail.com",
  address: "Head Office: 76 & 24, Loha Mandi, Bulandshahr Road Industrial Area, Ghaziabad, Uttar Pradesh 201009",
  address2: "CTL Shearing Unit (Cutter): E-125, BS Road Industrial Area, Ghaziabad, Uttar Pradesh 201009",
  businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  whatsapp: "919021554396", // for whatsapp api link
  founder: "Mr. Vijay Singhal",
  gstin: "09AABFM8390A2ZB"
};

export const management = [
  { name: "Mr. Vijay Singhal", role: "Founder and Managing Director" },
  { name: "Mr. Ushank Singhal", role: "Sales Head" },
  { name: "Mr. Harshit Singhal", role: "Production Head" },
  { name: "Mr. Shivam Singhal", role: "Accounts and Marketing Head" }
];

export const products = [
  {
    id: "cr-sheets",
    name: "CR Sheets",
    slug: "cr-sheets",
    shortDescription: "Premium Cold Rolled steel sheets, known for superior surface finish.",
    description: "Our Cold Rolled (CR) sheets represent the gold standard in surface quality and dimensional precision. These sheets undergo a rigorous cold reduction process, resulting in a smooth, high-sheen finish that is perfect for painting, plating, and complex forming. Widely used in the automotive industry, domestic appliances, and high-precision engineering projects.",
    features: [
      "Exceptional surface smoothness",
      "Precise dimensional tolerances",
      "High formability and ductility",
      "Excellent paint adhesion"
    ],
    applications: [
      "Automobile Body Panels",
      "Home Appliances (Refrigerators, Washers)",
      "Electrical Panels & Enclosures",
      "Precision Engineering Components"
    ],
    costBase: "Ex-Ghaziabad (Loha Mandi)",
    tonsSupplied: "Countless",
    specifications: [
      { label: "Grade", value: "Premium Grade / IS 513" },
      { label: "Surface Finish", value: "Bright / Dull Finish" },
      { label: "Oiling", value: "Slightly Oiled / Non-Oiled" },
      { label: "Edge Condition", value: "Mill Edge / Slit Edge" },
      { label: "Cost Base", value: "Ex-Ghaziabad (Loha Mandi)" },
      { label: "Tons Supplied", value: "Countless" }
    ],
    availableSizes: [
      { size: "22G 2500 x 1250 mm", thickness: "0.8 MM" },
      { size: "20G 2500 x 1250 mm", thickness: "1MM" },
      { size: "20G 2500 x 900 mm", thickness: "1MM" },
      { size: "20G 2500 x 1000 mm", thickness: "1MM" },
      { size: "20G 2500 x 1422 mm", thickness: "1MM" },
      { size: "20G 2500 x 1500 mm", thickness: "1MM" },
      { size: "18G 2500 x 1250 mm", thickness: "1.2MM" },
      { size: "18G 2500 x 900 mm", thickness: "1.2MM" },
      { size: "18G 2500 x 1000 mm", thickness: "1.2MM" },
      { size: "18G 2500 x 1422 mm", thickness: "1.2MM" },
      { size: "18G 2500 x 1500 mm", thickness: "1.2MM" },
      { size: "16G 2500 x 1250 mm", thickness: "1.6/1.5MM" },
      { size: "16G 2500 x 1500 mm", thickness: "1.6/1.5MM" },
      { size: "16G 2500 x 1422 mm", thickness: "1.6/1.5MM" },
      { size: "28G 2500 x 1250 mm (0.4MM)", thickness: "0.4 MM" },
      { size: "26G 2500 x 1250 mm (0.5MM)", thickness: "0.5 MM" },
      { size: "24G 2500 x 1250 mm", thickness: "0.6 MM" },
      { size: "22G 2500 x 1250 mm", thickness: "0.8 MM" },
      { size: "20G 2500 x 1250 mm", thickness: "1MM" },
      { size: "18G 2500 x 1250 mm", thickness: "1.2 MM" },
      { size: "16G 2500 x 1250 mm", thickness: "1.6 MM" },
      { size: "14G 2500 x 1250 mm", thickness: "2MM" },
      { size: "0.65 MM 2500 x 1250 mm", thickness: "0.65 MM" },
      { size: "0.7 MM 2500 x 1250 mm", thickness: "0.7 MM" },
      { size: "0.6 MM 2500 x 1250 mm", thickness: "0.6 MM" },
      { size: "0.3 MM 2500 x 1250 mm", thickness: "0.3 MM" }
    ],
    image: crSheetsImg
  },
  {
    id: "hr-sheets",
    name: "HR Sheets and Plates",
    slug: "hr-sheets",
    shortDescription: "Robust Hot Rolled steel sheets for heavy-duty structural and industrial use.",
    description: "Our Hot Rolled (HR) Sheets and Plates are engineered for strength and reliability. Processed at high temperatures, these sheets offer superior load-bearing capacity and excellent weldability. They are the preferred choice for structural frameworks, heavy machinery manufacturing, and large-scale infrastructure projects where durability is paramount.",
    features: [
      "Superior tensile strength",
      "Excellent weldability",
      "Uniform grain structure",
      "Cost-effective structural solution"
    ],
    applications: [
      "Heavy Machinery & Equipment",
      "Structural Steel Frameworks",
      "Storage Tanks & Silos",
      "Railway Wagons & Coaches"
    ],
    costBase: "Ex-Ghaziabad (Loha Mandi)",
    tonsSupplied: "Countless",
    specifications: [
      { label: "Grade", value: "IS 2062 / ASTM A36" },
      { label: "Thickness Range", value: "1.6mm - 25mm" },
      { label: "Surface Treatment", value: "Blue / Black Mill Finish" },
      { label: "Forming", value: "Structural / General Purpose" },
      { label: "Cost Base", value: "Ex-Ghaziabad (Loha Mandi)" },
      { label: "Tons Supplied", value: "Countless" }
    ],
    availableSizes: [
      { size: "16G 2500 x 900 mm", thickness: "1.6 MM" },
      { size: "16G 2500 x 1250 mm", thickness: "1.6 MM" },
      { size: "16G 2500 x 1000 mm", thickness: "1.6 MM" },
      { size: "14G 2500 x 1250 mm", thickness: "2 MM" },
      { size: "14G 2500 x 900 mm", thickness: "2 MM" },
      { size: "14G 2500 x 1000 mm", thickness: "2 MM" },
      { size: "14G 2500 x 1500 mm", thickness: "2 MM" },
      { size: "12G 2500 x 1250 mm", thickness: "2.5 MM" },
      { size: "12G 2500 x 900 mm", thickness: "2.5 MM" },
      { size: "12G 2500 x 1500 mm", thickness: "2.5 MM" },
      { size: "10G 2500 x 1250 mm", thickness: "3 MM" },
      { size: "10G 2500 x 1500 mm", thickness: "3 MM" },
      { size: "4MM 2500 x 1250 mm", thickness: "4 MM" },
      { size: "5MM 2500 x 1250 mm", thickness: "5 MM" },
      { size: "6MM 2500 x 1250 mm", thickness: "6 MM" },
      { size: "10MM 2500 x 1250 mm", thickness: "10 MM" },
      { size: "12MM 2500 x 1250 mm", thickness: "12 MM" },
      { size: "5MM 1250 x 6300 mm", thickness: "5 MM" },
      { size: "8MM 1250 x 6300 mm", thickness: "8 MM" },
      { size: "8MM 2500 x 1250 mm", thickness: "8 MM" },
      { size: "4MM 2500 x 1500 mm", thickness: "4 MM" }
    ],
    image: hrSheetsImg
  },
  {
    id: "chequered-sheets",
    name: "Chequered Sheets",
    slug: "chequered-sheets",
    shortDescription: "Anti-skid patterned steel plates for industrial flooring and safety.",
    description: "Designed for safety and durability, our Chequered Sheets feature a raised diamond or tear-drop pattern that provides exceptional anti-slip properties. These sheets are ideal for industrial flooring, staircases, walkways, and commercial vehicle platforms, ensuring maximum grip in high-traffic or oily environments.",
    features: [
      "High anti-slip performance",
      "Wear and impact resistant",
      "Durable aesthetic pattern",
      "Easy to weld and maintain"
    ],
    applications: [
      "Industrial Flooring & Walkways",
      "Staircases & Ramps",
      "Industrial Platforms & Walkways",
      "Factory Flooring & Ramps"
    ],
    costBase: "Ex-Ghaziabad (Loha Mandi)",
    tonsSupplied: "Countless",
    specifications: [
      { label: "Pattern", value: "Diamond / Tear Drop" },
      { label: "Grade", value: "Commercial / Structural" },
      { label: "Thickness Range", value: "1.6mm - 6mm" },
      { label: "Material", value: "Hot Rolled Steel" },
      { label: "Cost Base", value: "Ex-Ghaziabad (Loha Mandi)" },
      { label: "Tons Supplied", value: "Countless" }
    ],
    availableSizes: [
      { size: "16G 2500 x 1250 mm", thickness: "1.6 MM" },
      { size: "14G 2500 x 1250 mm", thickness: "2 MM" },
      { size: "12G 2500 x 1250 mm", thickness: "2.5 MM" },
      { size: "10G 2500 x 1250 mm", thickness: "3 MM" },
      { size: "4MM 2500 x 1250 mm", thickness: "4 MM" },
      { size: "14G 1250 x 5000 mm", thickness: "2 MM" },
      { size: "12G 1250 x 5000 mm", thickness: "2.5 MM" },
      { size: "4MM 1250 x 5000 mm", thickness: "4 MM" },
      { size: "5MM 1250 x 5000 mm", thickness: "5 MM" },
      { size: "6MM 1250 x 5000 mm", thickness: "6 MM" },
      { size: "5MM 2500 x 1250 mm", thickness: "5 MM" },
      { size: "3MM 1250 x 5000 mm", thickness: "3 MM" }
    ],
    image: chequeredSheetsImg
  }
];

export const whyChooseUs = [
  {
    title: "Fast Delivery",
    description: "Efficient crane loading for quick dispatch",
    icon: "Truck"
  },
  {
    title: "100% Authentic Steel",
    description: "Direct-from-source material with no rebranding",
    icon: "ShieldCheck"
  },
  {
    title: "Precision Cutting",
    description: "Advanced in-house cut-to-length solutions as per requirement",
    icon: "Settings"
  },
  {
    title: "Cost Efficient",
    description: "Modern handling systems reduce operational costs",
    icon: "TrendingDown"
  },
  {
    title: "4,000+ Customers Served",
    description: "Trusted by industries in North India for over 40 years",
    icon: "Users"
  },
  {
    title: "Bulk Stock Availability",
    description: "Ready stock for urgent and large orders",
    icon: "Package"
  },
  {
    title: "One-Stop Steel Solution",
    description: "MS FLATS HR, CR coils and sheets and Chequered sheets & more under one roof",
    icon: "Star"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "BuildTech Constructions",
    text: "Maruti Steel Syndicate has been our primary steel supplier for over 5 years. Their HR Sheets and Plates are consistently of the highest quality, and their technical precision is unmatched."
  },
  {
    id: 2,
    name: "Amit Patel",
    company: "Apex Manufacturing Ltd.",
    text: "The structural integrity of MSS steel is unmatched. Their technical team helped us choose the exact grade we needed for our heavy machinery project. Highly recommended."
  }
];
