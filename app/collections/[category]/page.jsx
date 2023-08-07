"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// STYLES
import styles from "@/public/styles/pages/collections/collections.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import FilterOverlay from "@/app/components/collections/FilterOverlay";
import Footer from "@/app/components/Footer";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import looseTea from "@/app/data/products/tea/loose_leaf/data";
import teaware from "@/app/data/products/teaware/data";
import gifts from "@/app/data/products/gifts/data";

const Collections = ({ params: { category } }) => {
  // PRODUCTS
  const allProducts = [...teaBags, ...looseTea, ...teaware, ...gifts];

  // STATES
  const [filterModal, setFilterModal] = useState(false);
  //! Original DATA to leave untouched
  const [data, setData] = useState(null);
  const [finalData, setFinalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //? Default Filters [Checkboxes are checked based on below values]
  const [filters, setFilters] = useState({
    type: [],
    caffeine: [],
    packaging: [],
  });
  const [typeFiltersParams, setTypeFiltersParams] = useState({});

  //! FILTER PARAMETERS
  const filtersParams = [
    {
      filterName: "tea",
      type: ["black", "green", "oolong", "herbal"],
      caffeine: ["caffeinated", "caffeine-free", "decaf"],
      packaging: ["tea bag", "loose leaf"],
    },
    {
      filterName: "teaware",
      subtype: [
        "tea presses",
        "infusers & strainers",
        "cups & mugs",
        "honey accessories",
        "teapots",
        "tea sets",
        "tea chests",
        "canisters & tins",
        "baked goods",
      ],
    },
  ];

  // USE-EFFECT
  useEffect(() => {
    //! Set Filters based on Category from URL and passed to FilterOverlay component
    setTypeFiltersParams(
      filtersParams.filter((each) => each.filterName === category)[0]
    );

    //! Set data based on category from URL
    const filtered = allProducts.filter((product) => product.type === category);
    setData(filtered);
    setFinalData(filtered);
    setIsLoading(false);
  }, []);

  if (!isLoading && finalData) {
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
                    <option value="Price (Descending)">
                      Price (Descending)
                    </option>
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
              {finalData.map((each, index) => (
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

            {/* FILTER OVERLAY */}
            <FilterOverlay
              modalOpen={filterModal}
              setModalOpen={setFilterModal}
              typeFiltersParams={typeFiltersParams}
              filters={filters}
              setFilters={setFilters}
              data={data}
              finalData={finalData}
              setFinalData={setFinalData}
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default Collections;
