import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2D2B44] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:text-[#D12E8B] transition-colors">
                NCF<br />CHURCH
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-body text-lg">
              Lighting the path together since 1995. A community dedicated to faith, hope, and love.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="hover:text-[#D12E8B] transition-all hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-all hover:scale-110"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-all hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-all hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#D12E8B] tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-lg font-bold">
              <li><Link href="/about" className="hover:text-[#D12E8B] transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-[#D12E8B] transition-colors">Upcoming Events</Link></li>
              <li><Link href="/sermons" className="hover:text-[#D12E8B] transition-colors">Ministries</Link></li>
              <li><Link href="/donate" className="hover:text-[#D12E8B] transition-colors">Donate Online</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#D12E8B] tracking-widest">Worship Times</h3>
            <ul className="space-y-4 text-white/60 font-body text-lg">
              <li>Sunday Discipleship Class: 7:00 AM - 9:00 AM</li>
              <li>Sunday Morning: 9:00 AM</li>
              <li>Sunday Traditional: 11:00 AM</li>
              <li>Wednesday Prayer: 7:00 PM</li>
              <li>Youth Night: Fri 6:30 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#D12E8B] tracking-widest">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#D12E8B] mt-1 shrink-0" />
                <span className="text-white/60 text-lg">Nabweru Christian Fellowship Church, 9GGV+56F, Nabweru Rd, Kampala</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#D12E8B] shrink-0" />
                <span className="text-white/60 text-lg">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#D12E8B] shrink-0" />
                <span className="text-white/60 text-lg">hello@ncfchurch.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center text-sm text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} NCF Church. Built with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
