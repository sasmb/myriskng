"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="See MyRisk.ng in Action"
            paragraph="Watch how our comprehensive risk management platform transforms Nigerian businesses. From assessment to implementation, discover the solutions that protect and grow your enterprise."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <HeroVideoDialog
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/zoBTrpfrY8k?autoplay=1&rel=0"
                  thumbnailSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center"
                  thumbnailAlt="MyRisk.ng platform demo - Risk management solutions for Nigerian businesses"
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* Background shape decoration */}
          </div>
        </div>
      </section>
    </>
  );
};
