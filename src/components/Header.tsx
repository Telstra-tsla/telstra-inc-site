import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[var(--color-bg)] border-b border-[var(--color-muted)] z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-[var(--color-accent-blue)]">
          Telstra Inc
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Vehicles","Energy","Charging","Shop","Discover","Support","Account"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-[var(--color-text-light)]" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[var(--color-panel)] p-4 space-y-4">
          {["Vehicles","Energy","Charging","Shop","Discover","Support","Account"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="block">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
