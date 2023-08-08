"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// STYLES
import styles from "@/public/styles/pages/collections/collections.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import TeawareFilterOverlay from "@/app/components/collections/TeawareFilterOverlay";
import Footer from "@/app/components/Footer";

// DATA
import teaware from "@/app/data/products/teaware/data";
import gifts from "@/app/data/products/gifts/data";

const TeawareCollections = () => {
  // PRODUCTS
  const allProducts = [...teaware, ...gifts];

  //? Get QUERY PARAMS
  //   const searchParams = useSearchParams();
  //   const queryParamType = searchParams.get("type");

  // STATES
  const [filterModal, setFilterModal] = useState(false);
  //! Original DATA to leave untouched
  const [data, setData] = useState(null);
  const [finalData, setFinalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("Price (Ascending)");
  //? Default Filters [Checkboxes are checked based on below values in array]
  const [filters, setFilters] = useState({
    subtype: [],
  });
  const [typeFiltersParams, setTypeFiltersParams] = useState({
    subtype: [
      "baked goods",
      "canisters & tins",
      "cups & mugs",
      "honey accessories",
      "infusers & strainers",
      "tea chests",
      "tea presses",
      "teapots",
      "tea sets",
    ],
  });

  // USE-EFFECT
  useEffect(() => {
    setData(allProducts);
    setFinalData(
      allProducts.sort((a, b) => {
        if (sort === "Price (Ascending)") {
          return a.price > b.price;
        }
        if (sort === "Price (Descending)") {
          return b.price > a.price;
        }
        if (sort === "Alphabetical (A-Z)") {
          return a.title.localeCompare(b.title);
        }
        if (sort === "Alphabetical (Z-A)") {
          return b.title.localeCompare(a.title);
        }
      })
    );
    setIsLoading(false);
  }, [sort]);

  if (!isLoading && finalData) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          <div className={styles.collection_container}>
            {/* RESULTS HEADER */}
            <div className={styles.title_flex}>
              <h2 className={styles.category_title}>teaware</h2>
              <div className={styles.filter_flex}>
                <div className={styles.sort_box}>
                  <select defaultChecked={"Sort"}>
                    <option value="Sort" disabled>
                      Sort
                    </option>
                    <option
                      value="Price (Ascending)"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Price (Ascending)
                    </option>
                    <option
                      value="Price (Descending)"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Price (Descending)
                    </option>
                    <option
                      value="Alphabetical (A-Z)"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Alphabetical (A-Z)
                    </option>
                    <option
                      value="Alphabetical (Z-A)"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Alphabetical (Z-A)
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
                    <div className={styles.title_test}>{each.title}</div>
                    {/* <h4>{each.title}</h4> */}
                    <span className={styles.product_price}>
                      <sup>$</sup> {(each.price / 100).toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* FILTER OVERLAY */}
            <TeawareFilterOverlay
              modalOpen={filterModal}
              setModalOpen={setFilterModal}
              typeFiltersParams={typeFiltersParams}
              filters={filters}
              setFilters={setFilters}
              data={data}
              setFinalData={setFinalData}
              sort={sort}
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default TeawareCollections;
