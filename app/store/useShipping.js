//? Global state and handlers pertaining to the SHIPPING DETAILS
//? Mostly used on the 'checkout' page
import { create } from "zustand";
import { persist } from "zustand/middleware";

//? Shipping Details Schema:
//When calling addToShippingDetails, you require user related information, such as:
// {fullName, email, number, country, states, address, apartment, city, postalCode}

export const useShipping = create(
  persist(
    (set) => ({
      shippingDetails: {
        fullName: "",
        email: "",
        phoneNumber: "",
        //? Default country & state set to 'U.S.'  & 'Alabama' here so that it appears as being selected within select tags of "checkout" page
        country: "United States of America",
        state: "Alabama",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
      },
      addToShippingDetails: (shippingDetail) => {
        set(() => {
          return {
            shippingDetails: shippingDetail,
          };
        });
      },
    }),
    { name: "shippingDetails" }
  )
);
