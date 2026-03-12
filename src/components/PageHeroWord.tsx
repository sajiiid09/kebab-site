import { motion } from "framer-motion";

interface PageHeroWordProps {
  src: string;
  alt: string;
}

const PageHeroWord = ({ src, alt }: PageHeroWordProps) => {
  return (
    <section className="bg-background overflow-hidden">
      <div className="section-container py-6 md:py-10">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-auto"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroWord;
