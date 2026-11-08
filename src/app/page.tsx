
'use client';

import Link from "next/link"
import { MessageSquare, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'community-gathering')
  const visionImg = PlaceHolderImages.find(img => img.id === 'hero-church')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section with Mobile-Compatible Parallax */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D2B44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10"
            style={{
              backgroundImage: `url(${heroImg?.imageUrl || "https://picsum.photos/seed/church-hero/1920/1080"})`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-white">
            <KineticHeadline 
              lines={["WELCOME TO"]} 
              className="text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 font-headline text-center"
              staggerDelay={0}
            />
            
            <KineticHeadline 
              lines={["NCF", "CHURCH"]} 
              className="text-7xl md:text-[12rem] font-[900] uppercase tracking-tighter leading-[0.75] font-headline text-left items-start"
              staggerDelay={0.1}
            />
            
            <div className="w-24 h-3 bg-white mt-12 mb-8" />
            <ChevronDown className="h-10 w-10 animate-bounce opacity-60" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton strength={20}>
          <button className="bg-[#2D2B44] text-white flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/10">
            <div className="relative">
              <MessageSquare className="h-6 w-6 text-[#D12E8B]" />
              <div className="absolute -top-1 -right-1 bg-[#D12E8B] w-3 h-3 rounded-full border-2 border-[#2D2B44] animate-pulse" />
            </div>
            <span className="font-bold text-lg">Let's Chat!</span>
          </button>
        </MagneticButton>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <KineticHeadline 
              lines={["A Place of", "Grace and Truth."]}
              className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-8 uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg mb-10 leading-relaxed font-body">
              We are a vibrant community located in the heart of the city. 
              Our mission is to share the light of hope and provide a home where 
              everyone can grow in their journey of faith.
            </InkFlowText>
            <div className="h-1 w-20 bg-[#D12E8B] mx-auto" />
          </div>
        </div>
      </section>

      {/* Image Reveal Section with Kinetic Headline */}
      <section className="py-12 md:py-24 bg-[#3E3E4E] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageReveal 
                src={visionImg?.imageUrl || "/images/IMG_8930.JPG"}
                alt="Our Vision"
                className="rounded-lg shadow-2xl aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-white">
              <span className="text-[#D12E8B] font-bold uppercase tracking-widest">Our Vision</span>
              <KineticHeadline 
                lines={["BUILDING A", "BETTER TOMORROW"]}
                className="text-4xl md:text-6xl font-black uppercase font-headline leading-none"
              />
              <InkFlowText className="text-white/70 text-lg font-body leading-relaxed max-w-xl">
                Through faith and action, we are committed to making a difference in our local community. 
                Discover how we are serving, growing, and reaching out to touch lives.
              </InkFlowText>
              <MagneticButton>
                <Button className="bg-[#D12E8B] hover:bg-[#B02675] text-white font-bold h-14 px-8 rounded-full text-lg group">
                  Join the Mission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <KineticHeadline lines={["Calendar"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Stay updated with our weekly services and special events.</InkFlowText>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Learn More →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <KineticHeadline lines={["Ministries"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Find a group that fits your season of life.</InkFlowText>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Explore →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <KineticHeadline lines={["Giving"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Partner with us in our mission through secure online giving.</InkFlowText>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Give Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
