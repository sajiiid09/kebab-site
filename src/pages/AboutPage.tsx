import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHeroWord from "@/components/PageHeroWord";
import PageNavbar from "@/components/PageNavbar";
import HeadingReveal from "@/components/HeadingReveal";
import ImageReveal from "@/components/ImageReveal";
import BookingSection from "@/components/BookingSection";
import MapImage from "@/components/MapImage";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Emily Thompson",
    role: "Head of service",
    image: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e4808bbfbdc73b7750fb4_pic_NZexport21.png",
  },
  {
    name: "Haruto Nakamura",
    role: "Chef",
    image: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e4807f9cc9a3b2a93fc6e_pic_NZexport22.avif",
  },
  {
    name: "Daniel Collins",
    role: "Waiter",
    image: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e4807078646bcf8d58a44_pic_NZexport20.avif",
  },
  {
    name: "Takeshi & Kenta",
    role: "Co-Manager",
    image: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e4807a08e65772c0e3153_pic_NZexport23.avif",
  },
];

const timelineEntries = [
  {
    year: "2010",
    title: "Founding year",
    text: "The founders envisioned a place where tradition meets modern culinary techniques, and Spicefusion quickly became a favorite spot for locals seeking genuine Japanese cuisine.",
    align: "left" as const,
  },
  {
    year: "2014",
    title: "Expansion and New Location",
    text: "With growing popularity and a loyal customer base, Spicefusion expanded to a larger location. This new venue allowed for a more immersive dining experience, complete with a traditional Japanese decor and an open kitchen.",
    align: "right" as const,
  },
  {
    year: "2018",
    title: "Culinary Innovation, New Menu",
    text: "Embracing the concept of fusion, Spicefusion introduced a revamped menu that blended traditional Japanese dishes with contemporary flavors. This innovation attracted food enthusiasts and expanded the restaurant's reputation.",
    align: "left" as const,
  },
  {
    year: "2024",
    title: "Local Partnerships",
    text: "Spicefusion committed to a new sustainability initiative, focusing on sourcing ingredients locally and reducing its environmental footprint. The restaurant established partnerships with local farmers and fisheries to bring fresh, sustainable ingredients to the table.",
    align: "right" as const,
  },
];

const testimonials = [
  {
    logo: "/images/logo-1.svg",
    quote: "\"A perfect fusion of flavors!\"",
    text: "Spicefusion offers an amazing blend of authentic Japanese flavors with a modern twist. Each dish is a delightful surprise that leaves you wanting more.",
  },
  {
    logo: "/images/logo-3.svg",
    quote: "\"Unique dishes with a creative touch!\"",
    text: "Loved the fusion twist on classic Japanese dishes. Spicefusion blends traditional flavors with creativity, making for a unique and flavorful experience.",
  },
  {
    logo: "/images/logo-2.svg",
    quote: "\"Authentic and delicious!\"",
    text: "Every bite at Spicefusion feels like a trip to Japan. The flavors are authentic, the ingredients fresh, and each dish is crafted with precision and care.",
  },
];

const galleryImages = [
  { src: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e383dcfe34f38b70edd3c_SpiceFusion-Restaurant-Insid.avif", alt: "Restaurant inside" },
  { src: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e47b10b40a6198d2a982a_kina-PaSdZe-htRI-unsplash.avif", alt: "Food close-up" },
  { src: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/67288dff0d8e15d2a545c3b5_zhao-yangjun-WwLaBUGNloQ-unsplash.avif", alt: "Food in bowl" },
  { src: "https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/67288e36dc1abc7a73d1e4cb_farhad-ibrahimzade-XTiGwu_3oho-unsplash.avif", alt: "Sushi platter" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const TimelineItem = ({ entry, index }: { entry: typeof timelineEntries[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const barHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const isLeft = entry.align === "left";
  const isLast = index === timelineEntries.length - 1;

  const content = (
    <div className="flex flex-col gap-2">
      <span className="text-4xl md:text-5xl font-black text-accent">{entry.year}</span>
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-accent">{entry.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{entry.text}</p>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-6 md:gap-0 ${!isLast ? "mb-12" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Left column */}
      <div className={isLeft ? "" : "hidden md:block"}>
        {isLeft ? content : null}
      </div>

      {/* Center timeline bar */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent shrink-0 ring-4 ring-accent/20" />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent"
              style={{ height: barHeight }}
            />
          </div>
        )}
      </div>

      {/* Right column */}
      <div className={!isLeft ? "" : "hidden md:block"}>
        {!isLeft ? content : null}
      </div>

      {/* Mobile fallback — always show content */}
      <div className="md:hidden">
        {content}
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <>
      <div className="relative z-10 bg-background">
        <PageHeroWord
          src="https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670fa82fa62bb7e8a425e128_Hero_BG-About.svg"
          alt="Story Hero Background"
        />
        <PageNavbar />

        {/* About Hero */}
        <section className="py-20 md:py-28">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
              <HeadingReveal as="h1" className="text-3xl md:text-5xl font-black leading-tight">
                About <span className="text-accent">SpiceFusion</span>
              </HeadingReveal>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed self-end"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Discover Spicefusion's journey from a small eatery to a culinary landmark, blending Japanese tradition with innovation and a commitment to sustainability.
              </motion.p>
            </div>

            <ImageReveal delay={0.3}>
              <img
                src="/images/restaurant-inside.avif"
                alt="Japanese Restaurant"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </ImageReveal>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-sf-dark bg-motif">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Sticky left */}
              <div className="md:sticky md:top-32 md:self-start">
                <HeadingReveal as="h2" className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
                  Meet our spicy team
                </HeadingReveal>
                <motion.p
                  className="text-lg text-primary-foreground/60 mb-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  From our skilled chefs to our welcoming staff, each member shares a passion for excellence and hospitality. Discover the people behind the dishes that make Spicefusion a unique dining experience.
                </motion.p>
                <motion.a
                  href="#"
                  className="btn-fill-hover inline-block border-2 border-accent text-accent px-8 py-4 text-sm font-bold tracking-wider uppercase hover:text-accent-foreground transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span>WE ARE HIRING</span>
                </motion.a>
              </div>

              {/* Team grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={cardVariants}
                    className="group relative overflow-hidden aspect-[3/4]"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                      <h5 className="text-primary-foreground font-bold text-lg uppercase tracking-tight">
                        {member.name}
                      </h5>
                      <p className="text-primary-foreground/60 text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-28">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <HeadingReveal as="h2" className="text-3xl md:text-5xl font-black mb-4">
                Discover our <span className="text-accent">journey</span>
              </HeadingReveal>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                From our humble beginnings to the present day, Spicefusion has evolved while staying true to our Japanese roots. Discover the milestones that have shaped our journey, as we've grown from a small eatery to a beloved destination for Japanese cuisine enthusiasts.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timelineEntries.map((entry, i) => (
                <TimelineItem key={entry.year} entry={entry} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (dark) */}
        <section className="py-20 md:py-28 bg-sf-dark">
          <div className="section-container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-border"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.quote}
                  variants={cardVariants}
                  className="flex flex-col items-center text-center px-6"
                >
                  <img src={t.logo} alt="Logo" className="h-8 mb-6 opacity-60" loading="lazy" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-4 uppercase tracking-tight">
                    {t.quote}
                  </h3>
                  <p className="text-primary-foreground/50 leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Big Statement + Gallery */}
        <section className="py-20 md:py-28 overflow-hidden">
          <div className="section-container">
            <div className="text-center max-w-[90%] mx-auto mb-16">
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                SpiceFusion blends authentic{" "}
                <span className="text-accent">Japanese flavors</span>{" "}
                with modern flair, offering a dining experience that honors Japan's rich culinary heritage.
              </motion.h2>
            </div>

            {/* Gallery auto-scroll */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 animate-marquee w-max"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
                  <div key={i} className="shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <BookingSection />
        <MapImage />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
