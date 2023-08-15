"use client";
import { useState, useEffect } from "react";

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

// ZUSTAND IMPORT
import { useCart } from "@/app/store/useCart";

const SingleProduct = ({ params }) => {
  useEffect(() => {
    //? Scroll to top of page when page loads
    window.scrollTo(0, 0);
  }, []);

  // FETCH PRODUCT
  const allProducts = [
    ...teaBagsData,
    ...looseLeafData,
    ...teawareData,
    ...giftsData,
  ];
  const [product] = allProducts.filter((each) => each.handle === params.handle);

  // STATE
  const [quantity, setQuantity] = useState(1);

  // ZUSTAND RELATED
  const { addItemToCart } = useCart();

  // HANDLERS
  const incrementQuantity = () => {
    if (quantity === 10) return;
    setQuantity((prevState) => prevState + 1);
  };
  const decrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prevState) => prevState - 1);
  };

  // ZUSTAND ACTION
  const addItem = () => {
    const cartProduct = {
      productId: product.id,
      productImage: product.images[0],
      productTitle: product.title,
      productPricePerUnit: product.price / 100,
      quantity,
    };
    addItemToCart(cartProduct);
  };

  return (
    <>
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
            <QuantityCounter
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <button className={styles.cart_btn} onClick={addItem}>
              add to bag
            </button>
          </section>

          {/* DETAILS */}
          <section id={styles.details}>
            <ProductAccordion menuItems={product.accordionMenuItems} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
