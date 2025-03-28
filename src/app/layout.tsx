import "./globals.css";
export { metadata } from "./metadata";
import ClientBackground from "./ClientBackground";

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
        <ClientBackground />
        {children}
      </body>
    </html>
  );
}