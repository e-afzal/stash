"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// STYLES
import styles from "@/public/styles/pages/search/search.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import looseTea from "../data/products/tea/loose_leaf/data";
import gifts from "../data/products/gifts/data";
import teaware from "../data/products/teaware/data";

const Search = () => {
  const allProducts = [...teaBags, ...looseTea, ...gifts, ...teaware];
  const searchParams = useSearchParams();
  const query = searchParams.get("term");

  // STATES
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setData(
      allProducts.filter((product) => {
        if (product.title.toLowerCase().includes(query.toLowerCase()))
          return { product };
      })
    );
  }, []);

  // HANDLERS
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    if (e.key === "Enter") {
      setData(
        allProducts.filter((product) => {
          if (
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
          )
            return { product };
        })
      );
    }
  };

  const handleSearchMobile = () => {
    //? This handler is created specifically for when the SEARCH button is tapped
    //? in MOBILE.
    //! The "press enter" to search functionality works only on DESKTOP
    //! and NOT on Mobile/Tablet
    setSearchTerm(searchTerm.toLowerCase());
    setData(
      allProducts.filter((product) => {
        if (product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          return { product };
      })
    );
  };

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <div className={styles.search_container}>
          <h2 className={styles.search_title}>search our store</h2>
          <input
            type="text"
            placeholder="Type product name or flavor"
            onKeyDown={handleSearch}
          />
          <button className={styles.search_button} onClick={handleSearchMobile}>
            search
          </button>

          <div className={styles.results_container}>
            <h4 className={styles.results_count}>
              Results found: {data.length}
            </h4>
            <div className={styles.results_box}>
              {data.map((each, index) => (
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
                    <div className={styles.product_title}>{each.title}</div>
                    <span className={styles.product_price}>
                      <sup>$</sup> {(each.price / 100).toFixed(2)}
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
