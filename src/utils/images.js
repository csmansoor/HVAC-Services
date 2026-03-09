// ============================================
// HVAC WEBSITE - CENTRALIZED IMAGE IMPORTS
// ============================================
// HOW TO USE:
// 1. Add your images to the correct folder in src/images/
// 2. Keep the EXACT same file names listed below
// 3. Images will automatically update everywhere on the site
// ============================================

// ---- LOGO ----
// Add your logo as: src/images/logo.png
const logo = 'https://via.placeholder.com/200x80/E61E32/FFFFFF?text=HVAC+PRO';

// ---- HERO IMAGES ----
// Add your images as: src/images/hero/hero-bg.jpg etc.
const heroBg = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80';
const heroImage1 = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
const heroImage2 = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80';

// ---- SERVICE IMAGES ----
// Add your images as: src/images/services/heat-pump.jpg etc.
const heatPumpImg = 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80';
const waterHeaterImg = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80';
const furnaceImg = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
const acUnitImg = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80';
const boilerImg = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80';
const fireplaceImg = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80';
const airQualityImg = 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80';
const waterFiltrationImg = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
const gasLineImg = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80';
const ductworkImg = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80';

// ---- ABOUT IMAGES ----
// Add your images as: src/images/about/team-1.jpg etc.
const team1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80';
const team2 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80';
const companyPhoto = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80';

// ---- TESTIMONIAL IMAGES ----
// Add your images as: src/images/testimonials/customer-1.jpg etc.
const customer1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80';
const customer2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80';
const customer3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80';

// ---- BRAND LOGOS ----
// Add your images as: src/images/brands/brand-1.png etc.
const brand1 = 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Carrier';
const brand2 = 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Lennox';
const brand3 = 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Trane';
const brand4 = 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Rheem';
const brand5 = 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Goodman';

// ---- GALLERY IMAGES ----
// Add your images as: src/images/gallery/project-1.jpg etc.
const project1 = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80';
const project2 = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80';
const project3 = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80';

// ---- ICONS ----
const iconPhone = 'https://via.placeholder.com/64x64/E61E32/FFFFFF?text=📞';
const iconEmail = 'https://via.placeholder.com/64x64/E61E32/FFFFFF?text=✉';
const iconLocation = 'https://via.placeholder.com/64x64/E61E32/FFFFFF?text=📍';

// ============================================
// EXPORT ALL IMAGES
// ============================================
export const images = {
  logo,
  hero: {
    heroBg,
    heroImage1,
    heroImage2
  },
  services: {
    heatPump: heatPumpImg,
    waterHeater: waterHeaterImg,
    furnace: furnaceImg,
    acUnit: acUnitImg,
    boiler: boilerImg,
    fireplace: fireplaceImg,
    airQuality: airQualityImg,
    waterFiltration: waterFiltrationImg,
    gasLine: gasLineImg,
    ductwork: ductworkImg
  },
  about: {
    team1,
    team2,
    companyPhoto
  },
  testimonials: {
    customer1,
    customer2,
    customer3
  },
  brands: {
    brand1,
    brand2,
    brand3,
    brand4,
    brand5
  },
  gallery: {
    project1,
    project2,
    project3
  },
  icons: {
    phone: iconPhone,
    email: iconEmail,
    location: iconLocation
  }
};

export default images;