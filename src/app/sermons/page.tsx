'use client';

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { siteImages } from "@/app/lib/gallery-albums"
import { cn } from "@/lib/utils"

const ministries = [
  {
    title: "LEADERSHIP DEVELOPMENT",
    description: "Jesus came not to be served but to serve. We train young leaders in servant leadership so they grow into men and women of integrity in their homes, churches and communities.",
    image: siteImages.sermonsCards[0],
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "DISCIPLESHIP & MENTORING",
    description: "Young people need someone who will walk with them. Our papas and mamas give time, wisdom and prayer, helping the next generation grow into mature, Christ-centred believers.",
    image: siteImages.sermonsCards[1],
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "EVANGELISM & MISSIONS",
    description: "We support young believers to share the gospel with friends, campuses and neighbourhoods, and to carry the good news of Jesus Christ beyond borders.",
    image: siteImages.sermonsCards[2],
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "MARRIAGE & FAMILY",
    description: "Strong homes raise strong children. We walk with couples and parents through teaching, mentoring and honest conversation about faith in the home.",
    image: siteImages.sermonsCards[3],
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "YOUTH & STUDENTS",
    description: "From secondary school to university, we walk with young people through the pressures of study, career and identity, helping them discover God's purpose for their lives.",
    image: siteImages.sermonsCards[4],
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "COMMUNITY & SOCIAL CONCERN",
    description: "Practical love that neighbours can see. We engage positively with the needs around us, from literacy and life skills to care and support for the vulnerable.",
    image: siteImages.sermonsCards[5],
    bgColor: "bg-[#003322]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322]"
  },
  {
    title: "PRAYER & PASTORAL CARE",
    description: "Every mentee needs someone in their corner. Our prayer and pastoral care team stands with young people and families through every season of life.",
    image: siteImages.sermonsCards[6],
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  }
]

export default function MinistriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#04301F]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale brightness-[0.4]"
            style={{
              backgroundImage: `url(${siteImages.sermonsBackground})`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["OUR", "PROGRAMS"]} 
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
                    <Button asChild className={cn("h-14 px-10 rounded-full font-black text-lg group", min.btnClass)}>
                      <Link href="/contact">
                        LEARN MORE <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
            lines={["BECOME A MENTOR"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <MagneticButton>
            <Button asChild variant="outline" className="bg-transparent border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-20 px-12 rounded-full text-2xl group transition-all duration-500">
              <Link href="/fellowship">
                JOIN THE NETWORK <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
