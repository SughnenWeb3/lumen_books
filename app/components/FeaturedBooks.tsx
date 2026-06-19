// src/app/components/FeaturedBooks.tsx

import Image from "next/image";
import { getBooks } from "@/lib/data";

export default async function FeaturedBooks() {
  const books = await getBooks();

  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Staff Pick Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border rounded-xl p-4 shadow"
          >
            <Image
              src={book.coverImageUrl}
              alt={book.title}
              width={180}
              height={260}
              className="mx-auto"
            />

            <h3 className="font-bold mt-4">
              {book.title}
            </h3>

            <p className="text-gray-500">
              By {book.author}
            </p>

            <div className="my-3">
              ⭐⭐⭐⭐⭐
            </div>

            <button className="w-full bg-green-900 text-white py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}