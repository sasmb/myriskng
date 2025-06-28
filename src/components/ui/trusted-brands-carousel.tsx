"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import brandsData from "@/components/Brands/brandsData";

// Duplicate the brands array to create a seamless infinite scroll effect
const extendedBrandsData = [...brandsData, ...brandsData, ...brandsData];

function TrustedBrandsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000); // Auto-scroll every 3 seconds
  }, [api, current]);

  return (
    <div className="w-full py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold text-black dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto">
              Join thousands of Nigerian businesses that trust MyRisk.ng for comprehensive risk management solutions. 
              From startups to enterprise companies, we protect what matters most.
            </p>
          </div>
          
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {extendedBrandsData.map((brand, index) => (
                <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/6" key={`${brand.id}-${index}`}>
                  <div className="flex rounded-lg aspect-square bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-700 items-center justify-center p-6 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain dark:hidden filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <Image
                        src={brand.imageLight}
                        alt={`${brand.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain hidden dark:block filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-body-color dark:text-body-color-dark">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 font-semibold">4.9/5</span>
              </div>
              <span>Customer Satisfaction</span>
            </div>
            
            <div className="flex items-center gap-2 text-body-color dark:text-body-color-dark">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-semibold">150+</span> Businesses Protected</span>
            </div>
            
            <div className="flex items-center gap-2 text-body-color dark:text-body-color-dark">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><span className="font-semibold">99.9%</span> Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TrustedBrandsCarousel }; 