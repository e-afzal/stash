import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/collections/filter_overlay.module.scss";

// COMPONENTS
import FilterAccordions from "@/app/components/collections/FilterAccordions";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

const FilterOverlay = ({ modalOpen, setModalOpen }) => {
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
            <FilterAccordions />
          </div>
        </div>
        <div className={styles.bottom_section}>
          <div className={styles.button_box}>
            <button className={styles.view_btn}>view</button>
            <button className={styles.clear_btn}>clear all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;
