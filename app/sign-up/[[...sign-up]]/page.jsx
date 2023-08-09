// STYLES
import styles from "@/public/styles/pages/user/signup/signup.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import SignUpComp from "@/app/components/signup/SignUpComp";
import Footer from "@/app/components/Footer";

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <SignUpComp />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default SignUpPage;
