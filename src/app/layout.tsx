import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main className="mx-6 my-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
