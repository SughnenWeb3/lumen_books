// app/page.tsx
// Home page — ISR with revalidate every 60 minutes (3600 seconds)

import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import Categories from './components/Categories';
import FeaturedAuthors from './components/FeaturedAuthors';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <FeaturedAuthors />
    </>
  );
}