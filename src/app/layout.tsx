//import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
<Header></Header>
export { metadata } from "./metadata";

//const GAID = 'YOUR_GOOGLE_ANALYTICS_GAID';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <body style={{height: '100%'}}>{children}</body>
      {/* <GoogleAnalytics gaId={GAID} /> */}
    </html>
  );
}
