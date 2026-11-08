'use client';

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { cn } from "@/lib/utils"

const ministries = [
  {
    title: "YOUTH MINISTRY",
    description: "Empowering the next generation to lead with faith and purpose. Our youth programs provide a safe space for exploration, growth, and authentic community building.",
    image: "https://picsum.photos/seed/youth-min/800/800",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "COMMUNITY OUTREACH",
    description: "Extending a helping hand to our neighbors. Through local partnerships and grassroots initiatives, we aim to address systemic needs and share radical hospitality.",
    image: "https://picsum.photos/seed/outreach-min/800/800",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "WOMEN'S MINISTRY",
    description: "A community of women growing together in grace, wisdom, and love. Our gatherings focus on spiritual nourishment, deep connection, and supporting one another in every season of life.",
    image: "https://picsum.photos/seed/women-min/800/800",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "MEN'S MINISTRY",
    description: "Building strong men of faith through brotherhood, discipleship, and service. We challenge each other to live with integrity and lead our families and communities with purpose.",
    image: "https://picsum.photos/seed/men-min/800/800",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "KIDS MINISTRY",
    description: "Nurturing the faith of our youngest members in a fun, safe, and engaging environment. We provide age-appropriate biblical teaching that helps children discover God's love.",
    image: "https://picsum.photos/seed/kids-min/800/800",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "WORSHIP & ARTS",
    description: "Expressing our faith through creative excellence. Our worship experience blends tradition with modern artistry to create an atmosphere of reverence and inspiration.",
    image: "https://picsum.photos/seed/worship-min/800/800",
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "GLOBAL MISSIONS",
    description: "Taking the message of hope beyond borders. We support international projects focused on education, sustainable development, and spiritual guidance across the globe.",
    image: "https://picsum.photos/seed/missions-min/800/800",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  }
]

export default function MinistriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale brightness-[0.4]"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/gathering-hero/1920/1080)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["OUR", "MINISTRIES"]} 
              className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800]"
              staggerDelay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 2. Z-Pattern Content Rows */}
      {ministries.map((min, i) => (
        <section key={i} className="relative w-full">
          <div className={cn(
            "flex flex-col lg:flex-row min-h-[600px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            {/* Image Block - Always first in DOM for mobile top stacking */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              <ImageReveal 
                src={min.image} 
                alt={min.title} 
                className="w-full h-full grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                maskColor={min.bgColor === "bg-[#3E3E4E]" ? "bg-[#3E3E4E]" : "bg-[#003322]"}
              />
            </div>

            {/* Text Block */}
            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24",
              min.bgColor,
              min.textColor
            )}>
              <div className="max-w-md space-y-8">
                <KineticHeadline 
                  lines={[min.title]} 
                  className="text-3xl md:text-5xl font-bold font-serif text-[#FFB800]"
                />
                <InkFlowText delay={0.8} className="text-lg md:text-xl font-body leading-relaxed opacity-90">
                  {min.description}
                </InkFlowText>
                <div className="pt-4">
                  <MagneticButton>
                    <Button className={cn("h-14 px-10 rounded-full font-black text-lg group", min.btnClass)}>
                      LEARN MORE <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Footer CTA Section */}
      <section className="py-32 bg-[#003322] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["GET INVOLVED TODAY"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <MagneticButton>
            <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-20 px-12 rounded-full text-2xl group transition-all duration-500">
              JOIN A TEAM <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
