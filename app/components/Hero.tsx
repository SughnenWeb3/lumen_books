import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f5f0e8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex items-center min-h-[380px]">
     
        <div className="flex-1 py-14 pr-8">
          <h1 className="text-5xl font-black uppercase leading-tight tracking-tight text-stone-900 mb-4">
            Discover Your<br />Next Adventure...
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-8">
           Discover a whole new world of reading experience
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#2c4a2e] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded hover:bg-[#3a5c3c] transition-colors"
          >
            Browse Bestsellers
          </Link>
        </div>

        
        <div className="hidden md:block relative w-[420px] h-[380px] shrink-0">
          <Image
            src="/heroimage.png"
            alt="Person reading a book by a window"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
