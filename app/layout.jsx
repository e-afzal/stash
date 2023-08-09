// GLOBAL STYLE
import "./globals.css";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

// CLERK APP
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Stash",
  description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
  openGraph: {
    title: "Stash",
    description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
    url: "https://stash-ead.vercel.app",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.essamafzal.com/thumbnail.png",
    //     width: 1366,
    //     height: 768,
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
