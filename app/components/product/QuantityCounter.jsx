"use client";

// STYLES
import styles from "@/public/styles/components/product/counter.module.scss";

import { useState } from "react";

const QuantityCounter = () => {
  const [counter, setCounter] = useState(0);

  const handlePositiveCount = () => {
    if (counter === 10) return;
    setCounter((prevState) => prevState + 1);
  };

  const handleNegativeCount = () => {
    if (counter === 0) return;
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className={styles.counter_container}>
      <span className={styles.counter_icon} onClick={handleNegativeCount}>
        -
      </span>
      <p>{counter}</p>
      <span className={styles.counter_icon} onClick={handlePositiveCount}>
        +
      </span>
    </div>
  );
};

export default QuantityCounter;
