'use client';

import Link from "next/link"
import { MessageSquare, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { RotatingHero } from "@/components/RotatingHero"
import { StatsSection } from "@/components/StatsSection"
import { GalleryPreview } from "@/components/GalleryPreview"
import { heroSlides } from "@/app/lib/hero-slides"
import { siteImages } from "@/app/lib/gallery-albums"

export default function Home() {
  const visionImg = { imageUrl: siteImages.homeVision }

  return (
    <div className="flex flex-col w-full relative">
      {/* Rotating Hero */}
      <RotatingHero slides={heroSlides} interval={6500} blackoutDuration={900} />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton strength={20}>
          <button className="bg-[#2D2B44] text-white flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/10">
            <div className="relative">
              <MessageSquare className="h-6 w-6 text-[#E9A7BC]" />
              <div className="absolute -top-1 -right-1 bg-[#E9A7BC] w-3 h-3 rounded-full border-2 border-[#3A1020] animate-pulse" />
            </div>
            <span className="font-bold text-lg">Chat with us</span>
          </button>
        </MagneticButton>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <KineticHeadline 
              lines={["Raising Spiritual", "Parents."]}
              className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-8 uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg mb-10 leading-relaxed font-body">
              Papas and Mamas Network connects young people, families and emerging
              leaders with mature believers who walk with them through life, growing
              them in faith, character and service.
            </InkFlowText>
            <div className="h-1 w-20 bg-[#7B1E3A] mx-auto" />
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Image Reveal Section with Kinetic Headline */}
      <section className="py-12 md:py-24 bg-[#3E3E4E] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageReveal 
                src={visionImg.imageUrl}
                alt="Our Vision"
                className="rounded-lg shadow-2xl aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-white">
              <span className="text-[#E9A7BC] font-bold uppercase tracking-widest">Our Vision</span>
              <KineticHeadline 
                lines={["BUILDING A", "BETTER TOMORROW"]}
                className="text-4xl md:text-6xl font-black uppercase font-headline leading-none"
              />
              <InkFlowText className="text-white/70 text-lg font-body leading-relaxed max-w-xl">
                Through intentional mentoring we are committed to making a difference in
                homes, campuses and communities. Discover how we are nurturing, equipping
                and journeying with the next generation.
              </InkFlowText>
              <MagneticButton>
                <Button asChild className="bg-[#7B1E3A] hover:bg-[#63172E] text-white font-bold h-14 px-8 rounded-full text-lg group">
                  <Link href="/fellowship">
                  Join the Mission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <GalleryPreview />

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#7B1E3A]">
                <KineticHeadline lines={["Events"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Stay updated with our mentoring retreats, training and gatherings.</InkFlowText>
                <span className="text-[#7B1E3A] font-bold text-sm tracking-widest uppercase">Learn More →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#7B1E3A]">
                <KineticHeadline lines={["Programs"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Find a place that fits your season of life.</InkFlowText>
                <span className="text-[#7B1E3A] font-bold text-sm tracking-widest uppercase">Explore →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#7B1E3A]">
                <KineticHeadline lines={["Giving"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Partner with us in raising a generation through secure giving.</InkFlowText>
                <span className="text-[#7B1E3A] font-bold text-sm tracking-widest uppercase">Give Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
