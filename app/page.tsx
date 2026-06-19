// app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import FeaturedAuthor from "@/components/FeaturedAuthor";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Categories />
      <FeaturedAuthor />
      <Footer />
    </>
  );
}