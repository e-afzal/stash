//? For "DETAILS" section in SINGLE PRODUCT page
"use client";

import * as Accordion from "@radix-ui/react-accordion";

// STYLES
import styles from "@/public/styles/components/collections/filter_accordion.module.scss";

const FilterAccordions = () => {
  return (
    <>
      <Accordion.Root
        id={styles.accordion_container}
        collapsible
        // key={1}
        defaultValue={"item1"}
      >
        {/* SORTING */}
        <Accordion.Item value={`item1`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Sort
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <div className={styles.sort_container}>
                {/* SORT BY PRICING */}
                <div className={styles.sort_form_control}>
                  <label htmlFor="PriceH2L">Price: High to Low</label>
                  <input
                    type="radio"
                    id="PriceH2L"
                    defaultChecked
                    name="price"
                  />
                </div>
                <div className={styles.sort_form_control}>
                  <label htmlFor="PriceL2H">Price: Low to High</label>
                  <input type="radio" id="PriceL2H" name="price" />
                </div>

                {/* SORT ALPHABETICALLY */}
                <div className={styles.sort_form_control}>
                  <label htmlFor="Alphabetical(A-Z)">Alphabetically, A-Z</label>
                  <input
                    type="radio"
                    id="Alphabetical(A-Z)"
                    defaultChecked
                    name="alphabet"
                  />
                </div>
                <div className={styles.sort_form_control}>
                  <label htmlFor="Alphabetical(Z-A)">Alphabetically, Z-A</label>
                  <input type="radio" id="Alphabetical(Z-A)" name="alphabet" />
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item>

        {/* PRICING FILTER */}
        <Accordion.Item value={`item2`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Pricing
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <p>Content</p>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item>

        {/* TYPE */}
        <Accordion.Item value={`item3`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Tea Type
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <p>Content</p>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item>

        {/* CAFFEINE */}
        <Accordion.Item value={`item4`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Caffeine
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <p>Content</p>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item>

        {/* PACKAGING */}
        <Accordion.Item value={`item5`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Packaging
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <p>Content</p>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default FilterAccordions;
