"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// STYLES
import styles from "@/public/styles/components/navbar.module.scss";

// ASSET IMPORT
import logo from "@/public/images/nav_logo_white.webp";
import searchIcon from "@/public/icons/search.svg";
import accountIcon from "@/public/icons/account.svg";
import bagIcon from "@/public/icons/bag.svg";

const Navbar = () => {
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
    { title: "gifts", url: "/" },
  ];
  const teaCollections = [
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
  ];
  const teawareCollections = [
    { title: "brewing", url: "#", bgdColor: "#FFEADA", textColor: "#665548" },
    {
      title: "cups & mugs",
      url: "#",
      bgdColor: "#FFD5A4",
      textColor: "#6b4d22",
    },
    { title: "serving", url: "#", bgdColor: "#FFB5A4", textColor: "#763a2e" },
    { title: "tea sets", url: "#", bgdColor: "#FDEAC3", textColor: "#645635" },
    {
      title: "tea storage",
      url: "#",
      bgdColor: "#F4CBBA",
      textColor: "#69483a",
    },
    { title: "view all", url: "#", bgdColor: "#C8A18F", textColor: "#593a2b" },
  ];
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.image_container}>
          <Link href={"/"}>
            <Image src={logo} />
          </Link>
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
            <Link href={"/"}>
              <Image src={accountIcon} />
            </Link>
            <button>
              <Image src={searchIcon} />
            </button>
            <Link href={"/cart"}>
              <Image src={bagIcon} />
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
          {teaCollections.map((each, index) => (
            <Link
              key={index}
              className={styles.tea_dialog_box}
              style={{ color: each.textColor, backgroundColor: each.bgdColor }}
              href={each.url}
            >
              {each.title}
            </Link>
          ))}
        </div>
      </div>

      {/* TEAWARE DIALOG BOX */}
      <div
        ref={teawareDialogRef}
        className={`${styles.overlay_container} ${styles.teaware_overlay_container}`}
      >
        <div className={styles.teaware_dialog}>
          {teawareCollections.map((each, index) => (
            <Link
              key={index}
              className={styles.teaware_dialog_box}
              style={{ backgroundColor: each.bgdColor, color: each.textColor }}
              href={each.url}
            >
              {each.title}
            </Link>
          ))}
        </div>
      </div>

      {/* GIFT DIALOG BOX */}
      {/* <div
        className={`${styles.overlay_container} ${styles.gift_overlay_container}`}
      ></div> */}
    </header>
  );
};

export default Navbar;
