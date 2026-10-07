import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
        <div className="flex flex-wrap justify-between gap-9 pb-9">
          <div className="max-w-[800px]">
            <div className="text-2xl font-bold">{profile.name}</div>
            <p className="mt-2 text-[21px] leading-7 text-slate-300">
              “เรียนรู้ สร้างสรรค์ และประยุกต์ใช้เทคโนโลยี
              เพื่อพัฒนาการเรียนรู้”
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-start gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[21px] text-slate-200 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-2 border-t border-slate-600 pt-5 text-[20px] text-slate-400">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>

        </div>
      </div>
    </footer>
  );
}
