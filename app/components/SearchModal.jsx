import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/search_modal.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/icons/close.svg";

// DATA
import teaBags from "@/app/data/products/tea/tea_bag/data";

const SearchModal = ({ modelOpen, handleModalOpen }) => {
  return (
    <section
      style={{ display: modelOpen ? "block" : "none" }}
      id={styles.search}
    >
      <Image
        src={cancelIcon}
        className={styles.cancelIcon}
        onClick={() => handleModalOpen(false)}
      />
      <div className={styles.search_container}>
        <h2 className={styles.search_title}>search our store</h2>
        <input type="text" placeholder="Type product name or id" />

        <div className={styles.results_container}>
          <div className={styles.results_count_container}>
            <h4 className={styles.results_count}>Results found: 3</h4>
            <Link href={"#"}>view all results</Link>
          </div>
          <div className={styles.results_box}>
            {teaBags.slice(0, 4).map((each, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
