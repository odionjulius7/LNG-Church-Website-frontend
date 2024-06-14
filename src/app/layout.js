import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Provider";

const inter = Inter({ subsets: ["latin"] });

// exporting metadata from "use client" component is not allowed

export const metadata = {
  title: "Julius' Portfolio",
  description: "Built By Sophis Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
