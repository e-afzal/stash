// STYLES
import styles from "@/public/styles/pages/user/dashboard/dashboard.module.scss";

// COMPONENTS
import Navbar from "../../components/Navbar";
import NavbarMobile from "../../components/NavbarMobile";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>Dashboard</main>
      <Footer />
    </>
  );
};

export default Dashboard;
