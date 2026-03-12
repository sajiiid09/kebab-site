import { motion } from "framer-motion";
import HeadingReveal from "./HeadingReveal";
import ImageReveal from "./ImageReveal";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Giant Logo */}
      <div className="w-full bg-sf-dark py-4 md:py-8">
        <div className="section-container">
          <motion.img
            src="/images/hero-logo.svg"
            alt="SpiceFusion"
            className="w-full h-auto"
            initial={{ y: "20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="bg-motif bg-background">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-4xl">
            <HeadingReveal as="h1" className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95]">
              THE PERFECT BLEND OF TRADITION AND INNOVATION IN{" "}
              <span className="text-accent">JAPANESE CUISINE</span>
            </HeadingReveal>
          </div>

          <motion.div
            className="overflow-hidden mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              At SpiceFusion, we craft a unique blend of traditional Japanese
              flavors and modern culinary techniques. Immerse yourself in a
              refined dining experience where every dish showcases the elegance
              and boldness of Japanese cuisine, reimagined for the contemporary
              palate.
            </motion.p>
          </motion.div>

          {/* Restaurant Image with reveal overlay */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ImageReveal delay={0.7}>
              <img
                src="/images/restaurant-inside.avif"
                alt="Japanese restaurant interior"
                className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </ImageReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
