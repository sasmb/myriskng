import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MyRisk.ng - Get Your Risk Assessment",
  description: "Contact our risk management experts for a comprehensive business risk assessment",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to secure your business? Get in touch with our risk management experts for a comprehensive assessment and tailored solutions for your Nigerian business."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
