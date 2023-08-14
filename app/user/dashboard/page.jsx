"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/user/dashboard/dashboard.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// CLERK
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // CLERK: Use the useUser hook to get the Clerk.user object
  const { user, isLoaded } = useUser();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders/get-orders`,
          {
            method: "POST",
            body: JSON.stringify({
              email: `${user.primaryEmailAddress.emailAddress}`,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { orders } = await res.json();
        setOrders(orders);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    }
    if (isLoaded) {
      fetchOrders();
    }
  }, [isLoaded]);

  if (!isLoading && orders) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          <h2 className={styles.overview_title}>my orders</h2>

          {/* IF ORDERS EXIST */}
          {orders?.length >= 1 && (
            <div className={styles.table_container}>
              <table>
                <thead className={styles.table_header}>
                  <tr>
                    <th>order #</th>
                    <th>order date</th>
                    <th>amount</th>
                    <th>details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {orders.map((order) => (
                      <>
                        <td>{order._id.slice(0, 5)}</td>
                        <td>
                          {
                            new Date(order.createdAt)
                              .toLocaleString("en-GB")
                              .split(",")[0]
                          }
                        </td>
                        <td>${order.amount_details.amount_total / 100}</td>
                        <td>
                          <Link href={`/user/dashboard/order/${order._id}`}>
                            View
                          </Link>
                        </td>
                      </>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {/* IF NO ORDERS */}
          {orders?.length === 0 && (
            <div className={styles.order_message}>
              <p>No orders have been placed.</p>
              <Link href={"/"} className="cta">
                Shop now
              </Link>
            </div>
          )}
        </main>
        <Footer />
      </>
    );
  }
};

export default Dashboard;
