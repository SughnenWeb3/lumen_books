import Link from 'next/link';
import Image from 'next/image';
import { getBooks } from '../lib/data';
import { logoutAction } from '../lib/actions';

export default async function DashboardPage() {
  const books = await getBooks();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-stone-900 mb-2">
            Seller Dashboard
          </h1>
          <p className="text-stone-500">Manage your catalog and inventory.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/new"
            className="bg-[#2c4a2e] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-[#3a5c3c] transition-colors"
          >
            + Add New Book
          </Link>
          
          <form action={logoutAction}>
            <button
              type="submit"
              className="border border-stone-300 text-stone-600 text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-500">Book</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-500">Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-500">Price</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-500">Date Added</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-12 bg-stone-100 rounded overflow-hidden shrink-0 border border-stone-200">
                        <Image
                          src={book.coverImageUrl}
                          alt={book.title}
                          width={48}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 line-clamp-1">{book.title}</div>
                        <div className="text-xs text-stone-500 line-clamp-1">{book.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-stone-100 border border-stone-200 rounded text-stone-600">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-stone-900">
                    ₦{book.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-500">
                    {new Date(book.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/books/${book.slug}`}
                      className="text-sm font-bold text-[#2c4a2e] hover:underline"
                    >
                      View Live
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
