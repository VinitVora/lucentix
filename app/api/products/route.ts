import { NextResponse } from "next/server";

const products = [
 // --- Rings (21 total) ---
{ 
    id: 1, name: "Eternal Radiance Ring", category: "rings", price: "$4,500", image: "/fc1.jpg", 
    description: "Classic solitaire with premium diamond", 
    shortDesc: "A timeless solitaire ring symbolizing eternal love and brilliance.", 
    details: { metal: "18K White Gold", weight: "7.5 grams", stone: "1.2 carat VVS1 Diamond", craftsmanship: "Handcrafted with precision-set prongs for maximum sparkle." } 
  },
  { 
    id: 5, name: "Emerald Elegance Ring", category: "rings", price: "$5,200", image: "/fc1.jpg", 
    description: "Emerald center stone with diamond accents", 
    shortDesc: "An opulent emerald centerpiece framed in timeless diamond brilliance.", 
    details: { metal: "18K Yellow Gold", weight: "8 grams", stone: "1.5 carat Colombian Emerald", craftsmanship: "Expert bezel setting highlights the emerald’s vivid hue." } 
  },
  { 
    id: 7, name: "Sapphire Dreams Ring", category: "rings", price: "$4,800", image: "/fc3.jpg", 
    description: "Blue sapphire with white diamond halo", 
    shortDesc: "A celestial sapphire encircled by radiant diamonds.", 
    details: { metal: "Platinum", weight: "7 grams", stone: "1.1 carat Royal Blue Sapphire", craftsmanship: "Meticulously halo-set for brilliance under every light." } 
  },
  { 
    id: 13, name: "Crimson Bloom Ring", category: "rings", price: "$3,900", image: "/fc2.jpg", 
    description: "Ruby centerpiece with intricate filigree design", 
    shortDesc: "A blooming ruby ring that captures the warmth of passion.", 
    details: { metal: "18K Rose Gold", weight: "6.8 grams", stone: "1 carat Burmese Ruby", craftsmanship: "Intricate filigree crafted to evoke floral artistry." } 
  },
  { 
    id: 14, name: "Aurora Glow Ring", category: "rings", price: "$4,300", image: "/fc3.jpg", 
    description: "Opal gemstone reflecting prismatic hues", 
    shortDesc: "An opal that dances with light, evoking the northern aurora.", 
    details: { metal: "14K Rose Gold", weight: "6.5 grams", stone: "Australian Fire Opal", craftsmanship: "Cabochon polish captures iridescent natural play-of-color." } 
  },
  { 
    id: 15, name: "Celestial Crown Ring", category: "rings", price: "$5,600", image: "/fc4.jpg", 
    description: "Diamond-studded band inspired by constellations", 
    shortDesc: "A starry crown of diamonds celebrating celestial beauty.", 
    details: { metal: "18K White Gold", weight: "8.2 grams", stone: "1.8 carat Round Brilliant Diamonds", craftsmanship: "Precision pavé setting mimics constellations in night skies." } 
  },
  { 
    id: 16, name: "Golden Mirage Ring", category: "rings", price: "$3,800", image: "/fc1.jpg", 
    description: "Hammered gold ring with minimalist charm", 
    shortDesc: "A minimalist gold band shimmering like desert sunlight.", 
    details: { metal: "22K Yellow Gold", weight: "9 grams", stone: "None", craftsmanship: "Hand-hammered texture offering raw, refined elegance." } 
  },
  { 
    id: 17, name: "Velvet Night Ring", category: "rings", price: "$4,100", image: "/fc2.jpg", 
    description: "Onyx centerpiece surrounded by rose gold", 
    shortDesc: "An enigmatic onyx framed in warm rose gold tones.", 
    details: { metal: "18K Rose Gold", weight: "7.8 grams", stone: "Black Onyx", craftsmanship: "Bezel-polished by hand for smooth, mirror-like finish." } 
  },
  { 
    id: 18, name: "Dawn Whisper Ring", category: "rings", price: "$2,900", image: "/fc3.jpg", 
    description: "Soft rose quartz with milgrain border", 
    shortDesc: "A gentle rose quartz ring that whispers serenity.", 
    details: { metal: "14K White Gold", weight: "6.2 grams", stone: "Rose Quartz", craftsmanship: "Vintage milgrain edging with soft feminine curves." } 
  },
  { 
    id: 19, name: "Twilight Halo Ring", category: "rings", price: "$4,700", image: "/fc4.jpg", 
    description: "Diamond halo embracing a blue topaz", 
    shortDesc: "A twilight topaz framed in a diamond halo glow.", 
    details: { metal: "18K White Gold", weight: "7.4 grams", stone: "1.3 carat Blue Topaz & Diamonds", craftsmanship: "Micro-pavé halo crafted for ethereal shimmer." } 
  },
  { 
    id: 20, name: "Luna Grace Ring", category: "rings", price: "$3,200", image: "/fc1.jpg", 
    description: "White gold ring with crescent diamond design", 
    shortDesc: "A crescent-shaped ring that captures moonlit elegance.", 
    details: { metal: "18K White Gold", weight: "6.9 grams", stone: "0.8 carat Diamond", craftsmanship: "Artfully sculpted crescent set for balanced brilliance." } 
  },
  { 
    id: 21, name: "Obsidian Charm Ring", category: "rings", price: "$3,400", image: "/fc2.jpg", 
    description: "Polished obsidian stone with platinum band", 
    shortDesc: "A bold statement of contrast and refinement.", 
    details: { metal: "Platinum", weight: "8 grams", stone: "Obsidian", craftsmanship: "Mirror-polished stone surface reveals deep natural sheen." } 
  },
  { 
    id: 22, name: "Rosette Bloom Ring", category: "rings", price: "$2,700", image: "/fc3.jpg", 
    description: "Floral-inspired diamond arrangement", 
    shortDesc: "A radiant rosette of diamonds blooming in symmetry.", 
    details: { metal: "14K Yellow Gold", weight: "5.9 grams", stone: "Cluster Diamonds", craftsmanship: "Prong cluster setting shaped to mimic a full bloom." } 
  },
  { 
    id: 23, name: "Auric Harmony Ring", category: "rings", price: "$4,000", image: "/fc4.jpg", 
    description: "Balanced dual-gem design with amethyst", 
    shortDesc: "A symphony of amethyst and diamond in perfect harmony.", 
    details: { metal: "18K White Gold", weight: "7.1 grams", stone: "Amethyst & Diamond", craftsmanship: "Dual bezel settings merge gemstones in seamless flow." } 
  },
  { 
    id: 24, name: "Midnight Whisper Ring", category: "rings", price: "$5,000", image: "/fc1.jpg", 
    description: "Deep sapphire framed in white gold", 
    shortDesc: "A deep sapphire whispering mystery and grace.", 
    details: { metal: "18K White Gold", weight: "7.6 grams", stone: "1.4 carat Blue Sapphire", craftsmanship: "High-polish mirror finish accentuates sapphire’s depth." } 
  },
  { 
    id: 25, name: "Amber Horizon Ring", category: "rings", price: "$3,600", image: "/fc2.jpg", 
    description: "Golden amber gemstone with matte finish", 
    shortDesc: "A golden horizon captured in amber’s timeless glow.", 
    details: { metal: "14K Gold", weight: "6.7 grams", stone: "Baltic Amber", craftsmanship: "Matte finish band contrasts perfectly with translucent gem." } 
  },
  { 
    id: 26, name: "Ivy Lace Ring", category: "rings", price: "$3,900", image: "/fc3.jpg", 
    description: "Leaf-inspired design with delicate detailing", 
    shortDesc: "An intricate ivy motif celebrating nature’s elegance.", 
    details: { metal: "18K White Gold", weight: "6.4 grams", stone: "Peridot Accents", craftsmanship: "Laser-cut lacework inspired by botanical vines." } 
  },
  { 
    id: 27, name: "Noir Majesty Ring", category: "rings", price: "$5,300", image: "/fc4.jpg", 
    description: "Black diamond centerpiece on platinum band", 
    shortDesc: "Dark elegance crowned in platinum royalty.", 
    details: { metal: "Platinum", weight: "8.5 grams", stone: "1.8 carat Black Diamond", craftsmanship: "Hand-burnished edges create a sleek modern contour." } 
  },
  { 
    id: 28, name: "Crystal Dusk Ring", category: "rings", price: "$2,800", image: "/fc2.jpg", 
    description: "Crystal quartz with intricate silver band", 
    shortDesc: "A clear quartz ring radiating evening calm.", 
    details: { metal: "Sterling Silver", weight: "6.1 grams", stone: "Crystal Quartz", craftsmanship: "Engraved silver detailing evokes twilight shimmer." } 
  },
  { 
    id: 29, name: "Aurora Eclipse Ring", category: "rings", price: "$4,900", image: "/fc3.jpg", 
    description: "Golden halo around pear-cut diamond", 
    shortDesc: "A radiant diamond wrapped in golden light.", 
    details: { metal: "18K Yellow Gold", weight: "7 grams", stone: "1.2 carat Pear Diamond", craftsmanship: "Golden bezel designed to enhance the diamond’s brilliance." } 
  },
  { 
    id: 101, name: "Radiant Veil Ring", category: "rings", price: "$4,600", image: "/fc2.jpg", 
    description: "Diamond latticework band with subtle rose gold undertones", 
    shortDesc: "An intricate lattice of diamonds revealing graceful radiance.", 
    details: { metal: "18K Rose Gold", weight: "7.3 grams", stone: "1.1 carat Diamonds", craftsmanship: "Fine filigree diamond weaving symbolizes eternal unity." } 
  },
  
 // --- Earrings (21 total) ---
{ 
    id: 3, name: "Signature Earrings", category: "earrings", price: "$2,800", image: "/fc3.jpg", 
    description: "Timeless drop earrings with brilliant cut", 
    shortDesc: "A pair that defines understated sophistication and poise.", 
    details: { metal: "18K White Gold", weight: "5.2 grams", stone: "0.9 carat Brilliant Diamonds", craftsmanship: "Expertly balanced drops designed for perfect movement." } 
  },
  { 
    id: 9, name: "Diamond Cascade Earrings", category: "earrings", price: "$3,400", image: "/fc1.jpg", 
    description: "Multi-stone chandelier earrings", 
    shortDesc: "Diamonds cascading like a waterfall of light.", 
    details: { metal: "Platinum", weight: "6 grams", stone: "1.2 carat Diamonds", craftsmanship: "Intricately linked for shimmer with every turn." } 
  },
  { 
    id: 30, name: "Golden Petal Earrings", category: "earrings", price: "$2,600", image: "/fc4.jpg", 
    description: "Floral design with polished gold finish", 
    shortDesc: "A blooming golden motif that mirrors natural grace.", 
    details: { metal: "18K Yellow Gold", weight: "4.8 grams", stone: "Citrine Accents", craftsmanship: "Floral contours sculpted and hand-polished to perfection." } 
  },
  { 
    id: 31, name: "Lunar Drop Earrings", category: "earrings", price: "$3,200", image: "/fc2.jpg", 
    description: "Moonstone drops set in sterling silver", 
    shortDesc: "Mystical moonstone drops that glow like twilight.", 
    details: { metal: "Sterling Silver", weight: "5 grams", stone: "Rainbow Moonstone", craftsmanship: "Smooth bezel setting that captures lunar shimmer." } 
  },
  { 
    id: 32, name: "Crimson Charm Earrings", category: "earrings", price: "$3,700", image: "/fc3.jpg", 
    description: "Ruby studs with halo setting", 
    shortDesc: "Ruby halos that spark warmth and regal charm.", 
    details: { metal: "18K Rose Gold", weight: "4.5 grams", stone: "1 carat Burmese Ruby", craftsmanship: "Diamond halo designed to accentuate ruby fire." } 
  },
  { 
    id: 33, name: "Pearl Whisper Earrings", category: "earrings", price: "$2,900", image: "/fc4.jpg", 
    description: "Twin pearl drops with gold stems", 
    shortDesc: "Whispers of elegance in twin pearls of perfection.", 
    details: { metal: "18K Yellow Gold", weight: "5.3 grams", stone: "South Sea Pearls", craftsmanship: "Thread-mounted pearls for graceful sway and symmetry." } 
  },
  { 
    id: 34, name: "Noir Cascade Earrings", category: "earrings", price: "$3,600", image: "/fc1.jpg", 
    description: "Black diamond drops with elegant curvature", 
    shortDesc: "Dark elegance flows through a cascade of black diamonds.", 
    details: { metal: "18K White Gold", weight: "5.8 grams", stone: "Black Diamonds", craftsmanship: "Curved silhouette forged with minimal solder joints for fluid motion." } 
  },
  { 
    id: 35, name: "Aurora Twirl Earrings", category: "earrings", price: "$2,500", image: "/fc2.jpg", 
    description: "Spiral gold design with inset crystals", 
    shortDesc: "A golden twirl that catches every beam of light.", 
    details: { metal: "18K Gold", weight: "4.6 grams", stone: "Swarovski Crystals", craftsmanship: "Hand-shaped spirals with fine inlayed brilliance." } 
  },
  { 
    id: 36, name: "Emerald Bliss Earrings", category: "earrings", price: "$4,100", image: "/fc3.jpg", 
    description: "Emerald studs surrounded by diamonds", 
    shortDesc: "Emeralds radiating calm amidst halos of light.", 
    details: { metal: "18K Yellow Gold", weight: "5.5 grams", stone: "Colombian Emeralds & Diamonds", craftsmanship: "Micro pavé setting to maximize stone brilliance." } 
  },
  { 
    id: 37, name: "Celeste Hoop Earrings", category: "earrings", price: "$2,800", image: "/fc4.jpg", 
    description: "Textured gold hoops with modern flair", 
    shortDesc: "Hoops inspired by celestial rhythm and balance.", 
    details: { metal: "14K Gold", weight: "6 grams", stone: "None", craftsmanship: "Textured polish applied by hand for soft reflective finish." } 
  },
  { 
    id: 38, name: "Azure Flow Earrings", category: "earrings", price: "$3,900", image: "/fc1.jpg", 
    description: "Blue topaz teardrops with silver hooks", 
    shortDesc: "Azure drops that echo oceanic serenity.", 
    details: { metal: "Sterling Silver", weight: "5 grams", stone: "Blue Topaz", craftsmanship: "Tapered teardrop cut enhances clarity and depth." } 
  },
  { 
    id: 39, name: "Gilded Veil Earrings", category: "earrings", price: "$2,600", image: "/fc2.jpg", 
    description: "Fine filigree gold with delicate drops", 
    shortDesc: "Golden filigree woven like whispers of luxury.", 
    details: { metal: "18K Yellow Gold", weight: "4.2 grams", stone: "Tiny Diamonds", craftsmanship: "Hand-sculpted lattice design ensuring delicate balance." } 
  },
  { 
    id: 40, name: "Serene Pearl Earrings", category: "earrings", price: "$3,200", image: "/fc3.jpg", 
    description: "Single pearl suspended on gold thread", 
    shortDesc: "A serene dance of purity and gold.", 
    details: { metal: "18K Gold", weight: "4.8 grams", stone: "Akoya Pearl", craftsmanship: "Thread setting minimizes metal for floating illusion." } 
  },
  { 
    id: 41, name: "Amber Gleam Earrings", category: "earrings", price: "$2,400", image: "/fc4.jpg", 
    description: "Amber stone set in vintage gold frame", 
    shortDesc: "Golden amber gleaming with vintage allure.", 
    details: { metal: "14K Gold", weight: "5 grams", stone: "Baltic Amber", craftsmanship: "Vintage bezel crafted to preserve natural inclusions." } 
  },
  { 
    id: 42, name: "Auric Loop Earrings", category: "earrings", price: "$2,700", image: "/fc2.jpg", 
    description: "Minimalist loop with polished gold tone", 
    shortDesc: "Sculpted loops radiating simplicity and strength.", 
    details: { metal: "18K Gold", weight: "5.4 grams", stone: "None", craftsmanship: "Precision bending and mirror polish for seamless curve." } 
  },
  { 
    id: 43, name: "Twilight Charm Earrings", category: "earrings", price: "$3,500", image: "/fc1.jpg", 
    description: "Blue sapphire beads with diamond clasp", 
    shortDesc: "Midnight blue sapphires kissed by starlight diamonds.", 
    details: { metal: "18K White Gold", weight: "5.6 grams", stone: "Sapphire & Diamond", craftsmanship: "Bead stringing with diamond clasps for seamless movement." } 
  },
  { 
    id: 44, name: "Golden Vein Earrings", category: "earrings", price: "$3,800", image: "/fc3.jpg", 
    description: "Marbled gemstone with gold overlay", 
    shortDesc: "Organic stone veined in radiant gold artistry.", 
    details: { metal: "18K Gold", weight: "5 grams", stone: "Marbled Quartz", craftsmanship: "Hand-layered overlay creating flowing golden veins." } 
  },
  { 
    id: 45, name: "Ethereal Bloom Earrings", category: "earrings", price: "$2,900", image: "/fc4.jpg", 
    description: "Petal motif with white enamel finish", 
    shortDesc: "Petals of grace framed in soft white enamel.", 
    details: { metal: "14K Rose Gold", weight: "4.9 grams", stone: "Enamel Detailing", craftsmanship: "Precision enamel coating fused under high heat." } 
  },
  { 
    id: 46, name: "Seraphic Stud Earrings", category: "earrings", price: "$3,000", image: "/fc1.jpg", 
    description: "Angel-wing inspired gold studs", 
    shortDesc: "Wings of light, sculpted for divine simplicity.", 
    details: { metal: "18K Yellow Gold", weight: "3.9 grams", stone: "None", craftsmanship: "Micro-carved feather detail using precision CNC tooling." } 
  },
  { 
    id: 47, name: "Violet Whisper Earrings", category: "earrings", price: "$3,400", image: "/fc2.jpg", 
    description: "Amethyst stones with polished silver frame", 
    shortDesc: "Whispers of violet captured in shimmering silver.", 
    details: { metal: "Sterling Silver", weight: "5 grams", stone: "Amethyst", craftsmanship: "Smooth edge framing amplifies gem clarity." } 
  },
  { 
    id: 102, name: "Aurora Veil Earrings", category: "earrings", price: "$3,500", image: "/fc4.jpg", 
    description: "Soft gradient gemstones cascading in golden tiers", 
    shortDesc: "A flowing cascade of iridescent gemstones and light.", 
    details: { metal: "18K Rose Gold", weight: "5.7 grams", stone: "Opal & Diamond Mix", craftsmanship: "Tiered drop construction inspired by sunrise tones." } 
  },
  
 // --- Bracelets (21 total) ---
  { 
    id: 4, name: "Celestial Bracelet", category: "bracelets", price: "$3,500", image: "/fc4.jpg", 
    description: "Delicate chain with constellation design", 
    shortDesc: "A constellation of diamonds that wraps your wrist in starlight.", 
    details: { metal: "18K White Gold", weight: "8.3 grams", stone: "0.9 carat Diamonds", craftsmanship: "Hand-linked chain mimicking celestial clusters." } 
  },
  { 
    id: 8, name: "Golden Hour Bracelet", category: "bracelets", price: "$2,600", image: "/fc4.jpg", 
    description: "18k gold tennis bracelet", 
    shortDesc: "A golden symphony that captures the glow of dusk.", 
    details: { metal: "18K Yellow Gold", weight: "9 grams", stone: "Round Cut Diamonds", craftsmanship: "Flexible prong setting allowing natural wrist movement." } 
  },
  { 
    id: 48, name: "Twilight Band Bracelet", category: "bracelets", price: "$3,200", image: "/fc1.jpg", 
    description: "Silver mesh with diamond accents", 
    shortDesc: "A twilight weave of silver and light.", 
    details: { metal: "Sterling Silver", weight: "8.5 grams", stone: "Pavé Diamonds", craftsmanship: "Handwoven mesh with micro-set diamond patterns." } 
  },
  { 
    id: 49, name: "Pearl Horizon Bracelet", category: "bracelets", price: "$3,900", image: "/fc2.jpg", 
    description: "Pearl beads with gold charm closure", 
    shortDesc: "Classic pearls reimagined with modern golden grace.", 
    details: { metal: "18K Gold", weight: "7.2 grams", stone: "South Sea Pearls", craftsmanship: "Threaded by hand and finished with precision clasps." } 
  },
  { 
    id: 50, name: "Radiant Curve Bracelet", category: "bracelets", price: "$2,700", image: "/fc3.jpg", 
    description: "C-shaped open bangle with crystal tips", 
    shortDesc: "An elegant curve that mirrors flowing light.", 
    details: { metal: "14K Rose Gold", weight: "7 grams", stone: "Swarovski Crystals", craftsmanship: "Forged curvature polished for flawless reflection." } 
  },
  { 
    id: 51, name: "Auric Link Bracelet", category: "bracelets", price: "$3,100", image: "/fc4.jpg", 
    description: "Gold chain links with brushed finish", 
    shortDesc: "Golden links of strength softened by satin texture.", 
    details: { metal: "18K Yellow Gold", weight: "9.1 grams", stone: "None", craftsmanship: "Matte-brushed finish applied manually to each link." } 
  },
  { 
    id: 52, name: "Crimson Thread Bracelet", category: "bracelets", price: "$2,900", image: "/fc1.jpg", 
    description: "Red silk thread with diamond charm", 
    shortDesc: "A subtle fusion of luxury and tradition.", 
    details: { metal: "18K White Gold", weight: "3 grams", stone: "Tiny Diamond Charm", craftsmanship: "Diamond charm hand-threaded into silk with invisible loop clasp." } 
  },
  { 
    id: 53, name: "Luna Mesh Bracelet", category: "bracelets", price: "$3,300", image: "/fc2.jpg", 
    description: "Interwoven silver strands with clasp", 
    shortDesc: "A silvery mesh that captures moonlit texture.", 
    details: { metal: "Sterling Silver", weight: "8 grams", stone: "None", craftsmanship: "Machine-braided strands hand-finished for seamless texture." } 
  },
  { 
    id: 54, name: "Eternal Twist Bracelet", category: "bracelets", price: "$4,000", image: "/fc3.jpg", 
    description: "Twisted dual-metal design", 
    shortDesc: "Two metals intertwined in timeless unity.", 
    details: { metal: "18K White & Rose Gold", weight: "9.4 grams", stone: "0.5 carat Diamond Tips", craftsmanship: "Precision dual twist fused under high pressure." } 
  },
  { 
    id: 55, name: "Ivory Charm Bracelet", category: "bracelets", price: "$3,700", image: "/fc4.jpg", 
    description: "Ivory beads with gold embellishments", 
    shortDesc: "Soft ivory tones kissed with golden charm.", 
    details: { metal: "18K Gold", weight: "8.7 grams", stone: "Ivory Beads", craftsmanship: "Ethically sourced ivory pearls set with gold spacers." } 
  },
  { 
    id: 56, name: "Aurora Braid Bracelet", category: "bracelets", price: "$2,500", image: "/fc2.jpg", 
    description: "Braided leather with gold clasps", 
    shortDesc: "A modern twist of leather and light.", 
    details: { metal: "14K Gold", weight: "6 grams", stone: "None", craftsmanship: "Triple braid hand-bound with precision clasp." } 
  },
  { 
    id: 57, name: "Sable Shine Bracelet", category: "bracelets", price: "$3,900", image: "/fc1.jpg", 
    description: "Polished black onyx chain", 
    shortDesc: "Black onyx links exuding pure confidence.", 
    details: { metal: "Platinum", weight: "8.8 grams", stone: "Onyx", craftsmanship: "Hand-strung links polished to mirror perfection." } 
  },
  { 
    id: 58, name: "Celeste Cuff Bracelet", category: "bracelets", price: "$4,200", image: "/fc3.jpg", 
    description: "Wide gold cuff with engraved patterns", 
    shortDesc: "An engraved statement of strength and style.", 
    details: { metal: "18K Yellow Gold", weight: "11 grams", stone: "None", craftsmanship: "Laser-engraved patterns inspired by celestial geometry." } 
  },
  { 
    id: 59, name: "Amber Twist Bracelet", category: "bracelets", price: "$3,100", image: "/fc4.jpg", 
    description: "Amber accents wrapped in golden wire", 
    shortDesc: "Golden spirals dancing around honey-toned amber.", 
    details: { metal: "18K Gold", weight: "7.6 grams", stone: "Baltic Amber", craftsmanship: "Wire-wrapped amber set in flowing spiral pattern." } 
  },
  { 
    id: 60, name: "Serene Chain Bracelet", category: "bracelets", price: "$2,800", image: "/fc2.jpg", 
    description: "Minimal chain bracelet with oval clasp", 
    shortDesc: "Simple elegance redefined in gold and grace.", 
    details: { metal: "18K Yellow Gold", weight: "6.5 grams", stone: "None", craftsmanship: "Fine oval-link chain polished by hand." } 
  },
  { 
    id: 61, name: "Radiant Wave Bracelet", category: "bracelets", price: "$3,600", image: "/fc1.jpg", 
    description: "Gold wave-pattern cuff", 
    shortDesc: "An undulating wave of gold reflecting inner calm.", 
    details: { metal: "18K Gold", weight: "9.2 grams", stone: "None", craftsmanship: "Wave motif hand-carved then buffed to satin gloss." } 
  },
  { 
    id: 62, name: "Golden Silk Bracelet", category: "bracelets", price: "$2,900", image: "/fc3.jpg", 
    description: "Silk cord with delicate gold charms", 
    shortDesc: "Silken grace with golden whispers of charm.", 
    details: { metal: "14K Gold", weight: "5.5 grams", stone: "Charm Beads", craftsmanship: "Gold charms cast and threaded into premium silk cord." } 
  },
  { 
    id: 63, name: "Noir Link Bracelet", category: "bracelets", price: "$3,500", image: "/fc4.jpg", 
    description: "Black rhodium chain links", 
    shortDesc: "Dark links of power bound in quiet luxury.", 
    details: { metal: "Rhodium-Plated Silver", weight: "8 grams", stone: "None", craftsmanship: "Rhodium coating applied through electro-bond process." } 
  },
  { 
    id: 64, name: "Azure Gleam Bracelet", category: "bracelets", price: "$3,400", image: "/fc2.jpg", 
    description: "Blue gemstone with diamond clasp", 
    shortDesc: "A serene blue gleam kissed by diamond brilliance.", 
    details: { metal: "18K White Gold", weight: "7.4 grams", stone: "Blue Topaz & Diamond", craftsmanship: "Gem-cut bracelet aligned for fluid reflection." } 
  },
  { 
    id: 65, name: "Ethereal Glow Bracelet", category: "bracelets", price: "$4,100", image: "/fc3.jpg", 
    description: "Diamond-studded infinity design", 
    shortDesc: "An infinite embrace of gold and light.", 
    details: { metal: "18K Gold", weight: "8 grams", stone: "0.8 carat Diamonds", craftsmanship: "Infinity shape precision-cast and pavé-set by hand." } 
  },
  { 
    id: 103, name: "Ivory Wave Bracelet", category: "bracelets", price: "$3,800", image: "/fc2.jpg", 
    description: "Fluid gold wave with ivory enamel detailing", 
    shortDesc: "Golden waves cresting with ivory finesse.", 
    details: { metal: "18K Yellow Gold", weight: "7.7 grams", stone: "Ivory Enamel", craftsmanship: "Heat-cured enamel applied in soft flowing motion." } 
  },
  
 // --- Necklaces (21 total) ---
  { 
    id: 2, name: "Heritage Necklace", category: "necklaces", price: "$3,200", image: "/fc2.jpg", 
    description: "Vintage-inspired pendant with gemstones", 
    shortDesc: "A heritage piece that echoes timeless artistry.", 
    details: { metal: "18K Yellow Gold", weight: "10.5 grams", stone: "Emerald & Diamond Mix", craftsmanship: "Handcrafted pendant inspired by early Victorian design." } 
  },
  { 
    id: 6, name: "Pearl Essence Necklace", category: "necklaces", price: "$2,900", image: "/fc2.jpg", 
    description: "South Sea pearl with gold chain", 
    shortDesc: "The purity of a single pearl, the grace of simplicity.", 
    details: { metal: "18K Gold", weight: "8.9 grams", stone: "South Sea Pearl", craftsmanship: "Classic single-drop mounting with minimal gold bezel." } 
  },
  { 
    id: 66, name: "Celestial Grace Necklace", category: "necklaces", price: "$3,800", image: "/fc1.jpg", 
    description: "Diamond constellation on gold chain", 
    shortDesc: "Diamonds aligned like constellations across your skin.", 
    details: { metal: "18K White Gold", weight: "9.4 grams", stone: "0.9 carat Diamonds", craftsmanship: "Precision pavé star clusters linked by invisible joints." } 
  },
  { 
    id: 67, name: "Ethereal Bloom Necklace", category: "necklaces", price: "$3,400", image: "/fc3.jpg", 
    description: "Floral pendant with ruby center", 
    shortDesc: "A blooming ruby at the heart of golden petals.", 
    details: { metal: "18K Rose Gold", weight: "9 grams", stone: "Ruby & Diamond", craftsmanship: "Floral motif cast and polished under magnified inspection." } 
  },
  { 
    id: 68, name: "Golden Dusk Necklace", category: "necklaces", price: "$3,700", image: "/fc4.jpg", 
    description: "Amber gemstone suspended on fine chain", 
    shortDesc: "Amber glow suspended between day and night.", 
    details: { metal: "14K Gold", weight: "8 grams", stone: "Baltic Amber", craftsmanship: "Fine wire suspension enhances translucence and color play." } 
  },
  { 
    id: 69, name: "Moonlit Lace Necklace", category: "necklaces", price: "$3,100", image: "/fc2.jpg", 
    description: "Lace-pattern pendant with silver overlay", 
    shortDesc: "An intricate lace of silver under moonlight shimmer.", 
    details: { metal: "Sterling Silver", weight: "9 grams", stone: "White Topaz", craftsmanship: "Laser-etched lace pattern plated with high-shine rhodium." } 
  },
  { 
    id: 70, name: "Emerald Trail Necklace", category: "necklaces", price: "$4,500", image: "/fc1.jpg", 
    description: "Emerald stones along gold strand", 
    shortDesc: "A trail of emeralds leading into timeless luxury.", 
    details: { metal: "18K Yellow Gold", weight: "11 grams", stone: "Zambian Emeralds", craftsmanship: "Hand-linked gems set along custom tension clasp." } 
  },
  { 
    id: 71, name: "Serene Glow Necklace", category: "necklaces", price: "$2,800", image: "/fc3.jpg", 
    description: "Minimal gold disc with single diamond", 
    shortDesc: "Minimal design, infinite grace.", 
    details: { metal: "18K Gold", weight: "7.2 grams", stone: "0.3 carat Diamond", craftsmanship: "High-polish disc with single micro-set diamond accent." } 
  },
  { 
    id: 72, name: "Amber Radiance Necklace", category: "necklaces", price: "$3,300", image: "/fc4.jpg", 
    description: "Amber drop pendant on rose gold chain", 
    shortDesc: "Golden warmth suspended in quiet elegance.", 
    details: { metal: "18K Rose Gold", weight: "8.4 grams", stone: "Baltic Amber", craftsmanship: "Cabochon finish for natural depth and warmth." } 
  },
  { 
    id: 73, name: "Velvet Halo Necklace", category: "necklaces", price: "$3,600", image: "/fc2.jpg", 
    description: "Onyx pendant encircled by diamonds", 
    shortDesc: "Dark stone embraced by a halo of light.", 
    details: { metal: "18K White Gold", weight: "9.3 grams", stone: "Black Onyx & Diamonds", craftsmanship: "Bezel-set halo with fine undercarriage engraving." } 
  },
  { 
    id: 74, name: "Aurora Beam Necklace", category: "necklaces", price: "$3,900", image: "/fc1.jpg", 
    description: "Opal with multicolor reflections", 
    shortDesc: "An opal pendant alive with northern light.", 
    details: { metal: "18K White Gold", weight: "8.6 grams", stone: "Australian Opal", craftsmanship: "Custom-cut opal set to enhance iridescence." } 
  },
  { 
    id: 75, name: "Noir Pearl Necklace", category: "necklaces", price: "$3,200", image: "/fc3.jpg", 
    description: "Black pearls on gold thread", 
    shortDesc: "Midnight pearls strung on liquid gold.", 
    details: { metal: "18K Gold", weight: "9.8 grams", stone: "Tahitian Pearls", craftsmanship: "Hand-knotted silk interlacing for durability and symmetry." } 
  },
  { 
    id: 76, name: "Golden Harmony Necklace", category: "necklaces", price: "$3,800", image: "/fc4.jpg", 
    description: "Dual-layer chain with diamond charm", 
    shortDesc: "Dual layers of gold flowing in quiet rhythm.", 
    details: { metal: "18K Yellow Gold", weight: "10 grams", stone: "Diamond Charm", craftsmanship: "Two-tier layering with hidden adjustable clasp." } 
  },
  { 
    id: 77, name: "Crimson Flow Necklace", category: "necklaces", price: "$3,400", image: "/fc2.jpg", 
    description: "Ruby drop pendant with fine engraving", 
    shortDesc: "Ruby passion flowing through engraved gold.", 
    details: { metal: "18K Rose Gold", weight: "8.9 grams", stone: "Ruby", craftsmanship: "Drop-cut ruby with handcrafted vintage-inspired scrollwork." } 
  },
  { 
    id: 78, name: "Twilight Charm Necklace", category: "necklaces", price: "$3,700", image: "/fc1.jpg", 
    description: "Blue sapphire with teardrop setting", 
    shortDesc: "Sapphire radiance framed in golden twilight.", 
    details: { metal: "18K White Gold", weight: "8 grams", stone: "Blue Sapphire", craftsmanship: "Precision teardrop mount with balanced chain symmetry." } 
  },
  { 
    id: 79, name: "Eternal Shine Necklace", category: "necklaces", price: "$4,000", image: "/fc3.jpg", 
    description: "Clustered diamonds in elegant V-shape", 
    shortDesc: "A diamond constellation forming eternal light.", 
    details: { metal: "18K White Gold", weight: "9.7 grams", stone: "1 carat Cluster Diamonds", craftsmanship: "Prong cluster array forming seamless V silhouette." } 
  },
  { 
    id: 80, name: "Auric Thread Necklace", category: "necklaces", price: "$2,900", image: "/fc4.jpg", 
    description: "Gold thread with central bead accent", 
    shortDesc: "A whisper of gold with a single radiant note.", 
    details: { metal: "18K Yellow Gold", weight: "7 grams", stone: "None", craftsmanship: "Ultra-fine chain soldered around handcrafted bead accent." } 
  },
  { 
    id: 81, name: "Sable Light Necklace", category: "necklaces", price: "$3,500", image: "/fc2.jpg", 
    description: "Smoky quartz pendant with fine chain", 
    shortDesc: "Earth’s shadow caught in quartz and gold.", 
    details: { metal: "18K Gold", weight: "8.1 grams", stone: "Smoky Quartz", craftsmanship: "Faceted stone aligned with central suspension loop." } 
  },
  { 
    id: 82, name: "Ivory Heart Necklace", category: "necklaces", price: "$2,600", image: "/fc3.jpg", 
    description: "Ivory pendant in heart shape with gold frame", 
    shortDesc: "Soft ivory framed in the warmth of gold.", 
    details: { metal: "18K Yellow Gold", weight: "7.4 grams", stone: "Ivory Enamel", craftsmanship: "Hand-carved ivory shape embedded into gold frame." } 
  },
  { 
    id: 83, name: "Celeste Beam Necklace", category: "necklaces", price: "$3,800", image: "/fc1.jpg", 
    description: "Diamond starburst pendant", 
    shortDesc: "A burst of light captured in diamond brilliance.", 
    details: { metal: "18K White Gold", weight: "9 grams", stone: "0.9 carat Diamond Cluster", craftsmanship: "Starburst prong formation shaped under magnification." } 
  },
  { 
    id: 104, name: "Eternal Horizon Necklace", category: "necklaces", price: "$4,400", image: "/fc4.jpg", 
    description: "Dual-tone chain with horizon-inspired diamond curve", 
    shortDesc: "A golden horizon set against diamond light.", 
    details: { metal: "Dual-Tone 18K Gold", weight: "10.2 grams", stone: "1 carat Diamonds", craftsmanship: "Curved diamond arc seamlessly fused with dual metal layers." } 
  },
// --- Pendants (21 total) ---
{ 
    id: 10, name: "Sapphire Dreams Ring", category: "pendents", price: "$4,800", image: "/fc3.jpg", 
    description: "Blue sapphire with white diamond halo", 
    shortDesc: "A halo of diamonds cradling a sapphire’s deep dream.", 
    details: { metal: "18K White Gold", weight: "6.9 grams", stone: "Blue Sapphire & Diamonds", craftsmanship: "Prong halo set to balance brilliance and color depth." } 
  },
  { 
    id: 11, name: "Golden Hour Bracelet", category: "pendents", price: "$2,600", image: "/fc4.jpg", 
    description: "18k gold tennis bracelet", 
    shortDesc: "A golden beam of dusk reimagined as a pendant.", 
    details: { metal: "18K Yellow Gold", weight: "7 grams", stone: "Miniature Diamond Line", craftsmanship: "Repurposed tennis-link motif re-engineered for pendant wear." } 
  },
  { 
    id: 12, name: "Diamond Cascade Earrings", category: "pendents", price: "$3,400", image: "/fc1.jpg", 
    description: "Multi-stone chandelier earrings", 
    shortDesc: "A diamond waterfall condensed into a pendant drop.", 
    details: { metal: "Platinum", weight: "6.2 grams", stone: "Round Cut Diamonds", craftsmanship: "Fine cascading claw-set stones in single-drop design." } 
  },
  { 
    id: 84, name: "Amber Aura Pendant", category: "pendents", price: "$3,200", image: "/fc2.jpg", 
    description: "Amber drop with intricate filigree border", 
    shortDesc: "A glowing amber embraced by filigree finesse.", 
    details: { metal: "18K Gold", weight: "7.8 grams", stone: "Baltic Amber", craftsmanship: "Hand-engraved border inspired by Renaissance motifs." } 
  },
  { 
    id: 85, name: "Moonbeam Pendant", category: "pendents", price: "$2,800", image: "/fc3.jpg", 
    description: "Crescent moon motif in white gold", 
    shortDesc: "Moonlight distilled into graceful white gold curves.", 
    details: { metal: "18K White Gold", weight: "6.5 grams", stone: "Diamond Dust Inlay", craftsmanship: "Micro-etched crescent with diamond micro-grain texture." } 
  },
  { 
    id: 86, name: "Ethereal Leaf Pendant", category: "pendents", price: "$3,600", image: "/fc4.jpg", 
    description: "Nature-inspired pendant with green enamel veins", 
    shortDesc: "A delicate leaf immortalized in gold and enamel.", 
    details: { metal: "18K Yellow Gold", weight: "7.9 grams", stone: "Emerald Dust Enamel", craftsmanship: "Hand-painted enamel fused under precision heat." } 
  },
  { 
    id: 87, name: "Crimson Heart Pendant", category: "pendents", price: "$3,900", image: "/fc1.jpg", 
    description: "Ruby heart pendant encased in rose gold", 
    shortDesc: "A heart of ruby framed in warmth and devotion.", 
    details: { metal: "18K Rose Gold", weight: "7.2 grams", stone: "Heart-Cut Ruby", craftsmanship: "Precision contouring ensures symmetry and clarity." } 
  },
  { 
    id: 88, name: "Aurora Dew Pendant", category: "pendents", price: "$2,800", image: "/fc2.jpg", 
    description: "Teardrop diamond with opal shimmer", 
    shortDesc: "A dewdrop of diamond light kissed by opal hues.", 
    details: { metal: "18K White Gold", weight: "6.6 grams", stone: "Opal & Diamond", craftsmanship: "Dual-gem mount balancing refractive contrast." } 
  },
  { 
    id: 89, name: "Twilight Bloom Pendant", category: "pendents", price: "$3,500", image: "/fc3.jpg", 
    description: "Amethyst flower pendant in gold frame", 
    shortDesc: "A twilight amethyst blooming in molten gold.", 
    details: { metal: "18K Yellow Gold", weight: "7.5 grams", stone: "Amethyst", craftsmanship: "Flower-cut gem carved with precision lapidary tools." } 
  },
  { 
    id: 90, name: "Luna Grace Pendant", category: "pendents", price: "$3,200", image: "/fc4.jpg", 
    description: "Crescent-shaped white gold pendant", 
    shortDesc: "A lunar arc carved in glistening white gold.", 
    details: { metal: "18K White Gold", weight: "6.9 grams", stone: "0.4 carat Diamond", craftsmanship: "Polished crescent form with inset central diamond." } 
  },
  { 
    id: 91, name: "Amber Whisper Pendant", category: "pendents", price: "$2,900", image: "/fc1.jpg", 
    description: "Amber stone in brushed silver housing", 
    shortDesc: "A whisper of amber held in cool silver calm.", 
    details: { metal: "Sterling Silver", weight: "7 grams", stone: "Amber", craftsmanship: "Brushed finish frame shaped to enhance gem translucence." } 
  },
  { 
    id: 92, name: "Velvet Charm Pendant", category: "pendents", price: "$3,600", image: "/fc2.jpg", 
    description: "Black onyx oval with gold outline", 
    shortDesc: "The night’s calm immortalized in black onyx and gold.", 
    details: { metal: "18K Yellow Gold", weight: "7.4 grams", stone: "Onyx", craftsmanship: "Bezel outline polished for high-contrast definition." } 
  },
  { 
    id: 93, name: "Golden Bloom Pendant", category: "pendents", price: "$3,700", image: "/fc3.jpg", 
    description: "Floral motif pendant in pure gold", 
    shortDesc: "A bloom of molten gold sculpted into form.", 
    details: { metal: "22K Gold", weight: "8.2 grams", stone: "None", craftsmanship: "Entirely hand-cast and hand-polished without molds." } 
  },
  { 
    id: 94, name: "Azure Ray Pendant", category: "pendents", price: "$3,100", image: "/fc4.jpg", 
    description: "Blue sapphire with diamond accents", 
    shortDesc: "An azure spark framed by diamond rays.", 
    details: { metal: "18K White Gold", weight: "7.6 grams", stone: "Blue Sapphire & Diamonds", craftsmanship: "Three-prong sapphire mount with micro pavé halo." } 
  },
  { 
    id: 95, name: "Eternal Knot Pendant", category: "pendents", price: "$3,800", image: "/fc1.jpg", 
    description: "Infinity knot pendant in dual-tone metal", 
    shortDesc: "An eternal knot binding gold and meaning.", 
    details: { metal: "18K Dual-Tone Gold", weight: "8 grams", stone: "Tiny Diamonds", craftsmanship: "Dual-metal infinity design forged in single pour." } 
  },
  { 
    id: 96, name: "Rosette Pearl Pendant", category: "pendents", price: "$3,000", image: "/fc2.jpg", 
    description: "Pearl center surrounded by rose petals", 
    shortDesc: "A pearl blooming within sculpted golden petals.", 
    details: { metal: "18K Rose Gold", weight: "7 grams", stone: "Akoya Pearl", craftsmanship: "Layered petals sculpted to cradle the pearl core." } 
  },
  { 
    id: 97, name: "Auric Flame Pendant", category: "pendents", price: "$3,900", image: "/fc3.jpg", 
    description: "Flame-inspired gold pattern with ruby tip", 
    shortDesc: "A flame of passion forged in ruby and gold.", 
    details: { metal: "18K Yellow Gold", weight: "7.8 grams", stone: "Ruby", craftsmanship: "Curved flame design precision-filed and polished by hand." } 
  },
  { 
    id: 98, name: "Celeste Star Pendant", category: "pendents", price: "$2,700", image: "/fc4.jpg", 
    description: "Diamond-encrusted star-shaped pendant", 
    shortDesc: "A celestial spark handcrafted for everyday radiance.", 
    details: { metal: "18K White Gold", weight: "6.8 grams", stone: "0.6 carat Diamonds", craftsmanship: "Five-point star hand-set with micro pavé diamonds." } 
  },
  { 
    id: 99, name: "Noir Whisper Pendant", category: "pendents", price: "$3,200", image: "/fc1.jpg", 
    description: "Obsidian pendant with platinum finish", 
    shortDesc: "A quiet strength encased in obsidian and platinum.", 
    details: { metal: "Platinum", weight: "7.3 grams", stone: "Black Obsidian", craftsmanship: "Mirror-polished platinum backing for reflective contrast." } 
  },
  { 
    id: 100, name: "Ivory Dew Pendant", category: "pendents", price: "$3,500", image: "/fc2.jpg", 
    description: "Ivory droplet with subtle diamond cap", 
    shortDesc: "A droplet of purity crowned with diamond grace.", 
    details: { metal: "18K White Gold", weight: "7 grams", stone: "Ivory & Diamond", craftsmanship: "Carved droplet capped with bezel-set diamond top." } 
  },
  { 
    id: 105, name: "Golden Tide Pendant", category: "pendents", price: "$3,600", image: "/fc3.jpg", 
    description: "Flowing gold pendant shaped like ocean waves", 
    shortDesc: "Golden tides frozen in a moment of motion.", 
    details: { metal: "18K Yellow Gold", weight: "8 grams", stone: "Tiny White Sapphires", craftsmanship: "Wave curvature cast using precision wax molding." } 
  },
];  

export async function GET() {
  return NextResponse.json(products);
}
