"use client";
//? SINGLE PRODUCT GALLERY
import Image from "next/image";
import { useState } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";

// STYLES
import styles from "@/public/styles/components/product/swiper_gallery.module.scss";

const ProductGallery = ({ images }) => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* MAIN SWIPER */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={"1"}
        modules={[Thumbs]}
        className={styles.swiper_container}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <Image src={image} alt="Product Image" width={509} height={509} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAIL SWIPER */}
      <Swiper
        className={styles.swiper_thumbs_container}
        slidesPerView={4}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        centerInsufficientSlides
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <Image src={image} alt="Product Thumbnail" width={75} height={75} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
