import HeadingReveal from "./HeadingReveal";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Japanese cuisine", rotate: "-10deg", top: "10%", left: "5%", width: "35%", zIndex: 1 },
  { src: "/images/gallery-2.png", alt: "Chef preparation", rotate: "-5deg", top: "5%", left: "20%", width: "30%", zIndex: 2 },
  { src: "/images/gallery-3.avif", alt: "Team member", rotate: "0deg", top: "0%", left: "35%", width: "30%", zIndex: 5 },
  { src: "/images/gallery-4.png", alt: "Fresh ingredients", rotate: "5deg", top: "5%", left: "50%", width: "30%", zIndex: 3 },
  { src: "/images/gallery-5.jpg", alt: "Dining experience", rotate: "10deg", top: "10%", left: "60%", width: "35%", zIndex: 1 },
];

const StorySection = () => {
  return (
    <section id="story" className="bg-sf-dark py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        {/* Overlapping Card Collage */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] mb-20">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="absolute overflow-hidden shadow-2xl border-2 border-background/10 hover:scale-105 hover:z-10 transition-transform duration-500"
              style={{
                transform: `rotate(${img.rotate})`,
                top: img.top,
                left: img.left,
                width: img.width,
                zIndex: img.zIndex,
                aspectRatio: "4/3",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Centered Heading */}
        <HeadingReveal
          as="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.95] text-center text-primary-foreground max-w-5xl mx-auto"
          delay={0.2}
        >
          SPICEFUSION BLENDS AUTHENTIC{" "}
          <span className="text-accent">JAPANESE FLAVORS</span>{" "}
          <img src="/images/sushi-platter.avif" alt="Sushi" className="inline-block w-[1.8em] h-[1.2em] object-cover rounded-sm align-middle mx-1" />{" "}
          WITH MODERN FLAIR{" "}
          <img src="/images/miso-ramen.avif" alt="Ramen" className="inline-block w-[1.8em] h-[1.2em] object-cover rounded-sm align-middle mx-1" />{" "}
          OFFERING A DINING EXPERIENCE THAT HONORS
          JAPAN'S RICH CULINARY HERITAGE
        </HeadingReveal>
      </div>
    </section>
  );
};

export default StorySection;
