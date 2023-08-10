"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// STYLES
import styles from "@/public/styles/components/navbar.module.scss";

// COMPONENTS
import SearchModal from "@/app/components/SearchModal";
import NavPopover from "@/app/components/NavPopover";

// ASSET IMPORT
import logo from "@/public/images/nav_logo_white.webp";
import searchIcon from "@/public/icons/search.svg";
import accountIcon from "@/public/icons/account.svg";
import bagIcon from "@/public/icons/bag.svg";

// CLERK
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  //? STATES
  const [modalOpen, setModalOpen] = useState(false);

  //? REFS
  const teaDialogRef = useRef(null);
  const teawareDialogRef = useRef(null);

  //? HANDLERS
  const toggleTeaDialog = () => {
    const teaActive = teaDialogRef.current.classList.contains("active");

    if (teaActive) {
      // If Dialog is OPEN
      teaDialogRef.current.classList.toggle("active");
      teaDialogRef.current.style.display = "none";
    }
    if (!teaActive) {
      // If Dialog is CLOSED
      teaDialogRef.current.classList.toggle("active");
      teaDialogRef.current.style.display = "block";
      // Close all other dialogs
      teawareDialogRef.current.style.display = "none";
      // Remove "active" class, if so
      teawareDialogRef.current.classList.remove("active");
    }
  };

  const toggleTeawareDialog = () => {
    const teaActive = teawareDialogRef.current.classList.contains("active");

    if (teaActive) {
      // If Dialog is OPEN
      teawareDialogRef.current.classList.toggle("active");
      teawareDialogRef.current.style.display = "none";
    }
    if (!teaActive) {
      // If Dialog is CLOSED
      teawareDialogRef.current.classList.toggle("active");
      teawareDialogRef.current.style.display = "block";
      // Close all other dialogs
      teaDialogRef.current.style.display = "none";
      // Remove "active" class, if so
      teaDialogRef.current.classList.remove("active");
    }
  };

  //? DOM ELEMENTS
  const menuItems = [
    { title: "tea", url: "/", handler: toggleTeaDialog },
    { title: "teaware", url: "/", handler: toggleTeawareDialog },
    // { title: "gifts", url: "/" },
  ];
  const teaCollections = [
    {
      title: "tea bags",
      url: "/collections/tea?type=tea bag",
      image: "/images/navbar/tea_bag.jpg",
    },
    {
      title: "loose leaf",
      url: "/collections/tea?type=loose leaf",
      image: "/images/navbar/loose_leaf.jpg",
    },
    {
      title: "view all",
      url: "/collections/tea",
      image: "/images/navbar/tea_view_all.jpg",
    },
  ];
  const teawareCollections = [
    {
      title: "canisters & tins",
      url: "/collections/teaware?subtype=canisters and tins",
      image: "/images/navbar/canisters.jpg",
    },
    {
      title: "cups & mugs",
      url: "/collections/teaware?subtype=cups and mugs",
      image: "/images/navbar/mugs.jpg",
    },
    {
      title: "honey accessories",
      url: "/collections/teaware?subtype=honey accessories",
      image: "/images/navbar/honey.jpg",
    },
    {
      title: "tea pots",
      url: "/collections/teaware?subtype=teapots",
      image: "/images/navbar/teapot.jpg",
    },
    {
      title: "tea sets",
      url: "/collections/teaware?subtype=tea sets",
      image: "/images/navbar/teasets.jpg",
    },
    {
      title: "view all",
      url: "/collections/teaware",
      image: "/images/navbar/teaware_view_all.jpg",
    },
  ];

  return (
    <>
      {/* SEARCH MODAL */}
      <SearchModal modelOpen={modalOpen} handleModalOpen={setModalOpen} />
      {/* NAVBAR */}
      <header className={styles.header}>
        <nav>
          <div className={styles.image_container}>
            <a href={"/"}>
              <Image src={logo} alt="Stash Logo" />
            </a>
          </div>
          <div className={styles.secondary_nav_container}>
            <ul className={styles.nav_menu_items}>
              {menuItems.map((each, index) => (
                <li value={each.title} key={index} onClick={each.handler}>
                  {each.title}
                </li>
              ))}
            </ul>
            <div className={styles.icons_container}>
              <NavPopover />
              <SignedOut>
                <Link href={"/sign-in"}>
                  <Image src={accountIcon} alt="My Account icon" />
                </Link>
              </SignedOut>
              <button onClick={() => setModalOpen(true)}>
                <Image src={searchIcon} alt="Search Icon" />
              </button>
              <Link href={"/cart"}>
                <Image src={bagIcon} alt="Shopping Bag Logo" />
              </Link>
            </div>
          </div>
        </nav>

        {/* TEA DIALOG BOX */}
        <div
          ref={teaDialogRef}
          className={`${styles.overlay_container} ${styles.tea_overlay_container}`}
        >
          <div className={styles.tea_dialog}>
            <div className={styles.tea_container}>
              {teaCollections.map((each, index) => (
                <a
                  key={index}
                  className={styles.tea_dialog_box}
                  href={each.url}
                >
                  <Image
                    src={each.image}
                    width={250}
                    height={250}
                    alt={each.title}
                  />
                  <p>{each.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* TEAWARE DIALOG BOX */}
        <div
          ref={teawareDialogRef}
          className={`${styles.overlay_container} ${styles.teaware_overlay_container}`}
        >
          <div className={styles.teaware_dialog}>
            <div className={styles.teaware_container}>
              {teawareCollections.map((each, index) => (
                <a
                  key={index}
                  className={styles.teaware_dialog_box}
                  href={each.url}
                >
                  <Image
                    src={each.image}
                    width={250}
                    height={250}
                    alt={each.title}
                  />
                  <p>{each.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* GIFT DIALOG BOX */}
        {/* <div
        className={`${styles.overlay_container} ${styles.gift_overlay_container}`}
      ></div> */}
      </header>
    </>
  );
};

export default Navbar;
