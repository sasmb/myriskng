import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MyRisk.ng - Risk Management Experts",
  description: "Learn about our team of risk management professionals and our commitment to protecting Nigerian businesses",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About MyRisk.ng"
        description="Nigeria's leading risk management consultancy, dedicated to protecting and empowering businesses through comprehensive risk assessment, strategic planning, and expert guidance. We help Nigerian businesses navigate complex challenges and build resilient operations."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
