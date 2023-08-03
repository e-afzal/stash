import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/home/home.module.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import TeaPicksCarousel from "@/app/components/home/TeaPicksCarousel";
import Footer from "./components/Footer";

// ASSET IMPORTS
import showcase from "@/public/images/home/showcase.png";
import teabags from "@/public/images/home/teabags.jpg";
import loose from "@/public/images/home/loose_leaf.jpg";
import teawareImage from "@/public/images/home/teaware.jpg";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import loose_tea from "@/app/data/products/tea/loose_leaf/data";
import teaware from "@/app/data/products/teaware/data";

export default function Home() {
  return (
    <>
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

        {/* BEST SELLERS - TEABAGS */}
        <section id={styles.best_sellers}>
          <h2 className={styles.best_title}>teabag top picks</h2>
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

        {/* SECTION: TEABAG */}
        <section id={styles.teabag}>
          <div className={styles.product_container}>
            <div className={styles.product_content}>
              <h2>magic in every bag</h2>
              <p>
                Experience tea like never before with our premium teabags that
                blend the best of convenience and flavor. Savor the enchanting
                aromas and exceptional taste of our carefully curated teas,
                conveniently packaged for your on-the-go lifestyle.
              </p>
              <Link className="cta" href={"#"}>
                shop now
              </Link>
            </div>
            <div className={styles.product_image}>
              <Image src={teabags} alt="Loose Leaf Tea on a plate" />
            </div>
          </div>
        </section>

        {/* BEST SELLERS - LOOSE TEA */}
        <section id={styles.best_loose}>
          <h2 className={styles.best_title}>loose tea leaf top picks</h2>
          <p className={styles.best_description}>
            Loose leaf tea offers an enchanting sensory journey. The loose,
            whole leaves unfurl, releasing their full essence, resulting in a
            rich and flavorful cup of tea.
          </p>

          <div className={styles.best_sellers_grid}>
            {loose_tea.slice(0, 8).map((each, index) => (
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

        {/* SECTION: LOOSE TEA  */}
        <section id={styles.loose}>
          <div className={styles.product_container}>
            <div className={styles.product_content}>
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
            <div className={styles.product_image}>
              <Image src={loose} alt="Loose Leaf Tea" />
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
          {/* <Image
            src={teawareWallpaper}
            alt="Teaware Top Picks"
            className={styles.teaware_showcase_image}
          /> */}
          <div className={styles.pick_card_container}>
            <TeaPicksCarousel picks={teaware} styles={styles} />
          </div>
        </section>

        {/* TEAWARE */}
        <section id={styles.teaware}>
          <div className={styles.product_container}>
            <div className={styles.product_content}>
              <h2>The Perfect Gift for Tea Enthusiasts</h2>
              <p>
                Surprise a loved one or celebrate a special occasion with the
                gift of exquisite teaware. Our collection offers a range of
                choices that cater to both seasoned tea aficionados and those
                embarking on their tea exploration journey. The timeless
                elegance and practicality of our teaware make it a gift that
                will be cherished for years to come.
              </p>
              <Link className="cta" href={"#"}>
                shop now
              </Link>
            </div>
            <div className={styles.product_image}>
              <Image src={teawareImage} alt="Teaware" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
