// STYLES
import styles from "@/public/styles/pages/user/signin/signin.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// CLERK
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <SignIn path="/user/sign-in" routing="path" signUpUrl="/user/sign-up" />
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
