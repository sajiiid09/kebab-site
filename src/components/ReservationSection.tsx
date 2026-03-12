import { motion } from "framer-motion";
import { useState } from "react";
import HeadingReveal from "./HeadingReveal";

const inputClass =
  "bg-accent-foreground/5 border border-accent-foreground/15 px-4 py-3.5 text-accent-foreground placeholder:text-accent-foreground/35 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300";

const formFieldVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/reservation-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-sf-dark/85" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative top accent line */}
          <motion.div
            className="w-16 h-0.5 bg-accent mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          <HeadingReveal as="h2" className="text-2xl md:text-4xl font-black text-accent-foreground text-center mb-3">
            BOOK YOUR TABLE NOW
          </HeadingReveal>
          <motion.p
            className="text-center text-accent-foreground/70 mb-6"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Secure your spot for an unforgettable dining experience at SpiceFusion
          </motion.p>

          {/* Chopstick divider */}
          <motion.div
            className="flex items-center justify-center gap-1.5 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="h-8 w-px bg-accent/60 rotate-12" />
            <span className="h-8 w-px bg-accent/60 -rotate-12" />
          </motion.div>

          {/* Glass form container */}
          <div className="backdrop-blur-sm bg-accent-foreground/5 border border-accent-foreground/10 p-6 md:p-10">
            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <h3 className="text-2xl font-bold text-accent-foreground mb-2">
                  Thank you!
                </h3>
                <p className="text-accent-foreground/70">
                  Your submission has been received! Our team will come back to you
                  asap to confirm your reservation.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
                }}
              >
                <motion.input variants={formFieldVariants} type="text" placeholder="Full name*" required className={inputClass} />
                <motion.input variants={formFieldVariants} type="email" placeholder="Email*" required className={inputClass} />
                <motion.input variants={formFieldVariants} type="tel" placeholder="Phone*" required className={inputClass} />
                <motion.input variants={formFieldVariants} type="number" placeholder="Number of guests*" required min={1} className={inputClass} />
                <motion.input variants={formFieldVariants} type="date" required className={inputClass} />
                <motion.input variants={formFieldVariants} type="time" required className={inputClass} />
                <motion.textarea
                  variants={formFieldVariants}
                  placeholder="Leave a note if needed (allergies, outside/inside...)"
                  rows={3}
                  className={`md:col-span-2 ${inputClass} resize-none`}
                />
                <motion.div variants={formFieldVariants} className="md:col-span-2">
                  <button
                    type="submit"
                    className="btn-fill-hover w-full border border-accent bg-accent text-accent-foreground py-4 text-base font-bold tracking-wider uppercase transition-colors hover:text-background"
                  >
                    <span>RESERVE NOW</span>
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

export default ReservationSection;
