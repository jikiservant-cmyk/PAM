'use client';

import * as React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Images, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { ExternalPhoto } from '@/components/ExternalPhoto';
import { albumPhotos, allGalleryPhotos, galleryAlbums, googlePhotoUrl } from '@/app/lib/gallery-albums';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 12;
type AlbumFilter = 'all' | string;

export function PhotoGallery({ initialAlbum = 'all' }: { initialAlbum?: AlbumFilter }) {
  const [album, setAlbum] = React.useState<AlbumFilter>(initialAlbum);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const photos = album === 'all' ? allGalleryPhotos : albumPhotos[album] ?? [];
  const visiblePhotos = photos.slice(0, visibleCount);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];
  const currentAlbum = galleryAlbums.find((item) => item.id === album);

  function chooseAlbum(id: AlbumFilter) {
    setAlbum(id);
    setVisibleCount(PAGE_SIZE);
    setSelectedIndex(null);
  }

  function movePhoto(direction: number) {
    setSelectedIndex((index) => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  return (
    <div className="bg-white">
      <section className="bg-[#003322] px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#FFB800]">
            <Images className="h-5 w-5" aria-hidden="true" /> Our photo gallery
          </span>
          <h1 className="font-hero text-5xl leading-tight text-[#FFB800] md:text-7xl">Life together,<br />captured.</h1>
          <p className="mx-auto max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg">
            Moments from the PAM Network launch and our life as a community.
            Select a photo to take a closer look.
          </p>
          <div className="mx-auto h-px w-20 bg-[#FFB800]/60" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 md:px-12 md:py-16" aria-label="Photo albums">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-headline text-2xl font-black uppercase text-[#2D2B44]">Explore the albums</h2>
            <p className="mt-2 text-sm text-muted-foreground">{allGalleryPhotos.length} photos · 2 shared albums</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by album">
            {[{ id: 'all', title: 'All photos' }, ...galleryAlbums].map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={album === item.id}
                onClick={() => chooseAlbum(item.id)}
                className={cn(
                  'min-h-11 border px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1E3A] focus-visible:ring-offset-2',
                  album === item.id
                    ? 'border-[#7B1E3A] bg-[#7B1E3A] text-white'
                    : 'border-[#2D2B44]/20 bg-white text-[#2D2B44] hover:border-[#7B1E3A] hover:text-[#7B1E3A]'
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 border-l-4 border-[#FFB800] bg-[#F8F8F8] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {currentAlbum?.description ?? 'Browse both albums together, or choose an album above.'}
          </p>
          {currentAlbum && (
            <a href={currentAlbum.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#7B1E3A] underline-offset-4 hover:underline">
              Open Google Photos album <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <p className="sr-only" role="status">Showing {visiblePhotos.length} of {photos.length} photos{currentAlbum ? ` from ${currentAlbum.title}` : ''}.</p>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePhotos.map((photo, index) => (
            <li key={photo.id}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Enlarge ${photo.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#F8F8F8] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2"
              >
                <ExternalPhoto
                  src={googlePhotoUrl(photo.imageKey, 800)}
                  alt={photo.alt}
                  eager={index < 3}
                  className="h-full w-full"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">{photo.albumTitle} · {String(photo.number).padStart(2, '0')}</span>
                  <ZoomIn className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {visibleCount < photos.length && (
          <div className="mt-12 text-center">
            <Button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="h-14 rounded-none bg-[#7B1E3A] px-10 font-bold text-white hover:bg-[#63172E]">
              Load more photos
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">{visiblePhotos.length} of {photos.length} photos shown</p>
          </div>
        )}
        <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground">
          Photos load directly from Google Photos. Availability depends on the original shared albums.
        </p>
      </section>

      <Dialog open={selectedPhoto != null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        <DialogContent
          className="flex max-h-[94dvh] w-[calc(100%-1.5rem)] max-w-6xl flex-col gap-4 overflow-y-auto border-white/10 bg-[#1A1A1A] p-4 pt-14 text-white sm:p-6 sm:pt-14"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1); }
            if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1); }
          }}
        >
          {selectedPhoto && (
            <>
              <div className="pr-8">
                <DialogTitle className="font-headline text-lg font-bold">{selectedPhoto.albumTitle}</DialogTitle>
                <DialogDescription className="mt-1 text-white/60">Photo {selectedIndex! + 1} of {photos.length} · Use the arrow buttons or left/right keys to browse.</DialogDescription>
              </div>
              <ExternalPhoto
                key={selectedPhoto.id}
                src={googlePhotoUrl(selectedPhoto.imageKey, 2000)}
                alt={selectedPhoto.alt}
                fit="contain"
                eager
                className="h-[60dvh] min-h-48 w-full bg-black/30"
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => movePhoto(-1)} aria-label="Previous photo" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[#2D2B44]">
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Previous
                  </Button>
                  <Button type="button" variant="outline" onClick={() => movePhoto(1)} aria-label="Next photo" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[#2D2B44]">
                    Next <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <a href={selectedPhoto.albumUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#FFB800] underline-offset-4 hover:underline">
                  View original album <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
