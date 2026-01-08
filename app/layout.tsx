import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Aseel Mohammed | Portfolio",
  description: "Software engineering portfolio: web, APIs, data, and ML projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container footerInner">
            <span>© {new Date().getFullYear()} Aseel Mohammed</span>
            <span className="muted">Built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
