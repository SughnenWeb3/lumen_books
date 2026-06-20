import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
const navItems = ["Shop", "Collections", "About", "Blog", "Contact"];
export default function Navbar() {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
  
      {/* Left - Logo */}
      <Link href="/" className="flex items-center gap-2 justify-self-start">
        <div className="w-8 h-8 bg-[#2c4a2e] rounded flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
  
        <div className="leading-none">
          <p className="text-[10px] font-bold tracking-widest text-[#2c4a2e] uppercase">Lumen</p>
          <p className="text-[10px] font-bold tracking-widest text-[#2c4a2e] uppercase">Books</p>
        </div>
      </Link>
  
      {/* Center - Nav */}
     <div className=" ">

     <nav className="space-x-7">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-sm text-stone-700 hover:text-[#2c4a2e] font-medium transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

     </div>
  
      {/* Right - Icons */}
      <div className="flex items-center gap-4 text-stone-600 justify-self-end">
        <button className="hover:text-[#2c4a2e] transition-colors">
          <Search size={19} />
        </button>
        <button className="hover:text-[#2c4a2e] transition-colors">
          <ShoppingCart size={19} />
        </button>
        <button className="hover:text-[#2c4a2e] transition-colors">
          <User size={19} />
        </button>
      </div>
  
    </div>
  </header>
  );
}
