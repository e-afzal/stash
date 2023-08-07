import Image from "next/image";
import { useRef } from "react";

// STYLES
import styles from "@/public/styles/components/collections/filter_overlay.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

const FilterOverlay = ({
  modalOpen,
  setModalOpen,
  typeFiltersParams,
  filters,
  setFilters,
  data,
  finalData,
  setFinalData,
}) => {
  //? REFs
  const inputRef = useRef(null);
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
    // For teaware, only criteria is 'subtype'
    // const filteration = data.filter((product) => {
    //   const includesTeaType = filters.type.includes(product.teaType);
    //   const includesCaffeine = filters.caffeine.includes(product.caffeine);
    //   const includesPackaging = filters.packaging.includes(product.packaging);
    //   if (includesTeaType && includesCaffeine && includesPackaging)
    //     return product;
    // });
    const filterTeaType = data.filter((product) =>
      filters.type.includes(product.teaType)
    );
    const filterCaffeine = data.filter((product) =>
      filters.caffeine.includes(product.caffeine)
    );
    const filterPackaging = data.filter((product) =>
      filters.packaging.includes(product.packaging)
    );
    const allResults = [
      ...filterTeaType,
      ...filterCaffeine,
      ...filterPackaging,
    ];
    const uniqueIds = new Set();
    const uniqueArray = allResults.filter((element) => {
      const isDuplicate = uniqueIds.has(element.id);

      uniqueIds.add(element.id);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });
    // const uniqueArray = allResults.filter((obj, index) => {
    //   return index === allResults.findIndex((o) => obj.id === o.id);
    // });
    setFinalData(uniqueArray);
    setModalOpen(false);
  };

  const handleResetData = () => {
    // RELOAD ENTIRE PAGE to set everything to DEFAULT as was
    window.location.reload();
  };

  console.log(filters);
  console.log(finalData.length);

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
              <Image src={cancelIcon} />
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
                      ref={inputRef}
                    />
                    <label htmlFor={each}>{each}</label>
                  </div>
                ))}
              </div>
            )}

            {/* 'SUBTYPE' FILTERS in TEAWARE */}
            {"subtype" in typeFiltersParams && (
              <div className={styles.filter_container}>
                <h3>Type</h3>
                {typeFiltersParams.subtype.map((each, index) => (
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
            {"packaging" in typeFiltersParams && (
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
            )}
          </div>
        </div>
        <div className={styles.bottom_section}>
          <div className={styles.button_box}>
            <button className={styles.view_btn} onClick={handleFilteredData}>
              view
            </button>
            <button className={styles.clear_btn} onClick={handleResetData}>
              clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;
