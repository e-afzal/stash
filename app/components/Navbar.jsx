"use client";
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/navbar.module.scss";

// ASSET IMPORT
import logo from "@/public/images/nav_logo_white.webp";
import searchIcon from "@/public/icons/search.svg";
import accountIcon from "@/public/icons/account.svg";
import bagIcon from "@/public/icons/bag.svg";

const Navbar = () => {
  const menuItems = [
    { title: "tea", url: "/" },
    { title: "teaware", url: "/" },
    { title: "gifts", url: "/" },
  ];
  const teaCollections = [
    { title: "tea bags", url: "#" },
    { title: "loose leaf", url: "#" },
    { title: "view all", url: "#" },
  ];
  const teawareCollections = [
    { title: "brewing", url: "#" },
    { title: "cups & mugs", url: "#" },
    { title: "serving", url: "#" },
    { title: "tea sets", url: "#" },
    { title: "tea storage", url: "#" },
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
              <li value={each.title} key={index}>
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
            <button>
              <Image src={bagIcon} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
