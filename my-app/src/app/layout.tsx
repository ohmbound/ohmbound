import "./globals.css";
import TopHeader from "../components/TopHeader";
import MainHeader from "../components/MainNavBar";
import Footer from "../components/Footer"; // Import Footer component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Ohmbound</title>
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Top Header */}
        <TopHeader />
        {/* Main Header */}
        <MainHeader />
        {/* Page Content */}
        <main style={{ flex: 1 }}>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
