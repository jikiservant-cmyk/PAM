'use client';

import * as React from 'react';
import Link from 'next/link';
import { Users, Mail, Phone, MapPin, Building2, ArrowRight, ShieldCheck, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { KineticHeadline } from '@/components/KineticHeadline';
import { InkFlowText } from '@/components/InkFlowText';
import { MagneticButton } from '@/components/MagneticButton';
import {
  registerFellowship,
  signIn,
  signOut,
  getCurrentFellowship,
  type Fellowship,
} from '@/app/lib/fellowship-store';
import { siteImages } from '@/app/lib/gallery-albums';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const emptyForm = {
  name: '',
  leader: '',
  role: '',
  email: '',
  phone: '',
  district: '',
  members: '',
  meetingDay: 'Sunday',
  about: '',
};

const fieldClass =
  'h-14 bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-400';
const labelClass =
  'text-xs font-black uppercase tracking-widest text-[#2D2B44]/50';

export default function FellowshipPage() {
  const { toast } = useToast();
  const [mode, setMode] = React.useState<'register' | 'signin'>('register');
  const [form, setForm] = React.useState(emptyForm);
  const [signInEmail, setSignInEmail] = React.useState('');
  const [current, setCurrent] = React.useState<Fellowship | null>(null);
  const [busy, setBusy] = React.useState(false);

  // Read the stored session after mount only, so server and client markup match.
  React.useEffect(() => {
    setCurrent(getCurrentFellowship());
  }, []);

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);

    const result = registerFellowship(form);

    setBusy(false);

    if (!result.ok) {
      toast({ title: 'Could not register', description: result.error, variant: 'destructive' });
      return;
    }

    signIn(form.email);
    setCurrent(result.fellowship);
    setForm(emptyForm);
    toast({
      title: 'Fellowship registered',
      description: `${result.fellowship.name} is now part of the PAM network.`,
    });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signIn(signInEmail);

    if (!result.ok) {
      toast({ title: 'Sign in failed', description: result.error, variant: 'destructive' });
      return;
    }

    setCurrent(result.fellowship);
    setSignInEmail('');
    toast({ title: 'Welcome back', description: result.fellowship.name });
  };

  const handleSignOut = () => {
    signOut();
    setCurrent(null);
    toast({ title: 'Signed out', description: 'Your fellowship session has ended.' });
  };

  /* ---------- Signed-in view ---------- */
  if (current) {
    return (
      <div className="flex flex-col w-full">
        <section className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[#04301F]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.35]"
              style={{ backgroundImage: `url(${siteImages.fellowshipBackground})` }}
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <KineticHeadline
              lines={['WELCOME', 'FELLOWSHIP']}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-serif text-[#FFB800]"
              staggerDelay={0.15}
            />
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div className="bg-[#F8F8F8] border-l-4 border-[#7B1E3A] p-8 md:p-12 space-y-6">
              <span className="text-[#7B1E3A] font-black tracking-[0.3em] text-xs uppercase block">
                Registered fellowship
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-headline text-[#2D2B44] uppercase">
                {current.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-body text-muted-foreground">
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">Leader</strong><br />{current.leader} · {current.role}</p>
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">Email</strong><br />{current.email}</p>
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">Phone</strong><br />{current.phone}</p>
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">District</strong><br />{current.district}</p>
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">Members</strong><br />{current.members}</p>
                <p><strong className="text-[#2D2B44] uppercase tracking-wide text-xs">Meets</strong><br />{current.meetingDay}</p>
              </div>
              {current.about && (
                <InkFlowText className="text-muted-foreground font-body leading-relaxed">
                  {current.about}
                </InkFlowText>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10">
              <MagneticButton strength={20}>
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="border-[#2D2B44] text-[#2D2B44] font-bold hover:bg-[#2D2B44] hover:text-white rounded-full px-8 h-14 group"
                >
                  Sign out <LogOut className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
              <Link href="/sermons" className="text-[#7B1E3A] font-bold uppercase tracking-widest text-xs">
                Explore programs →
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ---------- Register / sign in view ---------- */
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <section className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[#04301F]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.35]"
            style={{ backgroundImage: `url(${siteImages.fellowshipBackground})` }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline
            lines={['JOIN THE', 'NETWORK']}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-serif text-[#FFB800]"
            staggerDelay={0.15}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16 space-y-6">
            <KineticHeadline
              lines={['REGISTER YOUR FELLOWSHIP']}
              className="text-3xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg font-body max-w-2xl mx-auto leading-relaxed">
              Bring your fellowship into the Papas and Mamas Network. Register your details and a
              member of the network team will be in touch.
            </InkFlowText>
          </div>

          {/* Mode switch */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex border border-[#2D2B44]/15">
              {(['register', 'signin'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`px-8 h-14 text-xs font-black uppercase tracking-[0.2em] transition-colors ${
                    mode === m
                      ? 'bg-[#7B1E3A] text-white'
                      : 'bg-white text-[#2D2B44]/60 hover:text-[#2D2B44]'
                  }`}
                >
                  {m === 'register' ? 'Register' : 'Sign in'}
                </button>
              ))}
            </div>
          </div>

          {mode === 'register' ? (
            <form onSubmit={handleRegister} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className={labelClass}>Fellowship name</Label>
                  <Input id="name" required value={form.name} onChange={set('name')} placeholder="e.g. Makerere Cell Fellowship" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="leader" className={labelClass}>Fellowship leader</Label>
                  <Input id="leader" required value={form.leader} onChange={set('leader')} placeholder="Full name" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="role" className={labelClass}>Your role</Label>
                  <Input id="role" required value={form.role} onChange={set('role')} placeholder="e.g. Mama, Papa, Coordinator" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className={labelClass}>Email address</Label>
                  <Input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className={labelClass}>Phone number</Label>
                  <Input id="phone" required value={form.phone} onChange={set('phone')} placeholder="+256 7XX XXX XXX" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="district" className={labelClass}>District / location</Label>
                  <Input id="district" required value={form.district} onChange={set('district')} placeholder="e.g. Kampala" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="members" className={labelClass}>Approximate members</Label>
                  <Input id="members" required value={form.members} onChange={set('members')} placeholder="e.g. 25" className={fieldClass} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="day" className={labelClass}>Meeting day</Label>
                  <Select
                    value={form.meetingDay}
                    onValueChange={(v) => setForm((f) => ({ ...f, meetingDay: v }))}
                  >
                    <SelectTrigger id="day" className="h-14 bg-[#F8F8F8] border-none rounded-none focus:ring-1 focus:ring-[#FFB800]">
                      <SelectValue placeholder="Choose a day" />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS.map((d) => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="about" className={labelClass}>About your fellowship</Label>
                <Textarea id="about" value={form.about} onChange={set('about')} placeholder="Who do you meet, and how would you like the network to walk with you?" className="min-h-[150px] bg-[#F8F8F8] border-none rounded-none focus-visible:ring-1 focus-visible:ring-[#FFB800] placeholder:text-gray-400 p-6 text-base resize-none" />
              </div>

              <div className="pt-2">
                <MagneticButton strength={20} className="w-full">
                  <Button type="submit" disabled={busy} className="w-full h-20 text-xl font-black bg-[#FFB800] text-[#003322] hover:bg-[#FFB800]/90 rounded-none shadow-xl group">
                    {busy ? 'REGISTERING...' : (
                      <span className="flex items-center justify-center">
                        REGISTER FELLOWSHIP
                        <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    )}
                  </Button>
                </MagneticButton>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[#F8F8F8] border-l-4 border-[#FFB800]">
                <ShieldCheck className="h-8 w-8 text-[#FFB800] shrink-0" />
                <p className="text-xs font-bold text-[#2D2B44] uppercase tracking-widest leading-relaxed">
                  Your details stay on this device for now. Connect a backend before collecting real registrations.
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignIn} className="max-w-xl mx-auto space-y-8">
              <div className="space-y-3">
                <Label htmlFor="signin-email" className={labelClass}>Registered email address</Label>
                <Input id="signin-email" type="email" required value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="you@example.com" className={fieldClass} />
              </div>

              <MagneticButton strength={20} className="w-full">
                <Button type="submit" className="w-full h-20 text-xl font-black bg-[#7B1E3A] text-white hover:bg-[#63172E] rounded-none shadow-xl group">
                  SIGN IN <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </MagneticButton>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center">
                {[
                  { icon: Users, text: 'Manage your fellowship profile' },
                  { icon: Mail, text: 'Receive network updates' },
                  { icon: Phone, text: 'Get mentoring support' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="space-y-2">
                    <Icon className="h-6 w-6 text-[#7B1E3A] mx-auto" />
                    <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </form>
          )}

          <div className="mt-20 pt-10 border-t border-[#2D2B44]/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Building2, text: 'Registered fellowships across Uganda' },
              { icon: MapPin, text: 'Find a fellowship near you' },
              { icon: Users, text: 'Mentors matched to every fellowship' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="space-y-2">
                <Icon className="h-6 w-6 text-[#FFB800] mx-auto" />
                <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
