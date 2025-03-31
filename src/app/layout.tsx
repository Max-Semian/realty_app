import "./globals.css";
export { metadata } from "./metadata";
import ScrollFix from "../components/ScrollFix/ScrollFix";

// Import our custom CSS adjustments
import "../styles/container-adjustments.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add this meta tag to improve mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        overflowX: 'hidden', // Prevent horizontal scrolling
        position: 'relative', // Create a new stacking context
        backgroundColor: '#121318' // Darker background color that matches the design
      }}>
        <ScrollFix />
        {children}
      </body>
    </html>
  );
}