"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import Image from "next/image";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับฉัน" },
  { href: "/works", label: "ผลงาน" },
  { href: "/contact", label: "ติดต่อ" },
];

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) =>
    path === href || (href !== "/" && path.startsWith(href));

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1120px] items-center justify-between px-6 max-sm:px-[18px]">
        <Link
          href="/"
          aria-label={`${profile.name} home`}
          className="flex items-center gap-3 font-bold"
        >
          <span className="grid size-[34px] place-items-center text-xl tracking-wide text-white">
            <Image
              src="/images/raccoon.png"
              alt="Logo"
              width={34}
              height={34}
              className="object-cover"
            />
          </span>
          <span>{profile.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
              className={`relative inline-flex items-center py-1 text-[21px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-primary after:transition-transform after:duration-300 after:content-[''] motion-reduce:after:transition-none hover:text-primary hover:after:scale-x-100 ${active(link.href) ? "font-semibold text-primary after:scale-x-100" : "text-slate-600 after:scale-x-0"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded p-2 text-primary hover:bg-mist md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="mx-auto grid w-full max-w-[1120px] gap-4 px-6 pb-5 md:hidden max-sm:px-[18px]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`relative inline-flex w-fit items-center py-1 text-[22px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-primary after:transition-transform after:duration-300 after:content-[''] motion-reduce:after:transition-none hover:text-primary hover:after:scale-x-100 ${active(link.href) ? "font-semibold text-primary after:scale-x-100" : "text-slate-600 after:scale-x-0"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
