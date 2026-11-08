"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-[#003322]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale brightness-[0.3]"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/contact-hero/1920/1080)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["PLAN YOUR", "VISIT"]} 
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-20 space-y-6">
            <KineticHeadline 
              lines={["WE'RE HERE FOR YOU"]} 
              className="text-4xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline"
            />
            <InkFlowText className="text-muted-foreground text-xl font-body max-w-2xl mx-auto leading-relaxed">
              Have a question about our services, or need someone to stand with you in prayer? 
              Reach out and let us know how we can support you.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div className="space-y-8">
                <span className="text-[#FFB800] font-black tracking-[0.4em] text-xs uppercase block">Information</span>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <MapPin className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Location</h3>
                    <p className="text-muted-foreground font-body">Nabweru Christian Fellowship Church, 9GGV+56F, Nabweru Rd, Kampala</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Phone className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Phone</h3>
                    <p className="text-muted-foreground font-body">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#F8F8F8] p-4 rounded-sm transition-transform group-hover:scale-110 duration-500">
                    <Mail className="h-6 w-6 text-[#FFB800]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2D2B44] uppercase tracking-wide">Email</h3>
                    <p className="text-muted-foreground font-body">hello@ncfchurch.org</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-[#3E3E4E] text-white space-y-6 rounded-sm shadow-xl">
                <Heart className="h-10 w-10 text-[#FFB800]" />
                <h3 className="text-2xl font-black uppercase font-headline">Prayer Support</h3>
                <InkFlowText delay={1} className="text-white/70 font-body leading-relaxed text-sm">
                  Our dedicated prayer team meets weekly to lift up your requests. 
                  Every message is handled with the utmost care and confidentiality.
                </InkFlowText>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="first-name" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="last-name" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300" />
                </div>

                <div className="space-y-6">
                  <Label className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">Reason for inquiry</Label>
                  <RadioGroup defaultValue="inquiry" className="flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <RadioGroupItem value="inquiry" id="r1" className="border-2 border-[#FFB800] text-[#FFB800]" />
                      <Label htmlFor="r1" className="font-bold text-[#2D2B44] uppercase tracking-wide text-sm cursor-pointer group-hover:text-[#FFB800] transition-colors">General Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <RadioGroupItem value="prayer" id="r2" className="border-2 border-[#FFB800] text-[#FFB800]" />
                      <Label htmlFor="r2" className="font-bold text-[#2D2B44] uppercase tracking-wide text-sm cursor-pointer group-hover:text-[#FFB800] transition-colors">Prayer Request</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-[#2D2B44]/50">How can we help?</Label>
                  <Textarea id="message" placeholder="Your message here..." className="min-h-[200px] bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-300 p-6 text-lg resize-none" required />
                </div>

                <div className="pt-4">
                  <MagneticButton strength={20} className="w-full">
                    <Button type="submit" className="w-full h-20 text-xl font-black bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 rounded-none shadow-xl group" disabled={isSubmitting}>
                      {isSubmitting ? "SENDING..." : (
                        <span className="flex items-center justify-center">
                          SEND MESSAGE
                          <Send className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer Map Placeholder Section */}
      <section className="h-[50vh] w-full bg-[#F5F5F5] relative group overflow-hidden">
        <div 
          className="absolute inset-0 grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000 bg-center bg-cover"
          style={{ backgroundImage: `url(https://picsum.photos/seed/church-map/1920/1080)` }}
        />
        <div className="absolute inset-0 bg-[#003322]/40 group-hover:bg-transparent transition-all duration-1000 flex items-center justify-center">
          <div className="bg-white p-8 shadow-2xl space-y-2 text-center">
            <h3 className="text-xl font-black uppercase font-headline">Visit Our Sanctuary</h3>
            <p className="text-muted-foreground text-sm font-body">Open for quiet prayer Mon-Fri, 9am - 4pm</p>
          </div>
        </div>
      </section>
    </div>
  )
}
