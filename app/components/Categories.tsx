import Link from 'next/link';
import { getCategories } from '../lib/data';

const categoryIcons: Record<string, string> = {
  Fiction: '📖',
  Fantasy: '🐉',
  'Science Fiction': '🚀',
  'Literary Fiction': '✍️',
  'Non-Fiction': '🌍',
};

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="bg-[#f5f0e8] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-black uppercase tracking-widest text-stone-900 mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/books?category=${encodeURIComponent(category)}`}
              className="bg-white border border-stone-200 rounded-xl p-5 text-center hover:border-[#2c4a2e] hover:shadow-md transition-all group"
            >
              <span className="text-2xl block mb-2">
                {categoryIcons[category] ?? '📚'}
              </span>
              <span className="text-sm font-semibold text-stone-800 group-hover:text-[#2c4a2e] transition-colors">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
