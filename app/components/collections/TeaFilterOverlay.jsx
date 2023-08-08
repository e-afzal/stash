import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/collections/filter_overlay.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

const TeaFilterOverlay = ({
  filters,
  modalOpen,
  setModalOpen,
  typeFiltersParams,
  setFilters,
  data,
  setFinalData,
  sort,
}) => {
  //? HANDLERS
  const handleChange = (e) => {
    //!Remove checkbox item (checked item), if already in array
    if (filters[e.target.name].includes(e.target.value)) {
      setFilters((prev) => {
        return {
          ...prev,
          [e.target.name]: prev[e.target.name].filter(
            (each) => each !== e.target.value
          ),
        };
      });
    }
    //* Add item (newly checked item), if doesn't exist in array
    if (!filters[e.target.name].includes(e.target.value)) {
      setFilters((prev) => {
        return {
          ...prev,
          [e.target.name]: [...prev[e.target.name], e.target.value],
        };
      });
    }
  };

  const handleFilteredData = () => {
    // Criterias based on which items will be filtered: "type","caffeine","packaging"
    const filterTeaType = data.filter((product) =>
      filters.type.includes(product.teaType)
    );
    const filterCaffeine = data.filter((product) =>
      filters.caffeine.includes(product.caffeine)
    );
    // const filterPackaging = data.filter((product) =>
    //   filters.packaging.includes(product.packaging)
    // );
    //! REMOVE any DUPLICATES and return results that fit any of the three criterias
    const allResults = [
      ...filterTeaType,
      ...filterCaffeine,
      // ...filterPackaging,
    ];
    const uniqueIds = new Set();
    const uniqueArray = allResults.filter((element) => {
      const isDuplicate = uniqueIds.has(element.id);
      uniqueIds.add(element.id);
      if (!isDuplicate) return true;

      return false;
    });
    setFinalData(
      uniqueArray.sort((a, b) => {
        if (sort === "Price (Ascending)") return a.price > b.price;
        if (sort === "Price (Descending)") return b.price > a.price;
        if (sort === "Alphabetical (A-Z)")
          return a.title.localeCompare(b.title);
        if (sort === "Alphabetical (Z-A)")
          return b.title.localeCompare(a.title);
      })
    );

    //* If NO filter selected, just show the original DATA
    if (
      !filters.type.length &&
      !filters.caffeine.length
      // && !filters.packaging.length
    ) {
      setFinalData(data);
    }

    setModalOpen(false);
  };

  return (
    <div
      className={styles.filter_overlay_container}
      style={{ display: modalOpen ? "block" : "none" }}
    >
      {/* OVERLAY/BACKGROUND */}
      <div
        className={styles.filter_overlay}
        onClick={() => setModalOpen(false)}
      ></div>

      {/* OVERLAY MENU */}
      <div className={styles.filter_menu}>
        <div className={styles.top_section}>
          <div className={styles.filter_title_box}>
            <h4 className={styles.title}>Filter & sort</h4>
            <button
              className={styles.close_btn}
              onClick={() => setModalOpen(false)}
            >
              <Image src={cancelIcon} alt="Close Icon" />
            </button>
          </div>
          <div className={styles.filters_container}>
            {/* 'TYPE' FILTERS */}
            {"type" in typeFiltersParams && (
              <div className={styles.filter_container}>
                <h3>Type</h3>
                {typeFiltersParams.type.map((each, index) => (
                  <div key={index}>
                    <input
                      value={each}
                      type="checkbox"
                      name="type"
                      id={each}
                      defaultChecked={filters.type.includes(each)}
                      onChange={handleChange}
                    />
                    <label htmlFor={each}>{each}</label>
                  </div>
                ))}
              </div>
            )}

            {/* 'CAFFEINE' FILTERS */}
            {"caffeine" in typeFiltersParams && (
              <div className={styles.filter_container}>
                <h3>caffeine</h3>
                {typeFiltersParams.caffeine.map((each, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="caffeine"
                      id={each}
                      value={each}
                      defaultChecked={filters.caffeine.includes(each)}
                      onChange={handleChange}
                    />
                    <label htmlFor={each}>{each}</label>
                  </div>
                ))}
              </div>
            )}

            {/* 'PACKAGING' FILTERS */}
            {/* {"packaging" in typeFiltersParams && (
              <div className={styles.filter_container}>
                <h3>packaging</h3>
                {typeFiltersParams.packaging.map((each, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="packaging"
                      id={each}
                      value={each}
                      defaultChecked={filters.packaging.includes(each)}
                      onChange={handleChange}
                    />
                    <label htmlFor={each}>{each}</label>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>

        <div className={styles.bottom_section}>
          <div className={styles.button_box}>
            <button className={styles.view_btn} onClick={handleFilteredData}>
              view
            </button>
            <button
              className={styles.clear_btn}
              onClick={() => window.location.reload()}
            >
              clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaFilterOverlay;
