// STYLES
import styles from "@/public/styles/pages/user/signup/signup.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// CLERK
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <SignUp path="/user/sign-up" routing="path" signInUrl="/user/sign-in" />
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;
