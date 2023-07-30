"use client";

// STYLES
import styles from "@/public/styles/components/product/counter.module.scss";

const CartQuantityCounter = ({
  productId,
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className={styles.counter_container}>
      <span
        className={styles.counter_icon}
        onClick={() => decrementQuantity(productId, quantity)}
      >
        -
      </span>
      <p>{quantity}</p>
      <span
        className={styles.counter_icon}
        onClick={() => incrementQuantity(productId, quantity)}
      >
        +
      </span>
    </div>
  );
};

export default CartQuantityCounter;
