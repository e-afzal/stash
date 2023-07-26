// STYLES
import styles from "@/public/styles/pages/cart/cart.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import QuantityCounter from "../components/product/QuantityCounter";
import Footer from "../components/Footer";

// ASSET IMPORT
import dummyImage from "@/public/images/products/tea/teabags/3930050051/1.webp";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <h2 className={styles.cart_title}>your bag</h2>
        <div className={styles.cart_container}>
          {/* SECTION: CART TABLE */}
          <section id={styles.cart_table}>
            <p className={styles.itemNumber}>5 items in total</p>
            {/* ITEM CARD */}
            <div className={styles.item_card}>
              <div className={styles.item_image}>
                <Image src={dummyImage} width={130} height={130} />
              </div>
              <div className={styles.item_content}>
                <p className={styles.item_title}>
                  Lemon Ginger Herbal Tea - 20 ct tea bags
                </p>
                <p className={styles.item_perUnit}>Price per unit: Dhs199</p>
                <QuantityCounter />
                <span className={styles.removeBtn}>remove</span>
              </div>
              <p className={styles.item_subtotal}>$796</p>
            </div>
            <div className={styles.item_card}>
              <div className={styles.item_image}>
                <Image src={dummyImage} width={130} height={130} />
              </div>
              <div className={styles.item_content}>
                <p className={styles.item_title}>
                  Lemon Ginger Herbal Tea - 20 ct tea bags
                </p>
                <p className={styles.item_perUnit}>Price per unit: Dhs199</p>
                <QuantityCounter />
                <span className={styles.removeBtn}>remove</span>
              </div>
              <p className={styles.item_subtotal}>$796</p>
            </div>
            <div className={styles.item_card}>
              <div className={styles.item_image}>
                <Image src={dummyImage} width={130} height={130} />
              </div>
              <div className={styles.item_content}>
                <p className={styles.item_title}>
                  Lemon Ginger Herbal Tea - 20 ct tea bags
                </p>
                <p className={styles.item_perUnit}>Price per unit: Dhs199</p>
                <QuantityCounter />
                <span className={styles.removeBtn}>remove</span>
              </div>
              <p className={styles.item_subtotal}>$796</p>
            </div>
          </section>

          {/* SECTION: CART SUMMARY */}
          <section id={styles.cart_summary}>
            <h4 className={styles.summary_title}>Order summary</h4>
            <div className={styles.summary_flex}>
              <p className={styles.units}>Products (5)</p>
              <p className={styles.subtotal_price}>$1,891</p>
            </div>
            <div className={styles.subtotal_flex}>
              <p className={styles.subtotal_description}>
                Subtotal incl. Taxes
              </p>
              <p className={styles.subtotal_amount}>
                <sup>$</sup>1,891
              </p>
            </div>
            <Link href={"#"}>go to checkout</Link>
          </section>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Cart;
