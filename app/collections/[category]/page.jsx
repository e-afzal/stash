"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// STYLES
import styles from "@/public/styles/pages/collections/collections.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import FilterOverlay from "@/app/components/collections/FilterOverlay";
import Footer from "@/app/components/Footer";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";

const Collections = ({ params: { category } }) => {
  const [filterModal, setFilterModal] = useState(false);
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <div className={styles.collection_container}>
          {/* RESULTS HEADER */}
          <div className={styles.title_flex}>
            <h2 className={styles.category_title}>{category}</h2>
            <div className={styles.filter_flex}>
              <div className={styles.sort_box}>
                <select defaultChecked={"Sort"}>
                  <option value="Sort" disabled>
                    Sort
                  </option>
                  <option value="Price (Ascending)">Price (Ascending)</option>
                  <option value="Price (Descending)">Price (Descending)</option>
                </select>
              </div>
              <div
                className={styles.filter_box}
                onClick={() => setFilterModal(true)}
              >
                <button>All filters</button>
              </div>
            </div>
          </div>

          {/* RESULTS GRID */}
          <div className={styles.results_grid}>
            {teaBags.map((each, index) => (
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
                  <h4>{each.title}</h4>
                  <span className={styles.product_price}>
                    <sup>$</sup> {each.price / 100}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* FILTER OVERLAY */}
          <FilterOverlay
            modalOpen={filterModal}
            setModalOpen={setFilterModal}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collections;
