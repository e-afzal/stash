import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// STYLES
import styles from "@/public/styles/components/search_modal.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import looseTea from "../data/products/tea/loose_leaf/data";
import gifts from "../data/products/gifts/data";
import teaware from "../data/products/teaware/data";

const SearchModal = ({ modelOpen, handleModalOpen }) => {
  const allProducts = [...teaBags, ...looseTea, ...gifts, ...teaware];

  // STATES
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    <section
      style={{ display: modelOpen ? "block" : "none" }}
      id={styles.search}
    >
      <Image
        src={cancelIcon}
        className={styles.cancelIcon}
        onClick={() => handleModalOpen(false)}
        alt="Close Icon"
      />
      <div className={styles.search_container}>
        <h2 className={styles.search_title}>search our store</h2>
        <input
          type="text"
          placeholder="Type product name or flavor"
          onKeyDown={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.search_button} onClick={handleSearchMobile}>
          search
        </button>

        <div className={styles.results_container}>
          <div className={styles.results_count_container}>
            <h4 className={styles.results_count}>
              Results found: {data.length}
            </h4>
            <a
              style={{ display: data.length > 4 ? "inline-block" : "none" }}
              href={`/search?term=${searchTerm}`}
            >
              view all results
            </a>
          </div>
          <div className={styles.results_box}>
            {data.slice(0, 4).map((each, index) => (
              <Link href={each.url} key={index} className={styles.result_card}>
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
    </section>
  );
};

export default SearchModal;
