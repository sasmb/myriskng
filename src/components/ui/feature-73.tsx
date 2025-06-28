import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature73 = ({
  heading = "Powerful Risk Management Features",
  description = "Discover the comprehensive risk management tools that make MyRisk.ng the trusted choice for Nigerian businesses. Built with expertise and designed for maximum protection.",
  linkUrl = "/contact",
  linkText = "Get Assessment",
  features = [
    {
      id: "feature-1",
      title: "Comprehensive Risk Assessment",
      description:
        "Advanced risk identification and analysis tools designed specifically for Nigerian business environments. Get detailed insights into operational, financial, and regulatory risks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: "feature-2", 
      title: "Regulatory Compliance",
      description:
        "Stay compliant with CBN, SEC, and FIRS requirements through our automated monitoring and reporting systems. Reduce compliance risks significantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    },
    {
      id: "feature-3",
      title: "Business Continuity Planning",
      description:
        "Develop robust continuity strategies tailored for Nigeria's unique challenges. Protect your business from disruptions and ensure operational resilience.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="container-header mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 text-body-color dark:text-body-color-dark lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium text-primary hover:text-primary/80 md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-xl border border-gray-200 dark:border-gray-700 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white md:mb-4 md:text-2xl lg:mb-6">
                  {features[0].title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark lg:text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 