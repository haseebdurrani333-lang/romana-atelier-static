/* ROMANA ATELIER — owner-editable catalogue.
 * Add photos to images/products/, then copy one product entry below.
 * JPG, JPEG, PNG, WebP and SVG paths work. Use relative paths, including exact
 * letter case. IDs must be unique. Category IDs must match categories below.
 * All current products, specifications and prices are illustrative previews.
 * Set preview:false only after replacing and verifying the real product data.
 * images is an array: add as many gallery photographs as needed.
 */
window.ROMANA = {
  brand: 'ROMANA ATELIER',
  whatsapp: { number: '923055040858', display: '+92 305 5040858' },
  imagery: { hero: 'images/editorial/hero.svg', bridal: 'images/products/bridal-rose.svg', fallback: 'images/products/placeholder.svg' },
  // Social URLs: leave blank for non-interactive coming-soon icons.
  social: { instagram: '', facebook: '', tiktok: '' },
  // Editorial artwork is placeholder imagery. Replace image, alt and caption
  // together; position controls each photograph's crop without colour filters.
  editorial: {
    storyHero: { image:'images/products/ivory-bloom.svg', alt:'Ivory ensemble illustration — placeholder', caption:'Illustrated placeholder · The Romana perspective', position:'center 43%' },
    storyEveryday: { image:'images/products/sage-muse.svg', alt:'Sage outfit illustration — placeholder', caption:'Illustrated placeholder · A study in quiet colour', position:'center 40%' },
    storyTradition: { image:'images/products/noor-gold.svg', alt:'Antique gold outfit illustration — placeholder', caption:'Illustrated placeholder · Form and detail', position:'center 45%' },
    storyOccasion: { image:'images/products/bridal-rose.svg', alt:'Rose bridal outfit illustration — placeholder', caption:'Illustrated placeholder · A romantic occasion', position:'center 45%' },
    contact: { image:'images/products/pearl-line.svg', alt:'Pearl outfit illustration — placeholder', caption:'Illustrated placeholder · A conversation about style', position:'center 42%' }
  },
  sliderSettings: { intervalMs: 5000 },
  // Hero sliders autoplay unless paused or reduced motion is requested.
  // position is a CSS object-position value controlling the image focal point.
  // Add/remove entries freely; JPG, JPEG, PNG, WebP and SVG are supported.
  sliders: {
    // AI-generated editorial campaign visuals; these are not inventory photos.
    home: [
      { image:'images/hero/champagne-taupe-ivory-courtyard-desktop.jpg', mobileImage:'images/hero/champagne-taupe-ivory-courtyard-mobile.jpg', alt:'AI-generated campaign: a model in a champagne taupe ensemble in an ivory courtyard', position:'65% 0%', mobilePosition:'58% 0%', caption:'AI-generated campaign visual · Not a product photograph' },
      { image:'images/hero/ivory-elegance-sunlit-haveli-desktop.jpg', mobileImage:'images/hero/ivory-elegance-sunlit-haveli-mobile.jpg', alt:'AI-generated campaign: a model in an ivory ensemble beside a sunlit haveli doorway', position:'64% 0%', mobilePosition:'48% 0%', caption:'AI-generated campaign visual · Not a product photograph' },
      { image:'images/hero/olive-silk-haveli-campaign-desktop.jpg', mobileImage:'images/hero/olive-silk-haveli-campaign-mobile.jpg', alt:'AI-generated campaign: a seated model in an olive ensemble beside an arched window', position:'71% 0%', mobilePosition:'48% 0%', caption:'AI-generated campaign visual · Not a product photograph' }
    ],
    boutique: [
      { image:'images/products/ivory-bloom.svg', alt:'Ivory outfit illustration', caption:'Illustrated placeholder · Soft palettes' },
      { image:'images/products/noor-gold.svg', alt:'Antique gold outfit illustration', caption:'Illustrated placeholder · Occasion dressing' },
      { image:'images/products/plum-poetry.svg', alt:'Muted plum outfit illustration', caption:'Illustrated placeholder · Considered detail' }
    ]
  },
  categories: [
    { id: 'unstitched', name: 'Unstitched', note: 'A canvas for your own expression.', image: 'images/products/ivory-bloom.svg' },
    { id: 'ready-to-wear', name: 'Ready to Wear', note: 'Considered silhouettes, effortlessly worn.', image: 'images/products/sage-muse.svg' },
    { id: 'casual-wear', name: 'Casual Wear', note: 'A softer rhythm for the everyday.', image: 'images/products/rose-day.svg' },
    { id: 'luxury-pret', name: 'Luxury Pret', note: 'Quiet detail. A lasting impression.', image: 'images/products/noor-gold.svg' },
    { id: 'formal-party', name: 'Formal & Party Wear', note: 'For evenings worth dressing for.', image: 'images/products/midnight-mehfil.svg' },
    { id: 'bridal', name: 'Bridal Collection', note: 'An occasion like no other.', image: 'images/products/bridal-rose.svg' }
  ],
  // Edit row assignments through productIds; assign each ID once.
  // SALE selections remain samples; no discount is claimed.
  catalogueRows: [
  {
    "id": "new-arrival",
    "title": "NEW ARRIVAL",
    "productIds": [
      "ivory-bloom",
      "saffron-thread",
      "rose-day",
      "blue-hour",
      "preview-everyday-01",
      "preview-everyday-02",
      "preview-everyday-03",
      "preview-everyday-04",
      "preview-everyday-05",
      "preview-everyday-06",
      "preview-everyday-07",
      "preview-everyday-08",
      "preview-ready-07",
      "preview-ready-08",
      "preview-ready-09",
      "preview-ready-10"
    ]
  },
  {
    "id": "our-best",
    "title": "OUR BEST",
    "productIds": [
      "sage-muse",
      "pearl-line",
      "preview-ready-01",
      "preview-ready-02",
      "preview-ready-03",
      "preview-ready-04",
      "preview-ready-05",
      "preview-ready-06",
      "noor-gold",
      "plum-poetry",
      "midnight-mehfil",
      "gul-evening",
      "preview-occasion-01",
      "preview-occasion-02",
      "preview-occasion-03",
      "preview-occasion-04"
    ]
  },
  {
    "id": "sale",
    "title": "SALE",
    "productIds": [
      "preview-occasion-05",
      "preview-occasion-06",
      "preview-occasion-07",
      "preview-occasion-08",
      "bridal-rose",
      "ivory-vow",
      "preview-bridal-01",
      "preview-bridal-02",
      "preview-bridal-03",
      "preview-bridal-04",
      "preview-bridal-05",
      "preview-bridal-06",
      "preview-bridal-07",
      "preview-bridal-08",
      "preview-bridal-09",
      "preview-bridal-10"
    ]
  }
],
  products: [
    { id:'ivory-bloom', code:'RA-U01', name:'Ivory Bloom', price:6850, categoryIds:['unstitched'], colour:'Warm ivory', fabric:'Lawn with embroidered organza accents', pieces:3, included:['Shirt fabric','Trouser fabric','Printed dupatta'], sizes:[], images:['images/products/ivory-bloom.svg','images/products/detail-ivory.svg'], description:'A soft ivory palette with a delicate botanical mood. Unstitched fabric lets you shape the silhouette to your preference.', preview:true, featured:true },
    { id:'saffron-thread', code:'RA-U02', name:'Saffron Thread', price:7450, categoryIds:['unstitched'], colour:'Muted saffron', fabric:'Cotton with voile dupatta', pieces:3, included:['Shirt fabric','Trouser fabric','Voile dupatta'], sizes:[], images:['images/products/saffron-thread.svg'], description:'Warm saffron tones and a restrained patterned finish, imagined for a graceful three-piece ensemble.', preview:true },
    { id:'sage-muse', code:'RA-R01', name:'Sage Muse', price:8950, categoryIds:['ready-to-wear'], colour:'Soft sage', fabric:'Cotton silk blend', pieces:2, included:['Stitched shirt','Straight trousers'], sizes:['XS','S','M','L','XL'], images:['images/products/sage-muse.svg','images/products/detail-sage.svg'], description:'An easy, elongated silhouette in soft sage, balanced with understated detailing and straight trousers.', preview:true, featured:true },
    { id:'pearl-line', code:'RA-R02', name:'Pearl Line', price:9250, categoryIds:['ready-to-wear'], colour:'Pearl cream', fabric:'Textured cotton', pieces:2, included:['Stitched shirt','Tapered trousers'], sizes:['S','M','L','XL'], images:['images/products/pearl-line.svg'], description:'Pearl tones and clean lines bring a gentle sense of occasion to an everyday silhouette.', preview:true },
    { id:'rose-day', code:'RA-C01', name:'Rose Day', price:4950, categoryIds:['casual-wear','ready-to-wear'], colour:'Dusty rose', fabric:'Breathable cotton', pieces:2, included:['Relaxed kurta','Cotton trousers'], sizes:['S','M','L','XL'], images:['images/products/rose-day.svg'], description:'A relaxed cotton pairing in dusty rose, imagined for slow mornings and everyday plans.', preview:true },
    { id:'blue-hour', code:'RA-C02', name:'Blue Hour', price:5450, categoryIds:['casual-wear'], colour:'Powder blue', fabric:'Cotton lawn', pieces:2, included:['Stitched kurta','Straight trousers'], sizes:['XS','S','M','L'], images:['images/products/blue-hour.svg'], description:'A cool blue palette with simple finishing and an easy silhouette for everyday dressing.', preview:true },
    { id:'noor-gold', code:'RA-L01', name:'Noor Gold', price:18500, categoryIds:['luxury-pret'], colour:'Antique gold', fabric:'Jacquard with organza dupatta', pieces:3, included:['Embellished shirt','Trousers','Organza dupatta'], sizes:['S','M','L'], images:['images/products/noor-gold.svg','images/products/detail-gold.svg'], description:'Antique gold and tonal ornamental detailing create a luminous, quietly expressive ensemble.', preview:true, featured:true },
    { id:'plum-poetry', code:'RA-L02', name:'Plum Poetry', price:21500, categoryIds:['luxury-pret'], colour:'Muted plum', fabric:'Raw silk blend', pieces:3, included:['Detailed shirt','Trousers','Sheer dupatta'], sizes:['S','M','L','XL'], images:['images/products/plum-poetry.svg'], description:'A rich plum composition with decorative borders and a fluid dupatta for a refined evening mood.', preview:true },
    { id:'midnight-mehfil', code:'RA-F01', name:'Midnight Mehfil', price:28500, categoryIds:['formal-party'], colour:'Midnight charcoal', fabric:'Chiffon over silk blend lining', pieces:3, included:['Embellished shirt','Lined trousers','Chiffon dupatta'], sizes:['S','M','L'], images:['images/products/midnight-mehfil.svg'], description:'A dramatic charcoal palette softened by antique gold details and a flowing sheer layer.', preview:true, featured:true },
    { id:'gul-evening', code:'RA-F02', name:'Gul Evening', price:32500, categoryIds:['formal-party'], colour:'Deep rose', fabric:'Organza with cotton silk lining', pieces:3, included:['Lined shirt','Trousers','Organza dupatta'], sizes:['S','M','L','XL'], images:['images/products/gul-evening.svg'], description:'Deep rose hues meet ornate accents in an occasion ensemble with a soft, layered finish.', preview:true },
    { id:'bridal-rose', code:'RA-B01', name:'The Rose Heirloom', price:145000, categoryIds:['bridal'], colour:'Antique rose', fabric:'Net and raw silk blend', pieces:3, included:['Embellished bridal shirt','Lehenga','Net dupatta'], sizes:['Made to measure'], images:['images/products/bridal-rose.svg','images/products/detail-rose.svg'], description:'An illustrative bridal composition in antique rose, with a sweeping silhouette and intricate ornamental accents. Enquire to discuss sizing and details.', preview:true },
    { id:'ivory-vow', code:'RA-B02', name:'The Ivory Vow', price:165000, categoryIds:['bridal'], colour:'Ivory gold', fabric:'Organza and raw silk blend', pieces:3, included:['Embellished long shirt','Lehenga','Organza dupatta'], sizes:['Made to measure'], images:['images/products/ivory-vow.svg'], description:'Ivory and gold come together in a layered bridal silhouette, imagined with a delicate border and a softly draped dupatta.', preview:true },
    // Added preview concepts only: replace with verified products and photography.
    {"id":"preview-everyday-01","code":"RA-SAMPLE-EVERYDAY-01","name":"Olive Morning","price":5200,"categoryIds":["casual-wear"],"colour":"Olive","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Olive Morning is an illustrative everyday wardrobe concept in olive. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-02","code":"RA-SAMPLE-EVERYDAY-02","name":"Sandstone Ease","price":5650,"categoryIds":["casual-wear"],"colour":"Sand","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Sandstone Ease is an illustrative everyday wardrobe concept in sand. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-03","code":"RA-SAMPLE-EVERYDAY-03","name":"Lilac Sunday","price":6100,"categoryIds":["casual-wear"],"colour":"Lilac","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Lilac Sunday is an illustrative everyday wardrobe concept in lilac. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-04","code":"RA-SAMPLE-EVERYDAY-04","name":"Mint Reverie","price":6550,"categoryIds":["casual-wear"],"colour":"Mint","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Mint Reverie is an illustrative everyday wardrobe concept in mint. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-05","code":"RA-SAMPLE-EVERYDAY-05","name":"Coral Light","price":7000,"categoryIds":["casual-wear"],"colour":"Coral","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Coral Light is an illustrative everyday wardrobe concept in coral. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-06","code":"RA-SAMPLE-EVERYDAY-06","name":"Amber Afternoon","price":7450,"categoryIds":["casual-wear"],"colour":"Amber","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Amber Afternoon is an illustrative everyday wardrobe concept in amber. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-07","code":"RA-SAMPLE-EVERYDAY-07","name":"Cloud Cotton","price":7900,"categoryIds":["casual-wear"],"colour":"Cloud white","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Cloud Cotton is an illustrative everyday wardrobe concept in cloud white. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-everyday-08","code":"RA-SAMPLE-EVERYDAY-08","name":"Cedar Day","price":8350,"categoryIds":["casual-wear"],"colour":"Cedar green","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Cedar Day is an illustrative everyday wardrobe concept in cedar green. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-01","code":"RA-SAMPLE-READY-01","name":"Willow Line","price":9200,"categoryIds":["ready-to-wear"],"colour":"Willow green","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Willow Line is an illustrative everyday wardrobe concept in willow green. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-02","code":"RA-SAMPLE-READY-02","name":"Blush Silhouette","price":9650,"categoryIds":["ready-to-wear"],"colour":"Blush","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Blush Silhouette is an illustrative everyday wardrobe concept in blush. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-03","code":"RA-SAMPLE-READY-03","name":"Indigo Muse","price":10100,"categoryIds":["ready-to-wear"],"colour":"Indigo","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Indigo Muse is an illustrative everyday wardrobe concept in indigo. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-04","code":"RA-SAMPLE-READY-04","name":"Almond Grace","price":10550,"categoryIds":["ready-to-wear"],"colour":"Almond","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Almond Grace is an illustrative everyday wardrobe concept in almond. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-05","code":"RA-SAMPLE-READY-05","name":"Dove Ensemble","price":11000,"categoryIds":["ready-to-wear"],"colour":"Dove grey","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Dove Ensemble is an illustrative everyday wardrobe concept in dove grey. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-06","code":"RA-SAMPLE-READY-06","name":"Jade Horizon","price":11450,"categoryIds":["ready-to-wear"],"colour":"Jade","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Jade Horizon is an illustrative everyday wardrobe concept in jade. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-07","code":"RA-SAMPLE-READY-07","name":"Clay Rhythm","price":11900,"categoryIds":["ready-to-wear"],"colour":"Clay","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Clay Rhythm is an illustrative everyday wardrobe concept in clay. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-08","code":"RA-SAMPLE-READY-08","name":"Lavender Form","price":12350,"categoryIds":["ready-to-wear"],"colour":"Lavender","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Lavender Form is an illustrative everyday wardrobe concept in lavender. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-09","code":"RA-SAMPLE-READY-09","name":"Celadon Note","price":12800,"categoryIds":["ready-to-wear"],"colour":"Celadon","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Celadon Note is an illustrative everyday wardrobe concept in celadon. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-ready-10","code":"RA-SAMPLE-READY-10","name":"Honey Drape","price":13250,"categoryIds":["ready-to-wear"],"colour":"Honey","fabric":"Sample concept: cotton blend","pieces":2,"included":["Sample shirt","Sample trousers"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Honey Drape is an illustrative everyday wardrobe concept in honey. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-01","code":"RA-SAMPLE-OCCASION-01","name":"Emerald Evening","price":24500,"categoryIds":["formal-party"],"colour":"Emerald","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Emerald Evening is an illustrative occasion concept in emerald. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-02","code":"RA-SAMPLE-OCCASION-02","name":"Mulberry Glow","price":25500,"categoryIds":["formal-party"],"colour":"Mulberry","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Mulberry Glow is an illustrative occasion concept in mulberry. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-03","code":"RA-SAMPLE-OCCASION-03","name":"Champagne Detail","price":26500,"categoryIds":["formal-party"],"colour":"Champagne","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Champagne Detail is an illustrative occasion concept in champagne. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-04","code":"RA-SAMPLE-OCCASION-04","name":"Sapphire Gathering","price":27500,"categoryIds":["formal-party"],"colour":"Sapphire","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Sapphire Gathering is an illustrative occasion concept in sapphire. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-05","code":"RA-SAMPLE-OCCASION-05","name":"Copper Twilight","price":28500,"categoryIds":["formal-party"],"colour":"Copper","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Copper Twilight is an illustrative occasion concept in copper. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-06","code":"RA-SAMPLE-OCCASION-06","name":"Garnet Moment","price":29500,"categoryIds":["formal-party"],"colour":"Garnet","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Garnet Moment is an illustrative occasion concept in garnet. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-07","code":"RA-SAMPLE-OCCASION-07","name":"Silver Dusk","price":30500,"categoryIds":["formal-party"],"colour":"Silver","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Silver Dusk is an illustrative occasion concept in silver. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-occasion-08","code":"RA-SAMPLE-OCCASION-08","name":"Aubergine Affair","price":31500,"categoryIds":["formal-party"],"colour":"Aubergine","fabric":"Sample concept: organza with lining","pieces":3,"included":["Sample shirt","Sample trousers","Sample dupatta"],"sizes":["S","M","L","XL"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Aubergine Affair is an illustrative occasion concept in aubergine. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-01","code":"RA-SAMPLE-BRIDAL-01","name":"Rosewater Vow","price":125000,"categoryIds":["bridal"],"colour":"Rosewater pink","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Rosewater Vow is an illustrative bridal concept in rosewater pink. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-02","code":"RA-SAMPLE-BRIDAL-02","name":"Moonlit Promise","price":127500,"categoryIds":["bridal"],"colour":"Moonlight ivory","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Moonlit Promise is an illustrative bridal concept in moonlight ivory. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-03","code":"RA-SAMPLE-BRIDAL-03","name":"Crimson Ceremony","price":130000,"categoryIds":["bridal"],"colour":"Crimson","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Crimson Ceremony is an illustrative bridal concept in crimson. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-04","code":"RA-SAMPLE-BRIDAL-04","name":"Marigold Union","price":132500,"categoryIds":["bridal"],"colour":"Marigold","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Marigold Union is an illustrative bridal concept in marigold. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-05","code":"RA-SAMPLE-BRIDAL-05","name":"Pearl Reverie","price":135000,"categoryIds":["bridal"],"colour":"Pearl","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Pearl Reverie is an illustrative bridal concept in pearl. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-06","code":"RA-SAMPLE-BRIDAL-06","name":"Blush Chapter","price":137500,"categoryIds":["bridal"],"colour":"Blush","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Blush Chapter is an illustrative bridal concept in blush. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-07","code":"RA-SAMPLE-BRIDAL-07","name":"Opal Celebration","price":140000,"categoryIds":["bridal"],"colour":"Opal cream","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Opal Celebration is an illustrative bridal concept in opal cream. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-08","code":"RA-SAMPLE-BRIDAL-08","name":"Ruby Prelude","price":142500,"categoryIds":["bridal"],"colour":"Ruby","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Ruby Prelude is an illustrative bridal concept in ruby. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-09","code":"RA-SAMPLE-BRIDAL-09","name":"Golden Petal","price":145000,"categoryIds":["bridal"],"colour":"Muted gold","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Golden Petal is an illustrative bridal concept in muted gold. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true},
    {"id":"preview-bridal-10","code":"RA-SAMPLE-BRIDAL-10","name":"Mauve Remembrance","price":147500,"categoryIds":["bridal"],"colour":"Mauve","fabric":"Sample concept: net and silk blend","pieces":3,"included":["Sample bridal shirt","Sample lehenga","Sample dupatta"],"sizes":["Made to measure"],"images":["images/products/placeholder.svg"],"description":"Preview sample only — Mauve Remembrance is an illustrative bridal concept in mauve. Product details, sizing and PKR price are examples, not confirmed stock. Actual photography is not yet available.","preview":true}
  ]
};
