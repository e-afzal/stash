// STYLES
import styles from "@/public/styles/pages/user/signin/signin.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import SignInComp from "@/app/components/signin/SignInComp";

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <SignInComp />
      </main>
    </>
  );
};

export default SignInPage;
