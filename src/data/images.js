/**
 * Centralised placeholder imagery.
 * Uses Picsum (reliable, always-available placeholder photography) seeded per
 * subject so the same key always resolves to the same image. Swap any of
 * these URLs for licensed photography before going to production.
 */
const img = (seed, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const heroSlides = [
  { id: "skyline", src: img("dubai-skyline-trade", 1920, 1080) },
  { id: "port", src: img("dubai-cargo-port", 1920, 1080) },
  { id: "containers", src: img("shipping-containers-yard", 1920, 1080) },
  { id: "warehouse", src: img("logistics-warehouse", 1920, 1080) },
];

export const productImages = {
  textiles: img("textiles-rolls-fabric"),
  garments: img("garments-apparel-rack"),
  fabrics: img("fabric-samples-swatch"),
  food: img("food-products-warehouse"),
  industrial: img("industrial-tools-supplies"),
  electrical: img("electrical-cables-supplies"),
};

export const serviceImages = {
  import: img("import-cargo-plane"),
  export: img("export-shipping-dock"),
  wholesale: img("wholesale-boxes-warehouse"),
  sourcing: img("global-sourcing-factory"),
  logistics: img("logistics-truck-fleet"),
  distribution: img("distribution-center-forklift"),
};

export const industryImages = [
  img("retail-fashion-store"),
  img("hotel-hospitality-lobby"),
  img("construction-site-crane"),
  img("factory-manufacturing-line"),
  img("healthcare-medical-supplies"),
  img("automotive-assembly"),
  img("agriculture-farm-field"),
  img("energy-power-grid"),
];

export const galleryImages = [
  img("gallery-dubai-port", 900, 700),
  img("gallery-container-yard", 900, 700),
  img("gallery-warehouse-aisle", 900, 700),
  img("gallery-cargo-ship", 900, 700),
  img("gallery-textile-mill", 900, 700),
  img("gallery-business-meeting", 900, 700),
  img("gallery-forklift-operator", 900, 700),
  img("gallery-dubai-skyline-2", 900, 700),
  img("gallery-loading-dock", 900, 700),
];

export const partnerLogos = Array.from({ length: 8 }, (_, i) => ({
  id: `partner-${i + 1}`,
  src: img(`partner-brand-logo-${i + 1}`, 240, 120),
}));

export const teamAndOfficeImage = img("dubai-office-team", 1200, 900);
export const aboutStoryImage = img("trading-office-desk", 1200, 900);
export const careersImage = img("office-team-collaboration", 1200, 900);
