import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black text-stone-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-stone-900 mb-4 uppercase tracking-widest">
        Page Not Found
      </h2>
      <p className="text-stone-500 max-w-md mb-8">
        We couldn't find the page or book you're looking for. It might have been
        removed or the link might be broken.
      </p>
      <Link
        href="/"
        className="bg-[#2c4a2e] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded hover:bg-[#3a5c3c] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
