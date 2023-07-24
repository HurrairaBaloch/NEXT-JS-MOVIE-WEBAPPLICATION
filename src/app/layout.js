import Header from "./components/Header";
import "./globals.css";
// import { Inter } from "next/font/google";
// import { Mulish } from "next/font/google";
import Footer from "./components/Footer";

// const mulish = Mulish({
//   subsets: ["latin"],
//   display: "swap",

//   weight: ["400", "700", "900", "1000"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lugrasimo&family=Mulish:ital,wght@0,200;0,300;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600&family=Satisfy&family=Tektur:wght@400;500&family=Urbanist:ital,wght@0,100;0,200;0,600;1,100;1,300;1,600;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
