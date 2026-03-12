import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import HeadingReveal from "./HeadingReveal";
import ImageReveal from "./ImageReveal";

const LocationSection = () => {
  return (
    <section id="location" className="bg-background py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-4">
          <HeadingReveal className="text-2xl md:text-4xl font-black">
            WHERE TO FIND US
          </HeadingReveal>
          <motion.a
            href="#location"
            className="btn-fill-hover text-sm font-semibold tracking-wider text-accent border border-accent px-5 py-2 transition-colors hover:text-accent-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span>CONTACT US</span>
          </motion.a>
        </div>

        {/* Decorative accent divider */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        >
          <span className="h-px w-16 bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageReveal delay={0.2}>
            <div className="overflow-hidden group">
              <img
                src="/images/location.avif"
                alt="Japanese Restaurant exterior"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </ImageReveal>

          <motion.div
            className="flex flex-col justify-center gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
          >
            {[
              { Icon: MapPin, label: "Address:", value: "123 Sakura Street, Tokyo, Japan, 100-0001" },
              { Icon: Clock, label: "Opening hours:", value: "Tuesday to Sunday → 12 AM - 11 PM" },
              { Icon: Phone, label: "Call us:", value: "+81 3-1234-5678" },
            ].map(({ Icon, label, value }) => (
              <motion.div
                key={label}
                className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2 hover:translate-x-1 transition-transform duration-300 group"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
                }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
