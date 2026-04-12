"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const amenities = [
  {
    id: "golf",
    title: "The Links at Parthenon",
    subtitle: "Golf Simulation Lounge",
    description:
      "Tour-caliber golf simulators in a lounge environment worthy of the game. Practice, compete, and unwind between sessions.",
    image: "/images/golf-lounge.png",
    tag: "Signature",
  },
  {
    id: "studio",
    title: "Movement Studio",
    subtitle: "50+ Weekly Classes",
    description:
      "A full programming calendar across disciplines: strength, yoga, cycling, HIIT, pilates, and more. Expert instruction, premium equipment.",
    image: "/images/studio.png",
    tag: "Daily",
  },
  {
    id: "recovery",
    title: "Recovery Suite",
    subtitle: "Sauna, Cold Plunge & Infrared",
    description:
      "A recovery protocol rooted in science: Finnish sauna, cold plunge, infrared therapy, and dedicated recovery-specific programming.",
    image: "/images/plunge-sauna.png",
    tag: "Included",
  },
  {
    id: "fitness",
    title: "Fitness Floor",
    subtitle: "24/7 Premium Equipment",
    description:
      "Technogym, Life Fitness, and specialty strength equipment. Spacious, uncrowded, and designed for serious training at any hour.",
    image: "/images/cardio.png",
    tag: "24/7",
  },
  {
    id: "surf",
    title: "Indoor Surf Simulator",
    subtitle: "Year-Round Wave Riding",
    description:
      "An indoor stationary wave pool built for all skill levels. Learn to surf, sharpen your form, or just experience the thrill of riding water indoors, any season.",
    image: "/images/indoor-surf.png",
    tag: "Signature",
  },
];

const nonImageAmenities = [
  {
    title: "Coworking Lounge",
    subtitle: "1,500 SF Professional Workspace",
    description:
      "A quiet, professional environment between sessions. High-speed internet, private call rooms, and premium seating. Included with membership.",
    icon: "⊞",
  },
  {
    title: "Junior Programs",
    subtitle: "Structured Childcare & Youth Fitness",
    description:
      "Train without guilt. Certified childcare staff, structured junior programming, and a safe environment for kids while you work.",
    icon: "◎",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-cream grain-overlay py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll className="mb-20">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <span className="font-sans text-xs tracking-[0.35em] text-gold uppercase mb-4 block">
                The Experience
              </span>
              <h2
                className="font-serif text-charcoal font-light"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything you need.
                <br />
                <em className="italic text-walnut">Nothing you don&apos;t.</em>
              </h2>
            </div>
            <p className="font-sans text-sm text-charcoal/55 max-w-sm leading-7">
              Six distinct spaces designed around the complete athlete. Not amenity theater -- thoughtfully
              curated to serve how serious people actually train and recover.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Primary amenity grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {amenities.map((amenity, i) => (
            <AnimateOnScroll key={amenity.id} delay={i * 0.1} className={amenity.id === "surf" ? "md:col-span-2" : ""}>
              <div className={`amenity-card group relative overflow-hidden bg-charcoal ${amenity.id === "surf" ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 right-5 bg-gold/90 text-cream font-sans text-xs tracking-widest uppercase px-3 py-1">
                  {amenity.tag}
                </div>

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-sans text-xs tracking-widest uppercase text-sandstone/80 mb-1">
                    {amenity.subtitle}
                  </p>
                  <h3 className="font-serif text-cream text-2xl font-light mb-3">{amenity.title}</h3>
                  <p className="font-sans text-xs text-cream/60 leading-6 max-w-xs transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Secondary amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nonImageAmenities.map((amenity, i) => (
            <AnimateOnScroll key={amenity.title} delay={i * 0.1}>
              <div className="bg-walnut/8 border border-sandstone/20 p-10 lg:p-12 h-full group hover:border-gold/40 transition-colors duration-400">
                <div className="flex flex-col gap-5 h-full">
                  <span className="text-gold text-2xl">{amenity.icon}</span>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-sandstone/70 mb-1">
                      {amenity.subtitle}
                    </p>
                    <h3 className="font-serif text-charcoal text-2xl font-light">{amenity.title}</h3>
                  </div>
                  <div className="w-8 h-px bg-gold/30" />
                  <p className="font-sans text-sm text-charcoal/60 leading-7">{amenity.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
