import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBookBySlug, getAllSlugs, getRecommendedBooks } from '../../lib/data';

// Keep pages static, but allow new routes to be generated and cached (ISR)
export const revalidate = 3600;
export const dynamicParams = true;

// Define params as a Promise for Next.js 15+ compatibility
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. generateStaticParams pre-renders known books at build time (SSG)
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 2. generateMetadata dynamically generates <title> and Open Graph tags per book
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.description,
      images: [book.coverImageUrl],
    },
  };
}

// 3. Recommended Books Component (Slow fetch to demonstrate Suspense/Streaming)
async function RecommendedBooks({ slug }: { slug: string }) {
  const recommendations = await getRecommendedBooks(slug, 3);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-stone-200">
      <h2 className="text-lg font-black uppercase tracking-widest text-stone-900 mb-6">
        Recommended for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <Link
            key={rec.id}
            href={`/books/${rec.slug}`}
            className="flex flex-col group"
          >
            <div className="bg-[#f5f0e8] rounded flex justify-center mb-3 p-4">
              <Image
                src={rec.coverImageUrl}
                alt={rec.title}
                width={100}
                height={150}
                className="object-cover shadow-sm group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="font-bold text-sm text-stone-900 line-clamp-1">
              {rec.title}
            </h3>
            <p className="text-stone-500 text-xs">By {rec.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 4. Skeleton Fallback for the Recommended Books section
function RecommendedSkeleton() {
  return (
    <div className="mt-16 pt-12 border-t border-stone-200">
      <div className="h-6 w-48 bg-stone-200 animate-pulse rounded mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col">
            <div className="bg-stone-100 rounded h-[180px] mb-3 animate-pulse" />
            <div className="h-4 w-3/4 bg-stone-200 animate-pulse rounded mb-1" />
            <div className="h-3 w-1/2 bg-stone-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Main Page Component
export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound(); // Triggers the nearest not-found.tsx
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Book Cover */}
        <div className="w-full md:w-1/3 shrink-0">
          <div className="bg-white p-4 border border-stone-200 rounded-xl shadow-sm flex justify-center">
            <Image
              src={book.coverImageUrl}
              alt={`Cover of ${book.title}`}
              width={300}
              height={450}
              className="w-full h-auto object-cover rounded shadow-md"
              priority
            />
          </div>
        </div>

        {/* Right: Book Info */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="text-[#2c4a2e] text-xs font-bold uppercase tracking-widest border border-[#2c4a2e]/20 bg-[#2c4a2e]/5 px-2 py-1 rounded">
              {book.category}
            </span>
          </div>

          <h1 className="text-4xl font-black text-stone-900 mb-2 leading-tight">
            {book.title}
          </h1>
          <p className="text-stone-500 text-lg mb-6">
            By <span className="font-semibold text-stone-700">{book.author}</span>
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="text-2xl font-bold text-[#2c4a2e]">
              ${book.price.toFixed(2)}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-[#f5a623] text-sm">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-stone-400 text-xs">
                ({book.ratingsCount} ratings)
              </span>
            </div>
          </div>

          <div className="prose prose-stone max-w-none mb-8">
            <p className="text-stone-600 leading-relaxed">{book.description}</p>
          </div>

          <button className="bg-[#2c4a2e] text-white font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-[#3a5c3c] transition-colors w-full sm:w-auto">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Streaming Section wrapped in Suspense */}
      <Suspense fallback={<RecommendedSkeleton />}>
        <RecommendedBooks slug={book.slug} />
      </Suspense>
    </div>
  );
}
