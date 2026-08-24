// ============================================================
// MAGIZHUNTHU AUTOS & MOBILITY — TRIP CATALOGUE
// Named circuits + individual destinations, Chennai-origin.
// Exact fares/distances are confirmed at booking (call/WhatsApp) —
// no estimated km shown here to avoid publishing inaccurate figures.
// ============================================================

export type Category = "spiritual" | "hill" | "coastal" | "heritage";
export type StateCode = "TN" | "AP" | "KL" | "KA" | "PY";

export type Place = {
  slug: string;
  name: string;
  category: Category;
  state: StateCode;
  significance: string; // short descriptor used to build SEO copy
};

export type Circuit = {
  slug: string;
  name: string;
  category: Category;
  theme: string;
  stops: string[];
  states: StateCode[];
  days: number;
};

// ------------------------------------------------------------
// NAMED CIRCUITS
// ------------------------------------------------------------
export const CIRCUITS: Circuit[] = [
  {
    slug: "navagraha-temple-tour",
    name: "Navagraha Temple Tour",
    category: "spiritual",
    theme: "9 planetary temples — Kumbakonam, Sirkazhi & Karaikal cluster",
    stops: [
      "Suryanar Kovil (Sun)", "Thingalur (Moon)", "Vaitheeswaran Koil (Mars)",
      "Thiruvenkadu (Mercury)", "Alangudi (Jupiter)", "Kanjanur (Venus)",
      "Thirunallar (Saturn)", "Thirunageswaram (Rahu)", "Keezhperumpallam (Ketu)",
    ],
    states: ["TN"],
    days: 2,
  },
  {
    slug: "arupadai-veedu-tour",
    name: "Arupadai Veedu — 6 Abodes of Murugan",
    category: "spiritual",
    theme: "The six sacred abodes of Lord Murugan across Tamil Nadu",
    stops: ["Thiruttani", "Swamimalai", "Palani", "Tiruchendur", "Tiruparankundram", "Pazhamudircholai"],
    states: ["TN"],
    days: 5,
  },
  {
    slug: "pancha-bhoota-sthalam-tour",
    name: "Pancha Bhoota Sthalam Tour",
    category: "spiritual",
    theme: "The five elemental Shiva temples — Earth, Water, Fire, Air, Ether",
    stops: ["Kanchipuram (Earth)", "Thiruvanaikaval / Jambukeswarar, Trichy (Water)", "Tiruvannamalai (Fire)", "Srikalahasti, AP (Air)", "Chidambaram (Ether)"],
    states: ["TN", "AP"],
    days: 6,
  },
  {
    slug: "pancha-sabhai-tour",
    name: "Pancha Sabhai Tour",
    category: "spiritual",
    theme: "Nataraja's five cosmic dance halls",
    stops: ["Chidambaram (Kanaka Sabha)", "Madurai (Velli Sabha)", "Tiruvalangadu (Ratna Sabha)", "Tirunelveli (Tamira Sabha)", "Tirukutralam / Courtallam (Chitra Sabha)"],
    states: ["TN"],
    days: 5,
  },
  {
    slug: "divya-desam-south-tour",
    name: "Divya Desam Tour — Southern Cluster",
    category: "spiritual",
    theme: "Sacred Vishnu shrines among the 108 Divya Desams",
    stops: ["Kanchipuram", "Chennai — Parthasarathy Temple", "Tirupati", "Srirangam", "Alwar Tirunagari & nearby shrines"],
    states: ["TN", "AP"],
    days: 5,
  },
  {
    slug: "velankanni-nagore-nagapattinam-tour",
    name: "Velankanni – Nagore – Nagapattinam Tour",
    category: "spiritual",
    theme: "A multi-faith circuit — Basilica, Dargah & temple town",
    stops: ["Velankanni Basilica", "Nagore Dargah", "Nagapattinam"],
    states: ["TN"],
    days: 2,
  },
  {
    slug: "deep-south-spiritual-tour",
    name: "Deep South Spiritual Tour",
    category: "spiritual",
    theme: "Temple towns and the tri-sea confluence at India's southern tip",
    stops: ["Madurai", "Rameswaram", "Kanyakumari", "Tirunelveli"],
    states: ["TN"],
    days: 4,
  },
  {
    slug: "nilgiris-hill-circuit",
    name: "Nilgiris Hill Circuit",
    category: "hill",
    theme: "Tea gardens and colonial hill towns of the Nilgiris",
    stops: ["Ooty", "Coonoor", "Kotagiri", "Wellington"],
    states: ["TN"],
    days: 3,
  },
  {
    slug: "western-ghats-coffee-trail",
    name: "Western Ghats Coffee Trail",
    category: "hill",
    theme: "Misty coffee estates across Karnataka and Kerala",
    stops: ["Coorg (Madikeri)", "Chikmagalur", "Wayanad"],
    states: ["KA", "KL"],
    days: 4,
  },
  {
    slug: "chola-heritage-trail",
    name: "Chola Heritage Trail",
    category: "heritage",
    theme: "UNESCO-listed Chola temple architecture",
    stops: ["Thanjavur", "Kumbakonam", "Trichy", "Darasuram", "Gangaikonda Cholapuram"],
    states: ["TN"],
    days: 3,
  },
  {
    slug: "kerala-backwater-circuit",
    name: "Kerala Backwater Circuit",
    category: "coastal",
    theme: "Houseboats and backwaters of Kerala",
    stops: ["Kochi", "Alleppey", "Kumarakom", "Kollam"],
    states: ["KL"],
    days: 4,
  },
  {
    slug: "french-riviera-of-the-east-tour",
    name: "French Riviera of the East Tour",
    category: "coastal",
    theme: "Coastal heritage and the French Quarter",
    stops: ["Mahabalipuram", "Puducherry", "Chidambaram"],
    states: ["TN", "PY"],
    days: 2,
  },
  {
    slug: "chettinad-heritage-trail",
    name: "Chettinad Heritage Trail",
    category: "heritage",
    theme: "Mansion architecture and the Chettinad cuisine trail",
    stops: ["Karaikudi", "Kanadukathan", "Athangudi"],
    states: ["TN"],
    days: 2,
  },
  {
    slug: "golden-triangle-south-tour",
    name: "Golden Triangle South Tour",
    category: "heritage",
    theme: "Karnataka's classic palace-and-ruins loop",
    stops: ["Bangalore", "Mysore", "Hampi"],
    states: ["KA"],
    days: 4,
  },
  {
    slug: "malabar-coast-circuit",
    name: "Malabar Coast Circuit",
    category: "coastal",
    theme: "North Kerala's coast and hill country",
    stops: ["Kochi", "Wayanad", "Kozhikode"],
    states: ["KL"],
    days: 4,
  },
];

// ------------------------------------------------------------
// INDIVIDUAL DESTINATIONS
// ------------------------------------------------------------
export const PLACES: Place[] = [
  // ---- Spiritual — Tamil Nadu ----
  { slug: "kanchipuram-taxi", name: "Kanchipuram", category: "spiritual", state: "TN", significance: "the city of a thousand temples, Ekambareswarar & Kamakshi Amman" },
  { slug: "tiruvannamalai-taxi", name: "Tiruvannamalai", category: "spiritual", state: "TN", significance: "Arunachaleswarar Temple and the Girivalam hill path" },
  { slug: "chidambaram-taxi", name: "Chidambaram", category: "spiritual", state: "TN", significance: "the Nataraja Temple (Thillai)" },
  { slug: "kumbakonam-taxi", name: "Kumbakonam", category: "spiritual", state: "TN", significance: "the temple town of the Mahamaham tank" },
  { slug: "thanjavur-taxi", name: "Thanjavur", category: "spiritual", state: "TN", significance: "the UNESCO-listed Brihadeeswarar Temple" },
  { slug: "srirangam-trichy-taxi", name: "Srirangam (Trichy)", category: "spiritual", state: "TN", significance: "Sri Ranganathaswamy Temple, the largest functioning Hindu temple" },
  { slug: "jambukeswarar-trichy-taxi", name: "Jambukeswarar Temple, Trichy", category: "spiritual", state: "TN", significance: "the Pancha Bhoota Sthalam of Water" },
  { slug: "palani-taxi", name: "Palani", category: "spiritual", state: "TN", significance: "one of the six Arupadai Veedu abodes of Murugan" },
  { slug: "swamimalai-taxi", name: "Swamimalai", category: "spiritual", state: "TN", significance: "an Arupadai Veedu abode of Murugan near Kumbakonam" },
  { slug: "tiruchendur-taxi", name: "Tiruchendur", category: "spiritual", state: "TN", significance: "the coastal Arupadai Veedu shrine of Murugan" },
  { slug: "tiruparankundram-taxi", name: "Tiruparankundram", category: "spiritual", state: "TN", significance: "the hill-temple Arupadai Veedu abode near Madurai" },
  { slug: "pazhamudircholai-taxi", name: "Pazhamudircholai", category: "spiritual", state: "TN", significance: "the forest-hill Arupadai Veedu abode of Murugan" },
  { slug: "thiruttani-taxi", name: "Thiruttani", category: "spiritual", state: "TN", significance: "the closest Arupadai Veedu abode to Chennai" },
  { slug: "madurai-taxi", name: "Madurai", category: "spiritual", state: "TN", significance: "the iconic Meenakshi Amman Temple" },
  { slug: "rameswaram-taxi", name: "Rameswaram", category: "spiritual", state: "TN", significance: "the Ramanathaswamy Jyotirlinga and Char Dham shrine" },
  { slug: "dhanushkodi-taxi", name: "Dhanushkodi", category: "spiritual", state: "TN", significance: "the ghost town at Rama Setu's edge" },
  { slug: "kanyakumari-taxi", name: "Kanyakumari", category: "spiritual", state: "TN", significance: "the Bhagavathy Amman Temple at India's southern tip" },
  { slug: "vivekananda-rock-taxi", name: "Vivekananda Rock Memorial", category: "spiritual", state: "TN", significance: "the meditation memorial off Kanyakumari" },
  { slug: "velankanni-taxi", name: "Velankanni", category: "spiritual", state: "TN", significance: "the Basilica of Our Lady of Good Health" },
  { slug: "nagore-dargah-taxi", name: "Nagore Dargah", category: "spiritual", state: "TN", significance: "the revered Sufi shrine on the Coromandel coast" },
  { slug: "nagapattinam-taxi", name: "Nagapattinam", category: "spiritual", state: "TN", significance: "a historic temple and coastal town" },
  { slug: "sirkazhi-taxi", name: "Sirkazhi", category: "spiritual", state: "TN", significance: "the Sattanathar Temple" },
  { slug: "poombuhar-taxi", name: "Poombuhar", category: "spiritual", state: "TN", significance: "the ancient Chola port town and its temples" },
  { slug: "suryanar-kovil-taxi", name: "Suryanar Kovil", category: "spiritual", state: "TN", significance: "the Navagraha temple of the Sun" },
  { slug: "thingalur-taxi", name: "Thingalur", category: "spiritual", state: "TN", significance: "the Navagraha temple of the Moon" },
  { slug: "vaitheeswaran-koil-taxi", name: "Vaitheeswaran Koil", category: "spiritual", state: "TN", significance: "the Navagraha temple of Mars" },
  { slug: "thiruvenkadu-taxi", name: "Thiruvenkadu", category: "spiritual", state: "TN", significance: "the Navagraha temple of Mercury" },
  { slug: "alangudi-taxi", name: "Alangudi", category: "spiritual", state: "TN", significance: "the Navagraha temple of Jupiter" },
  { slug: "kanjanur-taxi", name: "Kanjanur", category: "spiritual", state: "TN", significance: "the Navagraha temple of Venus" },
  { slug: "thirunallar-taxi", name: "Thirunallar", category: "spiritual", state: "TN", significance: "the Navagraha temple of Saturn" },
  { slug: "thirunageswaram-taxi", name: "Thirunageswaram", category: "spiritual", state: "TN", significance: "the Navagraha temple of Rahu" },
  { slug: "keezhperumpallam-taxi", name: "Keezhperumpallam", category: "spiritual", state: "TN", significance: "the Navagraha temple of Ketu" },
  // ---- Spiritual — Andhra Pradesh ----
  { slug: "tirupati-taxi", name: "Tirupati / Tirumala", category: "spiritual", state: "AP", significance: "the Sri Venkateswara Swamy Temple" },
  { slug: "srikalahasti-taxi", name: "Srikalahasti", category: "spiritual", state: "AP", significance: "the Kalahasteeswara Temple and Pancha Bhoota Sthalam of Air" },
  { slug: "kanipakam-taxi", name: "Kanipakam", category: "spiritual", state: "AP", significance: "the self-growing Ganesha idol" },
  { slug: "puttaparthi-taxi", name: "Puttaparthi", category: "spiritual", state: "AP", significance: "the Sathya Sai Baba ashram" },
  { slug: "kadiri-taxi", name: "Kadiri", category: "spiritual", state: "AP", significance: "the Lakshmi Narasimha Swamy Temple" },
  // ---- Spiritual — Kerala ----
  { slug: "guruvayur-taxi", name: "Guruvayur", category: "spiritual", state: "KL", significance: "the revered Krishna Temple" },
  { slug: "sabarimala-taxi", name: "Sabarimala", category: "spiritual", state: "KL", significance: "the seasonal Ayyappa pilgrimage (Nov–Jan)" },
  // ---- Spiritual — Karnataka ----
  { slug: "kollur-mookambika-taxi", name: "Kollur Mookambika", category: "spiritual", state: "KA", significance: "the shrine of Goddess Mookambika" },
  { slug: "udupi-taxi", name: "Udupi Krishna Temple", category: "spiritual", state: "KA", significance: "the historic Krishna Matha" },
  { slug: "dharmasthala-taxi", name: "Dharmasthala", category: "spiritual", state: "KA", significance: "the Manjunatha Temple" },
  { slug: "horanadu-taxi", name: "Horanadu", category: "spiritual", state: "KA", significance: "the Annapoorneshwari Temple" },

  // ---- Hill Stations ----
  { slug: "yelagiri-taxi", name: "Yelagiri", category: "hill", state: "TN", significance: "the closest hill station to Chennai" },
  { slug: "yercaud-taxi", name: "Yercaud", category: "hill", state: "TN", significance: "a popular short hill getaway near Salem" },
  { slug: "kodaikanal-taxi", name: "Kodaikanal", category: "hill", state: "TN", significance: "the Princess of Hill Stations" },
  { slug: "ooty-taxi", name: "Ooty", category: "hill", state: "TN", significance: "the Queen of the Nilgiris" },
  { slug: "coonoor-taxi", name: "Coonoor", category: "hill", state: "TN", significance: "tea estates of the Nilgiris" },
  { slug: "kotagiri-taxi", name: "Kotagiri", category: "hill", state: "TN", significance: "the oldest hill station in the Nilgiris" },
  { slug: "valparai-taxi", name: "Valparai", category: "hill", state: "TN", significance: "a quiet plateau of tea and coffee estates" },
  { slug: "munnar-taxi", name: "Munnar", category: "hill", state: "KL", significance: "Kerala's iconic tea garden hills" },
  { slug: "thekkady-taxi", name: "Thekkady / Periyar", category: "hill", state: "KL", significance: "the Periyar Wildlife Sanctuary" },
  { slug: "vagamon-taxi", name: "Vagamon", category: "hill", state: "KL", significance: "rolling meadows and pine forests" },
  { slug: "wayanad-taxi", name: "Wayanad", category: "hill", state: "KL", significance: "misty hills and wildlife sanctuaries" },
  { slug: "coorg-taxi", name: "Coorg (Madikeri)", category: "hill", state: "KA", significance: "the Scotland of India, coffee country" },
  { slug: "chikmagalur-taxi", name: "Chikmagalur", category: "hill", state: "KA", significance: "Karnataka's coffee hill country" },

  // ---- Coastal ----
  { slug: "mahabalipuram-taxi", name: "Mahabalipuram", category: "coastal", state: "TN", significance: "UNESCO shore temples and beach" },
  { slug: "pondicherry-taxi", name: "Puducherry", category: "coastal", state: "PY", significance: "the French Quarter and Promenade Beach" },
  { slug: "poompuhar-coastal-taxi", name: "Poompuhar Beach", category: "coastal", state: "TN", significance: "an ancient port town on the Coromandel coast" },
  { slug: "kochi-taxi", name: "Kochi / Fort Kochi", category: "coastal", state: "KL", significance: "a coastal heritage city on the Malabar coast" },
  { slug: "alleppey-taxi", name: "Alleppey", category: "coastal", state: "KL", significance: "Kerala's backwater houseboat capital" },
  { slug: "kumarakom-taxi", name: "Kumarakom", category: "coastal", state: "KL", significance: "backwater resorts on Vembanad Lake" },
  { slug: "varkala-taxi", name: "Varkala", category: "coastal", state: "KL", significance: "cliffside beaches on Kerala's coast" },
  { slug: "kovalam-taxi", name: "Kovalam / Trivandrum", category: "coastal", state: "KL", significance: "Kerala's capital and its famous beach" },

  // ---- Heritage, Wildlife & Nature ----
  { slug: "trichy-taxi", name: "Trichy (Rockfort)", category: "heritage", state: "TN", significance: "the historic Rockfort Temple" },
  { slug: "chettinad-taxi", name: "Chettinad (Karaikudi)", category: "heritage", state: "TN", significance: "grand mansion architecture and cuisine" },
  { slug: "courtallam-taxi", name: "Courtallam", category: "heritage", state: "TN", significance: "the waterfalls town of Tamil Nadu" },
  { slug: "hogenakkal-taxi", name: "Hogenakkal Falls", category: "heritage", state: "TN", significance: "the Niagara of India" },
  { slug: "vedanthangal-taxi", name: "Vedanthangal Bird Sanctuary", category: "heritage", state: "TN", significance: "a historic bird sanctuary near Chennai" },
  { slug: "mudumalai-taxi", name: "Mudumalai Wildlife Sanctuary", category: "heritage", state: "TN", significance: "a Nilgiris biosphere wildlife reserve" },
  { slug: "anamalai-taxi", name: "Anamalai Tiger Reserve", category: "heritage", state: "TN", significance: "a Western Ghats tiger reserve" },
  { slug: "salem-taxi", name: "Salem", category: "heritage", state: "TN", significance: "a heritage city gateway to Yercaud" },
  { slug: "coimbatore-taxi", name: "Coimbatore", category: "heritage", state: "TN", significance: "the gateway to the Western Ghats" },
  { slug: "mysore-taxi", name: "Mysore Palace", category: "heritage", state: "KA", significance: "Karnataka's iconic palace city" },
  { slug: "bangalore-taxi", name: "Bangalore", category: "heritage", state: "KA", significance: "the garden city of Karnataka" },
  { slug: "hampi-taxi", name: "Hampi", category: "heritage", state: "KA", significance: "UNESCO-listed Vijayanagara ruins" },
  { slug: "bandipur-taxi", name: "Bandipur National Park", category: "heritage", state: "KA", significance: "a premier tiger reserve" },
  { slug: "vijayawada-taxi", name: "Vijayawada / Amaravati", category: "heritage", state: "AP", significance: "a heritage river city" },
  { slug: "araku-valley-taxi", name: "Vizag / Araku Valley", category: "heritage", state: "AP", significance: "coffee valleys of the Eastern Ghats" },
];

export const CATEGORY_META: Record<Category, { label: string; slug: string; description: string }> = {
  spiritual: {
    label: "Spiritual & Temple Tours",
    slug: "spiritual",
    description:
      "Book an Innova Crysta taxi from Chennai for temple tours, Navagraha and Arupadai Veedu circuits, and pilgrimage journeys across South India.",
  },
  hill: {
    label: "Hill Station Getaways",
    slug: "hill-stations",
    description:
      "Book an Innova Crysta taxi from Chennai to South India's best hill stations — Ooty, Munnar, Kodaikanal, Coorg and more.",
  },
  coastal: {
    label: "Coastal Getaways",
    slug: "coastal",
    description:
      "Book an Innova Crysta taxi from Chennai for coastal getaways — Mahabalipuram, Puducherry, Kerala's backwaters and beaches.",
  },
  heritage: {
    label: "Heritage & Wildlife",
    slug: "heritage",
    description:
      "Book an Innova Crysta taxi from Chennai for heritage cities, forts, waterfalls and wildlife reserves across South India.",
  },
};

export function placesByCategory(category: Category): Place[] {
  return PLACES.filter((p) => p.category === category);
}

export function findPlace(slug: string): Place | undefined {
  return PLACES.find((p) => p.slug === slug);
}

export function findCircuit(slug: string): Circuit | undefined {
  return CIRCUITS.find((c) => c.slug === slug);
}
