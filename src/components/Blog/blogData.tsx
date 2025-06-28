import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Essential Risk Management Strategies for Nigerian Businesses",
    paragraph:
      "Discover how Nigerian businesses can implement comprehensive risk management frameworks to protect against operational, financial, and regulatory challenges in today's dynamic market environment.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Adebayo Okonkwo",
      image: "/images/blog/author-01.png",
      designation: "Senior Risk Analyst",
    },
    tags: ["risk-management"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Navigating Regulatory Compliance in Nigeria's Financial Sector",
    paragraph:
      "A comprehensive guide to understanding and implementing compliance frameworks that align with CBN regulations, SEC requirements, and other regulatory bodies in Nigeria.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Funmi Adebisi",
      image: "/images/blog/author-02.png",
      designation: "Compliance Specialist",
    },
    tags: ["compliance"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Building Business Continuity Plans for SMEs in Nigeria",
    paragraph:
      "Learn how small and medium enterprises can develop robust business continuity strategies to withstand disruptions from power outages, security challenges, and economic volatility.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Chukwudi Okoro",
      image: "/images/blog/author-03.png",
      designation: "Business Continuity Expert",
    },
    tags: ["business-continuity"],
    publishDate: "2025",
  },
];
export default blogData;
