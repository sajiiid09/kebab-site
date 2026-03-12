import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="relative z-10 bg-background">
        <HeroSection />
        <Navbar />
        <MenuSection />
        <StorySection />
        <TestimonialsSection />
        <LocationSection />
        <ReservationSection />
      </div>
      
      <Footer />
    </>
  );
};

export default Index;
