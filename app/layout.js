import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "CSS for Darkmode on blog.fefe.de ",
  description: "Enable Darkmode on blog.fefe.de",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
