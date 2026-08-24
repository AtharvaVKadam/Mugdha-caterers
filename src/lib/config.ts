// ============================================================
// MUGDHA CATERERS — CENTRAL CONFIGURATION
// Update all business details here. No need to touch components.
// ============================================================

export const BUSINESS_CONFIG = {
  name: 'Mugdha Caterers',
  tagline: 'Delicious Food. Memorable Celebrations.',
  description:
    'Authentic Indian catering crafted with fresh ingredients and traditional recipes, serving celebrations across the region.',
  phone: '+91-9321649571',
  whatsapp: '919321649571',
  address: 'Badlapur, Thane, Maharashtra, India',
  googleMapsLink: 'https://maps.app.goo.gl/o5RwiZMe9tYvK8EU7',
  email: 'mr.sohxm@gmail.com',
  instagram: 'https://www.instagram.com/mugdha_cateres?igsi=cGZwcDE0anBmMjdo',
  facebook: 'https://facebook.com/mugdhacaterers',
  businessHours: 'Mon–Sun: 9:00 AM – 9:00 PM',
};

export const SPECIAL_THALI = {
  name: 'Special Vegetarian Thali',
  price: 200,
  currency: '₹',
  description: 'Complete Traditional Veg Thali — ₹200 Only',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e4e6e9d2-1772194107998.png',
  items: [
    { category: 'Rice', items: ['Steamed Rice', 'Jeera Rice'] },
    { category: 'Dal', items: ['Dal Tadka'] },
    {
      category: 'Vegetable Preparations',
      items: ['Seasonal Vegetable Sabji', "Chef\'s Special Veg Sabji"],
    },
    { category: 'Indian Breads', items: ['Fresh Roti / Chapati', 'Puri'] },
    { category: 'Sweet', items: ['Gulab Jamun / Jalebi'] },
    {
      category: 'Accompaniments',
      items: ['Fresh Garden Salad', 'Roasted Papad', 'Traditional Indian Pickle (Achar)'],
    },
  ],
};

export const NONVEG_THALI = {
  name: 'Special Non-Veg Thali',
  price: 220,
  currency: '₹',
  description: 'Complete Traditional Non-Veg Thali — ₹220 Only',
  image:
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
  items: [
    { category: 'Rice', items: ['Steamed Rice'] },
    { category: 'Non-Veg', items: ['Chicken Gravy', 'Chicken Sukka'] },
    { category: 'Indian Breads', items: ['Jowar Bhakri'] },
  ],
};

export const ADD_ONS = [
  {
    id: 'starter-softdrink',
    name: 'Veg Starter + Soft Drink',
    description: 'One premium veg starter with a chilled soft drink per guest',
    price: 55,
    icon: '🥗',
    popular: true,
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    description: 'Creamy Bengali dessert in saffron milk',
    price: null, // Price TBD
    icon: '🍮',
    popular: false,
  },
  {
    id: 'basundi',
    name: 'Basundi',
    description: 'Rich thickened sweetened milk dessert',
    price: null,
    icon: '🥛',
    popular: false,
  },
];

export const LIVE_COUNTERS = [
  {
    id: 'pani-puri',
    name: 'Pani Puri / Golgappa',
    icon: '🫙',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dosa',
    name: 'Dosa & Uttapam',
    icon: '🥞',
    image:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji',
    icon: '🍞',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'chaat',
    name: 'Chaat Counter',
    icon: '🥙',
    image:
      'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'tawa-pulav',
    name: 'Tawa Pulav',
    icon: '🍲',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'chinese',
    name: 'Chinese Live Counter',
    icon: '🍜',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'pasta',
    name: 'Pasta Live Counter',
    icon: '🍝',
    image:
      'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'pizza',
    name: 'Pizza Live Counter',
    icon: '🍕',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'kulcha-chole',
    name: 'Kulcha & Chole',
    icon: '🫓',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'jalebi',
    name: 'Jalebi Live Counter',
    icon: '🍩',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dessert-live',
    name: 'Dessert Live Counter',
    icon: '🍬',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18e5d8cb2-1765647822141.png',
    subtitle: 'Hot Gulab Jamun, Malpua & Rabdi',
  },
];

export const SERVICES = [
  {
    id: 'wedding',
    name: 'Weddings',
    icon: '💍',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f8ea1cf2-1772090160203.png',
    description: 'Make your big day unforgettable with our elegant wedding catering',
  },
  {
    id: 'birthday',
    name: 'Birthday Parties',
    icon: '🎂',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15c3d4833-1787514241618.png',
    description: 'Delicious spreads for birthday celebrations of all sizes',
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    icon: '🏢',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1be6aae75-1787514242377.png',
    description: 'Professional catering for meetings, launches, and office events',
  },
  {
    id: 'house-party',
    name: 'House Parties',
    icon: '🏠',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2500993-1787514241842.png',
    description: 'Intimate home gatherings made special with fresh home-style food',
  },
  {
    id: 'religious',
    name: 'Religious Functions',
    icon: '🙏',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15f81ee93-1787514240532.png',
    description: 'Satvik meals for pujas, havans, and religious celebrations',
  },
  {
    id: 'bulk',
    name: 'Bulk Orders',
    icon: '📦',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15ce0c563-1787514240356.png',
    description: 'Large-scale catering for 500+ guests with consistent quality',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/assets/images/gallery_image_3.png',
    alt: 'Traditional Indian thali with multiple colorful dishes arranged on a brass plate, warm lighting, festive setup',
    caption: 'Wedding Buffet',
  },
  {
    id: 2,
    src: '/assets/images/gallery_image_2.png',
    alt: 'Elegant buffet spread with Indian dishes under warm string lights, dimly lit event hall, dark wooden tables',
    caption: 'Birthday Party Buffet',
  },
  {
    id: 3,
    src: '/assets/images/gallery_image_1.png',
    alt: 'Chef preparing fresh dosas on a large tawa at a live counter, steam rising, evening event lighting',
    caption: 'Ring Ceremony Buffet',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1662228718998-0a8d0c2ed487',
    alt: 'Colorful Indian sweets arranged on silver trays, warm golden ambient light, elegant presentation',
    caption: 'Mithai & Sweets',
  },
  {
    id: 5,
    src: '/assets/images/gallery_image_5.png',
    alt: 'Pav bhaji being prepared at a live counter with bubbling bhaji and butter, dim event lighting',
    caption: 'Buffet',
  },
  {
    id: 6,
    src: '/assets/images/gallery_image_4.png',
    alt: 'Fresh pizza being made at a live pizza counter, wood-fired oven glow, dark atmospheric event setting',
    caption: 'Buffet',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1601744598731-df1528ab44e3',
    alt: 'Pani puri being served at a street food counter, evening lighting, colorful garnishes',
    caption: 'Pani Puri Counter',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1696271026737-a00041d5ea54',
    alt: 'Large catering setup with multiple food stations, warm string lights overhead, dark ambient hall',
    caption: 'Full Catering Setup',
  },
  {
    id: 9,
    src: '/assets/images/gallery_image_6.png',
    alt: 'Kulcha with chole being served at a live counter, steam visible, warm event lighting',
    caption: 'LiveCounter',
  },
  {
    id: 10,
    src: '/assets/images/gallery_image_7.png',
    alt: 'Fresh jalebis being fried in oil at a live counter, golden orange color, dark background',
    caption: 'Paneer Tikka Masala',
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    event: 'Wedding Reception',
    rating: 5,
    review:
      'Mugdha Caterers made our wedding reception absolutely memorable. The food was fresh, delicious, and served with such warmth. Our 300 guests were thoroughly impressed!',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_140f404c7-1768465100399.png',
  },
  {
    id: 2,
    name: 'Rahul Deshmukh',
    event: 'Corporate Event',
    rating: 5,
    review:
      'We hired Mugdha Caterers for our company annual meet. Professional service, on-time delivery, and the food quality was outstanding. Will definitely book again.',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1420b3ba9-1768465099830.png',
  },
  {
    id: 3,
    name: 'Sunita Patil',
    event: 'Birthday Party',
    rating: 5,
    review:
      "The live pani puri and dosa counters were a huge hit at my daughter's birthday! Everyone loved it. The thali was also amazing value at ₹200 per person.",
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_10481e6ba-1772259856514.png',
  },
  {
    id: 4,
    name: 'Amit Kulkarni',
    event: 'House Puja',
    rating: 5,
    review:
      'Perfect satvik food for our griha pravesh puja. Clean, fresh, and prepared with care. The dal and sabji were exactly like home-cooked food. Highly recommend!',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1189a4555-1779957341953.png',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your Package',
    description: 'Explore our Special Thali and catering options',
    icon: '🍽️',
  },
  {
    step: 2,
    title: 'Enter Number of Guests',
    description: 'Tell us how many people you are planning for',
    icon: '👥',
  },
  {
    step: 3,
    title: 'Customize Your Menu',
    description: 'Add upgrades, desserts, and live food counters',
    icon: '✨',
  },
  {
    step: 4,
    title: 'Review Your Estimate',
    description: 'Check your package and estimated pricing instantly',
    icon: '📋',
  },
  {
    step: 5,
    title: 'Contact Us',
    description: 'Send the complete inquiry to WhatsApp or call us directly',
    icon: '💬',
  },
];
