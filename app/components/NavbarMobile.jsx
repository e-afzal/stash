"use client";

// STYLES
import styles from "@/public/styles/components/navbar_mobile.module.scss";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Link from "next/link";

// ASSET IMPORT
import logo from "@/public/images/nav_logo_white.webp";
import menu from "@/public/icons/menu.svg";
import accountIcon from "@/public/icons/account_mobile.svg";
import bagIcon from "@/public/icons/bag_mobile.svg";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import twitter from "@/public/icons/twitter.svg";
import youtube from "@/public/icons/youtube.svg";

const NavbarMobile = () => {
  //? DOM ELEMENTS
  const menuItems = [
    {
      title: "tea",
      url: "/",
      collections: [
        {
          title: "tea bags",
          url: "#",
          textColor: "#000",
          bgdColor: "#ffe4c4",
        },
        {
          title: "loose leaf",
          url: "#",
          textColor: "#000",
          bgdColor: "#f2fedc",
        },
        { title: "view all", url: "#", textColor: "#fff", bgdColor: "#1b3d2f" },
      ],
    },
    {
      title: "teaware",
      url: "/",
      collections: [
        {
          title: "brewing",
          url: "#",
          bgdColor: "#FFEADA",
          textColor: "#665548",
        },
        {
          title: "cups & mugs",
          url: "#",
          bgdColor: "#FFD5A4",
          textColor: "#6b4d22",
        },
        {
          title: "serving",
          url: "#",
          bgdColor: "#FFB5A4",
          textColor: "#763a2e",
        },
        {
          title: "tea sets",
          url: "#",
          bgdColor: "#FDEAC3",
          textColor: "#645635",
        },
        {
          title: "tea storage",
          url: "#",
          bgdColor: "#F4CBBA",
          textColor: "#69483a",
        },
        {
          title: "view all",
          url: "#",
          bgdColor: "#C8A18F",
          textColor: "#593a2b",
        },
      ],
    },
    // { title: "gifts", url: "/" },
  ];

  //? SOCIAL ICONS
  const socialIcons = [
    { icon: facebook, url: "https://www.facebook.com/stashtea" },
    { icon: twitter, url: "https://www.twitter.com/stashtea" },
    { icon: youtube, url: "https://www.youtube.com/user/stashteacompany" },
    { icon: instagram, url: "https://www.instagram.com/stashtea" },
  ];

  //? STATE
  const [menuOpen, setMenuOpen] = useState(false);

  //? HANDLERS
  const handleMenu = () => {
    if (!menuOpen) setMenuOpen(true);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header id={styles.header_mobile}>
      <nav className={styles.nav_mobile}>
        <Link href={"/"} className={styles.logo_link}>
          <Image
            src={logo}
            alt="Stash Brand Logo"
            className={styles.nav_mobile_logo}
          />
        </Link>

        <Image
          onClick={handleMenu}
          src={menu}
          alt="Navbar Hamburger Icon"
          className={styles.nav_mobile_menu_icon}
        />
      </nav>

      {/* MENU OVERLAY */}
      <div
        className={styles.menu_overlay}
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <div className={styles.icons_container}>
          <Link href={"/"}>
            <Image src={accountIcon} alt="My Account Icon" />
            <p>Account</p>
          </Link>
          <button>
            <Image src={bagIcon} alt="Shopping Bag Icon" />
            <p>Cart</p>
          </button>
        </div>
        <input type="text" placeholder="What are you looking for?" />
        {/* ACCORDION */}
        {menuItems.map((each, index) => (
          <Accordion.Root
            id={styles.accordion_container}
            collapsible
            key={index}
          >
            <Accordion.Item value={`item${index}`}>
              <Accordion.Header>
                <Accordion.Trigger className={styles.accordion_trigger}>
                  {each.title}
                </Accordion.Trigger>
                <Accordion.Content className={styles.accordion_content}>
                  {each.collections.map((each, index) => (
                    <Link key={index} href={each.url}>
                      {each.title}
                    </Link>
                  ))}
                </Accordion.Content>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion.Root>
        ))}

        <div className={styles.social_icons}>
          {socialIcons.map((each, index) => (
            <Link key={index} href={each.url} target="_blank">
              <Image src={each.icon} alt="Icon" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavbarMobile;
