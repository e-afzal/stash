"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// STYLES
import styles from "@/public/styles/pages/checkout/checkout.module.scss";
import toast, { Toaster } from "react-hot-toast";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import countries from "../data/countries";

// ZUSTAND IMPORT
import { useShipping } from "../store/useShipping";

const Checkout = () => {
  // ROUTER OBJECT
  const router = useRouter();
  // STATES
  const [shippingDetailsInput, setShippingDetailsInput] = useState(null);
  const [statesShown, setStatesShown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ZUSTAND RELATED
  const { shippingDetails, addToShippingDetails } = useShipping();

  // USE EFFECT
  useEffect(() => {
    setIsLoading(true);
    setShippingDetailsInput({
      fullName: shippingDetails.fullName || "",
      email: shippingDetails.email || "",
      phoneNumber: shippingDetails.phoneNumber || "",
      country: shippingDetails.country || "",
      state: shippingDetails.state || "",
      address: shippingDetails.address || "",
      apartment: shippingDetails.apartment || "",
      city: shippingDetails.city || "",
      postalCode: shippingDetails.postalCode || "",
    });

    if (shippingDetails) {
      setStatesShown(
        countries.filter(
          (country) => country.name === shippingDetails.country
        )[0].states
      );
      setIsLoading(false);
    }
  }, [shippingDetails]);

  // HANDLERS
  const handleInput = (e) => {
    setShippingDetailsInput({
      ...shippingDetailsInput,
      [e.target.id]: e.target.value,
    });
    //? Change STATES shown based on country selected
    if (e.target.id === "country") {
      const countrySelected = countries.filter(
        (country) => country.name === e.target.value
      );
      setStatesShown(countrySelected[0].states);
    }
  };

  const handleDetailsSubmission = (e) => {
    e.preventDefault();
    for (const key in shippingDetailsInput) {
      //? If field is empty or "", show "error" toast.
      if (!shippingDetailsInput[key]) {
        toast.error(`Please complete the ${key} field`, {
          position: "bottom-center",
          style: {
            fontFamily: `Kanit, sans-serif`,
            fontWeight: 400,
          },
        });
        return;
      }
    }
    addToShippingDetails(shippingDetailsInput);
    router.push("/shipping");
  };

  if (shippingDetailsInput && statesShown && !isLoading) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main id={styles.main}>
          {/* TOASTER */}
          <Toaster />

          <div className={styles.shipping_container}>
            <h2 className={styles.shipping_title}>shipping address</h2>

            <form>
              <div className={styles.contact_container}>
                <h4>contact details</h4>
                <input
                  type="text"
                  placeholder="Enter full name"
                  id="fullName"
                  value={shippingDetailsInput.fullName}
                  onChange={handleInput}
                  min={7}
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={shippingDetailsInput.email}
                  onChange={handleInput}
                  min={13}
                />
                <input
                  type="number"
                  placeholder="Enter contact number"
                  id="phoneNumber"
                  value={shippingDetailsInput.phoneNumber}
                  onChange={handleInput}
                  min={10}
                />
              </div>

              <div className={styles.shipping_details_container}>
                <h4>shipping details</h4>
                <div className={styles.details_flex}>
                  <select
                    defaultValue={shippingDetailsInput.country}
                    id="country"
                    onChange={handleInput}
                  >
                    <option disabled value={"Select Country"}>
                      Select Country
                    </option>
                    <option value="United States of America">
                      United States of America
                    </option>
                    <option value="Canada">Canada</option>
                  </select>
                  <select
                    defaultValue={shippingDetailsInput.state}
                    id="state"
                    onChange={handleInput}
                  >
                    <option disabled value={"Select State"}>
                      Select state
                    </option>
                    {statesShown.map((stateShown, index) => (
                      <option key={index} value={stateShown.name}>
                        {stateShown.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.details_flex}>
                  <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    onChange={handleInput}
                    value={shippingDetailsInput.address}
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc."
                    id="apartment"
                    onChange={handleInput}
                    value={shippingDetailsInput.apartment}
                    min={8}
                  />
                </div>
                <div className={styles.details_flex}>
                  <input
                    type="text"
                    placeholder="City"
                    id="city"
                    onChange={handleInput}
                    value={shippingDetailsInput.city}
                    min={5}
                  />
                  <input
                    type="number"
                    placeholder="Postal Code"
                    id="postalCode"
                    onChange={handleInput}
                    value={shippingDetailsInput.postalCode}
                    min={5}
                  />
                </div>
              </div>
              <button onClick={handleDetailsSubmission}>
                Continue to Shipping
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default Checkout;
