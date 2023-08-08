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
import TeaFilterOverlay from "@/app/components/collections/TeaFilterOverlay";
import Footer from "@/app/components/Footer";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";
import looseTea from "@/app/data/products/tea/loose_leaf/data";

const TeaCollections = () => {
  // PRODUCTS
  const allProducts = [...teaBags, ...looseTea];

  //? Get QUERY PARAMS
  const searchParams = useSearchParams();
  const urlSearchParam = searchParams.get("type");

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
    // packaging: urlSearchParam ? [urlSearchParam] : ["tea bag", "loose leaf"],
  });
  const [sort, setSort] = useState("");
  const [typeFiltersParams, setTypeFiltersParams] = useState({
    type: ["black", "green", "oolong", "herbal"],
    caffeine: ["caffeinated", "caffeine-free", "decaf"],
    // packaging: ["tea bag", "loose leaf"],
  });

  //! USE-EFFECT - Get and set data based on URL SEARCH PARAM
  //! Trigger during initial load only; thus NO dependencies and has an empty array
  useEffect(() => {
    if (urlSearchParam) {
      //? Searching 'allProducts' with packaging as 'urlSearchParam'
      //? i.e. 'tea bag' or 'loose leaf'
      const paramFiltered = allProducts.filter(
        (each) => each.packaging === urlSearchParam
      );
      setFinalData(paramFiltered);
      setData(paramFiltered);
      setIsLoading(false);
    } else {
      //? Show ALL TEA products if no 'URL search param' found
      setData(allProducts);
      setFinalData(allProducts);
      setIsLoading(false);
    }
  }, []);

  //?HANDLERS
  const handleSort = (e) => {
    setSort(e.target.value);
    const value = e.target.value;
    const sortableData = [...finalData];
    if (value === "Price (Ascending)")
      setFinalData(sortableData.sort((a, b) => a.price > b.price));

    if (value === "Price (Descending)")
      setFinalData(sortableData.sort((a, b) => b.price > a.price));

    if (value === "Alphabetical (A-Z)")
      setFinalData(sortableData.sort((a, b) => a.title.localeCompare(b.title)));

    if (value === "Alphabetical (Z-A)")
      setFinalData(sortableData.sort((a, b) => b.title.localeCompare(a.title)));
  };

  if (isLoading === false && finalData) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          <div className={styles.collection_container}>
            {/* RESULTS HEADER */}
            <div className={styles.title_flex}>
              <h2 className={styles.category_title}>tea</h2>
              <div className={styles.filter_flex}>
                <div className={styles.sort_box}>
                  <select defaultValue={"Sort"}>
                    <option value="Sort" disabled>
                      Sort
                    </option>
                    <option value="Price (Ascending)" onClick={handleSort}>
                      Price (Ascending)
                    </option>
                    <option value="Price (Descending)" onClick={handleSort}>
                      Price (Descending)
                    </option>
                    <option value="Alphabetical (A-Z)" onClick={handleSort}>
                      Alphabetical (A-Z)
                    </option>
                    <option value="Alphabetical (Z-A)" onClick={handleSort}>
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
            <TeaFilterOverlay
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

export default TeaCollections;
