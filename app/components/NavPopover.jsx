//? Dialog pops up when user is SIGNED IN and is shown menu of "dashboard" and "sign out" link
"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/nav_popover.module.scss";

// ASSET IMPORT
import accountIcon from "@/public/icons/account.svg";
import dashIcon from "@/public/icons/dashboard.svg";
import logoutIcon from "@/public/icons/logout.svg";

// CLERK
import { SignedIn, SignOutButton } from "@clerk/nextjs";

const NavPopover = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // HANDLER
  const handlePop = () => {
    // If closed, set true and open popup
    if (!popupOpen) setPopupOpen(true);
    // If open, set false and close popup
    if (popupOpen) setPopupOpen(false);
  };

  return (
    <SignedIn>
      <div className={styles.popup_container}>
        <button className={styles.popup_btn} onClick={handlePop}>
          <Image src={accountIcon} />
          <div
            className={styles.popup_dialog}
            style={{
              display: popupOpen ? "block" : "none",
            }}
          >
            <div className={styles.dialog_content}>
              <Link href={"/user/dashboard"}>
                <Image src={dashIcon} /> dashboard
              </Link>
              <div className={styles.signout_btn}>
                <Image src={logoutIcon} />
                <SignOutButton
                  signOutCallback={() => window.location.replace("/")}
                >
                  sign out
                </SignOutButton>
              </div>
            </div>
          </div>
        </button>
      </div>
    </SignedIn>
  );
};

export default NavPopover;
