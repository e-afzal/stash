"use client";

// STYLES
import styles from "@/public/styles/components/product/counter.module.scss";

const QuantityCounter = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className={styles.counter_container}>
      <span className={styles.counter_icon} onClick={decrementQuantity}>
        -
      </span>
      <p>{quantity}</p>
      <span className={styles.counter_icon} onClick={incrementQuantity}>
        +
      </span>
    </div>
  );
};

export default QuantityCounter;
