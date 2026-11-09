# ROMANA ATELIER — Website Guide

Yeh website plain HTML, CSS aur JavaScript mein bani hai. React, npm, database, API key ya build ki zaroorat nahi. Kaam sirf `romana-catalogue` mein hua hai. Website abhi publish nahi ki gayi.

## Website kaise kholein

1. `C:\Users\hasee\OneDrive\Desktop\romana-catalogue` folder kholein.
2. `index.html` par double-click karein. Chrome, Edge ya Firefox mein website khul jayegi.
3. Navigation mein Home, Boutique by Romana, Our Story aur Contact Us dekhein. Product ki tasveer ya naam par click se usi product ki detail khulti hai.
4. Browser mein JavaScript enabled hona chahiye. Internet sirf WhatsApp kholne ke liye chahiye; fonts aur saari tasveerein local hain.

## Files ka maqsad

- `index.html`: header aur viewport hero slider; scroll karne par shared footer nazar aata hai.
- `catalogue.html`: Boutique by Romana; autoplay split hero, chaar independent manual product rows, search, sorting aur Quick View.
- `product.html?id=ivory-bloom`: ID se product detail.
- `about.html`: Our Story. `contact.html`: Contact Us. Purane file names aur product IDs preserve hain.
- `js/data.js`: tamam products, categories, main image paths aur WhatsApp settings.
- `js/app.js`: navigation, rendering, gallery, zoom aur enquiries.
- `css/style.css`: colours, spacing, typography aur responsive layout.
- `images/products/`: product photos aur current illustrated SVG placeholders.
- `images/editorial/`: home hero placeholder aur decorative botanical/divider SVGs.
- `make-assets.cjs`: optional developer helper; sirf original SVG samples dobara banata hai. Isay chalana zaroori nahi. Isay dobara chalane se generated sample SVGs aur HTML shells overwrite hote hain.

## Naya product add karein

Pehle photo `images/products/` mein copy karein. Phir `js/data.js` ko VS Code ya text editor mein kholein. `products: [` ke andar kisi ek entry ko copy karein aur unique `id` / `code` ke saath edit karein. Entries ke darmiyan comma zaroor rakhein.

```js
{
  id: 'olive-lawn',
  code: 'RA-U03',
  name: 'Olive Lawn',
  price: 8500,
  categoryIds: ['unstitched'],
  colour: 'Olive',
  fabric: 'Cotton lawn',
  pieces: 3,
  included: ['Shirt fabric', 'Trouser fabric', 'Dupatta'],
  sizes: [],
  images: ['images/products/olive-lawn.jpg', 'images/products/olive-detail.png'],
  description: 'Yahan asal product ki English description likhein.',
  preview: false,
  featured: true
}
```

Upar ka text sirf editing example hai; actual website ki description English mein likhein. `id` mein chotay English letters, digits aur hyphens use karein. Har ID alag ho. `price` number ho, quotes, comma aur PKR ke baghair. `featured` purana metadata hai; ab Home par products nahi dikhte aur Boutique mein products chaar configured horizontal rows mein aate hain. Stitched sizes ke liye `sizes: ['S', 'M', 'L']`; unstitched ke liye `sizes: []`. Multiple categories ke liye `categoryIds: ['casual-wear', 'ready-to-wear']`. Pehli category card par dikhegi. Product ka link `product.html?id=olive-lawn` hoga.

## Categories add ya edit karein

`js/data.js` ke `categories` array mein `id`, `name`, `note` aur `image` edit karein. Nayi category ke liye ek entry copy karein. Uska unique `id` products ke `categoryIds` mein bhi use karein. Categories ab sirf internal metadata aur card labels/search ke liye hain; main navigation aur visible category filters nahi hain. Purana `catalogue.html?category=unstitched` link bhi Boutique kholta hai aur tamam products dikhata hai.

## JPG / JPEG / PNG / WebP photos lagayein

1. Apni asli photos `images/products/` mein copy karein. File names simple rakhein, misal `sage-front.jpg`.
2. Product ke `images` array mein exact path likhein. Pehli photo main image aur catalogue card hoti hai; baqi thumbnails hain.
3. `.jpg`, `.jpeg`, `.png`, `.webp` sab chalti hain. File name aur extension ka case bilkul match karein, khaas taur par Hostinger par.
4. Product photos ka 3:4 portrait ratio achha dikhta hai; misal 900 × 1200. Photos ko compress karein taake mobile par jaldi khulein.
5. Home aur Boutique slider photos `js/data.js` ke `sliders.home` aur `sliders.boutique` arrays se replace hoti hain. Har slide mein `image`, `alt` aur `caption` hai. Home ke liye wide composition aur Boutique ke liye portrait photo behtar hai. Purani `imagery` aur category photo settings compatibility ke liye rakhi hain.
6. Ghalat ya missing path par local “Image coming soon” fallback aata hai. Agar placeholder ki jagah asal photography use karein to `js/data.js` ke `editorial` aur `sliders` mein placeholder alt text aur captions bhi asal tasveer ke mutabiq update karein.

## Price aur WhatsApp number badlein

Product ki `price: 8500` value edit karein. Currency display PKR mein rahega.

`js/data.js` mein:

```js
whatsapp: { number: '923055040858', display: '+92 305 5040858' }
```

`number` mein country code ho, plus sign aur spaces na hon. `display` dikhne wala number hai. Saare active WhatsApp buttons isi setting se bante hain. JavaScript band honay ka contact fallback har HTML file ke `<noscript>` mein hai; number badlein to usay bhi update karein.

Product enquiry mein naam, code, PKR price, colour aur selected size jata hai. HTTP/HTTPS par product URL bhi jata hai. Local `file://` par computer ka path message mein nahi jata. Customer khud message review karke Send karta hai.

## Hostinger public_html par kya upload karein

Abhi publish nahi kiya gaya. Jab tayyar hon to pehle backup lein. In paanch HTML files ko `public_html` ke seedha andar upload karein aur poore `css`, `js`, `images` aur `fonts` folders saath upload karein. Folder structure bilkul yahi rakhein. `index.html` ko kisi extra `romana-catalogue` subfolder mein na rakhein agar domain ke home par website chahiye.

`README.md`, `make-assets.cjs`, `verify.cjs` aur `QA.md` upload karna zaroori nahi. Koi npm install, build command, server ya database setup nahi chahiye.

## Launch se pehle sample content replace karein

- Saare 48 designs, descriptions, fabrics, included items, sizes, prices aur codes illustrative hain. Unhein verified real catalogue se replace karein.
- Apni authorised product, category, slider aur Our Story photographs lagayein. Current SVGs artwork placeholders hain, asli product photography nahi.
- Real products par data verify karne ke baad `preview: false` karein. Sirf flag badalna real data replace karne ka badal nahi.
- `js/app.js` mein `notice()` ki sample notice, header announcement, slider captions, gallery notes, footer preview text aur Our Story copy ko live catalogue ke mutabiq update karein. Hardcoded placeholder alt text bhi update karein.
- `preview: false` se product cards aur prices ke sample labels hat jate hain; site-wide preview text jaan-boojh kar alag rakha hai taake launch se pehle editorial copy bhi review ho.
- WhatsApp number, mobile menu, product links, gallery, zoom, Quick View, sliders aur search ko apne phone par test karein. Enquiry message ko review karein; test message bhejna zaroori nahi.

Kisi address, email, social profile, review ya business history ka andaza laga kar izafa nahi kiya gaya.

## Naye sliders aur navigation

Main navigation aur footer mein sirf Home, Boutique by Romana, Our Story aur Contact Us hain. Logo Home kholta hai. Mobile par Menu se yahi chaar links milte hain; Escape se menu band hota hai.

Home par header aur viewport hero ke neeche shared footer hai; koi product section nahi. ROMANA WOMEN button Boutique kholta hai. Boutique mein Explore Products button product carousel tak scroll karta hai. Dono hero sliders page khultay hi taqreeban har 5 second par crossfade se badalte hain. Hero par koi visible arrows, dots, slide counters ya Pause/Play button nahi. Keyboard se Tab karne par Pause slideshow / Resume slideshow control nazar aata hai; Space/Enter se motion rok/suru karein. Focus control se bahar jane ke baad bhi manual pause yaad rehta hai. Hero swipe/keyboard se manual slide navigation nahi karta. Mouse hover, keyboard focus, hidden tab aur open modal par autoplay rukta hai. Reduced-motion setting par autoplay aur decorative animation band hain.

Slide change karne ke liye js/data.js ke sliders.home ya sliders.boutique mein entry copy karein:

```js
{ image: 'images/editorial/new-look.jpg', alt: 'Describe the actual photo in English', position: '65% 45%', caption: 'Your short English caption' }
```

Photos replace karte waqt caption aur alt bhi edit karein. Placeholder ko actual photo na kahein. Ek slide ya reduced-motion setting par autoplay band rehta hai.

## Quick View

Har card ka Quick View button phone par bhi hamesha nazar aata hai. Yeh popup image, naam, preview price, description, size/colour, View Full Details aur Shop WhatsApp deta hai. Size badalne se message update hota hai. Close ya Escape se popup band hota hai aur focus usi card ke button par wapas aata hai. Tab/Shift+Tab focus popup mein rehta hai; background scroll lock hoti hai. Card ki main image aur naam ab bhi full detail page kholte hain.

## Checks dobara chalana (optional developer use)

Node installed ho to project folder mein `node verify.cjs` chalayein. Website kholne ke liye Node zaroori nahi. Yeh isolated DOM harness hai: behaviour aur paths check karta hai, real browser rendering ya phone layout nahi. Browser test ki limitations QA.md mein hain.

## Hero timing aur focal positions

`js/data.js` mein `sliderSettings: { intervalMs: 5000 }` timing control karta hai. 5000 milliseconds = 5 seconds. Website minimum 2000 ms rakhti hai. Ek hi timer har hero ke liye rehta hai; product carousel ka timer nahi. Crossfade duration `css/style.css` mein `.slider-panel` ki transition hai.

Har slide ka `position` CSS object-position hai: `50% 50%` center aur `65% 45%` focal point ko thora right/up karta hai. Hero mein wide, high-resolution photo aur Boutique mein portrait composition test karein. Image, alt aur placeholder caption saath update karein. Our Story ki chaar aur Contact ki ek editorial image ab `js/data.js` ke `editorial` object mein hain. `image`, `alt`, `caption` aur `position` saath update karein.

## Chaar independent manual product rows

Boutique has three independent manual rows: NEW ARRIVAL, OUR BEST, SALE. Ivory arrows sit inside each image band; scrollbars and position labels are hidden. Swipe, trackpad, Left/Right, Home and End remain supported. Arrows disable at boundaries and hide when all items fit. Search applies across all three rows; sorting applies within each row. Quick View and product links remain available.

## Social URLs set karein

`js/data.js` mein sirf yahan verified accounts ke full HTTPS URLs add karein:

```js
social: { instagram: '', facebook: '', tiktok: '' }
```

Khaali string par icon non-interactive rehta hai aur accessible description “Link coming soon” hoti hai. URL add karte hi labelled external link ban jata hai. Koi fake account ya # link nahi hai.

## Fonts, design tokens aur license

Display serif Cormorant Garamond aur signature font Allura locally bundled hain. Dono SIL Open Font License 1.1 ke tehat hain; `fonts/OFL-CormorantGaramond.txt` aur `fonts/OFL-Allura.txt` saath rakhein. Cormorant ko reference ka exact font kehne ka koi claim nahi. Source: https://github.com/google/fonts/tree/main/ofl/cormorantgaramond aur https://github.com/google/fonts/tree/main/ofl/allura

`css/style.css` ab ek consolidated stylesheet hai. Shuru ke `:root` mein ivory, cream, walnut, gold, fonts aur spacing tokens hain. Major headings aur wordmark display serif; body/controls readable system sans; script sirf short accents hai. Fonts load na hon to Georgia aur local script/cursive fallbacks hain. Koi remote font request ya required build step nahi.

Font replace karne ke liye apna licensed WOFF2/TTF `fonts/` mein rakhein, license saath dein, aur stylesheet ke `@font-face` path/format update karein. Hostinger par poora fonts folder aur licenses upload karein.

## Editorial tasveerein replace karein

`js/data.js` mein `editorial.storyHero`, `storyEveryday`, `storyTradition`, `storyOccasion` aur `contact` central entries hain. Apni real photo ka path, English alt text, caption aur focal position dein. Home/Boutique slides `sliders` arrays mein hain; products ki gallery `products[].images` mein hai. Decorative `divider.svg` aur `botanical.svg` sirf ornaments hain, photography nahi.

Home hero mein ab teen user-supplied AI-generated campaign visuals hain; yeh actual products ki photography nahi. Boutique, Our Story, Contact aur product inventory ke existing placeholders unchanged hain.

## Row titles aur product assignments edit karein

`js/data.js` ke `catalogueRows` array mein teen rows hain:

- NEW ARRIVAL
- OUR BEST
- SALE

Har row ka `id` unique rakhein, `title` apni pasand ka English heading hai, aur `productIds` mein products ke exact IDs hain. Misal:

```js
{ id: 'new-arrival', title: 'NEW ARRIVAL', productIds: ['ivory-bloom', 'rose-day'] }
```

Title ya assignment badalne ke liye sirf yeh entry edit karein. Har product ko ek hi row mein assign karein; duplicate assignments aur unknown IDs ignore hote hain. Shuru mein har row mein 16 aur total 48 unique entries hain. Har row ko grow karne ke liye naye unique product IDs uske array mein add karein. Kam products par row phir bhi chalti hai; empty row par short message aata hai.

Naya product add karte waqt: pehle `products` mein complete entry aur asli photo path add karein, phir uska ID kisi ek row ke `productIds` mein likhein. Sirf product entry add karne se woh row mein automatically nahi aata. Uska detail URL phir bhi kaam karta hai.

## Added preview samples ko real products se replace karein

Original 12 preview products unchanged hain. Chaar rows bharne ke liye 36 aur distinct sample concepts add hue hain. Naye IDs `preview-everyday-01`, `preview-ready-01`, `preview-occasion-01`, `preview-bridal-01` jaise hain; codes `RA-SAMPLE-...` se shuru hote hain. Inki prices, fabrics, sizes aur included items illustrative hain, confirmed stock nahi. Inke liye honest `images/products/placeholder.svg` use hota hai.

Verified real product lane ke liye sample entry ka naam, code, fabric, colour, sizes, price, description aur images update karein; phir `preview: false` karein. ID same rakh sakte hain taake links aur assignments preserve hon. Agar ID change karein to row ke `productIds` mein bhi update karein. Global preview notices/tab captions ko launch se pehle review karein. Sirf preview flag badalna real stock verify karna nahi hai.


## Home campaign images

Home ki teen AI campaign images `images/hero/` mein optimized JPEGs hain. Har image ke `-desktop.jpg` aur `-mobile.jpg` variants hain. Desktop original 1672 × 941 detail retain karta hai; mobile 740 × 941 portrait crop hai. Files original PNGs ko modify kiye baghair banayi gayi hain.

`js/data.js` ke `sliders.home` mein `image`, `mobileImage`, `position` aur `mobilePosition` edit karein. 760px ya kam width par picture source mobile crop choose karta hai. Caption aur alt inhein AI-generated editorial visuals identify karte hain. Product entries ya Boutique slides mein yeh images add nahi ki gayi.

Home-only mobile CSS text ko neeche rakhti hai aur bottom overlay use karti hai taake faces upar nazar aayein aur ivory text readable rahe. Slideshow ka 5000 ms interval, crossfade, keyboard-only pause aur reduced-motion behaviour wahi hai. Image replace karte waqt desktop aur mobile dono crops check karein.

SALE is an editorial sample selection, with no claimed discounts or previous prices. Keep preview:true until verified real inventory replaces the sample data.

Public presentation omits development/sample notices and editorial captions; js/data.js retains preview flags and original content for pre-launch review. This is still unfinished inventory internally. The announcement advertises 15% off orders above PKR 5,000; displayed catalogue prices are unchanged and orders remain on WhatsApp.
