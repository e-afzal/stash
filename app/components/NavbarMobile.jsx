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
import searchIcon from "@/public/icons/search_mobile.svg";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import twitter from "@/public/icons/twitter.svg";
import youtube from "@/public/icons/youtube.svg";

// COMPONENTS
import SearchModal from "./SearchModal";

// CLERK
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

const NavbarMobile = () => {
  //? DOM ELEMENTS
  const menuItems = [
    {
      title: "tea",
      url: "/",
      collections: [
        {
          title: "tea bags",
          url: "/collections/tea?type=tea bag",
        },
        {
          title: "loose leaf",
          url: "/collections/tea?type=loose leaf",
        },
        { title: "view all", url: "/collections/tea" },
      ],
    },
    {
      title: "teaware",
      url: "/",
      collections: [
        {
          title: "canisters & tins",
          url: "/collections/teaware?subtype=canisters and tins",
        },
        {
          title: "cups & mugs",
          url: "/collections/teaware?subtype=cups and mugs",
        },
        {
          title: "honey accessories",
          url: "/collections/teaware?subtype=honey accessories",
        },
        {
          title: "tea pots",
          url: "/collections/teaware?subtype=teapots",
        },
        {
          title: "tea sets",
          url: "/collections/teaware?subtype=tea sets",
        },
        {
          title: "view all",
          url: "/collections/teaware",
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
  const [modalOpen, setModalOpen] = useState(false);

  //? HANDLERS
  const handleMenu = () => {
    if (!menuOpen) setMenuOpen(true);
    if (menuOpen) setMenuOpen(false);
  };

  const handleModalOpen = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      {/* SEARCH MODAL */}
      <SearchModal modelOpen={modalOpen} handleModalOpen={setModalOpen} />
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
            <SignedOut>
              <Link href={"/sign-in"}>
                <Image src={accountIcon} alt="My Account Icon" />
                <p>Account</p>
              </Link>
            </SignedOut>
            <Link href={"/cart"}>
              <Image src={bagIcon} alt="Shopping Bag Icon" />
              <p>Cart</p>
            </Link>
            <button onClick={handleModalOpen}>
              <Image src={searchIcon} alt="Search Icon" />
              <p>Search</p>
            </button>
          </div>
          {/* <input type="text" placeholder="What are you looking for?" /> */}

          {/* ACCORDION */}
          {/* NOTE: User Dashboard Accordion visible ONLY when signed in  */}
          <SignedIn>
            <Accordion.Root id={styles.accordion_container} collapsible>
              <Accordion.Item value={`item0`}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordion_trigger}>
                    Your Dashboard
                  </Accordion.Trigger>
                  <Accordion.Content className={styles.accordion_content}>
                    <Link href={"/user/dashboard"}>Dashboard</Link>
                    <SignOutButton
                      signOutCallback={() => window.location.replace("/")}
                    >
                      sign out
                    </SignOutButton>
                  </Accordion.Content>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion.Root>
          </SignedIn>
          {/* OTHER MENU ITEMS */}
          {menuItems.map((each, index) => (
            <Accordion.Root
              id={styles.accordion_container}
              collapsible
              key={index + 1}
            >
              <Accordion.Item value={`item${index + 1}`}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.accordion_trigger}>
                    {each.title}
                  </Accordion.Trigger>
                  <Accordion.Content className={styles.accordion_content}>
                    {each.collections.map((each, index) => (
                      <a key={index} href={each.url}>
                        {each.title}
                      </a>
                    ))}
                  </Accordion.Content>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion.Root>
          ))}

          <div className={styles.social_icons}>
            {socialIcons.map((each, index) => (
              <Link key={index} href={each.url} target="_blank">
                <Image src={each.icon} alt="Social Media Icon" />
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarMobile;
