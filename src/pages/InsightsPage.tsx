import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageNavbar from "@/components/PageNavbar";
import HeadingReveal from "@/components/HeadingReveal";
import Footer from "@/components/Footer";

/* ── data ── */

interface Article {
  title: string;
  date: string;
  description: string;
  image: string;
}

const popularMain: Article = {
  title: "Seasonal Japanese Dishes",
  date: "October 15, 2023",
  description:
    "Explore the beauty of seasonal Japanese cuisine, where each dish reflects the flavors and ingredients of the current season. From spring cherry blossom-inspired sweets to hearty winter hot pots.",
  image: "/images/sushi-platter.avif",
};

const popularSecondary: Article[] = [
  {
    title: "The Ramen Bowl Revolution",
    date: "October 12, 2023",
    description:
      "Discover how ramen has evolved from a simple noodle soup to a global culinary phenomenon.",
    image: "/images/miso-ramen.avif",
  },
  {
    title: "Sushi Making Class",
    date: "October 10, 2023",
    description:
      "Join our master chef for an intimate sushi-making experience and learn the art of perfect nigiri.",
    image: "/images/seafood-udon.avif",
  },
  {
    title: "Japanese Food Pairing Guide",
    date: "October 8, 2023",
    description:
      "Learn the art of pairing Japanese dishes with the perfect beverages, from sake to matcha.",
    image: "/images/sake-mojito.avif",
  },
];

const lastPosts: Article[] = [
  {
    title: "Seasonal Japanese Dishes",
    date: "October 15, 2023",
    description:
      "Explore the beauty of seasonal Japanese cuisine, where each dish reflects the flavors and ingredients of the current season.",
    image: "/images/sushi-platter.avif",
  },
  {
    title: "Japanese Street Food Adventures",
    date: "October 14, 2023",
    description:
      "Take a culinary journey through Japan's vibrant street food scene, from takoyaki to yakitori.",
    image: "/images/teriyaki-chicken.avif",
  },
  {
    title: "Tempura Delights",
    date: "October 13, 2023",
    description:
      "Discover the secrets behind perfectly crispy tempura and the dipping sauces that make it special.",
    image: "/images/matcha-cheesecake.avif",
  },
  {
    title: "Exploring Japanese Tea Culture",
    date: "October 12, 2023",
    description:
      "Dive into the serene world of Japanese tea ceremonies and discover the different types of tea.",
    image: "/images/sake-mojito.avif",
  },
  {
    title: "The Ramen Bowl Revolution",
    date: "October 11, 2023",
    description:
      "Discover how ramen has evolved from a simple noodle soup to a global culinary phenomenon.",
    image: "/images/miso-ramen.avif",
  },
  {
    title: "Sushi Making Class",
    date: "October 10, 2023",
    description:
      "Join our master chef for an intimate sushi-making experience and learn the art of perfect nigiri.",
    image: "/images/seafood-udon.avif",
  },
  {
    title: "Japanese Cuisine 101",
    date: "October 9, 2023",
    description:
      "A beginner's guide to understanding the fundamental principles and ingredients of Japanese cooking.",
    image: "/images/sushi-platter.avif",
  },
  {
    title: "The Art of Japanese Pickling",
    date: "October 8, 2023",
    description:
      "Learn about tsukemono, the traditional Japanese art of pickling vegetables for flavor and preservation.",
    image: "/images/teriyaki-chicken.avif",
  },
  {
    title: "The History of Sushi",
    date: "October 7, 2023",
    description:
      "Trace the fascinating history of sushi from its origins as preserved fish to today's artful creations.",
    image: "/images/matcha-cheesecake.avif",
  },
  {
    title: "Ramen Festival 2023",
    date: "October 6, 2023",
    description:
      "Join us for our annual ramen festival featuring guest chefs and exclusive limited-edition bowls.",
    image: "/images/miso-ramen.avif",
  },
  {
    title: "Sushi Making Workshop",
    date: "October 5, 2023",
    description:
      "A hands-on workshop where you'll learn to prepare and present sushi like a professional chef.",
    image: "/images/seafood-udon.avif",
  },
  {
    title: "Japanese Food Pairing Guide",
    date: "October 4, 2023",
    description:
      "Learn the art of pairing Japanese dishes with the perfect beverages, from sake to matcha.",
    image: "/images/sake-mojito.avif",
  },
];

/* ── reusable pieces ── */

const SectionDividerHeading = ({ children }: { children: string }) => (
  <div className="flex items-center gap-6 mb-12">
    <div className="flex-1 h-px bg-border" />
    <HeadingReveal
      as="h3"
      className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap"
    >
      {children}
    </HeadingReveal>
    <div className="flex-1 h-px bg-border" />
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

/* ── page ── */

const InsightsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-background overflow-hidden">
        <div className="section-container py-6 md:py-10">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h1
                className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-none text-foreground"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                NEWS
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      <PageNavbar />

      {/* Popular Articles */}
      <section className="section-container py-16 md:py-24">
        <SectionDividerHeading>Popular articles</SectionDividerHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main featured card */}
          <motion.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <div className="overflow-hidden rounded-sm mb-5">
              <img
                src={popularMain.image}
                alt={popularMain.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {popularMain.date}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {popularMain.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {popularMain.description}
            </p>
          </motion.article>

          {/* Secondary cards stack */}
          <div className="flex flex-col gap-6">
            {popularSecondary.map((article, i) => (
              <motion.article
                key={article.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group flex gap-5"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    {article.date}
                  </p>
                  <h3 className="text-base md:text-lg font-bold tracking-tight mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Last Posts */}
      <section className="section-container py-16 md:py-24">
        <SectionDividerHeading>Last posts</SectionDividerHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {lastPosts.map((article, i) => (
            <motion.article
              key={`${article.title}-${i}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group"
            >
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {article.date}
              </p>
              <h3 className="text-base md:text-lg font-bold tracking-tight mb-2">
                {article.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {article.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent bg-motif py-20 md:py-28">
        <div className="section-container text-center">
          <HeadingReveal
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent-foreground mb-4"
          >
            Feeling hungry?
          </HeadingReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-foreground/70 mb-8 text-sm md:text-base"
          >
            Reserve your table and experience the art of Japanese cuisine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              to="/#reservation"
              className="btn-fill-hover inline-flex items-center gap-2 border-2 border-accent-foreground px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-accent-foreground hover:text-accent transition-colors duration-300"
            >
              <span>Book a table</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsPage;
