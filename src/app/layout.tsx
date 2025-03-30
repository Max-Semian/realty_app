import "./globals.css";
export { metadata } from "./metadata";
import ScrollFix from "../components/ScrollFix/ScrollFix";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        overflowX: 'hidden', // Prevent horizontal scrolling
        position: 'relative' // Create a new stacking context
      }}>
        <ScrollFix />
        {children}
      </body>
    </html>
  );
}