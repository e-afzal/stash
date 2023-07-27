// STYLES
import styles from "@/public/styles/pages/checkout/checkout.module.scss";

// ASSET IMPORT

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";
import Link from "next/link";

const Checkout = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <div className={styles.shipping_container}>
          <h2 className={styles.shipping_title}>shipping address</h2>

          <form>
            <div className={styles.contact_container}>
              <h4>contact details</h4>
              <input type="text" placeholder="Enter full name" />
              <input type="email" placeholder="Enter email" />
              <input type="number" placeholder="Enter contact number" />
            </div>

            <div className={styles.shipping_details_container}>
              <h4>shipping details</h4>
              <div className={styles.details_flex}>
                <select defaultValue={"Select Country"}>
                  <option disabled value={"Select Country"}>
                    Select Country
                  </option>
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Canada">Canada</option>
                </select>
                <select defaultValue={"Select State"}>
                  <option disabled value={"Select State"}>
                    Select state
                  </option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                </select>
              </div>
              <div className={styles.details_flex}>
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Apartment, suite, etc." />
              </div>
              <div className={styles.details_flex}>
                <input type="text" placeholder="City" />
                <input type="number" placeholder="Postal Code" />
              </div>
            </div>
            <Link href={"#"}>Continue to Shipping</Link>
          </form>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Checkout;
