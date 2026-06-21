import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedAuthors() {
  return (
    <section className="bg-[#f5f0e8] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#2c4a2e] rounded-xl overflow-hidden flex items-center gap-6 px-8 py-6">
          {/* Author Photo */}
          <div className="shrink-0">
            <Image
              src="/featuredauthor.jpeg"
              alt="Featured Author Eliza Vance"
              width={90}
              height={90}
              className="rounded-full object-cover w-[90px] h-[90px]"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              Featured Author
            </p>
            <h2 className="text-white font-bold text-lg mb-2">Eliza Vance</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-3">
              Eliza Vance is the acclaimed author of &ldquo;The Silent
              Forest&rdquo; and &ldquo;Echoes of Time.&rdquo; Her writing
              blends literary elegance with gripping suspense, drawing readers
              into worlds where nature and mystery intertwine.
            </p>
            <Link
              href="/books?q=Eliza+Vance"
              className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/60 pb-0.5 hover:border-white transition-colors"
            >
              View Her Books &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
