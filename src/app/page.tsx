import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ProductCategory from "./components/ProductCategory";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
   <main>
     <HeroSection />
     <ProductCategory />
     <AboutSection />
     <BlogSection />
     <ContactSection />
   </main>
  );
}
