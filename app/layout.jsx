import "./globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Stash",
  description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
  openGraph: {
    title: "Stash",
    description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
    url: "",
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
    <html lang="en">
      {/* <body>{children}</body> */}
      {children}
    </html>
  );
}
