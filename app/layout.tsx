import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Aseel Mohammed Portfolio",
  description: "Portfolio of Aseel Mohammed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}