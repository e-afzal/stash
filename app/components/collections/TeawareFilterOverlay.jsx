import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/collections/filter_overlay.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

const TeawareFilterOverlay = ({
  modalOpen,
  setModalOpen,
  typeFiltersParams,
  filters,
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
    setFinalData(
      data
        .filter((product) => filters.subtype.includes(product.subtype))
        .sort((a, b) => {
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

    //* If NO filter selected, just show the original DATA
    if (!filters.subtype.length) {
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
            {"subtype" in typeFiltersParams && (
              <div className={styles.filter_container}>
                <h3>Type</h3>
                {typeFiltersParams.subtype.map((each, index) => (
                  <div key={index}>
                    <input
                      value={each}
                      type="checkbox"
                      name="subtype"
                      id={each}
                      defaultChecked={filters.subtype.includes(each)}
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

export default TeawareFilterOverlay;
