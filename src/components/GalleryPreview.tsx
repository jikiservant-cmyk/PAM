import Link from 'next/link';
import { ArrowRight, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExternalPhoto } from '@/components/ExternalPhoto';
import { KineticHeadline } from '@/components/KineticHeadline';
import { albumPhotos, googlePhotoUrl } from '@/app/lib/gallery-albums';

const previews = [
  albumPhotos.launch[0],
  albumPhotos.network[0],
  albumPhotos.launch[4],
  albumPhotos.network[4],
];

export function GalleryPreview() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="gallery-preview-heading">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#7B1E3A]">
              <Images className="h-4 w-4" aria-hidden="true" /> Moments that matter
            </span>
            <div id="gallery-preview-heading">
              <KineticHeadline lines={['OUR NETWORK', 'IN PICTURES']} className="font-headline text-4xl font-black uppercase leading-tight text-[#2D2B44] md:text-5xl" />
            </div>
            <p className="font-body leading-relaxed text-muted-foreground">A glimpse of the PAM Network launch and the moments we share as a community.</p>
          </div>
          <Button asChild className="h-14 shrink-0 rounded-full bg-[#7B1E3A] px-8 font-bold text-white hover:bg-[#63172E]">
            <Link href="/gallery">Explore the gallery <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {previews.map((photo) => (
            <Link key={photo.id} href={`/gallery?album=${photo.albumId}`} aria-label={`Browse the ${photo.albumTitle} album`} className="group relative block aspect-[4/3] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2">
              <ExternalPhoto src={googlePhotoUrl(photo.imageKey, 800)} alt={photo.alt} className="h-full w-full" imageClassName="transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-xs font-bold uppercase tracking-wider text-white">{photo.albumTitle}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
