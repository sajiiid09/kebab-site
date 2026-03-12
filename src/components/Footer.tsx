import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from "lucide-react";
import HeadingReveal from "./HeadingReveal";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "MENU", href: "#menu" },
  { label: "OUR STORY", href: "#story" },
  { label: "RESERVATIONS", href: "#reservation" },
  { label: "LOCATION", href: "#location" },
];

const contactInfo = [
  { Icon: MapPin, text: "123 Fusion Street, Downtown District" },
  { Icon: Clock, text: "Mon–Sat: 11:30 AM – 10:00 PM" },
  { Icon: Phone, text: "+1 (555) 123-4567" },
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Footer = () => {
  return (
    <>
      {/* Image fixed to viewport bottom, always behind everything */}
      <div className="fixed bottom-0 left-0 right-0 z-0 h-[200px] md:h-[300px]">
        <img
          src="/images/restaurant-inside.avif"
          alt="SpiceFusion restaurant interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Footer sits on top, covers the image until user scrolls past */}
      <footer className="relative z-10 bg-sf-dark bg-motif">
        {/* Large heading */}
        <div className="section-container pt-24 pb-16">
          <HeadingReveal
            as="h2"
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tighter text-primary-foreground/10 leading-none"
          >
            SPICEFUSION
          </HeadingReveal>
        </div>

        {/* 3-column grid */}
        <div className="section-container pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Col 1: Brand */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={columnVariants}
            >
              <h3 className="text-lg font-bold tracking-wider text-primary-foreground mb-4">
                VISIT US
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
                Where East meets West in a symphony of flavors. Every dish tells a story, 
                every visit becomes a memory. Join us for an unforgettable culinary journey.
              </p>
            </motion.div>

            {/* Col 2: Navigation */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={columnVariants}
            >
              <h3 className="text-lg font-bold tracking-wider text-primary-foreground mb-4">
                EXPLORE
              </h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm tracking-wider text-primary-foreground/50 hover:text-accent transition-colors duration-300 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Col 3: Contact + Map */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={columnVariants}
            >
              <h3 className="text-lg font-bold tracking-wider text-primary-foreground mb-4">
                CONTACT
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                {contactInfo.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-primary-foreground/50">{text}</span>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-sm border border-primary-foreground/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <div className="section-container">
          <div className="h-px bg-primary-foreground/10" />
        </div>

        {/* Bottom bar */}
        <div className="section-container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/30">
              © 2024 SpiceFusion. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-primary-foreground/30 hover:text-accent transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer equal to image height so page scrolls enough to reveal the fixed image */}
      <div className="h-[200px] md:h-[300px] relative z-0" />
    </>
  );
};

export default Footer;
