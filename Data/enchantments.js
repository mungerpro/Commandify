const enchantments = [{
  name: "aqua_affinity",
  displayName: "Aqua Affinity",
  compatability: "helmets",
  maxLevel: 0,
  description: "Increases underwater mining rate",
  searchTerms: "aqua affinity helmets turtle shell"
},
{
  name: "bane_of_arthropods",
  displayName: "Bane of Arthropods",
  compatability: "swords",
  maxLevel: 5,
  description: "Increases damage to spiders, bees, silverfish, and endermites",
  exclusive: "Sharpness and Smite",
  searchTerms: "bane of arthropods swords spiders bees silverfish endermites"
},
{
  name: "blast_protection",
  displayName: "Blast Protection",
  compatability: "armor",
  maxLevel: 4,
  description: "Reduces damage from explosions",
  exclusive: "Protection, Fire Protection, and Projectile Protection",
  searchTerms: "blast protection armor helmets chestplates leggings boots"
},
{
  name: "channeling",
  displayName: "Channeling",
  compatability: "tridents",
  maxLevel: 0,
  description: "Turns trident into a lightning gun during thunderstorms",
  exclusive: "Riptide",
  searchTerms: "channeling tridents lightning thunderstorm"
},
{
  name: "binding_curse",
  displayName: "Curse of Binding",
  compatability: "armor, elytra, mob heads",
  maxLevel: 0,
  description: "Prevents removal of the item",
  searchTerms: "curse of binding elytra mob heads armor helmets chestplates leggings boots"
},
{
  name: "vanishing_curse",
  displayName: "Curse of Vanishing",
  compatability: "Weapons, Tools, Armor",
  maxLevel: 0,
  description: "Destroys item upon death",
  searchTerms: "curse of vanishing armor helmets chestplates leggings boots swords pickaxes shovels hoes crossbow and arrows fishing rods elytras"
},
{
  name: "depth_strider",
  displayName: "Depth Strider",
  compatability: "Boots",
  maxLevel: 3,
  description: "Increases underwater speed",
  exclusive: "Frost Walker",
  searchTerms: "depth strider boots"
},
{
  name: "efficiency",
  displayName: "Efficiency",
  compatability: "Tools",
  maxLevel: 5,
  description: "Increases mining rate",
  searchTerms: "efficiency pickaxes shovels hoes shears"
},
{
  name: "feather_falling",
  displayName: "Feather Falling",
  compatability: "Boots",
  maxLevel: 4,
  description: "Reduces fall damage",
  searchTerms: "feather falling boots"
},
{
  name: "fire_aspect",
  displayName: "Fire Aspect",
  compatability: "Swords",
  maxLevel: 2,
  description: "Sets target on fire, mobs drop cooked meat instead of raw meat",
  searchTerms: "fire aspect swords"
},
{
  name: "fire_protection",
  displayName: "Fire Protection",
  compatability: "Armor",
  maxLevel: 4,
  description: "Reduces fire damage",
  exclusive: "Protection, Projectile Protection, and Blast Protection",
  searchTerms: "fire protection armor helmets chestplates leggings boots"
},
{
  name: "flame",
  displayName: "Flame",
  compatability: "Bows",
  maxLevel: 0,
  description: "Bows shoot flaming arrows",
  searchTerms: "flame bow and arrows"
},
{
  name: "fortune",
  displayName: "Fortune",
  compatability: "Tools",
  maxLevel: 3,
  description: "Increases drop rate of blocks",
  searchTerms: "fortune tools pickaxes shovels hoes"
},
{
  name: "frost_walker",
  displayName: "Frost Walker",
  compatability: "Boots",
  maxLevel: 2,
  description: "Turns water into ice when you walk over it",
  exclusive: "Depth Strider",
  searchTerms: "frost walker boots"
},
{
  name: "impaling",
  displayName: "Impaling",
  compatability: "Tridents",
  maxLevel: 5,
  description: "Tridents deal more damage to ocean mobs",
  searchTerms: "impaling tridents"
},
{
  name: "infinity",
  displayName: "Infinity",
  compatability: "Bows",
  maxLevel: 3,
  description: "Shooting the bow will not use arrows",
  exclusive: "Mending",
  searchTerms: "infinity bow and arrows"
},
{
  name: "knockback",
  displayName: "Knockback",
  compatability: "Swords",
  maxLevel: 2,
  description: "Knocks mobs back when hit",
  searchTerms: "knockback swords"
},
{
  name: "looting",
  displayName: "Looting",
  compatability: "Swords",
  maxLevel: 3,
  description: "Increases loot from mobs",
  searchTerms: "looting swords"
},
{
  name: "loyalty",
  displayName: "Loyalty",
  compatability: "Tridents",
  maxLevel: 3,
  description: "Trident returns like a boomerang when you throw it",
  exclusive: "Riptide",
  searchTerms: "loyalty tridents"
},
{
  name: "luck_of_the_sea",
  displayName: "Luck of the Sea",
  compatability: "Fishing Rods",
  maxLevel: 3,
  description: "Increases chance of getting better loot when fishing",
  searchTerms: "luck of the sea fishing rods"
},
{
  name: "lure",
  displayName: "Lure",
  compatability: "Fishing Rods",
  maxLevel: 3,
  description: "Increases fishing speed",
  searchTerms: "lure fishing rods"
},
{
  name: "mending",
  displayName: "Mending",
  compatability: "Weapons, Tools, Armor",
  maxLevel: 0,
  description: "Restores durability when experience is gained",
  searchTerms: "mending armor helmets turtle shells chestplates leggings boots elytra swords pickaxes shovels hoes fishing rods crossbow and arrows"
},
{
  name: "multishot",
  displayName: "Multishot",
  compatability: "Bows",
  maxLevel: 0,
  description: "Shoot three arrows at once for the cost of one arrow",
  exclusive: "Piercing",
  searchTerms: "multishot crossbows"
},
{
  name: "piercing",
  displayName: "Piercing",
  compatability: "Bows",
  maxLevel: 4,
  description: "Arrows go through two mobs",
  exclusive: "Multishot",
  searchTerms: "piercing crossbows"
},
{
  name: "power",
  displayName: "Power",
  compatability: "Bows",
  maxLevel: 5,
  description: "Arrows deal more damage",
  searchTerms: "power bows"
},
{
  name: "projectile_protection",
  displayName: "Projectile Protection",
  compatability: "Armor",
  maxLevel: 4,
  description: "Reduces damage from projectiles",
  exclusive: "Blast Protection, Fire Protection, and Protection",
  searchTerms: "projectile protection armor helmets turtle shells chestplates leggings boots"
},
{
  name: "protection",
  displayName: "Protection",
  compatability: "Armor",
  maxLevel: 4,
  description: "Blast Protection, Fire Protection, and Projectile Protection",
  searchTerms: "protection armor helmets turtle shells chestplates leggings boots"
},
{
  name: "punch",
  displayName: "Punch",
  compatability: "Bows",
  maxLevel: 2,
  description: "Knocks back enemies when hit",
  searchTerms: "punch bow and arrows"
},
{
  name: "quick_charge",
  displayName: "Quick Charge",
  compatability: "Crossbows",
  maxLevel: 3,
  description: "Crossbow reloads faster",
  searchTerms: "quick charge crossbows"
},
{
  name: "respiration",
  displayName: "Respiration",
  compatability: "Helmets",
  maxLevel: 3,
  description: "Increases oxygen levels underwater so you can swim longer",
  searchTerms: "respiration helmets turtle shells"
},
{
  name: "riptide",
  displayName: "Riptide",
  compatability: "Tridents",
  maxLevel: 3,
  description: "Ride along with your trident when you throw it. You will land where it lands.",
  exclusive: "Channeling and Loyalty",
  searchTerms: "riptide tridents"
},
{
  name: "sharpness",
  displayName: "Sharpness",
  compatability: "Swords, Axes",
  maxLevel: 5,
  description: "Increases damage",
  exclusive: "Smite and Bane of Arthropods",
  searchTerms: "sharpness swords axes"
},
{
  name: "silk_touch",
  displayName: "Silk Touch",
  compatability: "Tools",
  maxLevel: 0,
  description: "Mined blocks will drop, eg) grass will drop grass blocks instead of dirt blocks",
  exclusive: "Fortune",
  searchTerms: "silk touch pickaxes shovels hoes shears"
},
{
  name: "smite",
  displayName: "Smite",
  compatability: "Swords",
  maxLevel: 5,
  description: "Increases damage to undead mobs",
  exclusive: "Sharpness and Bane of Arthropods",
  searchTerms: "smite swords"
},
{
  name: "soul_speed",
  displayName: "Soul Speed",
  compatability: "Boots",
  maxLevel: 3,
  description: "Increases speed on soul blocks",
  searchTerms: "soul speed boots"
},
{
  name: "sweeping",
  displayName: "Sweeping Edge",
  compatability: "Swords",
  maxLevel: 3,
  description: "Hit multiple enemies with one swing of the sword",
  searchTerms: "sweeping edge swords"
},
{
  name: "swift_sneak",
  displayName: "Swift Sneak",
  compatability: "Leggings",
  maxLevel: 0,
  description: "Increases walking speed while crouching",
  searchTerms: "swift sneak leggings"
},
{
  name: "thorns",
  displayName: "Thorns",
  compatability: "Armor",
  maxLevel: 3,
  description: "Deals damage to enemies when hit",
  searchTerms: "thorns armor helmets turtle shells chestplates leggings boots"
},
{
  name: "unbreaking",
  displayName: "Unbreaking",
  compatability: "Weapons, Tools, Armor",
  maxLevel: 3,
  description: "Increases durability of an item",
  searchTerms: "unbreaking armor helmets turtle shells chestplates leggings boots elytra crossbow and arrows shears fishing rods pickaxes swords shovels hoes"
}];