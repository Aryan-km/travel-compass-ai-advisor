
import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingChatButton from "@/components/FloatingChatButton";
import InsuranceStats from "@/components/InsuranceStats";
import PopularDestinations from "@/components/PopularDestinations";
import HeroSection from "@/components/HeroSection";
import WhyInsurance from "@/components/WhyInsurance";
import HowItWorks from "@/components/HowItWorks";
import InsuranceTypes from "@/components/InsuranceTypes";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Get all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 backdrop-blur-md bg-background/80">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-4xl font-bold text-gradient">Travel Shield AI</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#why-insurance" className="hover:text-primary transition-colors">Why Insurance</a>
              <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              <a href="#insurance-types" className="hover:text-primary transition-colors">Coverage</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQs</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onChatClick={handleChatClick} />
        
        <div className="container">
          {/* Why Travel Insurance Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <WhyInsurance />
          </div>
          
          {/* Stats Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <InsuranceStats />
          </div>
          
          {/* How It Works Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <HowItWorks />
          </div>
          
          {/* Insurance Types Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <InsuranceTypes />
          </div>
          
          {/* Popular Destinations Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <PopularDestinations />
          </div>
          
          {/* FAQ Section */}
          <div className="reveal" ref={el => el && sectionsRef.current.push(el)}>
            <FAQSection />
          </div>
        </div>
        
        {/* Floating Chat Button */}
        <FloatingChatButton initialOpen={isChatOpen} />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
