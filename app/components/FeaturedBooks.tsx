import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedBooks } from '../lib/data';

export default async function FeaturedBooks() {
  const books = await getFeaturedBooks(3);

  return (
    <section className="bg-[#f5f0e8] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-black uppercase tracking-widest text-stone-900 mb-8">
          Staff Pick Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={book.coverImageUrl}
                  alt={book.title}
                  width={160}
                  height={230}
                  className="rounded object-cover shadow"
                />
              </div>

              <h3 className="font-bold text-sm text-stone-900 mt-2">
                {book.title}
              </h3>
              <p className="text-stone-400 text-xs mt-1">By {book.author}</p>

              <div className="flex items-center gap-2 my-3">
                <div className="flex gap-0.5 text-[#f5a623] text-sm">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-stone-400 text-xs">
                  ({book.ratingsCount})
                </span>
              </div>

              <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2">
                {book.description}
              </p>

              <Link
                href={`/books/${book.slug}`}
                className="mt-auto w-full block text-center bg-[#2c4a2e] text-white text-xs font-bold py-2.5 rounded hover:bg-[#3a5c3c] transition-colors tracking-wide"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}