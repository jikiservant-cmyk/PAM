
'use client';

import Image from "next/image"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { BlurFocusText } from "@/components/BlurFocusText"
import { Separator } from "@/components/ui/separator"
import { ImageReveal } from "@/components/ImageReveal"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

const team = [
  {
    name: "Mubiru Florence",
    role: "Lead Pastor",
    bio: "Visionary leader dedicated to community spiritual growth.",
    image: PlaceHolderImages.find(img => img.id === 'pastor-florence')?.imageUrl || "https://picsum.photos/seed/p1/400/500"
  },
  {
    name: "Kembabazi Rose",
    role: "Community Director",
    bio: "Passionate about outreach and local support programs.",
    image: PlaceHolderImages.find(img => img.id === 'director-rose')?.imageUrl || "/images/IMG_8891.jpg"
  },
  {
    name: "Sebalamu Geoffrey",
    role: "Creative Arts",
    bio: "Crafting modern worship experiences through media and art.",
    image: PlaceHolderImages.find(img => img.id === 'creative-geoffrey')?.imageUrl || "https://picsum.photos/seed/p3/400/500"
  }
]

export default function AboutPage() {
  const historyImg = PlaceHolderImages.find(img => img.id === 'about-history')?.imageUrl || "/images/IMG_8919.jpg";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale-[0.3] brightness-[0.4]"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/forest-road/1920/1080)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["OUR", "STORY"]} 
              className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
              staggerDelay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 2. Mission Section (High Contrast Green) */}
      <section className="py-32 bg-[#003322] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <BlurFocusText>
              <h2 className="text-[#FFB800] text-3xl md:text-5xl font-black uppercase font-serif tracking-tight">
                Mission Statement
              </h2>
            </BlurFocusText>
            
            <div className="space-y-8">
              <InkFlowText delay={0.8} className="text-xl md:text-2xl font-body leading-relaxed text-white/90">
                NCF Church exists to be a beacon of grace in a complex world. We are committed to authentic faith, radical hospitality, and systemic change through the power of love.
              </InkFlowText>
              
              <InkFlowText delay={1.2} className="text-lg text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
                Founded in 1995, we started as a small gathering in a basement and have grown into a diverse metropolitan family reaching thousands both locally and digitally.
              </InkFlowText>
            </div>
            
            <div className="pt-8">
              <div className="h-1 w-20 bg-[#FFB800] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Story Section (White/Charcoal) */}
      <section className="py-24 bg-white text-[#2D2B44]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <KineticHeadline 
                lines={["THE JOURNEY", "SO FAR"]} 
                className="text-4xl md:text-6xl font-black uppercase font-headline tracking-tighter text-[#2D2B44]"
              />
              <Separator className="bg-[#2D2B44]/10 w-32 h-[2px]" />
              <InkFlowText className="text-muted-foreground text-lg leading-relaxed font-body">
                Our history is a series of "yes" moments. Yes to serving our neighbors, yes to embracing new technology, and yes to keeping the door open for everyone, regardless of where they are on their path.
              </InkFlowText>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal 
                src={historyImg} 
                alt="Church History" 
                width={800}
                height={600}
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section (Grid) */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <KineticHeadline 
              lines={["OUR LEADERSHIP"]} 
              className="text-4xl font-black uppercase font-headline text-[#2D2B44] mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto">
              Guided by a group of dedicated individuals who believe in the power of service and transparency.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col space-y-6 fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                  <ImageReveal 
                    src={member.image} 
                    alt={member.name} 
                    width={400}
                    height={500}
                    className="w-full h-full grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">{member.name}</h3>
                  <p className="text-[#FFB800] font-bold uppercase tracking-widest text-xs">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-4">
                  <MagneticButton>
                    <Button variant="outline" className="border-[#2D2B44] text-[#2D2B44] font-bold hover:bg-[#2D2B44] hover:text-white rounded-full px-6 group">
                      Contact <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-[#2D2B44] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["WANT TO BE PART OF", "THE STORY?"]} 
            className="text-4xl md:text-6xl font-black uppercase font-headline mb-8"
          />
          <MagneticButton>
            <Button className="bg-[#FFB800] text-[#2D2B44] hover:bg-[#FFB800]/90 font-black h-16 px-10 rounded-full text-xl group">
              JOIN OUR TEAM <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
