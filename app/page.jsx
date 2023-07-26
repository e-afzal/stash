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
import moment from "@/public/images/home/moment_cropped.webp";
import arrow from "@/public/icons/arrow-forward.svg";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import teaware from "@/app/data/products/teaware/data";

export default function Home() {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
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

        {/* BEST SELLERS */}
        <section id={styles.best_sellers}>
          <h2 className={styles.best_title}>our best sellers</h2>
          <p className={styles.best_description}>
            Warming, flavor-packed and delightfully refreshing. If you're
            looking for something from among our huge collection, the following
            flavors would be a great starting point.
          </p>

          <div className={styles.best_sellers_grid}>
            {teaBags.slice(0, 8).map((each, index) => (
              <Link href={each.url} key={index} className={styles.sellers_card}>
                <Image
                  src={each.images[0]}
                  alt={each.title}
                  width={509}
                  height={509}
                />
                <p>{each.title}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* MOMENT */}
        <section id={styles.moment}>
          <div className={styles.moment_container}>
            <div className={styles.moment_image}>
              <Image src={moment} alt="Loose Leaf Tea on a plate" />
            </div>
            <div className={styles.moment_content}>
              <h2>Savor the Art of Loose Leaf Tea</h2>
              <p>
                Step into a world of unparalleled flavor and aroma with our
                exquisite loose leaf tea collection. Indulge in the timeless
                tradition of brewing loose leaf tea and elevate your
                tea-drinking experience to new heights. Crafted from the finest
                handpicked tea leaves, our loose leaf teas are a celebration of
                nature's bounty.
              </p>
              <Link className="cta" href={"#"}>
                shop now
              </Link>
            </div>
          </div>
        </section>

        {/* TEAWARE TOP PICKS */}
        <section id={styles.top_picks}>
          <h2 className={styles.picks_title}>teaware top picks</h2>
          <p className={styles.picks_caption}>
            Shop our latest inventory of teaware to make your teatime even more
            delightful.
          </p>
          <Link href={"#"} className={styles.pick_card}>
            <Image
              src={teaware[0].images[0]}
              alt={teaware[0].title}
              height={509}
              width={509}
            />
            <div className={styles.card_content}>
              <h4>{teaware[0].title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus natus velit eos id, quae veritatis.
              </p>
              <Image src={arrow} alt="Forward arrow icon" />
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </body>
  );
}
