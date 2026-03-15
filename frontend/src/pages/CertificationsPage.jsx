import { Award, GraduationCap, Trophy, Star } from 'lucide-react';

const certifications = [
  {
    year: '2024',
    title: 'Certified Master Mixologist',
    organization: 'International Bartenders Association',
    description: 'Achieved the highest level of professional certification in mixology, demonstrating mastery in classic and contemporary cocktail techniques.',
    icon: Trophy,
    type: 'certification'
  },
  {
    year: '2023',
    title: 'Best Innovation in Cocktails',
    organization: 'World Cocktail Awards',
    description: 'Recognized for the creation of the "Obsidian Martini" - a groundbreaking cocktail featuring activated charcoal and molecular gastronomy techniques.',
    icon: Award,
    type: 'award'
  },
  {
    year: '2023',
    title: 'Advanced Spirits & Sommelier',
    organization: 'Wine & Spirit Education Trust (WSET)',
    description: 'Level 3 certification in spirits, covering production methods, flavor profiles, and expert-level tasting skills.',
    icon: GraduationCap,
    type: 'certification'
  },
  {
    year: '2022',
    title: 'Molecular Mixology Workshop',
    organization: 'The Aviary, Chicago',
    description: 'Intensive two-week workshop with world-renowned mixologists, focusing on spherification, foams, and aromatic presentations.',
    icon: Star,
    type: 'workshop'
  },
  {
    year: '2021',
    title: 'Rising Star Bartender',
    organization: 'Tales of the Cocktail Foundation',
    description: 'Named among the top 10 emerging talents in the global bartending industry for exceptional creativity and technique.',
    icon: Award,
    type: 'award'
  },
  {
    year: '2020',
    title: 'Professional Bartending Certificate',
    organization: 'European Bartender School',
    description: 'Four-week intensive program covering speed bartending, flair techniques, and bar management fundamentals.',
    icon: GraduationCap,
    type: 'certification'
  }
];

const getTypeColor = (type) => {
  switch (type) {
    case 'award':
      return 'bg-[#D4AF37]/20 text-[#D4AF37]';
    case 'certification':
      return 'bg-emerald-500/20 text-emerald-400';
    case 'workshop':
      return 'bg-blue-500/20 text-blue-400';
    default:
      return 'bg-[#D4AF37]/20 text-[#D4AF37]';
  }
};

const getTypeLabel = (type) => {
  switch (type) {
    case 'award':
      return 'Award';
    case 'certification':
      return 'Certification';
    case 'workshop':
      return 'Workshop';
    default:
      return type;
  }
};

export const CertificationsPage = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen" data-testid="certifications-page">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 marble-overlay">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">
            Credentials & Achievements
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#EDEDED] mb-6"
            data-testid="certifications-title"
          >
            Certifications
          </h1>
          <p className="text-[#A0A0A0] text-base lg:text-lg max-w-2xl mx-auto">
            A journey of continuous learning and recognition in the art of mixology. 
            Each milestone represents a dedication to excellence and craft.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12" data-testid="timeline-section">
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={cert.title}
                  className={`relative flex items-center mb-16 ${isLeft ? 'justify-end' : 'justify-start'}`}
                  data-testid={`timeline-item-${index}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] border-2 border-[#D4AF37] rounded-full z-10" />

                  {/* Content Card */}
                  <div className={`w-[calc(50%-3rem)] ${isLeft ? 'pr-0 text-right' : 'pl-0 text-left'}`}>
                    <div className={`card-glass p-8 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                      {/* Year Badge */}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <span className={`px-3 py-1 text-xs font-medium tracking-wider uppercase rounded ${getTypeColor(cert.type)}`}>
                          {getTypeLabel(cert.type)}
                        </span>
                        <span className="text-[#D4AF37] text-sm font-medium">{cert.year}</span>
                      </div>

                      {/* Icon */}
                      <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className="w-12 h-12 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center">
                          <Icon className="text-[#D4AF37]" size={24} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl text-[#EDEDED] mb-2">
                        {cert.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-[#D4AF37] text-sm mb-3">{cert.organization}</p>

                      {/* Description */}
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline (Cards) */}
          <div className="lg:hidden space-y-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <div
                  key={cert.title}
                  className="card-glass p-6"
                  data-testid={`mobile-timeline-item-${index}`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center">
                        <Icon className="text-[#D4AF37]" size={20} />
                      </div>
                      <span className="text-[#D4AF37] text-sm font-medium">{cert.year}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium tracking-wider uppercase rounded ${getTypeColor(cert.type)}`}>
                      {getTypeLabel(cert.type)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg text-[#EDEDED] mb-2">
                    {cert.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-[#D4AF37] text-sm mb-3">{cert.organization}</p>

                  {/* Description */}
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Events Served' },
              { number: '50+', label: 'Original Recipes' },
              { number: '6', label: 'Industry Awards' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <p className="font-heading text-4xl lg:text-5xl text-[#D4AF37] mb-2">
                  {stat.number}
                </p>
                <p className="text-[#A0A0A0] text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CertificationsPage;
