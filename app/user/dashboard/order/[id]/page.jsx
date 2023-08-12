"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/pages/user/dashboard/order/order_details.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import gifts from "@/app/data/products/gifts/data";
import looseTea from "@/app/data/products/tea/loose_leaf/data";
import teaBags from "@/app/data/products/tea/tea_bag/data";
import teaware from "@/app/data/products/teaware/data";

const OrderDetails = ({ params }) => {
  // Merge all products required to filter and find the first image to use in 'Image' element based on 'Product Title'.
  const allProducts = [...gifts, ...teaware, ...looseTea, ...teaBags];

  // STATES
  const [loading, setLoading] = useState(true);
  const [amountDetails, setAmountDetails] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [lineItems, setLineItems] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders/${params.id}`,
          {
            method: "GET",
          }
        );
        const { order } = await res.json();
        if (order) {
          setAmountDetails(order.amount_details);
          setCustomerDetails(order.customer_details);
          setLineItems(order.lineItems);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrderDetails();
  }, []);

  if (!loading) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
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

          <Link className={styles.return} href={"/user/dashboard"}>
            return to dashboard
          </Link>
        </main>
        <Footer />
      </>
    );
  }
};

export default OrderDetails;
