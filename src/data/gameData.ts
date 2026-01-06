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

// Slot configuration with icons
const SLOT_CONFIG: Record<string, { icon: string; label: string }> = {
  weapon: { icon: "⚔️", label: "Weapon" },
  helmet: { icon: "🪖", label: "Helmet" },
  pauldron: { icon: "🛡️", label: "Pauldrons" },
  cuirass: { icon: "🥋", label: "Cuirass" },
  gauntlet: { icon: "🧤", label: "Gauntlets" },
  greaves: { icon: "🦵", label: "Greaves" },
  boots: { icon: "👢", label: "Boots" },
  bracers: { icon: "🧤", label: "Bracers" },
  belt: { icon: "🪢", label: "Belt" },
  necklace: { icon: "📿", label: "Necklace" },
  amulet: { icon: "🧿", label: "Amulet" },
  ring: { icon: "💍", label: "Ring" },
};

const SLOTS = ["weapon", "helmet", "pauldron", "cuirass", "gauntlet", "greaves", "boots", "bracers", "belt", "necklace", "amulet", "ring"];

// Set items that should be colored green
export const GREEN_ITEMS = new Set([
  // Dragon Requiem / related
  "Dragon Claw Visage",
  "Dragon Bone Armor",
  "Dragon Soul Smile",
  "Dragon Spine Leggings",
  "Dragon Fury Grip",
  "Dragon Hymn Walker",
  "Dragon Scale Pauldrons",
  // Fate Weaver / Big Wind Blows pieces
  "Fate Weaver's Protection",
  "Fate Weaver's Desire",
  "Fate Weaver's Kindness",
  "Fate Weaver's Mercy",
  "Fate Weaver's Taking",
  "Fate Weaver's Benevolence",
  "Hiss",
  "Splash",
  "Swoosh",
  // Cryo Mark
  "Cryo Mark Robe",
  "Cryo Mark Trousers",
  "Cryo Mark Gloves",
  "Cryo Mark Boots",
  "Cryo Mark Crown",
  "Cryo Mark Waistband",
  "Cryo Mark Pauldrons",
  // Desolate
  "Desolate Cuirass",
  "Desolate Belt",
  "Desolate Greaves",
  "Desolate Boots",
  "Desolate Helm",
  // Scourge of Sin
  "Greed",
  "Envy",
  "Sloth",
  "Pride",
  "Lust",
  // Eternal Ruler
  "Eternal Ruler's Dominion",
  "Eternal Ruler's Design",
  "Eternal Ruler's Gaze",
  "Eternal Ruler's Mark",
  "Eternal Ruler's Shackles",
  "Eternal Ruler's Resolve",
]);

// Raw builds data from the original source
const rawBuilds = [
  // --- Arcanist builds ---
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Iceflame",
    variant: "PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Evil Spirit Skull",
      cuirass: "Void Cavity",
      belt: "Resurrection",
      greaves: "Void Hip",
      pauldron: "Fairy Whisper",
      bracers: "Dragon Roar Mark",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      boots: ["Planar Shortcut"],
      amulet: ["Overflow Amulet"],
      belt: ["Viper Bond"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Iceflame",
    variant: "Ancient God PvE",
    gear: {
      weapon: "Ancient God's Call",
      helmet: "Dragon Claw Visage",
      cuirass: "Dragon Bone Armor",
      belt: "Dragon Soul Smile",
      greaves: "Dragon Spine Leggings",
      pauldron: "Fairy Whisper",
      bracers: "Dragon Roar Mark",
      gauntlet: "Dragon Fury Grip",
      boots: "Dragon Hymn Walker",
      necklace: "Temporal Pendant",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      amulet: ["Overflow Amulet"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Pyroblast",
    variant: "PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Dragon Claw Visage",
      cuirass: "Dragon Bone Armor",
      belt: "Dragon Soul Smile",
      greaves: "Dragon Spine Leggings",
      pauldron: "Void Scapula",
      bracers: "Dragon Roar Mark",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      gauntlet: ["Firm Grip"],
      amulet: ["Holy Shelter"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Pyroblast",
    variant: "Ancient God PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Dragon Claw Visage",
      cuirass: "Dragon Bone Armor",
      belt: "Dragon Soul Smile",
      greaves: "Dragon Spine Leggings",
      pauldron: "Dragon Scale Pauldrons",
      bracers: "Dragon Roar Mark",
      gauntlet: "Dragon Fury Grip",
      boots: "Void Shin",
      necklace: "Temporal Pendant",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      greaves: ["Pact Binding"],
      gauntlet: ["Void Arm"],
      amulet: ["Holy Shelter"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Pyroblast",
    variant: "PvP",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Dragon Claw Visage",
      cuirass: "Dragon Bone Armor",
      belt: "Dragon Soul Smile",
      greaves: "Dragon Spine Leggings",
      pauldron: "Void Scapula",
      bracers: "Dragon Roar Mark",
      gauntlet: "Void Arm",
      boots: "Planar Shortcut",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      gauntlet: ["Firm Grip"],
      amulet: ["Threshold Mark"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Fireball",
    build: "Jolt",
    variant: "Ancient God PvE",
    gear: {
      weapon: "Ancient God's Call",
      helmet: "Dragon Claw Visage",
      cuirass: "Dragon Bone Armor",
      belt: "Dragon Soul Smile",
      greaves: "Dragon Spine Leggings",
      pauldron: "Dragon Scale Pauldrons",
      bracers: "Enigmatic Imprint",
      gauntlet: "Void Arm",
      boots: "Dragon Hymn Walker",
      necklace: "Temporal Pendant",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      amulet: ["Holy Shelter"],
      boots: ["Void Shin"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Lightning Punch",
    build: "Ice Sword",
    variant: "PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Evil Spirit Skull",
      cuirass: "Fate Weaver's Protection",
      belt: "Viper Bond",
      greaves: "Fate Weaver's Desire",
      pauldron: "Fairy Whisper",
      bracers: "Stellar Spindle",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      pauldron: ["Elemental Disruption", "Void Scapula"],
      weapon: ["Sage's Tear"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Lightning Punch",
    build: "Ice Sword",
    variant: "PvP",
    gear: {
      weapon: "Prism",
      helmet: "Fate Weaver's Kindness",
      cuirass: "Fate Weaver's Protection",
      belt: "Viper Bond",
      greaves: "Pact Binding",
      pauldron: "Elemental Disruption",
      bracers: "Stellar Spindle",
      gauntlet: "Void Arm",
      boots: "Planar Shortcut",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      boots: ["Scholar's Journey"],
      bracers: ["Enigmatic Imprint"],
      weapon: ["Fate Intertwined"],
      belt: ["Void Abdomen"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Lightning Punch",
    build: "Flame Bow",
    variant: "PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Evil Spirit Skull",
      cuirass: "Void Cavity",
      belt: "Resurrection",
      greaves: "Fate Weaver's Desire",
      pauldron: "Fate Weaver's Mercy",
      bracers: "Stellar Spindle",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Lucky Echo",
    },
    alternatives: {
      boots: ["Planar Shortcut"],
      ring: ["Swift Shadow Finger"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Lightning Punch",
    build: "Thunder Punch",
    variant: "PvE",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Fate Weaver's Kindness",
      cuirass: "Fel Heritage Robe",
      belt: "Viper Bond",
      greaves: "Fate Weaver's Desire",
      pauldron: "Elemental Disruption",
      bracers: "Stellar Spindle",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "End's Return",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      boots: ["Planar Shortcut"],
      amulet: ["Threshold Mark"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Lightning Punch",
    build: "Thunder Punch",
    variant: "PvP",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Fate Weaver's Kindness",
      cuirass: "Fate Weaver's Protection",
      belt: "Fate Weaver's Taking",
      greaves: "Fate Weaver's Desire",
      pauldron: "Fate Weaver's Mercy",
      bracers: "Stellar Spindle",
      gauntlet: "Void Arm",
      boots: "Fate Weaver's Benevolence",
      necklace: "Balance Chain",
      amulet: "Threshold Mark",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      necklace: ["Swoosh"],
      amulet: ["Splash"],
      ring: ["Hiss"],
      cuirass: ["Fel Heritage Robe"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Ice Ray",
    build: "Rimebite",
    variant: "PvE",
    gear: {
      weapon: "Lich Remains",
      helmet: "Evil Spirit Skull",
      cuirass: "Cryo Mark Robe",
      belt: "Viper Bond",
      greaves: "Cryo Mark Trousers",
      pauldron: "Void Scapula",
      bracers: "Sorrow Bracers",
      gauntlet: "Cryo Mark Gloves",
      boots: "Cryo Mark Boots",
      necklace: "Temporal Pendant",
      amulet: "Holy Shelter",
      ring: "Winter Guard",
    },
    alternatives: {
      necklace: ["Balance Chain"],
      pauldron: ["Fairy Whisper"],
      ring: ["Swift Shadow Finger"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Ice Ray",
    build: "Rimebite",
    variant: "PvP",
    gear: {
      weapon: "Fate Intertwined",
      helmet: "Cryo Mark Crown",
      cuirass: "Cryo Mark Robe",
      belt: "Cryo Mark Waistband",
      greaves: "Cryo Mark Trousers",
      pauldron: "Fairy Whisper",
      bracers: "Sorrow Bracers",
      gauntlet: "Deathspeaker",
      boots: "Planar Shortcut",
      necklace: "Swoosh",
      amulet: "Splash",
      ring: "Hiss",
    },
    alternatives: {},
  },
  {
    class: "Arcanist",
    coreSkill: "Ice Ray",
    build: "Pyresight",
    variant: "PvE",
    gear: {
      weapon: "Lich Remains",
      helmet: "Cryo Mark Crown",
      cuirass: "Void Cavity",
      belt: "Resurrection",
      greaves: "Cryo Mark Trousers",
      pauldron: "Cryo Mark Pauldrons",
      bracers: "Sorrow Bracers",
      gauntlet: "Void Arm",
      boots: "Cryo Mark Boots",
      necklace: "Temporal Pendant",
      amulet: "Threshold Mark",
      ring: "Swift Shadow Finger",
    },
    alternatives: {
      weapon: ["Fate Intertwined"],
      necklace: ["Balance Chain"],
      ring: ["Winter Guard"],
    },
  },
  {
    class: "Arcanist",
    coreSkill: "Ice Ray",
    build: "Ionization",
    variant: "PvE",
    gear: {
      weapon: "Lich Remains",
      helmet: "Cryo Mark Crown",
      cuirass: "Fel Heritage Robe",
      belt: "Cryo Mark Waistband",
      greaves: "Cryo Mark Trousers",
      pauldron: "Cryo Mark Pauldrons",
      bracers: "Sorrow Bracers",
      gauntlet: "Void Arm",
      boots: "Void Shin",
      necklace: "Balance Chain",
      amulet: "Threshold Mark",
      ring: "Swift Shadow Finger",
    },
    alternatives: {},
  },

  // --- Savage builds ---
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Thunder",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Madness",
      cuirass: "Desolate Cuirass",
      belt: "Desolate Belt",
      greaves: "Desolate Greaves",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Ancestral Legacy",
      boots: "Desolate Boots",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      cuirass: ["Conqueror Soul"],
      gauntlet: ["Ruler's Gauntlets"],
      amulet: ["Eye of Thunder"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Thunder",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Desolate Helm",
      cuirass: "Desolate Cuirass",
      belt: "Desolate Belt",
      greaves: "Desolate Greaves",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Ruler's Gauntlets",
      boots: "Bloodclaw Sabatons",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      gauntlet: ["Gladiator's Force"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Fiery Rage",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Decay",
      cuirass: "Desolate Cuirass",
      belt: "Desolate Belt",
      greaves: "Desolate Greaves",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Ancestral Legacy",
      boots: "Desolate Boots",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      helmet: ["Crown of Madness"],
      gauntlet: ["Ruler's Gauntlets"],
      amulet: ["Eye of Thunder"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Fiery Rage",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Desolate Helm",
      cuirass: "Desolate Cuirass",
      belt: "Desolate Belt",
      greaves: "Desolate Greaves",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Ancestral Legacy",
      boots: "Bloodclaw Sabatons",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Thorn",
    variant: "PvE",
    gear: {
      weapon: "Demonic Barb",
      helmet: "Crest of Silence",
      cuirass: "Conqueror Soul",
      belt: "Desolate Belt",
      greaves: "Desolate Greaves",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Ancestral Legacy",
      boots: "Bloodclaw Sabatons",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      helmet: ["Crown of Madness"],
      gauntlet: ["Ruler's Gauntlets"],
      amulet: ["Eye of Thunder"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Bladestorm",
    build: "Thorn",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Crown of Madness",
      cuirass: "Conqueror Soul",
      belt: "Desolate Belt",
      greaves: "Rootguard Vessel",
      pauldron: "Demonbane Pauldron",
      bracers: "Might of Fury",
      gauntlet: "Gladiator's Force",
      boots: "Bloodclaw Sabatons",
      necklace: "Behemoth Gorget",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
  {
    class: "Savage",
    coreSkill: "Swipe",
    build: "Blazefury",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Decay",
      cuirass: "Greed",
      belt: "Ghost Girdle",
      greaves: "Envy",
      pauldron: "Demonbane Pauldron",
      bracers: "Demon Slayer",
      gauntlet: "Sloth",
      boots: "Pride",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
  {
    class: "Savage",
    coreSkill: "Swipe",
    build: "Blazefury",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Crown of Madness",
      cuirass: "Greed",
      belt: "Ghost Girdle",
      greaves: "Envy",
      pauldron: "Demonbane Pauldron",
      bracers: "Demon Slayer",
      gauntlet: "Sloth",
      boots: "Pride",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
  {
    class: "Savage",
    coreSkill: "Swipe",
    build: "Wild Spark",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Madness",
      cuirass: "Greed",
      belt: "Ghost Girdle",
      greaves: "Envy",
      pauldron: "Demonbane Pauldron",
      bracers: "Demon Slayer",
      gauntlet: "Sloth",
      boots: "Pride",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {
      helmet: ["Crown of Decay"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Swipe",
    build: "Ritual Blade",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Madness",
      cuirass: "Conqueror Soul",
      belt: "Lust",
      greaves: "Envy",
      pauldron: "Deathguard Pauldron",
      bracers: "Demon Slayer",
      gauntlet: "Sloth",
      boots: "Pride",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {
      helmet: ["Crown of Decay"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Heavy Blow",
    build: "Hellfire",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Madness",
      cuirass: "Eternal Ruler's Dominion",
      belt: "Eternal Ruler's Design",
      greaves: "Eternal Ruler's Gaze",
      pauldron: "Demonbane Pauldron",
      bracers: "Hand of Annihilation",
      gauntlet: "Ruler's Gauntlets",
      boots: "Eternal Ruler's Mark",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      gauntlet: ["Ancestral Legacy", "Eternal Ruler's Shackles"],
      boots: ["Raider'd Folly"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Heavy Blow",
    build: "Hellfire",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Crown of Madness",
      cuirass: "Eternal Ruler's Dominion",
      belt: "Eternal Ruler's Design",
      greaves: "Eternal Ruler's Gaze",
      pauldron: "Demonbane Pauldron",
      bracers: "Hand of Annihilation",
      gauntlet: "Ruler's Gauntlets",
      boots: "Eternal Ruler's Mark",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
  {
    class: "Savage",
    coreSkill: "Heavy Blow",
    build: "Ice Blast",
    variant: "PvE",
    gear: {
      weapon: "Demonic Barb",
      helmet: "Crown of Decay",
      cuirass: "Eternal Ruler's Dominion",
      belt: "Eternal Ruler's Design",
      greaves: "Eternal Ruler's Gaze",
      pauldron: "Eternal Ruler's Resolve",
      bracers: "Hand of Annihilation",
      gauntlet: "Eternal Ruler's Shackles",
      boots: "Eternal Ruler's Mark",
      necklace: "Obsidian Heart",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      weapon: ["Tribal Reverence"],
      helmet: ["Crown of Madness"],
      necklace: ["Ironblood Soul"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Heavy Blow",
    build: "Thunderbolt",
    variant: "PvE",
    gear: {
      weapon: "Tribal Reverence",
      helmet: "Crown of Decay",
      cuirass: "Eternal Ruler's Dominion",
      belt: "Eternal Ruler's Design",
      greaves: "Eternal Ruler's Gaze",
      pauldron: "Demonbane Pauldron",
      bracers: "Hand of Annihilation",
      gauntlet: "Ancestral Legacy",
      boots: "Eternal Ruler's Mark",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Dragon's Might",
    },
    alternatives: {
      gauntlet: ["Ruler's Gauntlets", "Eternal Ruler's Shackles"],
      boots: ["Raider'd Folly"],
    },
  },
  {
    class: "Savage",
    coreSkill: "Heavy Blow",
    build: "Thunderbolt",
    variant: "PvP",
    gear: {
      weapon: "Ancestor",
      helmet: "Crown of Decay",
      cuirass: "Eternal Ruler's Dominion",
      belt: "Eternal Ruler's Design",
      greaves: "Eternal Ruler's Gaze",
      pauldron: "Demonbane Pauldron",
      bracers: "Hand of Annihilation",
      gauntlet: "Ancestral Legacy",
      boots: "Eternal Ruler's Mark",
      necklace: "Ironblood Soul",
      amulet: "Bloodhowl Charm",
      ring: "Wildsoul Pact",
    },
    alternatives: {},
  },
];

// Helper to create item ID from name
function nameToId(name: string): string {
  return name.toLowerCase().replace(/['']/g, "").replace(/\s+/g, "-");
}

// Build inventory catalog from builds for a specific class
function buildInventoryCatalog(classType: ClassType): InventoryCategoryData[] {
  const className = classType === "arcanist" ? "Arcanist" : "Savage";
  const filteredBuilds = rawBuilds.filter((b) => b.class === className);

  const bySlot: Record<string, Set<string>> = {};
  for (const slot of SLOTS) {
    bySlot[slot] = new Set();
  }

  for (const build of filteredBuilds) {
    for (const slot of SLOTS) {
      const gear = build.gear as Record<string, string>;
      const req = gear[slot];
      if (req) bySlot[slot].add(req);

      const alts = (build.alternatives as Record<string, string[]>)?.[slot] || [];
      for (const alt of alts) {
        bySlot[slot].add(alt);
      }
    }
  }

  const categories: InventoryCategoryData[] = [];
  for (const slot of SLOTS) {
    const config = SLOT_CONFIG[slot];
    const items = Array.from(bySlot[slot]).sort((a, b) => a.localeCompare(b));

    if (items.length > 0) {
      categories.push({
        icon: config.icon,
        name: config.label,
        items: items.map((name) => ({ id: nameToId(name), name })),
      });
    }
  }

  return categories;
}

// Convert raw builds to BuildData format
function convertBuilds(classType: ClassType): BuildData[] {
  const className = classType === "arcanist" ? "Arcanist" : "Savage";
  const filteredBuilds = rawBuilds.filter((b) => b.class === className);

  return filteredBuilds.map((b, index) => {
    const variant = b.variant;
    const isAncientGod = variant.includes("Ancient God");
    const type: "PvE" | "PvP" = variant.includes("PvP") ? "PvP" : "PvE";

    const items: BuildData["items"] = [];
    for (const slot of SLOTS) {
      const gear = b.gear as Record<string, string>;
      const itemName = gear[slot];
      if (itemName) {
        const config = SLOT_CONFIG[slot];
        const alts = (b.alternatives as Record<string, string[]>)?.[slot] || [];
        items.push({
          slot: config.label,
          icon: config.icon,
          itemId: nameToId(itemName),
          substitutes: alts.length > 0 ? alts : undefined,
        });
      }
    }

    const buildSlug = b.build.replace(/\s+/g, "_");

    return {
      id: `${b.build.toLowerCase().replace(/\s+/g, "-")}-${variant.toLowerCase().replace(/\s+/g, "-")}-${index}`,
      name: b.build,
      type,
      archetype: className,
      skill: b.coreSkill,
      items,
      isAncientGod,
      warning: isAncientGod ? "This build requires 15% or more Hail CD" : undefined,
      wikiUrl: `https://lootbornwarriors.miraheze.org/wiki/${encodeURIComponent(buildSlug)}`,
    };
  });
}

// Export generated data
export const arcanistInventory = buildInventoryCatalog("arcanist");
export const arcanistBuilds = convertBuilds("arcanist");
export const savageInventory = buildInventoryCatalog("savage");
export const savageBuilds = convertBuilds("savage");

// Helper function to get item name from inventory
export const getItemName = (itemId: string, inventory: InventoryCategoryData[]): string => {
  for (const category of inventory) {
    const item = category.items.find((i) => i.id === itemId);
    if (item) return item.name;
  }
  // Fallback: convert ID back to name format
  return itemId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
