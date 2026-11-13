import type { Metadata } from 'next';
import { PhotoGallery } from '@/components/PhotoGallery';
import { albumPhotos } from '@/app/lib/gallery-albums';

export const metadata: Metadata = {
  title: 'Photo Gallery | Papas and Mamas Network',
  description: 'Explore photos from the PAM Network launch and moments from our community, shared in two Google Photos albums.',
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ album?: string | string[] }>;
}) {
  const { album } = await searchParams;
  const initialAlbum = typeof album === 'string' && albumPhotos[album] ? album : 'all';

  return <PhotoGallery key={initialAlbum} initialAlbum={initialAlbum} />;
}
