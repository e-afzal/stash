import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/search/search.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";

const Search = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <div className={styles.search_container}>
          <h2 className={styles.search_title}>search our store</h2>
          <input type="text" placeholder="Type product name or id" />

          <div className={styles.results_container}>
            <h4 className={styles.results_count}>Results found: 3</h4>
            <div className={styles.results_box}>
              {teaBags.slice(0, 4).map((each, index) => (
                <Link
                  href={each.url}
                  key={index}
                  className={styles.result_card}
                >
                  <div className={styles.card_image}>
                    <Image
                      src={each.images[0]}
                      alt={each.title}
                      width={509}
                      height={509}
                    />
                  </div>
                  <div className={styles.card_content}>
                    <h4>{each.title}</h4>
                    <span className={styles.product_price}>
                      <sup>$</sup> {each.price / 100}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Search;
