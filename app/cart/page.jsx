"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// STYLES
import styles from "@/public/styles/pages/cart/cart.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import CartQuantityCounter from "../components/cart/CartQuantityCounter";
import Footer from "../components/Footer";

// ZUSTAND IMPORT
import { useCart } from "@/app/store/useCart";

const Cart = () => {
  // STATES
  const [loadedItems, setLoadedItems] = useState(null);

  // ZUSTAND RELATED
  const { items, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useCart();

  useEffect(() => {
    setLoadedItems(items);
  }, [items]);

  //? CALCULATIONS
  const totalQuantity = loadedItems?.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  const subTotal = loadedItems?.reduce(
    (prev, current) => prev + current.quantity * current.productPricePerUnit,
    0
  );

  // HANDLERS
  const incrementQuantity = (id, quantity) => {
    if (quantity === 10) return;
    increaseQuantity(id, quantity);
    console.log(id, quantity);
  };
  const decrementQuantity = (id, quantity) => {
    if (quantity === 1) return;
    decreaseQuantity(id, quantity);
    console.log(id, quantity);
    // setQuantity((prevState) => prevState - 1);
  };
  const removeItem = (id) => {
    removeItemFromCart(id);
  };

  if (loadedItems) {
    return (
      <body>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          <h2 className={styles.cart_title}>your bag</h2>
          <div className={styles.cart_container}>
            {/* SECTION: CART TABLE */}
            <section id={styles.cart_table}>
              <p className={styles.itemNumber}>
                {totalQuantity} item{totalQuantity > 1 ? "s" : ""} in total
              </p>
              {/* ITEM CARD */}
              {loadedItems?.map((item, index) => (
                <div key={index} className={styles.item_card}>
                  <div className={styles.item_image}>
                    <Image
                      src={item.productImage}
                      width={130}
                      height={130}
                      alt={`${item.productTitle} image thumbnail`}
                    />
                  </div>
                  <div className={styles.item_content}>
                    <p className={styles.item_title}>{item.productTitle}</p>
                    <p className={styles.item_perUnit}>
                      Price per unit: ${item.productPricePerUnit}
                    </p>
                    <CartQuantityCounter
                      productId={item.productId}
                      quantity={item.quantity}
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                    />
                    <span
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.productId)}
                    >
                      remove
                    </span>
                  </div>
                  <p className={styles.item_subtotal}>
                    ${(item.quantity * item.productPricePerUnit).toFixed(2)}
                  </p>
                </div>
              ))}
            </section>

            {/* SECTION: CART SUMMARY */}
            <section id={styles.cart_summary}>
              <h4 className={styles.summary_title}>Order summary</h4>
              <div className={styles.summary_flex}>
                <p className={styles.units}>Products ({totalQuantity})</p>
                <p className={styles.subtotal_price}>${subTotal.toFixed(2)}</p>
              </div>
              <div className={styles.subtotal_flex}>
                <p className={styles.subtotal_description}>
                  Subtotal incl. Taxes
                </p>
                <p className={styles.subtotal_amount}>
                  <sup>$</sup>
                  {subTotal.toFixed(2)}
                </p>
              </div>
              <Link href={"/checkout"}>go to checkout</Link>
            </section>
          </div>
        </main>
        <Footer />
      </body>
    );
  }
};

export default Cart;
