import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#04301F] text-white px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="w-px h-20 bg-[#FFB800]/70 mx-auto" />
        <p className="text-[10px] md:text-xs font-normal uppercase tracking-[0.42em] text-white/85">
          THIS PAGE COULD NOT BE FOUND
        </p>
        <h1 className="text-5xl md:text-7xl font-hero leading-[1.05]">
          Lost, but not<br />without a home
        </h1>
        <p className="text-white/60 font-body text-lg leading-relaxed">
          The page you were looking for does not exist. Let us point you back to the network.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <Button asChild className="bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 font-black h-14 px-8 rounded-full">
            <Link href="/">BACK TO HOME</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-[#003322] font-black h-14 px-8 rounded-full">
            <Link href="/fellowship">JOIN THE NETWORK</Link>
          </Button>
        </div>
        <div className="w-px h-20 bg-[#FFB800]/70 mx-auto" />
      </div>
    </div>
  );
}
