import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/footer.module.scss";

// ASSET IMPORTS
import logo from "@/public/images/nav_logo_white.webp";

const Footer = () => {
  const footerLinks = [
    {
      title: "customer help",
      links: [
        { title: "FAQ", url: "#" },
        { title: "Contact Us", url: "#" },
        { title: "Privacy Policy", url: "#" },
        { title: "Sign In", url: "#" },
      ],
    },
    {
      title: "our company",
      links: [
        { title: "About Us", url: "#" },
        { title: "B Corp", url: "#" },
        { title: "Careers", url: "#" },
        { title: "Stash Retail Store", url: "#" },
        { title: "A Little Bag of Crazy", url: "#" },
      ],
    },
    {
      title: "ordering",
      links: [
        { title: "Track your Order", url: "#" },
        { title: "Shipping & Handling", url: "#" },
        { title: "Returns & Exchanges", url: "#" },
      ],
    },
  ];
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_primary}>
          <div className={styles.logo_container}>
            <Image src={logo} alt="Stash logo" />
          </div>
          <div className={styles.connected_container}>
            <h4>stay connected</h4>
            <p>
              Receive the latest Stash news, new product notifications, and
              exclusive promotions.
            </p>
            <div className={styles.input_box}>
              <input type="email" placeholder="join our mailing list" />
              <button>go</button>
            </div>
            <div className={styles.social_icons_container}></div>
          </div>
        </div>
        <div className={styles.footer_secondary}>
          {footerLinks.map((each, index) => (
            <div key={index} className={styles.secondary_section}>
              <h4>{each.title}</h4>
              <ul className={styles.secondary_links_container}>
                {each.links.map((each, index) => (
                  <li key={index}>
                    <Link href={each.url}>{each.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
