# PAM photo gallery

The `/gallery` page displays 60 photos: 30 from each of these public shared albums supplied by PAM:

- [PAM Network Launch](https://photos.app.goo.gl/xWe4poxfKjtBpAgX8)
- [PAM Network](https://photos.app.goo.gl/zQwh6Dd9n4dHL4so7)

## How images are served

`src/app/lib/gallery-albums.ts` contains direct `lh3.googleusercontent.com/pw/` image keys extracted from the shared album/photo pages. `googlePhotoUrl()` appends Google's width parameter for thumbnails and larger views. The album share links are retained as links to the originals; they are not used as image `src` values because they return web pages, not images.

`ExternalPhoto` loads these URLs directly in the visitor's browser with native lazy loading, rather than sending them through the Next.js image optimizer. It displays a fallback if an image cannot load. Full-size views use `object-contain` so portrait and landscape photos are not cropped.

**Trade-off:** these are external hotlinks, not durable local assets or an officially supported Google Photos embedding API. Google may change or revoke the URLs, and removing photos or changing album sharing may break them. There is no automatic sync. For production reliability, obtain permission to host optimized copies locally or use supported object storage, then replace the URL data.

## Updating the gallery

1. Open a shared photo and obtain its actual image URL, not the URL in the browser address bar.
2. Add or replace its image key in the appropriate album in `gallery-albums.ts`, preserving album order.
3. Check both album filters, the combined view, keyboard navigation, and mobile layout.
4. If new photos are added to Google Photos, add their keys here too; the gallery is a curated snapshot.

The homepage preview uses four photos from the same data. Navigation, footer links, and the sitemap include `/gallery`. Album-specific links use `/gallery?album=launch` and `/gallery?album=network`.

## Site-wide photos

The rest of the site uses the exact same album photos. Curated picks live in
`siteImages` in `src/app/lib/gallery-albums.ts` (hero slides, page
backgrounds, event/program/podcast cards, About portraits, etc.), sized per
slot (2000px heroes, 800–1600px cards/features). To change any slot, edit the
album index in `siteImages` — no page files need to change. Components load
these hotlinks directly (`ImageReveal` uses a plain `<img>` for external
URLs), so no local copies in `public/` are used by the code anymore.
