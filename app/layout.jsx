// GLOBAL STYLE
import "./globals.css";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

// CLERK APP
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Stash Tea",
  description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
  openGraph: {
    title: "Stash Tea",
    description: "Stash Tea: Tea Blends, Recipes, Gifts & Teaware",
    url: "https://stash-ead.vercel.app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddeima5fc/image/upload/v1719324268/stash_thumbnail_yoeaww.jpg",
        width: 1080,
        height: 1080,
        // width: 1200,
        // height: 627,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      allowedRedirectOrigins={["http://localhost:3000/"]}
      signInUrl='/sign-in'
      signUpUrl='/sign-up'
      appearance={{
        userButton: {},
        elements: {},
        variables: {
          fontFamily: "Kanit, sans-serif",
          fontWeight: 300,
          fontFamilyButtons: "sans-serif",
          fontSize: "1.7rem",
        },
      }}
    >
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
