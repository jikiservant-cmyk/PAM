
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

const coreValues = [
  {
    name: "Christ-centredness",
    body: "Jesus Christ is at the heart of everything we do: the message we carry, the reason we serve, and the model for how we mentor.",
    verse: "Colossians 1:18",
  },
  {
    name: "Servanthood",
    body: "We lead by serving, after the pattern of Christ who came not to be served but to serve. Every papa and mama is trained to serve first.",
    verse: "Mark 10:45",
  },
  {
    name: "Integrity",
    body: "We handle what is entrusted to us, people, resources and the gospel, honestly, transparently and accountably.",
    verse: "Proverbs 11:3",
  },
  {
    name: "Teamwork",
    body: "Young people, mentors, families and churches work as one body, each part doing its share, none of it done alone.",
    verse: "1 Corinthians 12:27",
  },
];

const team = [
  {
    name: "[Papa name]",
    role: "Founding Papa",
    bio: "Visionary leader committed to mentoring the next generation.",
    image: "/portrait/leader-1.jpg"
  },
  {
    name: "[Mama name]",
    role: "Founding Mama",
    bio: "Passionate about nurturing young people and strengthening families.",
    image: "/portrait/leader-2.jpg"
  },
  {
    name: "[Papa name]",
    role: "Mentorship Lead",
    bio: "Equipping mentors and walking with emerging leaders.",
    image: "/portrait/papa.jpg"
  }
]

export default function AboutPage() {
  const historyImg = "/hero/IMG_8919.jpg";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#04301F]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale-[0.3] brightness-[0.4]"
            style={{
              backgroundImage: `url(/hero/IMG_8911.jpg)`,
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
                Vision &amp; Mission
              </h2>
            </BlurFocusText>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[#FFB800] font-bold uppercase tracking-[0.3em] text-xs block">Our Vision</span>
                <InkFlowText delay={0.8} className="text-xl md:text-2xl font-body leading-relaxed text-white/90">
                  Christ-transformed young people and families impacting their homes, campuses, churches and communities.
                </InkFlowText>
              </div>

              <div className="space-y-4">
                <span className="text-[#FFB800] font-bold uppercase tracking-[0.3em] text-xs block">Our Mission</span>
                <InkFlowText delay={1.2} className="text-lg text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
                  To walk with young people, families and emerging leaders, connecting them with mature believers who mentor them in faith, character and service.
                </InkFlowText>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="h-1 w-20 bg-[#FFB800] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Core Values Section */ }
      <section className="py-24 bg-[#F8F8F8] text-[#2D2B44]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <KineticHeadline
              lines={["OUR CORE VALUES"]}
              className="text-4xl md:text-5xl font-black uppercase font-headline tracking-tighter text-[#2D2B44] mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto text-lg font-body leading-relaxed">
              Four commitments behind every mentoring relationship, retreat and training we run.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 border-t-4 border-[#FFB800] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col space-y-4 fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="text-[#FFB800] font-serif text-3xl font-black">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-black font-headline uppercase tracking-tight">{value.name}</h3>
                <InkFlowText delay={0.6 + i * 0.1} className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                  {value.body}
                </InkFlowText>
                <span className="text-[#FFB800] font-bold text-xs uppercase tracking-widest pt-2">{value.verse}</span>
              </div>
            ))}
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
                Our story is a series of "yes" moments. Yes to mentoring one more young person, yes to strengthening one more home, and yes to keeping the door open for everyone, wherever they are on their journey.
              </InkFlowText>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal 
                src={historyImg} 
                alt="Our Story" 
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
              Guided by papas and mamas who believe in the power of service, integrity and transparency.
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
