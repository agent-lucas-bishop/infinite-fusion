export type Category =
  | 'basic'
  | 'nature'
  | 'weather'
  | 'technology'
  | 'food'
  | 'space'
  | 'mythical'
  | 'material'
  | 'life'
  | 'concept'
  | 'energy';

export interface Element {
  id: string;
  name: string;
  emoji: string;
  category: Category;
}

export const CATEGORY_COLORS: Record<Category, { bg: string; border: string; text: string }> = {
  basic:      { bg: '#f0f0f0', border: '#d0d0d0', text: '#555' },
  nature:     { bg: '#e8f5e9', border: '#a5d6a7', text: '#2e7d32' },
  weather:    { bg: '#e3f2fd', border: '#90caf9', text: '#1565c0' },
  technology: { bg: '#e8eaf6', border: '#9fa8da', text: '#283593' },
  food:       { bg: '#fff3e0', border: '#ffcc80', text: '#e65100' },
  space:      { bg: '#f3e5f5', border: '#ce93d8', text: '#6a1b9a' },
  mythical:   { bg: '#fce4ec', border: '#f48fb1', text: '#880e4f' },
  material:   { bg: '#efebe9', border: '#bcaaa4', text: '#4e342e' },
  life:       { bg: '#e0f2f1', border: '#80cbc4', text: '#00695c' },
  concept:    { bg: '#fffde7', border: '#fff176', text: '#f57f17' },
  energy:     { bg: '#fff8e1', border: '#ffe082', text: '#ff6f00' },
};

// All elements keyed by id
export const ELEMENTS: Record<string, Element> = {};
const e = (id: string, name: string, emoji: string, category: Category) => {
  ELEMENTS[id] = { id, name, emoji, category };
};

// ── Base (4) ──
e('water',  'Water',  '💧', 'basic');
e('fire',   'Fire',   '🔥', 'basic');
e('earth',  'Earth',  '🌍', 'basic');
e('air',    'Air',    '💨', 'basic');

// ── Weather & Atmosphere ──
e('steam',       'Steam',       '♨️',  'weather');
e('cloud',       'Cloud',       '☁️',  'weather');
e('rain',        'Rain',        '🌧️', 'weather');
e('storm',       'Storm',       '⛈️',  'weather');
e('lightning',   'Lightning',   '⚡',  'weather');
e('thunder',     'Thunder',     '🔊',  'weather');
e('snow',        'Snow',        '❄️',  'weather');
e('ice',         'Ice',         '🧊',  'weather');
e('hail',        'Hail',        '🌨️', 'weather');
e('fog',         'Fog',         '🌫️', 'weather');
e('wind',        'Wind',        '🌬️', 'weather');
e('tornado',     'Tornado',     '🌪️', 'weather');
e('hurricane',   'Hurricane',   '🌀',  'weather');
e('rainbow',     'Rainbow',     '🌈',  'weather');
e('blizzard',    'Blizzard',    '❄️',  'weather');
e('drought',     'Drought',     '☀️',  'weather');

// ── Nature ──
e('mud',         'Mud',         '🟤', 'nature');
e('dust',        'Dust',        '💨', 'nature');
e('sand',        'Sand',        '🏖️', 'nature');
e('clay',        'Clay',        '🏺', 'nature');
e('stone',       'Stone',       '🪨', 'nature');
e('mountain',    'Mountain',    '⛰️',  'nature');
e('volcano',     'Volcano',     '🌋', 'nature');
e('island',      'Island',      '🏝️', 'nature');
e('ocean',       'Ocean',       '🌊', 'nature');
e('lake',        'Lake',        '🏞️', 'nature');
e('river',       'River',       '🏞️', 'nature');
e('waterfall',   'Waterfall',   '💦', 'nature');
e('geyser',      'Geyser',      '♨️',  'nature');
e('swamp',       'Swamp',       '🐊', 'nature');
e('desert',      'Desert',      '🏜️', 'nature');
e('oasis',       'Oasis',       '🌴', 'nature');
e('cave',        'Cave',        '🕳️', 'nature');
e('crystal',     'Crystal',     '💎', 'nature');
e('gem',         'Gem',         '💎', 'nature');
e('fossil',      'Fossil',      '🦴', 'nature');
e('coal',        'Coal',        '⚫', 'nature');
e('oil',         'Oil',         '🛢️', 'nature');
e('diamond',     'Diamond',     '💠', 'nature');
e('earthquake',  'Earthquake',  '🌋', 'nature');
e('avalanche',   'Avalanche',   '🏔️', 'nature');
e('tsunami',     'Tsunami',     '🌊', 'nature');
e('flood',       'Flood',       '🌊', 'nature');
e('erosion',     'Erosion',     '🏜️', 'nature');
e('coral',       'Coral',       '🪸', 'nature');
e('reef',        'Reef',        '🐠', 'nature');
e('jungle',      'Jungle',      '🌴', 'nature');
e('forest',      'Forest',      '🌲', 'nature');
e('meadow',      'Meadow',      '🌻', 'nature');

// ── Materials ──
e('lava',        'Lava',        '🌋', 'material');
e('obsidian',    'Obsidian',    '⬛', 'material');
e('glass',       'Glass',       '🪟', 'material');
e('metal',       'Metal',       '⚙️',  'material');
e('steel',       'Steel',       '🔩', 'material');
e('bronze',      'Bronze',      '🥉', 'material');
e('gold',        'Gold',        '🥇', 'material');
e('silver',      'Silver',      '🥈', 'material');
e('copper',      'Copper',      '🟤', 'material');
e('iron',        'Iron',        '⛓️',  'material');
e('rust',        'Rust',        '🟤', 'material');
e('brick',       'Brick',       '🧱', 'material');
e('concrete',    'Concrete',    '🏗️', 'material');
e('cement',      'Cement',      '🏗️', 'material');
e('pottery',     'Pottery',     '🏺', 'material');
e('ceramic',     'Ceramic',     '🍶', 'material');
e('rubber',      'Rubber',      '⚫', 'material');
e('plastic',     'Plastic',     '♻️',  'material');
e('paper',       'Paper',       '📄', 'material');
e('wood',        'Wood',        '🪵', 'material');
e('charcoal',    'Charcoal',    '⬛', 'material');
e('ash',         'Ash',         '🌫️', 'material');
e('gunpowder',   'Gunpowder',   '💥', 'material');
e('dynamite',    'Dynamite',    '🧨', 'material');
e('fabric',      'Fabric',      '🧵', 'material');
e('wire',        'Wire',        '〰️', 'material');
e('rope',        'Rope',        '🪢', 'material');

// ── Life ──
e('plant',       'Plant',       '🌱', 'life');
e('tree',        'Tree',        '🌳', 'life');
e('flower',      'Flower',      '🌸', 'life');
e('grass',       'Grass',       '🌿', 'life');
e('seed',        'Seed',        '🌰', 'life');
e('mushroom',    'Mushroom',    '🍄', 'life');
e('moss',        'Moss',        '🌿', 'life');
e('algae',       'Algae',       '🟢', 'life');
e('seaweed',     'Seaweed',     '🌿', 'life');
e('cactus',      'Cactus',      '🌵', 'life');
e('bamboo',      'Bamboo',      '🎋', 'life');
e('vine',        'Vine',        '🌿', 'life');
e('fish',        'Fish',        '🐟', 'life');
e('bird',        'Bird',        '🐦', 'life');
e('insect',      'Insect',      '🐛', 'life');
e('butterfly',   'Butterfly',   '🦋', 'life');
e('frog',        'Frog',        '🐸', 'life');
e('lizard',      'Lizard',      '🦎', 'life');
e('snake',       'Snake',       '🐍', 'life');
e('wolf',        'Wolf',        '🐺', 'life');
e('horse',       'Horse',       '🐴', 'life');
e('dog',         'Dog',         '🐕', 'life');
e('cat',         'Cat',         '🐈', 'life');
e('whale',       'Whale',       '🐋', 'life');
e('shark',       'Shark',       '🦈', 'life');
e('octopus',     'Octopus',     '🐙', 'life');
e('bee',         'Bee',         '🐝', 'life');
e('ant',         'Ant',         '🐜', 'life');
e('spider',      'Spider',      '🕷️', 'life');
e('egg',         'Egg',         '🥚', 'life');
e('nest',        'Nest',        '🪺', 'life');
e('human',       'Human',       '🧑', 'life');
e('bacteria',    'Bacteria',    '🦠', 'life');
e('dinosaur',    'Dinosaur',    '🦕', 'life');
e('dragon',      'Dragon',      '🐉', 'mythical');

// ── Energy ──
e('electricity', 'Electricity', '⚡', 'energy');
e('magnet',      'Magnet',      '🧲', 'energy');
e('laser',       'Laser',       '🔴', 'energy');
e('plasma',      'Plasma',      '🟣', 'energy');
e('nuclear',     'Nuclear',     '☢️',  'energy');
e('radiation',   'Radiation',   '☢️',  'energy');
e('explosion',   'Explosion',   '💥', 'energy');
e('light',       'Light',       '💡', 'energy');
e('heat',        'Heat',        '🌡️', 'energy');
e('cold',        'Cold',        '🥶', 'energy');
e('sound',       'Sound',       '🔊', 'energy');
e('wave',        'Wave',        '🌊', 'energy');
e('solar',       'Solar',       '☀️',  'energy');
e('gravity',     'Gravity',     '🍎', 'energy');

// ── Technology ──
e('wheel',       'Wheel',       '☸️',  'technology');
e('engine',      'Engine',      '🔧', 'technology');
e('clock',       'Clock',       '🕐', 'technology');
e('compass',     'Compass',     '🧭', 'technology');
e('telescope',   'Telescope',   '🔭', 'technology');
e('microscope',  'Microscope',  '🔬', 'technology');
e('battery',     'Battery',     '🔋', 'technology');
e('circuit',     'Circuit',     '🔌', 'technology');
e('computer',    'Computer',    '💻', 'technology');
e('internet',    'Internet',    '🌐', 'technology');
e('robot',       'Robot',       '🤖', 'technology');
e('ai',          'AI',          '🧠', 'technology');
e('phone',       'Phone',       '📱', 'technology');
e('radio',       'Radio',       '📻', 'technology');
e('tv',          'TV',          '📺', 'technology');
e('camera',      'Camera',      '📷', 'technology');
e('satellite',   'Satellite',   '🛰️', 'technology');
e('rocket',      'Rocket',      '🚀', 'technology');
e('airplane',    'Airplane',    '✈️',  'technology');
e('car',         'Car',         '🚗', 'technology');
e('train',       'Train',       '🚂', 'technology');
e('ship',        'Ship',        '🚢', 'technology');
e('submarine',   'Submarine',   '🚢', 'technology');
e('helicopter',  'Helicopter',  '🚁', 'technology');
e('drone',       'Drone',       '🛸', 'technology');
e('bomb',        'Bomb',        '💣', 'technology');
e('sword',       'Sword',       '⚔️',  'technology');
e('shield',      'Shield',      '🛡️', 'technology');
e('armor',       'Armor',       '🛡️', 'technology');
e('tool',        'Tool',        '🔨', 'technology');
e('hammer',      'Hammer',      '🔨', 'technology');
e('axe',         'Axe',         '🪓', 'technology');
e('saw',         'Saw',         '🪚', 'technology');
e('nail',        'Nail',        '📌', 'technology');
e('lens',        'Lens',        '🔍', 'technology');
e('mirror',      'Mirror',      '🪞', 'technology');
e('bulb',        'Light Bulb',  '💡', 'technology');
e('solar_panel', 'Solar Panel', '🔆', 'technology');
e('windmill',    'Windmill',    '🏗️', 'technology');
e('dam',         'Dam',         '🏗️', 'technology');

// ── Food ──
e('bread',       'Bread',       '🍞', 'food');
e('dough',       'Dough',       '🫓', 'food');
e('flour',       'Flour',       '🌾', 'food');
e('wheat',       'Wheat',       '🌾', 'food');
e('rice',        'Rice',        '🍚', 'food');
e('sugar',       'Sugar',       '🍬', 'food');
e('salt',        'Salt',        '🧂', 'food');
e('honey',       'Honey',       '🍯', 'food');
e('cheese',      'Cheese',      '🧀', 'food');
e('milk',        'Milk',        '🥛', 'food');
e('butter',      'Butter',      '🧈', 'food');
e('chocolate',   'Chocolate',   '🍫', 'food');
e('coffee',      'Coffee',      '☕', 'food');
e('tea',         'Tea',         '🍵', 'food');
e('wine',        'Wine',        '🍷', 'food');
e('beer',        'Beer',        '🍺', 'food');
e('juice',       'Juice',       '🧃', 'food');
e('fruit',       'Fruit',       '🍎', 'food');
e('vegetable',   'Vegetable',   '🥬', 'food');
e('meat',        'Meat',        '🥩', 'food');
e('soup',        'Soup',        '🍲', 'food');
e('pizza',       'Pizza',       '🍕', 'food');
e('cake',        'Cake',        '🎂', 'food');
e('cookie',      'Cookie',      '🍪', 'food');
e('pie',         'Pie',         '🥧', 'food');
e('sushi',       'Sushi',       '🍣', 'food');
e('noodle',      'Noodle',      '🍜', 'food');
e('popcorn',     'Popcorn',     '🍿', 'food');
e('jam',         'Jam',         '🫙', 'food');
e('ice_cream',   'Ice Cream',   '🍨', 'food');
e('smoothie',    'Smoothie',    '🥤', 'food');

// ── Space ──
e('sun',         'Sun',         '☀️',  'space');
e('moon',        'Moon',        '🌙', 'space');
e('star',        'Star',        '⭐', 'space');
e('planet',      'Planet',      '🪐', 'space');
e('asteroid',    'Asteroid',    '☄️',  'space');
e('comet',       'Comet',       '☄️',  'space');
e('nebula',      'Nebula',      '🌌', 'space');
e('galaxy',      'Galaxy',      '🌌', 'space');
e('black_hole',  'Black Hole',  '🕳️', 'space');
e('supernova',   'Supernova',   '💫', 'space');
e('cosmos',      'Cosmos',      '🌌', 'space');
e('meteor',      'Meteor',      '☄️',  'space');
e('alien',       'Alien',       '👽', 'space');
e('ufo',         'UFO',         '🛸', 'space');
e('space_station','Space Station','🛰️','space');

// ── Mythical ──
e('phoenix',     'Phoenix',     '🔥', 'mythical');
e('unicorn',     'Unicorn',     '🦄', 'mythical');
e('mermaid',     'Mermaid',     '🧜', 'mythical');
e('ghost',       'Ghost',       '👻', 'mythical');
e('vampire',     'Vampire',     '🧛', 'mythical');
e('werewolf',    'Werewolf',    '🐺', 'mythical');
e('zombie',      'Zombie',      '🧟', 'mythical');
e('angel',       'Angel',       '👼', 'mythical');
e('demon',       'Demon',       '😈', 'mythical');
e('fairy',       'Fairy',       '🧚', 'mythical');
e('wizard',      'Wizard',      '🧙', 'mythical');
e('golem',       'Golem',       '🗿', 'mythical');
e('kraken',      'Kraken',      '🐙', 'mythical');
e('yeti',        'Yeti',        '❄️',  'mythical');
e('sphinx',      'Sphinx',      '🦁', 'mythical');
e('pegasus',     'Pegasus',     '🐴', 'mythical');
e('hydra',       'Hydra',       '🐉', 'mythical');
e('chimera',     'Chimera',     '🦁', 'mythical');
e('titan',       'Titan',       '🗿', 'mythical');

// ── Concepts ──
e('time',        'Time',        '⏳', 'concept');
e('life_force',  'Life',        '❤️',  'concept');
e('death',       'Death',       '💀', 'concept');
e('love',        'Love',        '💕', 'concept');
e('music',       'Music',       '🎵', 'concept');
e('art',         'Art',         '🎨', 'concept');
e('story',       'Story',       '📖', 'concept');
e('dream',       'Dream',       '💭', 'concept');
e('knowledge',   'Knowledge',   '📚', 'concept');
e('philosophy',  'Philosophy',  '🤔', 'concept');
e('magic',       'Magic',       '✨', 'concept');
e('science',     'Science',     '🔬', 'concept');
e('war',         'War',         '⚔️',  'concept');
e('peace',       'Peace',       '☮️',  'concept');
e('civilization','Civilization','🏛️', 'concept');
e('religion',    'Religion',    '🙏', 'concept');
e('money',       'Money',       '💰', 'concept');
e('luck',        'Luck',        '🍀', 'concept');
e('chaos',       'Chaos',       '🌀', 'concept');
e('order',       'Order',       '📐', 'concept');
e('void',        'Void',        '⬛', 'concept');
e('soul',        'Soul',        '👻', 'concept');
e('wisdom',      'Wisdom',      '🦉', 'concept');
e('speed',       'Speed',       '💨', 'concept');
e('strength',    'Strength',    '💪', 'concept');
e('poison',      'Poison',      '☠️',  'concept');
e('medicine',    'Medicine',    '💊', 'concept');
e('alchemy',     'Alchemy',     '⚗️',  'concept');

// Structure (buildings etc)
e('house',       'House',       '🏠', 'technology');
e('castle',      'Castle',      '🏰', 'technology');
e('city',        'City',        '🏙️', 'technology');
e('farm',        'Farm',        '🌾', 'technology');
e('bridge',      'Bridge',      '🌉', 'technology');
e('wall',        'Wall',        '🧱', 'technology');
e('pyramid',     'Pyramid',     '🔺', 'technology');
e('lighthouse',  'Lighthouse',  '🗼', 'technology');

export const TOTAL_ELEMENTS = Object.keys(ELEMENTS).length;

// ── Recipes ──
// key = sorted "id1+id2", value = result id
const recipeMap: Record<string, string> = {};

function r(a: string, b: string, result: string) {
  const key = [a, b].sort().join('+');
  recipeMap[key] = result;
}

// === BASE COMBOS ===
r('water','fire','steam');
r('water','earth','mud');
r('water','air','cloud');
r('fire','earth','lava');
r('fire','air','heat');
r('earth','air','dust');

// === TIER 2 ===
r('steam','earth','geyser');
r('steam','air','cloud');
r('steam','water','fog');
r('steam','fire','heat');
r('mud','fire','brick');
r('mud','air','dust');
r('mud','water','swamp');
r('cloud','fire','lightning');
r('cloud','earth','fog');
r('cloud','water','rain');
r('cloud','cloud','storm');
r('cloud','air','wind');
r('lava','water','obsidian');
r('lava','air','stone');
r('lava','earth','volcano');
r('heat','water','steam');
r('heat','earth','lava');
r('heat','air','wind');
r('dust','water','mud');
r('dust','fire','ash');

// === WEATHER ===
r('rain','fire','rainbow');
r('rain','earth','plant');
r('rain','air','storm');
r('rain','cold','snow');
r('rain','wind','storm');
r('storm','water','flood');
r('storm','earth','earthquake');
r('storm','air','tornado');
r('storm','fire','lightning');
r('storm','ice','hail');
r('storm','ocean','hurricane');
r('lightning','metal','magnet');
r('lightning','sand','glass');
r('lightning','water','electricity');
r('lightning','earth','fire');
r('snow','earth','ice');
r('snow','fire','water');
r('snow','wind','blizzard');
r('snow','mountain','avalanche');
r('ice','fire','water');
r('ice','earth','glacier');
r('wind','earth','erosion');
r('wind','water','wave');
r('wind','fire','wildfire');
r('tornado','water','hurricane');
r('fog','fire','steam');
r('fog','earth','swamp');
r('cold','water','ice');
r('cold','air','snow');
r('cold','earth','permafrost');
r('rainbow','water','light');

// === NATURE ===
r('sand','fire','glass');
r('sand','water','clay');
r('sand','wind','desert');
r('stone','fire','metal');
r('stone','water','sand');
r('stone','air','dust');
r('stone','stone','mountain');
r('mountain','water','river');
r('mountain','fire','volcano');
r('mountain','cloud','rain');
r('mountain','snow','avalanche');
r('volcano','water','island');
r('volcano','air','ash');
r('ocean','earth','island');
r('ocean','fire','steam');
r('ocean','air','wave');
r('ocean','ocean','tsunami');
r('river','earth','lake');
r('river','mountain','waterfall');
r('river','ocean','delta');
r('lake','fire','steam');
r('lake','earth','swamp');
r('desert','water','oasis');
r('desert','rain','oasis');
r('cave','water','crystal');
r('cave','fire','coal');
r('crystal','fire','gem');
r('crystal','heat','diamond');
r('coal','heat','diamond');
r('coal','fire','charcoal');
r('island','plant','jungle');
r('swamp','plant','moss');
r('ocean','plant','seaweed');
r('ocean','life_force','fish');
r('water','water','ocean');
r('earth','earth','mountain');
r('mountain','mountain','mountain');
r('obsidian','water','stone');
r('forest','fire','charcoal');

// === MATERIALS ===
r('clay','fire','pottery');
r('clay','heat','ceramic');
r('clay','brick','wall');
r('brick','brick','wall');
r('wall','wall','house');
r('house','house','city');
r('metal','fire','steel');
r('metal','electricity','magnet');
r('metal','water','rust');
r('metal','metal','steel');
r('steel','fire','sword');
r('steel','human','armor');
r('iron','fire','steel');
r('iron','water','rust');
r('glass','metal','lens');
r('glass','light','lens');
r('lens','glass','telescope');
r('lens','lens','microscope');
r('gold','fire','light');
r('paper','fire','ash');
r('wood','fire','charcoal');
r('wood','tool','paper');
r('wood','water','paper');
r('charcoal','water','ink');
r('fabric','wind','sail');
r('wire','electricity','circuit');
r('wire','metal','circuit');
r('rubber','oil','plastic');

// === LIFE ===
r('plant','fire','ash');
r('plant','water','tree');
r('plant','earth','tree');
r('plant','air','flower');
r('plant','sun','tree');
r('plant','plant','forest');
r('tree','fire','charcoal');
r('tree','water','wood');
r('tree','air','seed');
r('tree','tool','wood');
r('tree','axe','wood');
r('flower','water','fruit');
r('flower','bee','honey');
r('flower','wind','seed');
r('seed','earth','plant');
r('seed','water','plant');
r('grass','fire','ash');
r('grass','earth','meadow');
r('mud','plant','swamp');
r('mushroom','plant','moss');
r('algae','earth','plant');
r('algae','sun','plant');
r('cactus','water','fruit');
r('bamboo','tool','paper');
r('fish','fire','meat');
r('fish','earth','fossil');
r('fish','lightning','electricity');
r('bird','fire','phoenix');
r('bird','water','fish');
r('bird','night','owl');
r('egg','fire','bird');
r('egg','water','fish');
r('egg','earth','dinosaur');
r('egg','heat','bird');
r('insect','air','butterfly');
r('insect','flower','bee');
r('insect','earth','ant');
r('insect','web','spider');
r('frog','fire','lizard');
r('lizard','fire','dragon');
r('lizard','water','frog');
r('snake','ice','lizard');
r('wolf','moon','werewolf');
r('wolf','human','dog');
r('horse','air','pegasus');
r('horse','human','horse');
r('horse','unicorn','pegasus');
r('dog','cat','chaos');
r('whale','fish','shark');
r('ocean','fish','whale');
r('octopus','storm','kraken');
r('bee','flower','honey');
r('spider','silk','web');
r('bacteria','water','algae');
r('bacteria','earth','mushroom');
r('dinosaur','fire','dragon');
r('dinosaur','ice','fossil');
r('dinosaur','time','fossil');
r('human','fire','knowledge');
r('human','water','fish');
r('human','earth','farm');
r('human','air','music');
r('human','human','love');
r('human','tool','civilization');
r('human','magic','wizard');
r('human','death','ghost');
r('human','moon','werewolf');
r('human','horse','knight');
r('mud','life_force','bacteria');
r('water','life_force','bacteria');
r('plant','life_force','flower');
r('earth','life_force','plant');
r('ocean','life_force','fish');

// === ENERGY ===
r('electricity','water','lightning');
r('electricity','air','lightning');
r('electricity','metal','magnet');
r('electricity','wire','circuit');
r('electricity','glass','bulb');
r('electricity','light','laser');
r('electricity','sound','radio');
r('magnet','metal','compass');
r('magnet','electricity','engine');
r('laser','metal','sword');
r('plasma','metal','sword');
r('nuclear','water','steam');
r('nuclear','city','explosion');
r('radiation','human','zombie');
r('radiation','insect','spider');
r('explosion','earth','crater');
r('light','water','rainbow');
r('light','earth','plant');
r('light','glass','rainbow');
r('light','mirror','laser');
r('sound','water','wave');
r('sound','air','music');
r('sound','metal','bell');
r('wave','earth','earthquake');
r('wave','air','sound');
r('solar','metal','solar_panel');
r('solar','water','plant');
r('gravity','light','black_hole');
r('gravity','star','black_hole');
r('sun','water','rainbow');
r('sun','earth','plant');
r('sun','air','light');

// === TECHNOLOGY ===
r('wheel','metal','engine');
r('wheel','wood','car');
r('engine','metal','car');
r('engine','air','airplane');
r('engine','water','ship');
r('engine','wheel','train');
r('clock','electricity','computer');
r('compass','ship','lighthouse');
r('telescope','star','planet');
r('telescope','space_station','satellite');
r('microscope','bacteria','medicine');
r('battery','metal','circuit');
r('battery','wire','electricity');
r('circuit','circuit','computer');
r('circuit','electricity','computer');
r('computer','computer','internet');
r('computer','human','ai');
r('computer','electricity','internet');
r('internet','human','knowledge');
r('internet','robot','ai');
r('robot','human','ai');
r('robot','ai','singularity');
r('phone','internet','smartphone');
r('radio','picture','tv');
r('tv','internet','phone');
r('camera','phone','phone');
r('satellite','earth','gps');
r('rocket','earth','satellite');
r('rocket','moon','space_station');
r('rocket','human','astronaut');
r('airplane','water','ship');
r('airplane','space','rocket');
r('car','water','submarine');
r('car','air','airplane');
r('train','electricity','train');
r('ship','air','airplane');
r('ship','water','submarine');
r('ship','submarine','submarine');
r('helicopter','water','submarine');
r('drone','camera','satellite');
r('bomb','fire','explosion');
r('sword','fire','lightsaber');
r('sword','magic','excalibur');
r('shield','magic','armor');
r('tool','stone','hammer');
r('tool','metal','axe');
r('tool','wood','axe');
r('hammer','metal','nail');
r('mirror','light','laser');
r('mirror','mirror','telescope');
r('bulb','wire','light');
r('solar_panel','battery','electricity');
r('windmill','electricity','energy');
r('dam','water','electricity');
r('house','stone','castle');
r('castle','castle','kingdom');
r('city','city','civilization');
r('farm','water','rice');
r('farm','wheat','flour');
r('farm','animal','milk');
r('bridge','water','dam');
r('wall','house','castle');
r('pyramid','human','civilization');

// === FOOD ===
r('flour','water','dough');
r('flour','fire','bread');
r('dough','fire','bread');
r('dough','fruit','pie');
r('bread','cheese','pizza');
r('bread','meat','sandwich');
r('wheat','tool','flour');
r('wheat','stone','flour');
r('rice','water','soup');
r('rice','fish','sushi');
r('sugar','water','juice');
r('sugar','flour','cake');
r('sugar','fruit','jam');
r('sugar','milk','ice_cream');
r('sugar','heat','candy');
r('salt','water','ocean');
r('salt','meat','jerky');
r('honey','water','tea');
r('honey','bread','toast');
r('cheese','bread','pizza');
r('cheese','dough','pizza');
r('milk','heat','cheese');
r('milk','cold','ice_cream');
r('milk','chocolate','smoothie');
r('milk','coffee','latte');
r('butter','flour','cookie');
r('butter','bread','toast');
r('chocolate','milk','smoothie');
r('chocolate','dough','cookie');
r('coffee','water','tea');
r('coffee','milk','latte');
r('coffee','ice','iced_coffee');
r('tea','ice','iced_tea');
r('wine','time','vinegar');
r('beer','bread','yeast');
r('fruit','water','juice');
r('fruit','sugar','jam');
r('fruit','ice','smoothie');
r('fruit','dough','pie');
r('vegetable','water','soup');
r('vegetable','fire','soup');
r('meat','fire','steak');
r('popcorn','fire','popcorn');
r('noodle','water','soup');
r('noodle','cheese','mac_cheese');

// === SPACE ===
r('sun','sun','star');
r('sun','moon','eclipse');
r('sun','death','black_hole');
r('moon','water','tide');
r('moon','wolf','werewolf');
r('moon','human','werewolf');
r('star','star','galaxy');
r('star','death','supernova');
r('star','fire','supernova');
r('star','dust','nebula');
r('planet','life_force','alien');
r('planet','water','ocean');
r('planet','fire','sun');
r('planet','ring','saturn');
r('asteroid','earth','meteor');
r('asteroid','fire','meteor');
r('comet','earth','meteor');
r('nebula','gravity','star');
r('nebula','time','star');
r('galaxy','galaxy','cosmos');
r('black_hole','light','void');
r('black_hole','star','supernova');
r('supernova','dust','nebula');
r('alien','ship','ufo');
r('alien','human','knowledge');
r('ufo','human','alien');
r('rocket','space_station','satellite');

// === MYTHICAL ===
r('phoenix','water','bird');
r('phoenix','ice','bird');
r('unicorn','fire','phoenix');
r('unicorn','water','mermaid');
r('mermaid','fire','human');
r('ghost','fire','phoenix');
r('ghost','light','angel');
r('ghost','darkness','demon');
r('vampire','sun','ash');
r('vampire','garlic','death');
r('werewolf','silver','human');
r('zombie','fire','ash');
r('zombie','lightning','human');
r('angel','demon','human');
r('fairy','fire','phoenix');
r('fairy','human','magic');
r('wizard','fire','dragon');
r('wizard','water','potion');
r('wizard','earth','golem');
r('golem','fire','lava');
r('golem','water','mud');
r('kraken','lightning','dragon');
r('yeti','fire','human');
r('dragon','water','steam');
r('dragon','ice','lizard');
r('dragon','human','story');
r('dragon','knight','legend');
r('titan','human','god');
r('hydra','fire','dragon');
r('chimera','human','myth');

// === CONCEPTS ===
r('time','fire','ash');
r('time','water','erosion');
r('time','earth','fossil');
r('time','human','wisdom');
r('time','time','infinity');
r('life_force','death','ghost');
r('life_force','fire','phoenix');
r('life_force','water','bacteria');
r('life_force','earth','plant');
r('love','fire','passion');
r('love','water','tears');
r('love','time','wisdom');
r('music','fire','dance');
r('music','water','song');
r('music','electricity','radio');
r('art','fire','passion');
r('art','earth','pottery');
r('art','light','photography');
r('story','fire','legend');
r('story','human','civilization');
r('dream','fire','passion');
r('dream','reality','life_force');
r('knowledge','fire','science');
r('knowledge','water','philosophy');
r('knowledge','earth','geology');
r('knowledge','time','wisdom');
r('philosophy','science','knowledge');
r('magic','fire','alchemy');
r('magic','water','potion');
r('magic','earth','golem');
r('magic','human','wizard');
r('magic','science','alchemy');
r('science','fire','chemistry');
r('science','water','biology');
r('science','earth','geology');
r('science','air','meteorology');
r('war','peace','civilization');
r('money','money','bank');
r('money','human','civilization');
r('luck','human','fortune');
r('chaos','order','life_force');
r('void','light','cosmos');
r('void','energy','big_bang');
r('soul','fire','passion');
r('alchemy','gold','philosopher_stone');
r('alchemy','life_force','elixir');
r('poison','medicine','cure');
r('medicine','plant','herb');

// Extra fun combos
e('glacier',     'Glacier',      '🏔️', 'nature');
e('wildfire',    'Wildfire',     '🔥', 'nature');
e('permafrost',  'Permafrost',   '🥶', 'nature');
e('delta',       'Delta',        '🏞️', 'nature');
e('crater',      'Crater',       '🕳️', 'nature');
e('owl',         'Owl',          '🦉', 'life');
e('web',         'Web',          '🕸️', 'life');
e('silk',        'Silk',         '🧵', 'material');
e('ink',         'Ink',          '🖊️', 'material');
e('bell',        'Bell',         '🔔', 'technology');
e('sail',        'Sail',         '⛵', 'technology');
e('knight',      'Knight',       '⚔️',  'mythical');
e('potion',      'Potion',       '🧪', 'mythical');
e('singularity', 'Singularity',  '🌀', 'concept');
e('astronaut',   'Astronaut',    '👨‍🚀', 'space');
e('eclipse',     'Eclipse',      '🌑', 'space');
e('tide',        'Tide',         '🌊', 'nature');
e('saturn',      'Saturn',       '🪐', 'space');
e('gps',         'GPS',          '📍', 'technology');
e('smartphone',  'Smartphone',   '📱', 'technology');
e('lightsaber',  'Lightsaber',   '⚔️',  'mythical');
e('excalibur',   'Excalibur',    '🗡️', 'mythical');
e('kingdom',     'Kingdom',      '👑', 'concept');
e('god',         'God',          '🙏', 'mythical');
e('legend',      'Legend',       '📜', 'concept');
e('myth',        'Myth',         '📖', 'concept');
e('passion',     'Passion',      '❤️‍🔥', 'concept');
e('tears',       'Tears',        '😢', 'concept');
e('dance',       'Dance',        '💃', 'concept');
e('song',        'Song',         '🎶', 'concept');
e('photography', 'Photography',  '📸', 'concept');
e('chemistry',   'Chemistry',    '⚗️',  'concept');
e('biology',     'Biology',      '🧬', 'concept');
e('geology',     'Geology',      '🪨', 'concept');
e('meteorology', 'Meteorology',  '🌤️', 'concept');
e('bank',        'Bank',         '🏦', 'concept');
e('fortune',     'Fortune',      '🔮', 'concept');
e('big_bang',    'Big Bang',     '💥', 'space');
e('infinity',    'Infinity',     '♾️',  'concept');
e('philosopher_stone','Philosopher Stone','💎','mythical');
e('elixir',      'Elixir',       '🧪', 'mythical');
e('cure',        'Cure',         '💊', 'concept');
e('herb',        'Herb',         '🌿', 'food');
e('sandwich',    'Sandwich',     '🥪', 'food');
e('toast',       'Toast',        '🍞', 'food');
e('latte',       'Latte',        '☕', 'food');
e('steak',       'Steak',        '🥩', 'food');
e('candy',       'Candy',        '🍬', 'food');
e('vinegar',     'Vinegar',      '🫙', 'food');
e('yeast',       'Yeast',        '🍞', 'food');
e('jerky',       'Jerky',        '🥩', 'food');
e('mac_cheese',  'Mac & Cheese', '🧀', 'food');
e('iced_coffee', 'Iced Coffee',  '🧋', 'food');
e('iced_tea',    'Iced Tea',     '🧋', 'food');
e('darkness',    'Darkness',     '🌑', 'concept');
e('night',       'Night',        '🌙', 'concept');
e('garlic',      'Garlic',       '🧄', 'food');
e('ring',        'Ring',         '💍', 'material');
e('picture',     'Picture',      '🖼️', 'concept');
e('animal',      'Animal',       '🐾', 'life');
e('energy',      'Energy',       '⚡', 'energy');

// more bridging combos
r('fire','fire','explosion');
r('air','air','wind');
r('darkness','light','eclipse');
r('night','sun','dawn');
r('night','moon','werewolf');
r('animal','water','fish');
r('animal','air','bird');
r('animal','fire','dragon');
r('animal','earth','insect');
r('spider','thread','web');
r('insect','silk','butterfly');
r('ring','gold','treasure');
r('picture','light','photography');
r('energy','water','wave');
r('energy','earth','earthquake');

e('dawn',       'Dawn',        '🌅', 'concept');
e('treasure',   'Treasure',    '💰', 'concept');
e('thread',     'Thread',      '🧵', 'material');

r('fabric','thread','rope');
r('rope','wood','bridge');
r('glass','sand','lens');

export const RECIPES = recipeMap;

export function combine(a: string, b: string): string | null {
  const key = [a, b].sort().join('+');
  return recipeMap[key] ?? null;
}

export const BASE_ELEMENTS = ['water', 'fire', 'earth', 'air'];
