import { motion } from "framer-motion";
import HeadingReveal from "./HeadingReveal";
import ImageReveal from "./ImageReveal";

const menuItems = [
  {
    name: "Sake Mojito",
    price: "10.99",
    description: "A refreshing twist on the classic mojito with sake, fresh mint, lime, and a touch of sweetness.",
    image: "/images/sake-mojito.avif",
  },
  {
    name: "Seafood Udon",
    price: "15.00",
    description: "Udon noodles in a rich broth, loaded with shrimp, scallops, and vegetables, garnished with seaweed.",
    image: "/images/seafood-udon.avif",
  },
  {
    name: "Matcha Cheesecake",
    price: "6.50",
    description: "Creamy cheesecake infused with matcha green tea, served on a graham cracker crust and topped with whipped cream.",
    image: "/images/matcha-cheesecake.avif",
  },
  {
    name: "Sushi Platter",
    price: "24.99",
    description: "An assortment of nigiri and maki rolls, featuring salmon, tuna, and eel, beautifully presented with pickled ginger and wasabi.",
    image: "/images/sushi-platter.avif",
  },
  {
    name: "Miso Ramen",
    price: "11.75",
    description: "Rich miso broth with ramen noodles, topped with sliced pork, green onions, and a soft-boiled egg, garnished with nori.",
    image: "/images/miso-ramen.avif",
  },
  {
    name: "Teriyaki Chicken Bowl",
    price: "10.50",
    description: "Grilled chicken glazed with a savory teriyaki sauce, served over steamed rice with a side of seasonal vegetables.",
    image: "/images/teriyaki-chicken.avif",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const MenuSection = () => {
  return (
    <section id="menu" className="bg-background py-24 md:py-32">
      <div className="section-container">
        <div className="flex items-center justify-between mb-14">
          <HeadingReveal className="text-2xl md:text-4xl font-black">
            OUR MAIN DISHES
          </HeadingReveal>
          <motion.a
            href="#menu"
            className="btn-fill-hover text-sm font-semibold tracking-wider text-accent border border-accent px-5 py-2 transition-colors hover:text-accent-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span>SEE OUR MENU</span>
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {menuItems.map((dish) => (
            <motion.div
              key={dish.name}
              variants={item}
              className="group cursor-pointer"
            >
              <ImageReveal>
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </ImageReveal>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{dish.name}</h3>
                  <span className="text-accent font-bold">${dish.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
