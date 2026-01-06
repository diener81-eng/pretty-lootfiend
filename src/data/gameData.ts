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
export const savageInventory: InventoryCategoryData[] = [
  {
    icon: "🪓",
    name: "Weapon",
    items: [
      { id: "bloodthirst-cleaver", name: "Bloodthirst Cleaver" },
      { id: "ragefury-axe", name: "Ragefury Axe" },
      { id: "titans-verdict", name: "Titan's Verdict" },
      { id: "berserker-edge", name: "Berserker Edge" },
      { id: "primordial-splitter", name: "Primordial Splitter" },
    ],
  },
  {
    icon: "🪖",
    name: "Helmet",
    items: [
      { id: "warlords-crown", name: "Warlord's Crown" },
      { id: "bloodrage-helm", name: "Bloodrage Helm" },
      { id: "beast-skull-visage", name: "Beast Skull Visage" },
      { id: "iron-fury-mask", name: "Iron Fury Mask" },
    ],
  },
  {
    icon: "🛡️",
    name: "Pauldrons",
    items: [
      { id: "warlords-mantle", name: "Warlord's Mantle" },
      { id: "bloodrage-shoulders", name: "Bloodrage Shoulders" },
      { id: "beast-bone-guards", name: "Beast Bone Guards" },
      { id: "iron-fury-pauldrons", name: "Iron Fury Pauldrons" },
      { id: "savage-pride", name: "Savage Pride" },
      { id: "brutality-spikes", name: "Brutality Spikes" },
    ],
  },
  {
    icon: "🥋",
    name: "Cuirass",
    items: [
      { id: "warlords-plate", name: "Warlord's Plate" },
      { id: "bloodrage-harness", name: "Bloodrage Harness" },
      { id: "beast-hide-armor", name: "Beast Hide Armor" },
      { id: "iron-fury-chest", name: "Iron Fury Chest" },
      { id: "berserker-mail", name: "Berserker Mail" },
    ],
  },
  {
    icon: "🧤",
    name: "Gauntlets",
    items: [
      { id: "warlords-fists", name: "Warlord's Fists" },
      { id: "bloodrage-grips", name: "Bloodrage Grips" },
      { id: "beast-claw-gloves", name: "Beast Claw Gloves" },
      { id: "iron-fury-gauntlets", name: "Iron Fury Gauntlets" },
      { id: "crushing-grip", name: "Crushing Grip" },
    ],
  },
  {
    icon: "🦵",
    name: "Greaves",
    items: [
      { id: "warlords-legguards", name: "Warlord's Legguards" },
      { id: "bloodrage-leggings", name: "Bloodrage Leggings" },
      { id: "beast-leg-plates", name: "Beast Leg Plates" },
      { id: "iron-fury-greaves", name: "Iron Fury Greaves" },
      { id: "unstoppable-stride", name: "Unstoppable Stride" },
    ],
  },
  {
    icon: "👢",
    name: "Boots",
    items: [
      { id: "warlords-treads", name: "Warlord's Treads" },
      { id: "bloodrage-stompers", name: "Bloodrage Stompers" },
      { id: "beast-paw-boots", name: "Beast Paw Boots" },
      { id: "iron-fury-boots", name: "Iron Fury Boots" },
      { id: "charge-breakers", name: "Charge Breakers" },
      { id: "rampage-walkers", name: "Rampage Walkers" },
    ],
  },
  {
    icon: "🧤",
    name: "Bracers",
    items: [
      { id: "fury-brands", name: "Fury Brands" },
      { id: "bloodlust-wraps", name: "Bloodlust Wraps" },
      { id: "war-torn-bracers", name: "War-Torn Bracers" },
      { id: "berserker-bands", name: "Berserker Bands" },
    ],
  },
  {
    icon: "🪢",
    name: "Belt",
    items: [
      { id: "warlords-girdle", name: "Warlord's Girdle" },
      { id: "bloodrage-belt", name: "Bloodrage Belt" },
      { id: "beast-sinew-cord", name: "Beast Sinew Cord" },
      { id: "iron-fury-waist", name: "Iron Fury Waist" },
      { id: "carnage-strap", name: "Carnage Strap" },
      { id: "battle-cry-buckle", name: "Battle Cry Buckle" },
    ],
  },
  {
    icon: "📿",
    name: "Necklace",
    items: [
      { id: "warriors-oath", name: "Warrior's Oath" },
      { id: "rage-pendant", name: "Rage Pendant" },
      { id: "battle-fury-chain", name: "Battle Fury Chain" },
    ],
  },
  {
    icon: "🧿",
    name: "Amulet",
    items: [
      { id: "berserker-heart", name: "Berserker Heart" },
      { id: "blood-frenzy-talisman", name: "Blood Frenzy Talisman" },
      { id: "unstoppable-force", name: "Unstoppable Force" },
      { id: "wrath-sigil", name: "Wrath Sigil" },
      { id: "execution-mark", name: "Execution Mark" },
    ],
  },
  {
    icon: "💍",
    name: "Ring",
    items: [
      { id: "fury-band", name: "Fury Band" },
      { id: "bloodstained-loop", name: "Bloodstained Loop" },
      { id: "savage-strike-ring", name: "Savage Strike Ring" },
      { id: "warmonger-seal", name: "Warmonger Seal" },
    ],
  },
];

export const savageBuilds: BuildData[] = [
  {
    id: "bloodfury-pve",
    name: "Bloodfury",
    type: "PvE",
    archetype: "Savage",
    skill: "Cleave",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Bloodfury",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "bloodthirst-cleaver" },
      { slot: "Helmet", icon: "🪖", itemId: "bloodrage-helm" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "bloodrage-shoulders" },
      { slot: "Cuirass", icon: "🥋", itemId: "bloodrage-harness" },
      { slot: "Gauntlets", icon: "🧤", itemId: "bloodrage-grips" },
      { slot: "Greaves", icon: "🦵", itemId: "bloodrage-leggings" },
      { slot: "Boots", icon: "👢", itemId: "bloodrage-stompers" },
      { slot: "Bracers", icon: "🧤", itemId: "bloodlust-wraps" },
      { slot: "Belt", icon: "🪢", itemId: "bloodrage-belt" },
      { slot: "Necklace", icon: "📿", itemId: "rage-pendant" },
      { slot: "Amulet", icon: "🧿", itemId: "blood-frenzy-talisman" },
      { slot: "Ring", icon: "💍", itemId: "bloodstained-loop" },
    ],
  },
  {
    id: "warlord-pve",
    name: "Warlord",
    type: "PvE",
    archetype: "Savage",
    skill: "Whirlwind",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Warlord",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "ragefury-axe" },
      { slot: "Helmet", icon: "🪖", itemId: "warlords-crown" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "warlords-mantle" },
      { slot: "Cuirass", icon: "🥋", itemId: "warlords-plate" },
      { slot: "Gauntlets", icon: "🧤", itemId: "warlords-fists" },
      { slot: "Greaves", icon: "🦵", itemId: "warlords-legguards" },
      { slot: "Boots", icon: "👢", itemId: "warlords-treads" },
      { slot: "Bracers", icon: "🧤", itemId: "fury-brands" },
      { slot: "Belt", icon: "🪢", itemId: "warlords-girdle" },
      { slot: "Necklace", icon: "📿", itemId: "warriors-oath" },
      { slot: "Amulet", icon: "🧿", itemId: "berserker-heart" },
      { slot: "Ring", icon: "💍", itemId: "fury-band" },
    ],
  },
  {
    id: "warlord-pvp",
    name: "Warlord",
    type: "PvP",
    archetype: "Savage",
    skill: "Whirlwind",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Warlord",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "ragefury-axe" },
      { slot: "Helmet", icon: "🪖", itemId: "warlords-crown" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "savage-pride", substitutes: ["Warlord's Mantle"] },
      { slot: "Cuirass", icon: "🥋", itemId: "warlords-plate" },
      { slot: "Gauntlets", icon: "🧤", itemId: "crushing-grip" },
      { slot: "Greaves", icon: "🦵", itemId: "warlords-legguards" },
      { slot: "Boots", icon: "👢", itemId: "charge-breakers" },
      { slot: "Bracers", icon: "🧤", itemId: "fury-brands" },
      { slot: "Belt", icon: "🪢", itemId: "carnage-strap" },
      { slot: "Necklace", icon: "📿", itemId: "warriors-oath" },
      { slot: "Amulet", icon: "🧿", itemId: "execution-mark" },
      { slot: "Ring", icon: "💍", itemId: "warmonger-seal" },
    ],
  },
  {
    id: "titan-ancient-god-pve",
    name: "Titan",
    type: "PvE",
    archetype: "Savage",
    skill: "Slam",
    isAncientGod: true,
    warning: "This build requires 20% or more Attack Speed",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Titan",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "titans-verdict" },
      { slot: "Helmet", icon: "🪖", itemId: "beast-skull-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "beast-bone-guards" },
      { slot: "Cuirass", icon: "🥋", itemId: "beast-hide-armor" },
      { slot: "Gauntlets", icon: "🧤", itemId: "beast-claw-gloves" },
      { slot: "Greaves", icon: "🦵", itemId: "beast-leg-plates" },
      { slot: "Boots", icon: "👢", itemId: "beast-paw-boots" },
      { slot: "Bracers", icon: "🧤", itemId: "berserker-bands" },
      { slot: "Belt", icon: "🪢", itemId: "beast-sinew-cord" },
      { slot: "Necklace", icon: "📿", itemId: "battle-fury-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "unstoppable-force" },
      { slot: "Ring", icon: "💍", itemId: "savage-strike-ring" },
    ],
  },
  {
    id: "berserker-pve",
    name: "Berserker",
    type: "PvE",
    archetype: "Savage",
    skill: "Rampage",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Berserker",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "berserker-edge" },
      { slot: "Helmet", icon: "🪖", itemId: "iron-fury-mask" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "iron-fury-pauldrons" },
      { slot: "Cuirass", icon: "🥋", itemId: "iron-fury-chest" },
      { slot: "Gauntlets", icon: "🧤", itemId: "iron-fury-gauntlets" },
      { slot: "Greaves", icon: "🦵", itemId: "iron-fury-greaves" },
      { slot: "Boots", icon: "👢", itemId: "iron-fury-boots", substitutes: ["Rampage Walkers"] },
      { slot: "Bracers", icon: "🧤", itemId: "war-torn-bracers" },
      { slot: "Belt", icon: "🪢", itemId: "iron-fury-waist" },
      { slot: "Necklace", icon: "📿", itemId: "rage-pendant" },
      { slot: "Amulet", icon: "🧿", itemId: "wrath-sigil", substitutes: ["Berserker Heart"] },
      { slot: "Ring", icon: "💍", itemId: "fury-band" },
    ],
  },
  {
    id: "primordial-ancient-god-pve",
    name: "Primordial",
    type: "PvE",
    archetype: "Savage",
    skill: "Ground Shatter",
    isAncientGod: true,
    warning: "This build requires max HP investment",
    wikiUrl: "https://lootbornwarriors.miraheze.org/wiki/Primordial",
    items: [
      { slot: "Weapon", icon: "🪓", itemId: "primordial-splitter" },
      { slot: "Helmet", icon: "🪖", itemId: "beast-skull-visage" },
      { slot: "Pauldrons", icon: "🛡️", itemId: "brutality-spikes" },
      { slot: "Cuirass", icon: "🥋", itemId: "berserker-mail" },
      { slot: "Gauntlets", icon: "🧤", itemId: "crushing-grip" },
      { slot: "Greaves", icon: "🦵", itemId: "unstoppable-stride" },
      { slot: "Boots", icon: "👢", itemId: "rampage-walkers" },
      { slot: "Bracers", icon: "🧤", itemId: "berserker-bands" },
      { slot: "Belt", icon: "🪢", itemId: "battle-cry-buckle" },
      { slot: "Necklace", icon: "📿", itemId: "battle-fury-chain" },
      { slot: "Amulet", icon: "🧿", itemId: "unstoppable-force" },
      { slot: "Ring", icon: "💍", itemId: "savage-strike-ring" },
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
