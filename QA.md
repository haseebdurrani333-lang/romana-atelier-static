# Targeted update verification

Work is confined to romana-catalogue. No deployment or WhatsApp messages were sent.

## Passed automated checks

- `node --check js/app.js` and `node --check js/data.js`.
- `node verify.cjs`: 1,849 assertions in an isolated DOM/timer/dimension harness.
- Original 12 entries are unchanged, verified by serialized SHA-256: `2fd5d33a2e5cb137b382c634f1281a7680400dded2869a1d56c616e34e7bc060`.
- Inventory is now 48 unique product IDs/names/codes, assigned once each to four explicitly configured rows with 12 entries per row. All entries are preview samples. The 36 added concepts use honest missing-photography placeholders and descriptions declaring unconfirmed stock/pricing.
- Both hero sliders start automatically at the preserved 5,000 ms interval. Existing 0.85-second crossfade styling remains. No arrows, dots, counters or permanent motion buttons are generated.
- Keyboard-focus-only pause/resume control is available for both heroes. Explicit pause persists after focus leaves. Hidden tabs, hover, focus, reduced motion and modals stop timers; resume and duplicate-timer checks pass.
- Home CTA and Boutique heading/Explore Products destination remain intact.
- Each row has independent manual controls and native horizontal overflow for touch/trackpad scrolling, with no clones or product autoplay. Simulated next/previous/Home/End boundaries, independent positions, and boundary calculations at widths 360/390/768/1024/1440 pass.
- Search hides unmatched rows and shows an overall empty state; reset restores all four rows. Price sorting is verified independently within every row, with scroll positions reset.
- Zero/one-product rows, 15-product configuration, invalid IDs and duplicate assignments are handled gracefully.
- Quick View content, size selection, Tab/Shift+Tab wrapping, cancel/focus restoration and scroll locking pass for all 48 entries under file and HTTPS contexts.
- Image/name links, detail pages, galleries, zoom and exact Shop WhatsApp labels pass for all 48 entries.
- WhatsApp URLs use 923055040858 and include the correct name, code, price, colour and selected size. Local paths are excluded; HTTPS product URLs are included.
- Main navigation, mobile menu logic, footer, product/editorial images and local CSS asset paths pass.

## Browser testing limitation

Browser discovery returned `The browser access host is unavailable`. Actual browser screenshots, physical swiping, native focus behaviour and page-wide horizontal overflow at mobile/desktop sizes could not be tested. Simulated dimension checks validate carousel calculations only; they are not visual verification.

Still inspect 360, 390, 768, 1024 and 1440 px, plus short landscape, in a real browser. Verify hero autoplay with no visible navigation, keyboard-only pause control, independent row swipe/boundaries after orientation changes, Quick View/zoom, readable text and unobstructed controls.

Preview by opening index.html directly. Use Ctrl+F5 if already open. Replace sample entries and photography before launch; see README.md for row configuration and replacement instructions.

## Colour-only brand palette update

Only css/style.css changed for website presentation. Layout, typography, content, images and JavaScript were preserved. The soft ivory gradient is used by the Boutique surface/announcement, the olive-charcoal gradient by every shared footer, and the taupe gradient sparingly by the existing large Story pull quote. Photographs remain untouched.

Colours, translucent photo overlays, footer roles and focus colours are centrally defined. Small text on light surfaces uses dark secondary ink rather than pale taupe. Primary buttons use #292920 / #FAF8F3 and hover #38382D; footer links hover #DFD2BF.

Numeric contrast checks passed across all supplied gradient stops: primary text 11.11:1 minimum, secondary text 5.80:1, footer main 7.22:1, footer secondary 5.80:1, footer hover 5.15:1, primary buttons 11.17:1. Large taupe pull quote (29–34 px) has at least 3.41:1; decorative accent icons on ivory 4.05:1. Focus uses dark ink on light surfaces and ivory on dark/hero surfaces. All CSS colour variables resolve; no old literal colours remain outside the token block. The existing 1,849 functional assertions still pass.

Visual desktop/mobile review across Home, Boutique, Story, Contact, full products, Quick View and footer could not be completed because the browser access host is unavailable. Numeric checks do not replace photographic/visual inspection. No deployment performed.

## Home campaign image update

The three supplied PNGs were encoded as quality-90 JPEGs under images/hero/, without colour filters or changes to the originals. Desktop files retain 1672 × 941 dimensions; mobile portrait variants are 740 × 941. Desktop bytes total 797,165 versus 6,762,332 bytes for the original PNGs (about 88% less). Mobile files are 145,953–168,847 bytes each.

Only Home slide data and Home-specific responsive art direction changed. The shared slider gained an optional picture branch used only by these Home entries. Boutique and all product imagery are unchanged; no inventory was added. Captions/alt text explicitly identify AI-generated campaign imagery.

All three mobile crop files were visually inspected: each retains the face and head. Picture source routing, per-slide focal positions, all three automatic slide states and loop wrap were tested in the harness. The 5-second interval, 0.85-second crossfade, no visible navigation, keyboard-only pause and reduced-motion checks pass. Total: 1,870 automated assertions, plus JavaScript syntax checks.

Browser discovery again reported that the browser access host is unavailable. Actual Home desktop/mobile rendering, overlay contrast against every crop, orientation changes and native responsive image selection could not be verified in a browser. Asset crop inspection is not browser layout verification. No deployment performed.

## Targeted refinements ? 2026-11-09

Supersedes earlier four-row checks: exactly NEW ARRIVAL, OUR BEST, SALE, with 16 unique entries each and all 48 products preserved. No discounts introduced. Boutique notice and row position labels removed. Search includes a clear action. Arrows are measured against the image band, hide for fitting rows and retain independent keyboard/native scrolling. Hero uses dynamic viewport height minus ResizeObserver-measured complete header height, with natural content expansion. Footer spacing reduced; Contact WhatsApp restyled.

Validation: node syntax checks pass; node verify.cjs passes 1,858 assertions (DOM/timer/simulated dimension harness). Covers search/clear, sorting, row boundaries/independence, Quick View, product details, WhatsApp destinations/messages, original product preservation, and hero autoplay. Browser host reported unavailable: rendered desktop/mobile/landscape proportions, visual overflow and real touch swipe remain unverified. No deployment performed.

## Announcement, navigation and public copy ? 2026-11-09

Replaced the announcement with the exact offer: Enjoy 15% Off on Orders Above PKR 5,000. No price mutation, checkout, expiry, code or added condition. Two equal decorative groups provide a continuous 75-second linear loop; hover/keyboard focus pause it. Reduced motion replaces the track with wrapping static text. Only the region label exposes the offer to screen readers. Navigation uses centre-origin underlines and 225ms colour/transform transitions; the active page retains a thicker underline. Existing focus outlines and reduced-motion rules remain.

Removed public notice nodes, sample badges, pricing caveats, gallery guidance and editorial captions, including the Home campaign caption. Internal product objects, preview flags, original descriptions/captions and alt text remain unchanged. Rendering omits development-only sentences/prefixes while retaining concept language and availability guidance. No stock verification claims added.

node --check js/app.js and node verify.cjs pass (1,886 assertions). Existing autoplay, independent carousels, search/sort, Quick View, product details and WhatsApp tests pass. Added exact-offer, accessible duplication, public-notice/wrapper removal and style-contract checks. Browser inventory again reported: browser access host is unavailable. Actual desktop/mobile animation, hover/focus appearance, reduced-motion rendering and visual layout remain unverified. No deployment.
