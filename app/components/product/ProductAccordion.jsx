//? For "DETAILS" section in SINGLE PRODUCT page
"use client";

import * as Accordion from "@radix-ui/react-accordion";

// STYLES
import styles from "@/public/styles/components/product/product_accordion.module.scss";

const ProductAccordion = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((each, index) => (
        <Accordion.Root
          id={styles.accordion_container}
          collapsible
          key={index}
          defaultValue={"item0"}
        >
          <Accordion.Item value={`item${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordion_trigger}>
                {each.title}
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordion_content}>
                {each.title !== "product description" ? (
                  <p>{each.content}</p>
                ) : (
                  each.content
                    .split("|")
                    .map((each, index) => <p key={index}>{each}</p>)
                )}
              </Accordion.Content>
            </Accordion.Header>
          </Accordion.Item>
        </Accordion.Root>
      ))}
    </>
  );
  // return (
  //   <>
  //     {menuItems.map((each, index) => (
  //       <Accordion.Root
  //         id={styles.accordion_container}
  //         collapsible
  //         key={index}
  //         defaultValue={"item0"}
  //       >
  //         <Accordion.Item value={`item${index}`}>
  //           <Accordion.Header>
  //             <Accordion.Trigger className={styles.accordion_trigger}>
  //               {each.title}
  //             </Accordion.Trigger>
  //             <Accordion.Content className={styles.accordion_content}>
  //               {each.title !== "product description" ? (
  //                 <p>{each.content}</p>
  //               ) : (
  //                 each.content
  //                   .split("|")
  //                   .map((each, index) => <p key={index}>{each}</p>)
  //               )}
  //             </Accordion.Content>
  //           </Accordion.Header>
  //         </Accordion.Item>
  //       </Accordion.Root>
  //     ))}
  //   </>
  // );
};

export default ProductAccordion;
