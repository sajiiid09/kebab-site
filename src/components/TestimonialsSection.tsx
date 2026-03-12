import { motion } from "framer-motion";
import HeadingReveal from "./HeadingReveal";

const testimonials = [
  {
    logo: "/images/logo-1.svg",
    quote: "A perfect fusion of flavors!",
    text: "Spicefusion offers an amazing blend of authentic Japanese flavors with a modern twist. Each dish is a delightful surprise that leaves you wanting more.",
  },
  {
    logo: "/images/logo-3.svg",
    quote: "Unique dishes with a creative touch!",
    text: "Loved the fusion twist on classic Japanese dishes. Spicefusion blends traditional flavors with creativity, making for a unique and flavorful experience.",
  },
  {
    logo: "/images/logo-2.svg",
    quote: "Authentic and delicious!",
    text: "Every bite at Spicefusion feels like a trip to Japan. The flavors are authentic, the ingredients fresh, and each dish is crafted with precision and care.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-14">
          <HeadingReveal as="h2" className="text-2xl md:text-4xl font-black">
            WHAT PEOPLE SAY
          </HeadingReveal>
          <motion.div
            className="flex items-center justify-center gap-3 mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-px w-12 bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-px w-12 bg-accent" />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { y: 30, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
              }}
              className="border border-border bg-background p-8 flex flex-col border-t-2 border-t-accent hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
            >
              <img
                src={t.logo}
                alt="Brand logo"
                className="h-8 w-auto mb-6 self-start opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="overflow-hidden mb-3">
                <motion.h3
                  className="text-lg font-bold"
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-accent text-2xl font-serif leading-none mr-1">"</span>
                  {t.quote}
                </motion.h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                {t.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#story"
            className="btn-fill-hover inline-block border-2 border-foreground px-10 py-4 text-sm font-bold tracking-wider transition-colors duration-300 hover:text-background"
          >
            <span>DISCOVER OUR STORY</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
