'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { addBookAction } from '../../lib/actions';

export default function NewBookPage() {
  const [state, action, isPending] = useActionState(addBookAction, undefined);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-black uppercase tracking-widest text-stone-900">
          Add New Book
        </h1>
        <Link href="/dashboard" className="text-sm font-bold text-stone-500 hover:text-stone-800">
          Cancel
        </Link>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
        <form action={action} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Title</label>
              <input type="text" id="title" name="title" required className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e]" />
            </div>
            <div>
              <label htmlFor="author" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Author</label>
              <input type="text" id="author" name="author" required className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e]" />
            </div>
            <div>
              <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Category</label>
              <select id="category" name="category" required className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e] bg-white">
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Literary Fiction">Literary Fiction</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Price (₦)</label>
              <input type="number" step="0.01" id="price" name="price" required className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e]" />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Description</label>
            <textarea id="description" name="description" rows={4} required className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e]"></textarea>
          </div>

          {state?.error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded border border-red-200">
              {state.error}
            </div>
          )}

          <div className="pt-4 border-t border-stone-200 flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#2c4a2e] text-white font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-[#3a5c3c] transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {isPending ? 'Saving...' : 'Save Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
