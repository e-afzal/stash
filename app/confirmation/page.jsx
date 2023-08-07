"use client";

// STYLES
import styles from "@/public/styles/pages/confirmation/confirmation.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import gifts from "../data/products/gifts/data";
import teaware from "../data/products/teaware/data";
import looseTea from "../data/products/tea/loose_leaf/data";
import teaBags from "../data/products/tea/tea_bag/data";
import Image from "next/image";
import Link from "next/link";

const Confirmation = () => {
  // Merge all products required to filter and find the first image to use in 'Image' element based on 'Product Title'.
  const allProducts = [...gifts, ...teaware, ...looseTea, ...teaBags];
  // Search Params for URL params extraction
  const searchParams = useSearchParams();

  // STATE
  const [amountDetails, setAmountDetails] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // USE EFFECT: Fetch Order Details & Line Items
  useEffect(() => {
    const fetchOrderDetails = async () => {
      const res = await fetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
          sessionId: searchParams.get("session_id"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { session_details } = await res.json();
      setAmountDetails(session_details.amount_details);
      setCustomerDetails(session_details.customer_details);
      setLineItems(session_details.lineItems);
      setLoading(false);
    };
    fetchOrderDetails();
  }, []);

  if (!loading) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          {/* SECTION: CONGRATULATE */}
          <section id={styles.congratulate}>
            <div className={styles.congratulate_container}>
              <h2>order confirmation</h2>
              <p>
                {customerDetails.name.split(" ")[0]}, thank you for your order!
              </p>
              <p>
                We've received your order and will contact you as soon as your
                package is shipped. You can find your order details below.
              </p>
            </div>
          </section>

          {/* SECTION: ORDER SUMMARY */}
          <section id={styles.summary}>
            <h2>order details</h2>
            <div className={styles.summary_container}>
              <div className={styles.order_card_container}>
                {lineItems?.map((item, index) => (
                  <div key={index} className={styles.item_card}>
                    <div className={styles.item_image}>
                      <Image
                        src={
                          allProducts.filter(
                            (product) => product.title === item.description
                          )[0].images[0]
                        }
                        width={130}
                        height={130}
                        alt={`${item.description} thumbnail`}
                      />
                    </div>
                    <div className={styles.item_content}>
                      <p className={styles.item_title}>{item.description}</p>
                      <p className={styles.item_quantity}>
                        Quantity ordered: {item.quantity}
                      </p>
                      <p className={styles.item_perUnit}>
                        Price per unit: $
                        {(item.price.unit_amount / 100).toFixed(2)}
                      </p>
                    </div>
                    <p className={styles.item_subtotal}>
                      ${(item.amount_total / 100).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className={styles.subtotal_flex}>
                  <h5>subtotal</h5>
                  <p>${(amountDetails.amount_subtotal / 100).toFixed(2)}</p>
                </div>
                <div className={styles.shipping_flex}>
                  <h5>shipping cost</h5>
                  <p>${(amountDetails.shipping_cost / 100).toFixed(2)}</p>
                </div>
                <div className={styles.total_flex}>
                  <h5>total price</h5>
                  <p>${(amountDetails.amount_total / 100).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: SHIPPING DETAILS */}
          <section id={styles.shipping}>
            <h2>shipping details</h2>

            <div className={styles.shipping_grid_container}>
              <div className={styles.shipping_grid_item}>
                <h5>Package recipient</h5>
                <p>{customerDetails.name}</p>
              </div>
              <div className={styles.shipping_grid_item}>
                <h5>Recipient email</h5>
                <p>{customerDetails.email}</p>
              </div>
              <div className={styles.shipping_grid_item}>
                <h5>Recipient address</h5>
                <p>{`${customerDetails.address.line1}, ${customerDetails.address.city}, ${customerDetails.address.state}, ${customerDetails.address.country}`}</p>
              </div>
            </div>
          </section>

          <Link className={styles.return} href={"/"}>
            return home
          </Link>
        </main>
        <Footer />
      </>
    );
  }
};

export default Confirmation;
