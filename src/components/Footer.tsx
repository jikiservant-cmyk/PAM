import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#3A1020] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:text-[#E9A7BC] transition-colors">
                PAM<br />NETWORK
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-body text-lg">
              Raising spiritual parents, nurturing a generation rooted in faith, character and service.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="hover:text-[#E9A7BC] transition-all hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#E9A7BC] transition-all hover:scale-110"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#E9A7BC] transition-all hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#E9A7BC] transition-all hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#E9A7BC] tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-lg font-bold">
              <li><Link href="/about" className="hover:text-[#E9A7BC] transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="hover:text-[#E9A7BC] transition-colors">Programs</Link></li>
              <li><Link href="/events" className="hover:text-[#E9A7BC] transition-colors">Upcoming Events</Link></li>
              <li><Link href="/donate" className="hover:text-[#E9A7BC] transition-colors">Give Online</Link></li>
              <li><Link href="/fellowship" className="hover:text-[#E9A7BC] transition-colors">Register a Fellowship</Link></li>
              <li><Link href="/scripture-finder" className="hover:text-[#E9A7BC] transition-colors">Bible Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#E9A7BC] tracking-widest">What We Do</h3>
            <ul className="space-y-4 text-white/60 font-body text-lg">
              <li>Mentorship &amp; Discipleship</li>
              <li>Leadership Development</li>
              <li>Family &amp; Marriage Enrichment</li>
              <li>Community &amp; Social Concern</li>
              <li>Prayer &amp; Pastoral Care</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#E9A7BC] tracking-widest">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#E9A7BC] mt-1 shrink-0" />
                <span className="text-white/60 text-lg">Papas and Mamas Network, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#E9A7BC] shrink-0" />
                <span className="text-white/60 text-lg">+256 7XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#E9A7BC] shrink-0" />
                <span className="text-white/60 text-lg">hello@papasandmamas.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center text-sm text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Papas and Mamas Network. Built with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
