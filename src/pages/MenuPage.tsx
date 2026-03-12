import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeroWord from "@/components/PageHeroWord";
import PageNavbar from "@/components/PageNavbar";
import HeadingReveal from "@/components/HeadingReveal";
import BookingSection from "@/components/BookingSection";
import MapImage from "@/components/MapImage";
import Footer from "@/components/Footer";

type Category = "all" | "drinks" | "starters" | "main" | "desserts" | "signature";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  category: Category[];
}

const menuItems: MenuItem[] = [
  {
    name: "Sake Mojito",
    price: "10.99",
    description: "A refreshing twist on the classic mojito with sake, fresh mint, lime, and a touch of sweetness.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f769069a4bf4c73784943_gourmet-lenz-njeBWL63vyA-unsplash.avif",
    category: ["drinks", "signature"],
  },
  {
    name: "Yuzu Lemonade",
    price: "4.50",
    description: "A tangy and sweet lemonade infused with Japanese yuzu citrus for a unique, zesty flavor.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f764330f3b9109e26b014_francesca-hotchin-p5EiqkBYIEE-unsplash.avif",
    category: ["drinks"],
  },
  {
    name: "Matcha Iced Latte",
    price: "3.50",
    description: "Refreshing blend of premium matcha and creamy milk over ice, with a hint of sweetness.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f75d65666ea34c50e18a6_jason-leung-Z-hvocTfR_s-unsplash.avif",
    category: ["drinks"],
  },
  {
    name: "Green Tea Ice Cream",
    price: "4.50",
    description: "Creamy ice cream infused with authentic green tea flavor, a perfect way to end your meal.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f785b9bd7b5961c6d9ddb_jason-richard-PnIHvHZsH4Q-unsplash.avif",
    category: ["desserts"],
  },
  {
    name: "Seafood Udon",
    price: "15.00",
    description: "Udon noodles in a rich broth, loaded with shrimp, scallops, and vegetables, garnished with seaweed.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f7781c01ea9191825578c_youjeen-cho-1zlLiOT81Jw-unsplash.avif",
    category: ["main", "signature"],
  },
  {
    name: "Pork Gyoza",
    price: "8.99",
    description: "Pan-fried dumplings filled with seasoned pork and vegetables, served with a soy dipping sauce.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f78076d0ccf9681a46b95_pic_NZexport9.avif",
    category: ["starters"],
  },
  {
    name: "Matcha Cheesecake",
    price: "6.50",
    description: "Creamy cheesecake infused with matcha green tea, served on a graham cracker crust and topped with whipped cream.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f77ed30325ed83a4a54ac_oh_ja_that_oke-XLBUGNloQ-unsplash.avif",
    category: ["desserts", "signature"],
  },
  {
    name: "Beef Teriyaki",
    price: "14.50",
    description: "Tender beef marinated in teriyaki sauce, grilled to perfection and served with steamed rice and sautéed vegetables.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f77b8f4d64aa42d6060cb_pic_NZexport18.avif",
    category: ["main"],
  },
  {
    name: "Sushi Platter",
    price: "24.99",
    description: "An assortment of nigiri and maki rolls, featuring salmon, tuna, and eel, beautifully presented with pickled ginger and wasabi.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f77030eb2b243d33a26c0_farhad-ibrahimzade-XTiGwu_3oho-unsplash.avif",
    category: ["main", "signature"],
  },
  {
    name: "Tempura Udon",
    price: "13.25",
    description: "Thick udon noodles in a savory broth, served with crispy tempura shrimp and vegetables, garnished with scallions.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f7781c01ea9191825578c_youjeen-cho-1zlLiOT81Jw-unsplash.avif",
    category: ["main"],
  },
  {
    name: "Miso Ramen",
    price: "11.75",
    description: "Rich miso broth with ramen noodles, topped with sliced pork, green onions, and a soft-boiled egg, garnished with nori.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f775bc205d15849a3896c_pic_NZexport17.avif",
    category: ["main", "signature"],
  },
  {
    name: "Teriyaki Chicken Bowl",
    price: "10.50",
    description: "Grilled chicken glazed with a savory teriyaki sauce, served over steamed rice with a side of seasonal vegetables.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f7739468d206ec97bb594_tomoyo-s-VhuC3z2o8vQ-unsplash.avif",
    category: ["main"],
  },
  {
    name: "Spicy Tuna Sushi",
    price: "12.99",
    description: "A delightful blend of fresh tuna, spicy mayo, and avocado wrapped in sushi rice and nori, served with soy sauce and wasabi.",
    image: "https://cdn.prod.website-files.com/670e3b05edb9121a5323055a/670f77030eb2b243d33a26c0_farhad-ibrahimzade-XTiGwu_3oho-unsplash.avif",
    category: ["main", "signature"],
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All items", value: "all" },
  { label: "Drinks", value: "drinks" },
  { label: "Starters", value: "starters" },
  { label: "Main courses", value: "main" },
  { label: "Desserts", value: "desserts" },
  { label: "Signature", value: "signature" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category.includes(activeCategory));

  return (
    <>
      <div className="relative z-10 bg-background">
        <PageHeroWord
          src="https://cdn.prod.website-files.com/670e1d8ad2bdbb5c53fb10e3/670f6b56c12719190fb541c4_Hero-Menu_BG.svg"
          alt="Menu Hero Background"
        />
        <PageNavbar />

        {/* Heading */}
        <section className="py-20 md:py-28">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <HeadingReveal as="h1" className="text-3xl md:text-5xl font-black mb-4">
                Explore our menu
              </HeadingReveal>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Discover a curated selection of dishes that blend traditional Japanese flavors with contemporary flair. Whether you're craving sushi, ramen, or signature creations, our menu offers something for every palate.
              </motion.p>
            </div>

            {/* Category Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase border transition-all duration-300 overflow-hidden ${
                    activeCategory === cat.value
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                      activeCategory === cat.value ? "bg-accent-foreground" : "bg-accent"
                    }`}
                  />
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Menu Items */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                  exit: {},
                }}
                key={activeCategory}
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="group flex items-start gap-6 py-8 border-b border-border last:border-b-0 cursor-pointer transition-all duration-300 hover:bg-secondary/30 hover:px-4"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight shrink-0 group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dotted border-muted-foreground/30 min-w-[40px] translate-y-[-4px]" />
                        <span className="text-lg md:text-xl font-bold text-accent shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <BookingSection />
        <MapImage />
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
