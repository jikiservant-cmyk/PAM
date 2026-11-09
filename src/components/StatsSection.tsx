import { CountUp } from './CountUp';
import { KineticHeadline } from './KineticHeadline';
import { InkFlowText } from './InkFlowText';

/**
 * Rough targets used by the count-up animation, ordered highest first.
 * They live here as plain data so real figures can replace them in one place.
 */
const statistics = [
  { value: 120, suffix: '+', label: 'Fellowships', detail: 'Partnering across the network' },
  { value: 500, suffix: '+', label: 'Network Mothers', detail: 'Mamas walking with the next generation' },
  { value: 480, suffix: '+', label: 'Network Fathers', detail: 'Papas giving time, wisdom and prayer' },
  { value: 2500, suffix: '+', label: 'Students Reached', detail: 'Through campus and youth fellowships' },
  { value: 31, suffix: '', label: 'Years of Existence', detail: 'Serving since 1995' },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-[#2D2B44] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <KineticHeadline
            lines={['PAM AT A GLANCE']}
            className="text-3xl md:text-5xl font-black uppercase font-headline tracking-tighter mb-6"
          />
          <InkFlowText className="text-white/60 text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Thousands of members, hundreds of fellowships and decades of faithful mentorship.
          </InkFlowText>
          <div className="h-1 w-24 bg-[#E9A7BC] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {statistics.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center space-y-3 fade-in"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="text-5xl md:text-6xl font-hero text-[#FFB800] leading-none">
                <CountUp to={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
                {stat.label}
              </p>
              <p className="text-white/40 text-xs font-body leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
