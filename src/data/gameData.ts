export type ClassType = "arcanist" | "savage";

export interface InventoryItem {
  id: string;
  name: string;
}

export interface InventoryCategoryData {
  icon: string;
  name: string;
  items: InventoryItem[];
}

export interface BuildItem {
  slot: string;
  icon: string;
  name: string;
  owned: boolean;
  substitutes?: string[];
}

export interface BuildData {
  id: string;
  name: string;
  type: "PvE" | "PvP";
  archetype: string;
  skill: string;
  items: { slot: string; icon: string; itemId: string; substitutes?: string[] }[];
  warning?: string;
  wikiUrl?: string;
  isAncientGod?: boolean;
}

export const arcanistInventory: InventoryCategoryData[] = [
  {
    icon: "⚔️",
    name: "Weapon",
    items: [
      { id: "ancient-gods-call", name: "Ancient God's Call" },
      { id: "fate-intertwined", name: "Fate Intertwined" },
      { id: "lich-remains", name: "Lich Remains" },
      { id: "prism", name: "Prism" },
      { id: "sages-tear", name: "Sage's Tear" },
    ],
  },
  {
    icon: "🪖",
    name: "Helmet",
    items: [
      { id: "cryo-mark-crown", name: "Cryo Mark Crown" },
      { id: "dragon-claw-visage", name: "Dragon Claw Visage" },
      { id: "evil-spirit-skull", name: "Evil Spirit Skull" },
      { id: "fate-weavers-kindness", name: "Fate Weaver's Kindness" },
    ],
  },
  {
    icon: "🛡️",
    name: "Pauldrons",
    items: [
      { id: "cryo-mark-pauldrons", name: "Cryo Mark Pauldrons" },
      { id: "dragon-scale-pauldrons", name: "Dragon Scale Pauldrons" },
      { id: "elemental-disruption", name: "Elemental Disruption" },
      { id: "fairy-whisper", name: "Fairy Whisper" },
      { id: "fate-weavers-mercy", name: "Fate Weaver's Mercy" },
      { id: "void-scapula", name: "Void Scapula" },
    ],
  },
  {
    icon: "🥋",
    name: "Cuirass",
    items: [
      { id: "cryo-mark-robe", name: "Cryo Mark Robe" },
      { id: "dragon-bone-armor", name: "Dragon Bone Armor" },
      { id: "fate-weavers-protection", name: "Fate Weaver's Protection" },
      { id: "fel-heritage-robe", name: "Fel Heritage Robe" },
      { id: "void-cavity", name: "Void Cavity" },
    ],
  },
  {
    icon: "🧤",
    name: "Gauntlets",
    items: [
      { id: "cryo-mark-gloves", name: "Cryo Mark Gloves" },
      { id: "deathspeaker", name: "Deathspeaker" },
      { id: "dragon-fury-grip", name: "Dragon Fury Grip" },
      { id: "firm-grip", name: "Firm Grip" },
      { id: "void-arm", name: "Void Arm" },
    ],
  },
  {
    icon: "🦵",
    name: "Greaves",
    items: [
      { id: "cryo-mark-trousers", name: "Cryo Mark Trousers" },
      { id: "dragon-spine-leggings", name: "Dragon Spine Leggings" },
      { id: "fate-weavers-desire", name: "Fate Weaver's Desire" },
      { id: "pact-binding", name: "Pact Binding" },
      { id: "void-hip", name: "Void Hip" },
    ],
  },
  {
    icon: "👢",
    name: "Boots",
    items: [
      { id: "cryo-mark-boots", name: "Cryo Mark Boots" },
      { id: "dragon-hymn-walker", name: "Dragon Hymn Walker" },
      { id: "fate-weavers-benevolence", name: "Fate Weaver's Benevolence" },
      { id: "planar-shortcut", name: "Planar Shortcut" },
      { id: "scholars-journey", name: "Scholar's Journey" },
      { id: "void-shin", name: "Void Shin" },
    ],
  },
  {
    icon: "🧤",
    name: "Bracers",
    items: [
      { id: "dragon-roar-mark", name: "Dragon Roar Mark" },
      { id: "enigmatic-imprint", name: "Enigmatic Imprint" },
      { id: "sorrow-bracers", name: "Sorrow Bracers" },
      { id: "stellar-spindle", name: "Stellar Spindle" },
    ],
  },
  {
    icon: "🪢",
    name: "Belt",
    items: [
      { id: "cryo-mark-waistband", name: "Cryo Mark Waistband" },
      { id: "dragon-soul-smile", name: "Dragon Soul Smile" },
      { id: "fate-weavers-taking", name: "Fate Weaver's Taking" },
      { id: "resurrection", name: "Resurrection" },
      { id: "viper-bond", name: "Viper Bond" },
      { id: "void-abdomen", name: "Void Abdomen" },
    ],
  },
  {
    icon: "📿",
    name: "Necklace",
    items: [
      { id: "balance-chain", name: "Balance Chain" },
      { id: "swoosh", name: "Swoosh" },
      { id: "temporal-pendant", name: "Temporal Pendant" },
    ],
  },
  {
    icon: "🧿",
    name: "Amulet",
    items: [
      { id: "ends-return", name: "End's Return" },
      { id: "holy-shelter", name: "Holy Shelter" },
      { id: "overflow-amulet", name: "Overflow Amulet" },
      { id: "splash", name: "Splash" },
      { id: "threshold-mark", name: "Threshold Mark" },
    ],
  },
  {
    icon: "💍",
    name: "Ring",
    items: [
      { id: "hiss", name: "Hiss" },
      { id: "lucky-echo", name: "Lucky Echo" },
      { id: "swift-shadow-finger", name: "Swift Shadow Finger" },
      { id: "winter-guard", name: "Winter Guard" },
    ],
  },
];

export const arcanistBuilds: BuildData[] = [
  {
    id: "iceflame-pve",
    name: "Iceflame",
    type: "PvE",
    archetype: "Arcanist",
    skill: "Fireball",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Iceflame",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "fate-intertwined" },
      { slot: "Helmet", icon: "🪖", itemId: "evil-spirit-skull" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "fairy-whisper" },
      { slot: "Cuirass", icon: "🥋", itemId: "void-cavity" },
      { slot: "Gauntlets", icon: "🧤", itemId: "void-arm" },
      { slot: "Greaves", icon: "🦵", itemId: "void-hip" },
      { slot: "Boots", icon: "👢", itemId: "void-shin", substitutes: ["Planar Shortcut"] },
      { slot: "Bracers", icon: "🧤", itemId: "dragon-roar-mark" },
      { slot: "Belt", icon: "🪢", itemId: "resurrection", substitutes: ["Viper Bond"] },
      { slot: "Necklace", icon: "📿", itemId: "balance-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return", substitutes: ["Overflow Amulet"] },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
  {
    id: "iceflame-ancient-god-pve",
    name: "Iceflame",
    type: "PvE",
    archetype: "Arcanist",
    skill: "Fireball",
    isAncientGod: true,
    warning: "This build requires 15% or more Hail CD",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Iceflame",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "ancient-gods-call" },
      { slot: "Helmet", icon: "🪖", itemId: "dragon-claw-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "fairy-whisper" },
      { slot: "Cuirass", icon: "🥋", itemId: "dragon-bone-armor" },
      { slot: "Gauntlets", icon: "🧤", itemId: "dragon-fury-grip" },
      { slot: "Greaves", icon: "🦵", itemId: "dragon-spine-leggings" },
      { slot: "Boots", icon: "👢", itemId: "dragon-hymn-walker" },
      { slot: "Bracers", icon: "🧤", itemId: "dragon-roar-mark" },
      { slot: "Belt", icon: "🪢", itemId: "dragon-soul-smile" },
      { slot: "Necklace", icon: "📿", itemId: "temporal-pendant" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return", substitutes: ["Overflow Amulet"] },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
  {
    id: "pyroblast-pve",
    name: "Pyroblast",
    type: "PvE",
    archetype: "Arcanist",
    skill: "Fireball",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Pyroblast",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "fate-intertwined" },
      { slot: "Helmet", icon: "🪖", itemId: "dragon-claw-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "void-scapula" },
      { slot: "Cuirass", icon: "🥋", itemId: "dragon-bone-armor" },
      { slot: "Gauntlets", icon: "🧤", itemId: "void-arm", substitutes: ["Firm Grip"] },
      { slot: "Greaves", icon: "🦵", itemId: "dragon-spine-leggings" },
      { slot: "Boots", icon: "👢", itemId: "void-shin" },
      { slot: "Bracers", icon: "🧤", itemId: "dragon-roar-mark" },
      { slot: "Belt", icon: "🪢", itemId: "dragon-soul-smile" },
      { slot: "Necklace", icon: "📿", itemId: "balance-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return", substitutes: ["Holy Shelter"] },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
  {
    id: "pyroblast-pvp",
    name: "Pyroblast",
    type: "PvP",
    archetype: "Arcanist",
    skill: "Fireball",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Pyroblast",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "fate-intertwined" },
      { slot: "Helmet", icon: "🪖", itemId: "dragon-claw-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "void-scapula" },
      { slot: "Cuirass", icon: "🥋", itemId: "dragon-bone-armor" },
      { slot: "Gauntlets", icon: "🧤", itemId: "void-arm", substitutes: ["Firm Grip"] },
      { slot: "Greaves", icon: "🦵", itemId: "dragon-spine-leggings" },
      { slot: "Boots", icon: "👢", itemId: "planar-shortcut" },
      { slot: "Bracers", icon: "🧤", itemId: "dragon-roar-mark" },
      { slot: "Belt", icon: "🪢", itemId: "dragon-soul-smile" },
      { slot: "Necklace", icon: "📿", itemId: "balance-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return", substitutes: ["Threshold Mark"] },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
  {
    id: "jolt-ancient-god-pve",
    name: "Jolt",
    type: "PvE",
    archetype: "Arcanist",
    skill: "Fireball",
    isAncientGod: true,
    warning: "This build requires 15% or more Hail CD",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Jolt",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "ancient-gods-call" },
      { slot: "Helmet", icon: "🪖", itemId: "dragon-claw-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "dragon-scale-pauldrons" },
      { slot: "Cuirass", icon: "🥋", itemId: "dragon-bone-armor" },
      { slot: "Gauntlets", icon: "🧤", itemId: "void-arm" },
      { slot: "Greaves", icon: "🦵", itemId: "dragon-spine-leggings" },
      { slot: "Boots", icon: "👢", itemId: "dragon-hymn-walker", substitutes: ["Void Shin"] },
      { slot: "Bracers", icon: "🧤", itemId: "enigmatic-imprint" },
      { slot: "Belt", icon: "🪢", itemId: "dragon-soul-smile" },
      { slot: "Necklace", icon: "📿", itemId: "temporal-pendant" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return", substitutes: ["Holy Shelter"] },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
  {
    id: "ice-sword-pve",
    name: "Ice Sword",
    type: "PvE",
    archetype: "Arcanist",
    skill: "Lightning Punch",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Ice_Sword",
    items: [
      { slot: "Weapon", icon: "⚔️", itemId: "fate-intertwined" },
      { slot: "Helmet", icon: "🪖", itemId: "cryo-mark-crown" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "cryo-mark-pauldrons" },
      { slot: "Cuirass", icon: "🥋", itemId: "cryo-mark-robe" },
      { slot: "Gauntlets", icon: "🧤", itemId: "cryo-mark-gloves" },
      { slot: "Greaves", icon: "🦵", itemId: "cryo-mark-trousers" },
      { slot: "Boots", icon: "👢", itemId: "cryo-mark-boots" },
      { slot: "Bracers", icon: "🧤", itemId: "stellar-spindle" },
      { slot: "Belt", icon: "🪢", itemId: "cryo-mark-waistband" },
      { slot: "Necklace", icon: "📿", itemId: "balance-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "ends-return" },
      { slot: "Ring", icon: "💍", itemId: "swift-shadow-finger" },
    ],
  },
];

// Helper function to get item name from inventory
export const getItemName = (itemId: string, inventory: InventoryCategoryData[]): string => {
  for (const category of inventory) {
    const item = category.items.find((i) => i.id === itemId);
    if (item) return item.name;
  }
  return itemId;
};
