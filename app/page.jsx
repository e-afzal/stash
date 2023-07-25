import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/home/home.module.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";

// ASSET IMPORTS
import showcase from "@/public/images/home/showcase.png";

export default function Home() {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <section id={styles.showcase}>
          <Image src={showcase} alt="Japanese Shincha Green Tea " />
          <div className={styles.showcase_content}>
            <h2>japanese shincha</h2>
            <p>
              A rare and sought-after tea with a smooth and silky texture;
              available only once in a year.
            </p>
            <Link href={"#"}>buy now</Link>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
}
