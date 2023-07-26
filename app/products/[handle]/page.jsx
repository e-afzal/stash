import Link from "next/link";

// STYLES
import styles from "@/public/styles/pages/single_product/product.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import ProductGallery from "@/app/components/product/ProductGallery";
import QuantityCounter from "@/app/components/product/QuantityCounter";
import ProductAccordion from "@/app/components/product/ProductAccordion";
import Footer from "@/app/components/Footer";

// DATA
import giftsData from "@/app/data/products/gifts/data";
import teawareData from "@/app/data/products/teaware/data";
import teaBagsData from "@/app/data/products/tea/tea_bag/data";
import looseLeafData from "@/app/data/products/tea/loose_leaf/data";

const SingleProduct = ({ params }) => {
  const allProducts = [
    ...teaBagsData,
    ...looseLeafData,
    ...teawareData,
    ...giftsData,
  ];
  const [product] = allProducts.filter((each) => each.handle === params.handle);

  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <div className={styles.main_container}>
          {/* IMAGES */}
          <section id={styles.images}>
            <ProductGallery images={product.images} />
          </section>

          {/* CONFIGURATION */}
          <section id={styles.configuration}>
            <h2 className={styles.product_title}>{product.title}</h2>
            <span className={styles.product_price}>
              <sup>$</sup> {product.price / 100}
            </span>
            <p className={styles.vat_inclusive}>Price incl. VAT</p>
            <QuantityCounter />
            <button className={styles.cart_btn}>add to bag</button>
          </section>

          {/* DETAILS */}
          <section id={styles.details}>
            <ProductAccordion menuItems={product.accordionMenuItems} />
          </section>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default SingleProduct;
