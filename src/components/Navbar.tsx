import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "MENU", href: "#menu" },
  { label: "OUR STORY", href: "#story" },
  { label: "INSIGHTS", href: "#testimonials" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const navRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element placed at the navbar's natural position */}
      <div ref={sentinelRef} className="h-0" />
      <nav
        ref={navRef}
        className={`z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${
          isSticky ? "sticky top-0 shadow-md" : "relative"
        }`}
      >
        <div className="section-container flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hidden md:block text-base lg:text-lg font-semibold tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-accent after:transition-transform after:duration-300 after:origin-left ${
                  activeSection === link.href
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:after:scale-x-100 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#reservation"
            className="hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold tracking-wider text-foreground hover:text-accent transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse" />
            RESERVATIONS
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b border-border"
            >
              <div className="section-container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-semibold tracking-wider text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#reservation"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm font-semibold tracking-wider text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  RESERVATIONS
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
