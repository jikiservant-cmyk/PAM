import { HeroSlide } from '@/components/RotatingHero';
import { siteImages } from '@/app/lib/gallery-albums';

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'WE EXIST TO RAISE UP SPIRITUAL PARENTS WHO',
    lines: ['Raise a Generation', 'Rooted in Christ'],
    image: siteImages.heroSlides[0],
  },
  {
    eyebrow: 'STEP INTO',
    lines: ['The Path of', 'Discipleship'],
    image: siteImages.heroSlides[1],
  },
  {
    eyebrow: 'PAPAS AND MAMAS NETWORK',
    lines: ['Walking With', 'The Next Generation'],
    image: siteImages.heroSlides[2],
  },
  {
    eyebrow: 'MENTORING THAT CHANGES FAMILIES',
    lines: ['Strong Homes', 'Stronger Communities'],
    image: siteImages.heroSlides[3],
  },
];
