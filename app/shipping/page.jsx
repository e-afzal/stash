"use client";

import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/shipping/shipping.module.scss";
import { useEffect, useState } from "react";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// ZUSTAND IMPORT
import { useCart } from "../store/useCart";
import { useShipping } from "../store/useShipping";

const Shipping = () => {
  const [loadedItems, setLoadedItems] = useState(null);
  const [loadedShippingDetails, setLoadedShippingDetails] = useState(null);
  // ZUSTAND RELATED
  const { shippingDetails } = useShipping();
  const { items } = useCart();

  useEffect(() => {
    setLoadedItems(items);
    setLoadedShippingDetails(shippingDetails);
  }, [items, shippingDetails]);

  //? CALCULATIONS
  const totalQuantity = loadedItems?.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  const subTotal = loadedItems?.reduce(
    (prev, current) => prev + current.quantity * current.productPricePerUnit,
    0
  );

  if (loadedItems && loadedShippingDetails) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          <div className={styles.shipping_container}>
            {/* SECTION: SHIPPING DETAILS */}
            <section id={styles.confirmed_details}>
              <h4>shipping details</h4>
              <div className={styles.shipping_details_container}>
                <div className={styles.email_flex}>
                  <h4>contact email</h4>
                  <p>{shippingDetails.email}</p>
                </div>
                <div className={styles.address_flex}>
                  <h4>ship to</h4>
                  <p>
                    {`${shippingDetails.apartment}, ${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state}, ${shippingDetails.country}`}
                  </p>
                </div>
              </div>
              <div className={styles.shipping_method}>
                <h4>shipping method</h4>
                <div className={styles.method_container}>
                  <div className={styles.input_control}>
                    <input type="radio" id="standard" defaultChecked />
                    <label htmlFor="standard">
                      Standard Shipping (3 - 5 business days)
                    </label>
                  </div>
                  <p className={styles.method_price}>$50</p>
                </div>
              </div>
            </section>

            {/* SECTION: ORDER SUMMARY */}
            <section id={styles.order_summary}>
              <h4 className={styles.summary_title}>Order summary</h4>
              <div className={styles.product_flex}>
                <p className={styles.units}>Products ({totalQuantity})</p>
                <p className={styles.subtotal_price}>${subTotal.toFixed(2)}</p>
              </div>
              <div className={styles.shipping_flex}>
                <p className={styles.title}>Shipping</p>
                <p className={styles.shipping_price}>$50</p>
              </div>
              <div className={styles.subtotal_flex}>
                <p className={styles.subtotal_description}>Total</p>
                <p className={styles.subtotal_amount}>
                  <sup>$</sup>
                  {(subTotal + 50).toFixed(2)}
                </p>
              </div>
              <Link href={"#"}>continue to payment</Link>
            </section>

            {/* RETURN BUTTON */}
            <div className={styles.return_container}>
              <Link href={"/checkout"}>Return to Information</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!loadedItems && !loadedShippingDetails) {
    <p>loading</p>;
  }
};

export default Shipping;
