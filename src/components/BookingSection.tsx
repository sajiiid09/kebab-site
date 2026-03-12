import { motion } from "framer-motion";
import { useState } from "react";
import HeadingReveal from "./HeadingReveal";

const labelClass = "text-sm font-semibold text-accent-foreground mb-1 block";
const inputClass =
  "w-full bg-accent-foreground/10 border border-accent-foreground/20 px-4 py-3 text-accent-foreground placeholder:text-accent-foreground/40 text-sm focus:outline-none focus:border-accent-foreground/50 transition-all duration-300";

const formFieldVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 bg-accent">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <HeadingReveal as="h2" className="text-2xl md:text-4xl font-black text-accent-foreground mb-3">
              BOOK YOUR TABLE NOW
            </HeadingReveal>
            <motion.p
              className="text-accent-foreground/70 text-lg"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Secure your spot for an unforgettable dining experience at Spicefusion
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Image */}
            <motion.img
              src="https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670e47b097da4ec97a698974_huzaifa-bukhari-NxpzvLb0ZWU-unsplash.jpg"
              alt="Restaurant ambiance"
              className="w-full h-full object-cover hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              loading="lazy"
            />

            {/* Form */}
            {submitted ? (
              <motion.div
                className="flex items-center justify-center py-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-accent-foreground mb-2">Thank you!</h3>
                  <p className="text-accent-foreground/70">
                    Your submission has been received! Our team will come back to you asap to confirm your reservation.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
                }}
              >
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Full name<span className="text-sf-dark">*</span></label>
                  <input type="text" placeholder="John Doe" required className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Email<span className="text-sf-dark">*</span></label>
                  <input type="email" placeholder="john@email.com" required className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Phone<span className="text-sf-dark">*</span></label>
                  <input type="tel" placeholder="+81 3-1234-5678" required className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Number of guests<span className="text-sf-dark">*</span></label>
                  <input type="number" placeholder="2" required min={1} className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Date*</label>
                  <input type="date" required className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label className={labelClass}>Time*</label>
                  <input type="time" required className={inputClass} />
                </motion.div>
                <motion.div variants={formFieldVariants} className="sm:col-span-2">
                  <label className={labelClass}>Leave a note if needed (allergie, outside/inside...)</label>
                  <textarea placeholder="Your message" rows={3} className={`${inputClass} resize-none`} />
                </motion.div>
                <motion.div variants={formFieldVariants} className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-accent-foreground text-accent py-4 text-base font-bold tracking-wider uppercase hover:bg-accent-foreground/90 transition-colors"
                  >
                    SEND MY MESSAGE
                  </button>
                </motion.div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
