import Link from 'next/link';
import Image from 'next/image';
import { searchBooks, getCategories } from '../lib/data';
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function BooksPage(props: Props) {
  const searchParams = await props.searchParams;
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : undefined;
  const q = typeof searchParams.q === 'string' ? searchParams.q : undefined;
  const [books, categories] = await Promise.all([
    searchBooks({ category, sort, q }),
    getCategories(),
  ]);
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black uppercase tracking-widest text-stone-900 mb-8">
        Catalog
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white border border-stone-200 rounded-xl p-6 mb-6">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-4">Categories</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/books"
                  className={`text-sm ${
                    !category ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                  }`}
                >
                  All Books
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    href={`/books?category=${encodeURIComponent(c)}`}
                    className={`text-sm ${
                      category === c ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                    }`}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl p-6">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-4">Sort By</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/books?${new URLSearchParams({
                    ...(category ? { category } : {}),
                    ...(q ? { q } : {}),
                  }).toString()}`}
                  className={`text-sm ${
                    !sort ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                  }`}
                >
                  Default
                </Link>
              </li>
              <li>
                <Link
                  href={`/books?${new URLSearchParams({
                    ...(category ? { category } : {}),
                    ...(q ? { q } : {}),
                    sort: 'newest',
                  }).toString()}`}
                  className={`text-sm ${
                    sort === 'newest' ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                  }`}
                >
                  Newest First
                </Link>
              </li>
              <li>
                <Link
                  href={`/books?${new URLSearchParams({
                    ...(category ? { category } : {}),
                    ...(q ? { q } : {}),
                    sort: 'price-asc',
                  }).toString()}`}
                  className={`text-sm ${
                    sort === 'price-asc' ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                  }`}
                >
                  Price (Low to High)
                </Link>
              </li>
              <li>
                <Link
                  href={`/books?${new URLSearchParams({
                    ...(category ? { category } : {}),
                    ...(q ? { q } : {}),
                    sort: 'price-desc',
                  }).toString()}`}
                  className={`text-sm ${
                    sort === 'price-desc' ? 'text-[#2c4a2e] font-bold' : 'text-stone-600 hover:text-[#2c4a2e]'
                  }`}
                >
                  Price (High to Low)
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1">
          {q && (
            <p className="mb-6 text-stone-600">
              Showing results for: <strong className="text-stone-900">&quot;{q}&quot;</strong>
            </p>
          )}
          {books.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-xl p-12 text-center">
              <h3 className="text-lg font-bold text-stone-900 mb-2">No books found</h3>
              <p className="text-stone-500">Try adjusting your filters or search query.</p>
              <Link
                href="/books"
                className="mt-6 inline-block text-sm text-[#2c4a2e] font-bold hover:underline"
              >
                Clear all filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <Link
                  key={book.id}
                  href={`/books/${book.slug}`}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col hover:border-[#2c4a2e] hover:shadow-md transition-all group"
                >
                  <div className="flex justify-center mb-4 rounded bg-[#f5f0e8] h-[230px] overflow-hidden">
                    <Image
                      src={book.coverImageUrl}
                      alt={book.title}
                      width={160}
                      height={230}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 mt-2 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-stone-400 text-xs mt-1">By {book.author}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-stone-500 text-xs px-2 py-1 bg-[#f5f0e8] rounded border border-stone-200">
                      {book.category}
                    </span>
                    <span className="font-bold text-[#2c4a2e]">${book.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
