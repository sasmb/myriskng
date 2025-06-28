"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "MyRisk.ng transformed our risk management approach. We&apos;re now 5x more prepared for business challenges.",
    by: "Adebayo Ogundimu, CEO at TechForte Nigeria",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "I&apos;m confident our business is protected with MyRisk.ng. Their risk assessment is unmatched in Nigeria.",
    by: "Funmi Adebisi, COO at SecureBank Lagos",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "We were struggling with compliance before MyRisk.ng. Now we&apos;re ahead of all regulatory requirements!",
    by: "Chukwudi Okoro, CFO at InnovateNG",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "MyRisk.ng&apos;s business continuity planning made us resilient. We sailed through the recent market disruptions.",
    by: "Kemi Adeyemi, MD at FuturePlanning Ltd",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for risk management expertise, I'd give 12. MyRisk.ng is exceptional.",
    by: "Samuel Ajayi, Head of Operations at CreativeWorks",
    imgSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "SO GRATEFUL WE FOUND MYRISK.NG!!!! They've saved us countless hours and potential losses.",
    by: "Jennifer Eze, Risk Manager at TimeWise Solutions",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we&apos;re with MyRisk.ng, we&apos;re never switching risk consultants.",
    by: "Patricia Okafor, Marketing Director at BrandBuilders",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "MyRisk.ng&apos;s risk analytics transformed our decision-making. The ROI is EASILY 100X for our business.",
    by: "Daniel Iwueze, Data Analyst at AnalyticsPro Nigeria",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "Best risk management consultancy in Nigeria. Period.",
    by: "Fernando Adamu, Business Owner at UserFirst Tech",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "Switched to MyRisk.ng 3 years ago and our business risks have never been better managed.",
    by: "Andrew Ugochukwu, MD at CloudMasters Nigeria",
    imgSrc: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 10,
    testimonial: "I&apos;ve been searching for expert risk consultants like MyRisk.ng for YEARS. Finally found them!",
    by: "Peter Okoye, Sales Director at RevenueMax",
    imgSrc: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 11,
    testimonial: "MyRisk.ng&apos;s approach is so clear and practical, our team understood everything in 30 minutes.",
    by: "Marina Okonkwo, HR Director at TalentForge",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 12,
    testimonial: "MyRisk.ng&apos;s support is unparalleled. They&apos;re always available when we need risk guidance.",
    by: "Olivia Nnamdi, Customer Success at ClientCare Ltd",
    imgSrc: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 13,
    testimonial: "The efficiency improvements since implementing MyRisk.ng&apos;s solutions are incredible!",
    by: "Rajesh Patel, Operations Manager at StreamlineNG",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 14,
    testimonial: "MyRisk.ng revolutionized our risk management workflow. It&apos;s a complete game-changer!",
    by: "Lilian Adeola, Risk Specialist at ProcessPro",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 15,
    testimonial: "MyRisk.ng&apos;s scalable solutions grow with our business perfectly. Highly recommended!",
    by: "Trevor Osagie, Growth Manager at GrowthGurus",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-white border-primary" 
          : "z-0 bg-white dark:bg-gray-dark text-black dark:text-white border-gray-200 dark:border-gray-700 hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0,0,0,0.1)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200 dark:bg-gray-600"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top rounded"
        style={{
          boxShadow: "3px 3px 0px rgba(255,255,255,0.8)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium",
        isCenter ? "text-white" : "text-black dark:text-white"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/90" : "text-body-color dark:text-body-color-dark"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-light dark:bg-bg-color-dark"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded",
            "bg-white dark:bg-gray-dark border-2 border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white text-black dark:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded",
            "bg-white dark:bg-gray-dark border-2 border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white text-black dark:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}; 