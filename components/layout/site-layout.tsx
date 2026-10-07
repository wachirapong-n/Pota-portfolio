import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollToTopButton } from "./scroll-to-top-button";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
