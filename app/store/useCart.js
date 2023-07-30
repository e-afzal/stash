//? Global state and handlers pertaining to the CART
import { create } from "zustand";
import { persist } from "zustand/middleware";

//? Single Item Schema:
//When calling addToCart, you require: {productId, productImage,title, pricePerUnit, quantity}

export const useCart = create(
  persist(
    (set) => ({
      // AMOUNT RELATED
      cartTotalAmount: 0,
      cartSubtotalAmount: 0,
      cartShippingAmount: 0,
      //CART RELATED
      items: [],
      addItemToCart: (item) => {
        // SETTING STATE with Item
        set((state) => {
          // Search if item exists
          //! NOTE: itemFound is the 'OBJECT' of the item found, NOT an ARRAY consisting of the Object.
          const itemFound = state.items.find(
            (each) => each.productId === item.productId
          );
          if (itemFound) {
            // Filter it out from state "cartItems" and keep other products
            //! 'filtered' returns an ARRAY of all other items
            const filtered = state.items.filter(
              (each) => each.productId !== itemFound.productId
            );
            // Adding the 'item', passed as argument to 'addItemToCart', with UPDATED QUANTITY to the other products i.e. 'filtered' array of products
            //? SORTING is done using the 'localeCompare' method instead of substracting method of sorting
            return {
              items: [...filtered, item].sort((a, b) =>
                a.productTitle.localeCompare(b.productTitle)
              ),
            };
          }
          // If item does NOT exist in 'items', simply add it to the state 'items''
          //? SORTING is done using the 'localeCompare' method instead of substracting method of sorting
          return {
            items: [...state.items, item].sort((a, b) =>
              a.productTitle.localeCompare(b.productTitle)
            ),
          };
        });
      },
      increaseQuantity: (productId, quantity) => {
        set((state) => {
          // Find product by ID
          const itemFound = state.items.find(
            (each) => each.productId === productId
          );
          const filtered = state.items.filter(
            (each) => each.productId !== itemFound.productId
          );

          //? SORTING is done using the 'localeCompare' method instead of substracting method of sorting
          return {
            items: [...filtered, { ...itemFound, quantity: quantity + 1 }].sort(
              (a, b) => a.productTitle.localeCompare(b.productTitle)
            ),
          };
        });
      },
      decreaseQuantity: (productId, quantity) => {
        set((state) => {
          // Find product by ID
          const itemFound = state.items.find(
            (each) => each.productId === productId
          );
          const filtered = state.items.filter(
            (each) => each.productId !== itemFound.productId
          );
          return {
            items: [...filtered, { ...itemFound, quantity: quantity - 1 }].sort(
              (a, b) => a.productTitle.localeCompare(b.productTitle)
            ),
          };
        });
      },
      removeItemFromCart: (id) => {
        set((state) => {
          // Find product by ID
          const itemFound = state.items.find((each) => each.productId === id);
          // Return products except removed item
          const filtered = state.items.filter(
            (each) => each.productId !== itemFound.productId
          );
          return {
            items: filtered,
          };
        });
      },
    }),
    { name: "cartItems" }
  )
);
