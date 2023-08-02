"use client";

import Link from "next/link";
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ASSET IMPORT
import arrow from "@/public/icons/arrow-forward.svg";

const TeaPicksCarousel = ({ picks, styles }) => {
  return (
    <>
      {/* MAIN SWIPER */}
      <Swiper
        className={styles.swiper_carousel}
        // slidesPerView={"4.25"}
        // centeredSlidesBounds
        centeredSlides
        // centerInsufficientSlides={true}
        longSwipes={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          650: {
            slidesPerView: 3.45,
            spaceBetween: 50,
          },
        }}
      >
        {picks.slice(0, 6).map((ware, index) => (
          <SwiperSlide key={index}>
            <Link href={ware.url} className={styles.pick_card}>
              <Image
                src={ware.images[0]}
                alt={ware.title}
                height={509}
                width={509}
              />
              <div className={styles.card_content}>
                <h4>{ware.title}</h4>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus natus velit eos id, quae veritatis.
                </p> */}
                <Image src={arrow} alt="Forward arrow icon" />
              </div>
            </Link>
            {/* <Image src={image} alt="image" width={509} height={509} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeaPicksCarousel;
