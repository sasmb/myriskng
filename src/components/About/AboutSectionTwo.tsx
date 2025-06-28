import { Feature73 } from "@/components/ui/feature-73";

const AboutSectionTwo = () => {
  return (
    <Feature73
      heading="Expert Risk Management Solutions"
      description="MyRisk.ng provides comprehensive risk management services designed specifically for Nigerian businesses. Our proven methodologies help organizations identify, assess, and mitigate risks effectively."
      linkUrl="/contact"
      linkText="Schedule Consultation"
      features={[
        {
          id: "comprehensive-assessment",
          title: "Comprehensive Risk Assessment",
          description:
            "Our expert team conducts thorough risk assessments covering operational, financial, regulatory, and strategic risks. We provide detailed analysis with actionable recommendations tailored to your industry and business size.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        },
        {
          id: "compliance-management", 
          title: "Compliance Management",
          description:
            "Stay ahead of regulatory requirements with our comprehensive compliance monitoring. We ensure your business meets CBN, SEC, FIRS, and other regulatory standards.",
          image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=600&fit=crop",
        },
        {
          id: "business-continuity",
          title: "Business Continuity & Crisis Management",
          description:
            "Develop robust business continuity plans and crisis management strategies. We help you prepare for and respond to disruptions effectively.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        },
      ]}
    />
  );
};

export default AboutSectionTwo;
