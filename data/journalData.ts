
/**
 * PAROMITA'S JOURNAL - DATA SOURCE
 * --------------------------------
 * This file contains all static data, configuration, and content for the application.
 * 
 * STRUCTURE:
 * 1. Types & Interfaces
 * 2. Site Configuration (URLs, Navigation)
 * 3. Assets & Media
 * 4. UI Labels & Static Text
 * 5. Content: Food Entries
 * 6. Content: Plant Entries
 */

// ------------------------------------------------------------------
// 1. TYPES & INTERFACES
// ------------------------------------------------------------------

export type EntryType = 'food' | 'plant';

export interface JournalEntry {
  id: number;
  type: EntryType;
  title: string;
  category: string;
  desc: string;
  img: string;
  cta: string;
  
  // Content
  story: string;
  
  // Metadata (Food)
  prepTime?: string;
  servings?: string;
  ingredients?: string[];
  method?: string[];
  
  // Metadata (Plant)
  scientificName?: string;
  care?: {
    light: string;
    water: string;
    difficulty: string;
  };
  
  // Metadata (General)
  translatedBy?: string;
}

// ------------------------------------------------------------------
// 2. SITE CONFIGURATION
// ------------------------------------------------------------------

export const siteConfig = {
  whatsappUrl: "https://wa.me/917488454537",
  socialLinks: {
    instagram: "https://www.instagram.com/caughtbyfoodsandplants/",
    youtube: "https://www.youtube.com/@caughtbyfoods8704"
  },
  developer: {
    name: "MxS Studio",
    url: "http://mxsstudio.edgentiq.com"
  }
};

export const menuItems = [
  'Home', 
  'My Recipes', 
  'Balcony Garden', 
  'Contact'
];

// ------------------------------------------------------------------
// 3. ASSETS & MEDIA
// ------------------------------------------------------------------

export const assets = {
  // SVG Data URIs for CSS filters and backgrounds
  noiseTexture: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  paperTexture: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  buttonTexture: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
};

export const images = {
  kitchenHero: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/herofood.jpg", 
  gardenHero: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/heroplant.jpg",
  profile: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/me.jpg",
};

// ------------------------------------------------------------------
// 4. UI LABELS & STATIC TEXT
// ------------------------------------------------------------------

export const uiLabels = {
  menuIndex: "Index",
  turnPage: "Turn Page",
  sayHello: "Say Hello",
  subscribePlaceholder: "Write your email here...",
  subscribeButton: "Subscribe",
  socials: {
    instagram: "Instagram",
    youtube: "YouTube"
  },
  modal: {
    prepTime: "Prep Time",
    servings: "Servings",
    light: "Light",
    water: "Water",
    difficulty: "Difficulty",
    ingredients: "Ingredients",
    method: "Method",
    story: "The Story",
    gardenNotesTitle: "Garden Notes",
    footer: "From my home to yours.",
    monthYear: (date: Date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }
};

export const staticText = {
  header: "Paromita's Journal",
  hero: {
    food: {
      title: "Foods",
      subtitle: "Recipes from my mother's kitchen"
    },
    plant: {
      title: "Plants",
      subtitle: "Life on a 4ft balcony"
    }
  },
  about: {
    handwrittenTitle: "A note to self...",
    mainQuote: "\"I cook to remember, and I garden to hope.\"",
    body: "For forty years, my kitchen was the heartbeat of our family. Now, living with my eldest daughter and grandson, I embrace a new chapter. With full-time parenting behind me, I finally take the time to nurture my own soul through my two greatest loves: cooking and gardening.",
    cta: "Read full story",
    year: "2024",
    fullStory: "About Me\n\nFor the past forty years, my heart and soul have been dedicated to my home. As a wife and a mother to three wonderful daughters, my kitchen was the heartbeat of our family, and I was the \"personal chef\" who took pride in every meal served.\n\nToday, while my daughters have grown and flown the nest, I feel deeply blessed by the grace of God to live with my eldest daughter, my son-in-law, and our precious grandson. With the house full of love and the years of full-time parenting behind me, I am finally stepping into a new chapter—one where I take the time to nurture my own soul through my two greatest loves: cooking and gardening.\n\n A Culinary Heritage\n\nMy journey with food is a beautiful tapestry of my past. My initial inspiration came from the faint, flickering memories of my mother’s traditional Bengali cooking. Though I lost her at a young age, I carried those memories with me, slowly piecing them together with the help of my elder siblings.\n\nWhen I married, my culinary world expanded through my mother-in-law. She introduced me to the vibrant flavors of North India, specifically North Indian cuisines. Because of her guidance, I learned to experiment and embrace the diversity of Indian flavors.\n\nIn my kitchen, boundaries don't exist. I cook a traditional Bengali Mochar Ghonto with the same zest and love as I do a comforting bowl of Punjabi Rajma Chawal. Whether it’s crispy South Indian Dosa with coconut and peanut chutney, a tangy Sindhi Kadhi, or authentic Marwari Gatte ki Sabzi, my family has grown up enjoying a true \"Home-Cooked India\" on their plates.\n\nMy Sanctuary of Green\n\nBeyond the kitchen, my heart lives in the garden. I have always been drawn to the serenity of greenery. What started as a small hobby of collecting a few show plants from across the country has blossomed into a lifelong passion.\n\nI began by creating a small corner for myself, and one by one, my collection grew. Today, I am the proud caretaker of over 70 different varieties of plants, ranging from unique decorative species to my own homegrown vegetables.\n\nThrough this space, I am so excited to share my recipes, my gardening journey, and a piece of my heart with all of you."
  },
  sections: {
    food: {
        title: "Fresh from the Stove",
        subtitle: "Kitchen Chronicles"
    },
    plant: {
        title: "Life on the Balcony",
        subtitle: "Garden Notes"
    }
  },
  newsletter: {
    title: "Letters from the Kitchen",
    quote: "\"Once a month, I send out a story about a new recipe or a blooming flower. No spam, just warmth.\""
  },
  footer: {
    title: "Caught by Foods & Plants",
    quote: "\"Thank you for visiting. I hope you found a quiet corner here.\"",
    copyrightName: "PAROMITA'S JOURNAL",
    credits: {
        prefix: "Designed, developed, gifted and maintained by ",
        suffix: " with ❤️"
    }
  }
};

// ------------------------------------------------------------------
// 5. CONTENT: FOOD ENTRIES
// ------------------------------------------------------------------

export const foodEntries: JournalEntry[] = [
  {
    id: 11,
    type: 'food',
    title: "শুক্তো (Shukto)",
    category: "ঐতিহ্য",
    desc: "গরম ভাতের সাথে দুপুরের শুরুটা হোক এই সুস্বাদু ও স্বাস্থ্যকর নিরামিষ পদ দিয়ে।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/shukto.jpg",
    cta: "রেসিপি দেখুন",
    story: "শুক্তো ছাড়া বাঙালি বিয়ের বা অন্নপ্রাশনের মেনু ভাবাই যায় না। মা বলতেন, তেতো খাওয়া শরীরের জন্য ভালো, আর শুক্তো হলো সেই তেতোর রাজকীয় সংস্করণ। উচ্ছে, কাঁচকলা, আলু, পেঁপে, সজনে ডাঁটা আর বড়ির এই মেলবন্ধন দুধ আর ঘি-এর ছোঁয়ায় অমৃত হয়ে ওঠে।",
    prepTime: "৩০ মিনিট",
    servings: "৪ জন",
    ingredients: [
      "২টো উচ্ছে (টুকরো করা)",
      "১টা কাঁচকলা, ১টা আলু, ১টা পেঁপে",
      "১০-১২টা বিউলির ডালের বড়ি",
      "১ কাপ দুধ",
      "১ চামচ রাঁধুনি ও সর্ষে বাটা",
      "১ চামচ ঘি",
      "ফোড়নের জন্য: পাঁচফোড়ন, তেজপাতা"
    ],
    method: [
      "বড়িগুলো লাল করে ভেজে তুলে রাখুন। ওই তেলেই উচ্ছে ভেজে নিন।",
      "বাকি সবজিগুলো হালকা ভেজে নিন।",
      "কড়াইতে তেল গরম করে তেজপাতা ও পাঁচফোড়ন দিন।",
      "সবজি দিয়ে নেড়ে রাঁধুনি-সর্ষে বাটা ও আদা বাটা দিন।",
      "জল দিয়ে ঢাকা দিন। সবজি সেদ্ধ হলে ভাজা বড়ি ও উচ্ছে মেশান।",
      "সবশেষে দুধ আর ঘি ছড়িয়ে নামিয়ে নিন।"
    ]
  },
  {
    id: 1,
    type: 'food',
    title: "Sunday Mutton Curry",
    category: "Bengali Classics",
    desc: "Slow-cooked with potatoes, just the way it's done in Kolkata on a lazy afternoon.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/muttoncurry.jpg",
    cta: "View Recipe",
    story: "There is a specific silence that falls over a Bengali household on Sunday afternoons. It is the silence of anticipation. The pressure cooker has whistled its final count, and the heavy aroma of mustard oil and garam masala has settled into the curtains. This recipe isn't about speed; it's about the slow alchemy of meat and potatoes absorbing the gravy until they become indistinguishable in tenderness.",
    prepTime: "2 Hours",
    servings: "4 People",
    translatedBy: "Nanu",
    ingredients: [
      "1kg Mutton (Goat meat), curry cut",
      "4 large Potatoes, halved",
      "1 cup Mustard Oil (essential)",
      "3 large Onions, sliced",
      "2 tbsp Ginger-Garlic paste",
      "Whole spices: Cardamom, Cinnamon, Cloves",
      "Spices: Turmeric, Red Chilli, Cumin, Coriander powder"
    ],
    method: [
      "Marinate the mutton with yogurt, turmeric, and a splash of mustard oil for at least an hour.",
      "Fry the potatoes in mustard oil until golden brown. Set aside. This is non-negotiable.",
      "Temper the oil with whole spices and sugar (for that rich red color).",
      "Sauté onions until they are caramelized and sweet.",
      "Add the meat and 'kosh' (sauté) it on low heat for 45 minutes. This patience creates the flavor.",
      "Add warm water and pressure cook until tender. Add fried potatoes for the last whistle."
    ]
  },
  {
    id: 2,
    type: 'food',
    title: "Sun-Dried Mango Pickle",
    category: "Pantry",
    desc: "Bottling the summer sun. A spicy, tangy condiment that elevates any dal-chawal.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/mangopickle.jpg",
    cta: "Read Process",
    story: "My grandmother used to say that pickles need two things: strong sunlight and a clean hand. If you touch the jar with a wet spoon, you spoil the magic. This pickle is the taste of April vacations—sharp, fiery, and smelling faintly of the ceramic jars we stored them in.",
    prepTime: "4 Days",
    servings: "1 Large Jar",
    translatedBy: "Lisu",
    ingredients: [
      "2kg Raw Mangoes, cubed",
      "200g Mustard seeds, crushed",
      "50g Fenugreek seeds",
      "100g Fennel seeds (Saunf)",
      "Red Chilli Powder (lots of it)",
      "Salt (more than you think)",
      "Mustard Oil"
    ],
    method: [
      "Wash and dry the mangoes completely. Moisture is the enemy.",
      "Mix mango cubes with salt and turmeric. Let them sit for a day to release water.",
      "Drain the water and dry the pieces in the sun for 4-5 hours.",
      "Roast and grind the spices coarsely.",
      "Mix spices with oil and coat the mangoes thoroughly.",
      "Pack in a sterilized glass or ceramic jar. Keep in the sun for 7 days, shaking daily."
    ]
  },
  {
    id: 3,
    type: 'food',
    title: "Morning Masala Chai",
    category: "Rituals",
    desc: "Crushed cardamom, ginger, and the precise moment to add milk for the perfect brew.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/chai.jpg?",
    cta: "Brew Guide",
    story: "The first cup of the day sets the tone. It's not just caffeine; it's a warm hug. The color must be 'terracotta'—not too milky, not too dark. The ginger should hit the back of your throat just enough to wake you up.",
    prepTime: "10 Mins",
    servings: "2 Cups",
    translatedBy: "Oni",
    ingredients: [
      "1 cup Water",
      "1 cup Whole Milk",
      "2 tsp Loose black tea leaves",
      "1 inch Ginger, crushed",
      "2 Green Cardamoms, crushed",
      "1 Clove",
      "Sugar to taste"
    ],
    method: [
      "Boil water with the crushed ginger and spices first. Let the water take the flavor.",
      "Add tea leaves and boil for exactly 2 minutes.",
      "Add milk. This is the critical juncture. Watch it rise.",
      "Let it simmer on low heat for another 2-3 minutes. Pulling (ladling) the tea helps aerate it.",
      "Strain into your favorite clay cups."
    ]
  },
  {
    id: 4,
    type: 'food',
    title: "Luchi & Alur Dom",
    category: "Breakfast",
    desc: "Golden puffed bread with spicy potato curry. The ultimate comfort food for festivals.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/luchi.jpg",
    cta: "View Recipe",
    story: "White, fluffy clouds of fried dough. Luchi is not just bread; it's an emotion. Paired with a spicy, ginger-heavy potato curry (Alur Dom), it is the standard breakfast for birthdays and rainy days alike.",
    prepTime: "45 Mins",
    servings: "4 People",
    translatedBy: "Nanu",
    ingredients: [
      "2 cups Maida (All-purpose flour)",
      "2 tbsp Ghee",
      "Warm water for kneading",
      "500g Baby Potatoes",
      "Tomato puree",
      "Ginger paste",
      "Green chillies"
    ],
    method: [
      "Knead the flour with ghee and water into a stiff dough. Rest for 30 mins.",
      "For Alur Dom: Boiled baby potatoes are sautéed with spices and tomato puree until coated in a thick, rich masala.",
      "Roll small discs of dough.",
      "Deep fry in hot oil. They should puff up instantly like balloons.",
      "Serve hot. Count how many you eat (impossible)."
    ]
  },
  {
    id: 5,
    type: 'food',
    title: "Shorshe Ilish",
    category: "Seafood",
    desc: "The queen of fish cooked in a pungent mustard sauce. A love letter to the monsoons.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/sorsheilish.jpg",
    cta: "View Recipe",
    story: "Ilish (Hilsa) is not just a fish; it's a cultural obsession. The bones are many, but the flavor is worth the struggle. Cooked in a simple paste of mustard and green chillies, the pungency clears your sinuses and warms your soul.",
    prepTime: "30 Mins",
    servings: "2 People",
    translatedBy: "Lisu",
    ingredients: [
      "4 pieces Hilsa fish",
      "3 tbsp Black Mustard seeds",
      "1 tbsp Yellow Mustard seeds",
      "6 Green Chillies",
      "Turmeric powder",
      "Mustard Oil (Generous amount)",
      "Nigella seeds (Kalo jeera)"
    ],
    method: [
      "Soak mustard seeds and grind to a smooth paste with 2 green chillies and a pinch of salt.",
      "Rub fish with turmeric and salt.",
      "Heat oil, add nigella seeds and slit chillies.",
      "Add the mustard paste mixed with a little water. Do not fry the paste too much or it turns bitter.",
      "Slide the fish in gently. Cover and steam-cook on low heat for 10-12 minutes.",
      "Finish with a drizzle of raw mustard oil."
    ]
  },
  {
    id: 6,
    type: 'food',
    title: "Narkel Naru",
    category: "Sweets",
    desc: "Sticky, sweet coconut balls made with jaggery. Memories of grandma's hands.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/narkelnaru.jpg",
    cta: "Read Story",
    story: "During Durga Puja, the women of the house would sit in a circle, rolling these hot, sticky coconut balls. My job was to steal them before they cooled down. The smell of melting jaggery is the smell of autumn for me.",
    prepTime: "40 Mins",
    servings: "15 pieces",
    translatedBy: "Oni",
    ingredients: [
      "2 cups Freshly grated coconut",
      "1 cup Jaggery (Gur), chopped",
      "1/2 tsp Cardamom powder",
      "1 tbsp Ghee"
    ],
    method: [
      "Mix coconut and jaggery in a heavy-bottomed pan.",
      "Cook on low heat, stirring constantly. The mixture will darken and become sticky.",
      "Test a small portion; if it holds shape, it's done.",
      "Add cardamom and ghee.",
      "Grease your palms and roll into balls while the mixture is still hot (carefully!)."
    ]
  },
  {
    id: 7,
    type: 'food',
    title: "Mishti Doi",
    category: "Dessert",
    desc: "Fermented sweet yogurt set in earthen pots. The perfect end to any meal.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/doi.jpg",
    cta: "View Recipe",
    story: "You cannot buy this taste in a plastic cup. Real Mishti Doi sets in porous clay pots (bhanr), which absorb the excess water, leaving behind a thick, custard-like yogurt with a caramelized top.",
    prepTime: "8 Hours",
    servings: "4 Pots",
    translatedBy: "Nanu",
    ingredients: [
      "1 liter Full-fat Milk",
      "1 cup Sugar",
      "2 tbsp Hung Curd (Starter/Joran)",
      "Earthen pots"
    ],
    method: [
      "Boil milk and reduce it to half its volume.",
      "In a separate pan, caramelize half the sugar until golden brown. Mix into the hot milk.",
      "Add remaining sugar and dissolve.",
      "Let milk cool until it is lukewarm (finger test).",
      "Whisk in the hung curd/starter until smooth.",
      "Pour into earthen pots and keep in a warm place for 8-10 hours to set."
    ]
  },
  {
    id: 8,
    type: 'food',
    title: "খিচুড়ি (Khichuri)",
    category: "Rainy Days",
    desc: "বর্ষার দিনে খিচুড়ি আর ইলিশ মাছ ভাজা - এর চেয়ে ভালো আর কিছু হতে পারে না।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/khichuri.jpg",
    cta: "রেসিপি দেখুন",
    story: "বৃষ্টি পড়লেই বাঙালির মনে খিচুড়ির কথা ভাসে। মুগ ডাল ভেজে, গোবিন্দভোগ চাল আর সবজি দিয়ে তৈরি এই খিচুড়ি শুধুই খাবার নয়, একটা আবেগ। সাথে যদি থাকে বেগুন ভাজা আর পাপড়, তবে তো কথাই নেই।",
    prepTime: "৪৫ মিনিট",
    servings: "৪ জন",
    ingredients: [
      "১ কাপ গোবিন্দভোগ চাল",
      "১ কাপ সোনা মুগ ডাল",
      "ফুলকপি, আলু, মটরশুঁটি",
      "আদা বাটা, জিরে গুঁড়ো, হলুদ",
      "ঘি আর গরম মশলা"
    ],
    method: [
      "শুকনো কড়াইতে মুগ ডাল ভেজে নিন যতক্ষণ না সুগন্ধ বের হয়।",
      "চাল আর ডাল ধুয়ে জল ঝরিয়ে রাখুন।",
      "কড়াইতে তেল দিয়ে সবজিগুলো হালকা ভেজে তুলে রাখুন।",
      "ওই তেলে জিরে আর তেজপাতা ফোড়ন দিয়ে আদা বাটা ও মশলা কষান।",
      "চাল-ডাল দিয়ে নেড়ে জল দিন। ফুটে উঠলে সবজি দিন।",
      "নামানোর আগে ঘি আর গরম মশলা ছড়িয়ে দিন।"
    ]
  },
  {
    id: 9,
    type: 'food',
    title: "জন্মদিনের পায়েস (Payesh)",
    category: "Celebration",
    desc: "শুভ অনুষ্ঠানে বা জন্মদিনে মায়ের হাতের তৈরি পায়েস ছাড়া অসম্পূর্ণ।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/Payesh.jpg",
    cta: "রেসিপি দেখুন",
    story: "ছোটবেলায় জন্মদিনের সকালে পায়েস খাওয়া ছিল বাধ্যতামূলক। নতুন গুড় বা চিনির সাথে গোবিন্দভোগ চালের সেই গন্ধ আজও মনে পড়ে। মা বলতেন, পায়েস খেলে নাকি আয়ু বাড়ে।",
    prepTime: "১ ঘণ্টা",
    servings: "৫ জন",
    ingredients: [
      "১ লিটার ফুল ক্রিম দুধ",
      "৫০ গ্রাম গোবিন্দভোগ চাল",
      "১ কাপ চিনি বা নলেন গুড়",
      "কাজু ও কিশমিশ",
      "তেজপাতা ও ছোট এলাচ"
    ],
    method: [
      "দুধ জ্বাল দিয়ে ঘন করতে হবে।",
      "চাল ধুয়ে জল ঝরিয়ে রাখুন, চাইলে একটু ঘি মাখিয়ে নিতে পারেন।",
      "দুধ ফুটে উঠলে চাল দিন। চাল সেদ্ধ না হওয়া পর্যন্ত নাড়তে থাকুন।",
      "চাল সেদ্ধ হলে চিনি বা গুড় দিন। গুড় দিলে আঁচ কমিয়ে দেবেন।",
      "কাজু, কিশমিশ আর এলাচ গুঁড়ো মিশিয়ে নামিয়ে নিন।"
    ]
  }
];

// ------------------------------------------------------------------
// 6. CONTENT: PLANT ENTRIES
// ------------------------------------------------------------------

export const plantEntries: JournalEntry[] = [
  {
    id: 8,
    type: 'plant',
    title: "রক্ত জবা (Red Hibiscus)",
    category: "পুজোর ফুল",
    desc: "\"মায়ের পায়ের জবা হয়ে ওঠো না ফোতো\" - ছাদের বাগানে ফুটেছে লাল জবা।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/roktojoba.jpg",
    cta: "আরও দেখুন",
    story: "বাঙালির বাগানে জবা গাছ থাকবে না, তা কি হয়? প্রতিদিন সকালে স্নান করে গাছ থেকে টাটকা ফুল তোলার আনন্দই আলাদা। পুজোর থালায় এই লাল জবা না থাকলে মনে হয় পুজো অসম্পূর্ণ। রোদে পোড়া ছাদেও এই গাছটি কেমন যেন প্রাণশক্তিতে ভরপুর।",
    scientificName: "Hibiscus rosa-sinensis",
    care: {
      light: "পূর্ণ রোদ",
      water: "প্রতিদিন",
      difficulty: "সহজ"
    }
  },
  {
    id: 1,
    type: 'plant',
    title: "Visitors in the Garden",
    category: "Ecosystem",
    desc: "Finding beauty in the small moths and insects that visit my balcony ecosystem.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/visitor.jpg",
    cta: "Read Entry",
    story: "I used to worry about pests, but now I see a food web. This morning, a small yellow moth rested on the curry leaf plant. It wasn't eating the leaves, just resting. A spider has woven a web between the railing and the Tulsi. They are all welcome here.",
    scientificName: "Balcony Fauna",
    translatedBy: "Lisu",
    care: {
      light: "Natural",
      water: "None",
      difficulty: "Observation only"
    }
  },
  {
    id: 2,
    type: 'plant',
    title: "The First Hibiscus",
    category: "Blooms",
    desc: "After months of waiting, the red petals finally unfolded this morning.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/hibiscus.jpg",
    cta: "View Journal",
    story: "The 'Jaba' (Hibiscus) is stubborn. It dropped three buds before this one held on. I added banana peel water last week, and I like to think that gave it the strength to bloom. The red is so vibrant it almost looks fake against the grey city skyline.",
    scientificName: "Hibiscus rosa-sinensis",
    translatedBy: "Oni",
    care: {
      light: "Full Direct Sun",
      water: "Daily in summer",
      difficulty: "Moderate"
    }
  },
  {
    id: 3,
    type: 'plant',
    title: "Rescuing the Tulsi",
    category: "Care",
    desc: "Bringing a dried-up holy basil plant back to life with patience and rice water.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/tulsi.jpg",
    cta: "Read Tips",
    story: "The Tulsi is the heart of an Indian home. Mine was infested with mealybugs. I spent three days manually cleaning every leaf with neem oil and a Q-tip. Today, I see tiny new green leaves sprouting from the woody stem. She survives.",
    scientificName: "Ocimum tenuiflorum",
    translatedBy: "Nanu",
    care: {
      light: "Bright indirect light",
      water: "Keep soil moist",
      difficulty: "Easy but sensitive"
    }
  },
  {
    id: 4,
    type: 'plant',
    title: "Monsoon Moss",
    category: "Textures",
    desc: "The velvety green layer taking over the terracotta pots during the rains.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/moss.jpg",
    cta: "View Photos",
    story: "July brings the rains, and the rains bring moss. It coats the old terracotta pots in a velvet fuzz. Some scrub it off; I keep it. It keeps the roots cool and makes the balcony look like an ancient ruin found in a forest.",
    scientificName: "Bryophyta",
    translatedBy: "Lisu",
    care: {
      light: "Shade / Low light",
      water: "High Humidity",
      difficulty: "Self-sustaining"
    }
  },
  {
    id: 5,
    type: 'plant',
    title: "Propagating Pothos",
    category: "New Life",
    desc: "Watching roots grow in old glass bottles lining the windowsill.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/pothos.jpg",
    cta: "Read Guide",
    story: "There is magic in water propagation. You cut a vine, stick it in water, and wait. The anticipation of the first white root emerging is thrilling. I have Pothos in whiskey bottles, jam jars, and laboratory beakers. They are the easiest green companions.",
    scientificName: "Epipremnum aureum",
    translatedBy: "Oni",
    care: {
      light: "Low to Bright Indirect",
      water: "Change weekly",
      difficulty: "Beginner"
    }
  },
  {
    id: 6,
    type: 'plant',
    title: "Morning Glory Trellis",
    category: "Climbers",
    desc: "Training the vines to climb the railing, creating a natural privacy screen.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/morningglory.jpg",
    cta: "Read Update",
    story: "The Morning Glory wakes up before I do. By noon, the purple trumpets curl up and sleep. It's a fast grower, grabbing onto the grill with thin, spiraling tendrils. I'm using jute twine to guide it into an arch.",
    scientificName: "Ipomoea",
    translatedBy: "Nanu",
    care: {
      light: "Full Sun",
      water: "Consistent moisture",
      difficulty: "Easy / Invasive"
    }
  },
  {
    id: 7,
    type: 'plant',
    title: "Harvesting Chillies",
    category: "Edibles",
    desc: "The joy of plucking fresh green chillies for lunch from a pot.",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/chilli.jpg",
    cta: "View Harvest",
    story: "A single chilli plant yields so much joy. The chillies start purple-black and turn a fiery red. Plucking one fresh, snapping it in half, and smelling that raw heat—it changes the flavor of the simplest meal.",
    scientificName: "Capsicum annuum",
    translatedBy: "Lisu",
    care: {
      light: "Direct Sun (6+ hours)",
      water: "When soil is dry",
      difficulty: "Moderate"
    }
  },
  {
    id: 9,
    type: 'plant',
    title: "তুলসী মঞ্চ (Tulsi Mancha)",
    category: "নিত্য পূজা",
    desc: "সাঁঝের বাতি আর তুলসী তলা - গ্রাম বাংলার সেই চিরন্তন ছবি এখন আমার ফ্ল্যাটের বারান্দায়।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/tulsimancha.jpg",
    cta: "আরও পড়ুন",
    story: "শহরের ফ্ল্যাটে মাটির উঠোন নেই, কিন্তু একটা ছোট টবে তুলসী গাছ আছে। প্রতিদিন সন্ধ্যায় যখন শাঁখ বাজে, তখন এই গাছটির নিচে একটা মাটির প্রদীপ জ্বালাই। ধূপের গন্ধ আর প্রদীপের আলোয় মনে হয় যেন সেই পুরনো দিনের শান্তিতে ফিরে গেছি।",
    scientificName: "Ocimum tenuiflorum",
    care: {
      light: "উজ্জ্বল আলো",
      water: "ভেজা মাটি",
      difficulty: "সহজ"
    }
  },
  {
    id: 10,
    type: 'plant',
    title: "নীল অপরাজিতা (Aparajita)",
    category: "লতানো গাছ",
    desc: "গ্রিলের ফাঁক দিয়ে উঁকি দেওয়া নীল অপরাজিতা, যেন আকাশ নেমে এসেছে বারান্দায়।",
    img: "https://raw.githubusercontent.com/bongchong-in/caughtbyfoodsandplants/refs/heads/main/images/aparajita.jpg",
    cta: "ছবি দেখুন",
    story: "অপরাজিতা মানে যা কখনও পরাজিত হয় না। লতানো এই গাছটি খুব সহজেই বারান্দার গ্রিল বেয়ে উপরে উঠে গেছে। সকালে ঘুম থেকে উঠে যখন দেখি গাঢ় নীল রঙের ফুলগুলো ফুটে আছে, তখন মনে হয় দিনটা ভালোই যাবে। শিবের খুব প্রিয় এই ফুল।",
    scientificName: "Clitoria ternatea",
    care: {
      light: "পূর্ণ রোদ",
      water: "পরিমিত",
      difficulty: "মাঝারি"
    }
  }
];
