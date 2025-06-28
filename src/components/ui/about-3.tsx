import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "/images/brands/formbold.svg",
    alt: "Formbold",
  },
  {
    src: "/images/brands/uideck.svg",
    alt: "UIdeck",
  },
  {
    src: "/images/brands/tailgrids.svg",
    alt: "Tailgrids",
  },
  {
    src: "/images/brands/lineicons.svg",
    alt: "Lineicons",
  },
  {
    src: "/images/brands/tailadmin.svg",
    alt: "Tailadmin",
  },
  {
    src: "/images/brands/plainadmin.svg",
    alt: "PlainAdmin",
  },
];

const defaultAchievements = [
  { label: "Businesses Protected", value: "150+" },
  { label: "Risk Assessments", value: "500+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Years Experience", value: "10+" },
];



export const About3 = ({
  title = "Professional Risk Management for Nigerian Businesses",
  description = "MyRisk.ng is Nigeria's leading risk management consultancy, dedicated to protecting and empowering businesses through comprehensive risk assessment, strategic planning, and expert guidance in an ever-evolving business landscape.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Risk management professionals analyzing business data",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop",
    alt: "Business team planning risk strategies",
  },
  breakout = {
    src: "/images/logo/logo.svg",
    alt: "MyRisk.ng logo",
    title: "Comprehensive Risk Solutions at MyRisk.ng",
    description:
      "From risk assessment to crisis management, we provide Nigerian businesses with the tools and expertise needed to navigate uncertainty and achieve sustainable growth.",
    buttonText: "Get Assessment",
    buttonUrl: "/contact",
  },
  companiesTitle = "Trusted by Industry Leaders Across Nigeria",
  companies = defaultCompanies,
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "Delivering measurable results through expert risk management solutions that protect and grow Nigerian businesses across all sectors.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">{title}</h1>
          <p className="text-body-color dark:text-body-color-dark text-lg">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-light dark:bg-gray-dark p-7 md:w-1/2 lg:w-auto border border-gray-200 dark:border-gray-700">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12 dark:hidden"
              />
              <img
                src="/images/logo/logo-2.svg"
                alt={breakout.alt}
                className="mr-auto h-12 hidden dark:block"
              />
              <div>
                <p className="mb-2 text-lg font-semibold text-black dark:text-white">{breakout.title}</p>
                <p className="text-body-color dark:text-body-color-dark">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto bg-primary text-white hover:bg-primary/90 border-primary" asChild>
                <a href={breakout.buttonUrl}>
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-16 md:py-20 lg:py-28">
          <p className="text-center text-body-color dark:text-body-color-dark text-lg mb-8">{companiesTitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 dark:hidden filter grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src={company.src.replace('.svg', '-light.svg')}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 hidden dark:block filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-gray-light dark:bg-gray-dark p-10 md:p-16 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-body-color dark:text-body-color-dark text-lg">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-body-color dark:text-body-color-dark">{item.label}</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,rgba(120,130,147,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,130,147,0.3)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(149,156,177,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(149,156,177,0.3)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
}; 