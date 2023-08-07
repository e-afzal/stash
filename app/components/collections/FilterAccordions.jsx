//? For "DETAILS" section in SINGLE PRODUCT page
"use client";

import * as Accordion from "@radix-ui/react-accordion";

// STYLES
import styles from "@/public/styles/components/collections/filter_accordion.module.scss";

const FilterAccordions = ({ filters }) => {
  return (
    <>
      <Accordion.Root
        id={styles.accordion_container}
        collapsible
        // key={1}
        // defaultValue={"item1"}
      >
        {/* SORTING */}
        {/* <Accordion.Item value={`item1`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Sort
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <div className={styles.sort_container}>
                {/* SORT */}
        {/* <div className={styles.sort_form_control}>
                  <label htmlFor="PriceH2L">Price: High to Low</label>
                  <input
                    type="radio"
                    id="PriceH2L"
                    defaultChecked
                    name="sort"
                  />
                </div>
                <div className={styles.sort_form_control}>
                  <label htmlFor="PriceL2H">Price: Low to High</label>
                  <input type="radio" id="PriceL2H" name="sort" />
                </div>
                <div className={styles.sort_form_control}>
                  <label htmlFor="Alphabetical(A-Z)">Alphabetically, A-Z</label>
                  <input
                    type="radio"
                    id="Alphabetical(A-Z)"
                    defaultChecked
                    name="sort"
                  />
                </div>
                <div className={styles.sort_form_control}>
                  <label htmlFor="Alphabetical(Z-A)">Alphabetically, Z-A</label>
                  <input type="radio" id="Alphabetical(Z-A)" name="sort" />
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Header> */}
        {/* </Accordion.Item> */}

        {/* TYPE */}
        {/* IF "type" property exists in filters Obj, show accordion item */}
        {"type" in filters && (
          <Accordion.Item value={`item2`}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordion_trigger}>
                type
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordion_content}>
                {filters.type.map((each) => (
                  <>
                    <input type="checkbox" name="type" id={each} value={each} />
                    <label htmlFor={each}>{each}</label>
                  </>
                ))}
              </Accordion.Content>
            </Accordion.Header>
          </Accordion.Item>
        )}

        {/* CAFFEINE */}
        {/* {"caffeine" in filters && (
          <Accordion.Item value={`item3`}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordion_trigger}>
                Caffeine
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordion_content}>
                {filters.caffeine.map((each) => (
                  <>
                    <input type="checkbox" name="type" id={each} value={each} />
                    <label htmlFor={each}>{each}</label>
                  </>
                ))}
              </Accordion.Content>
            </Accordion.Header>
          </Accordion.Item>
        )} */}

        {/* PACKAGING */}
        {/* {"packaging" in filters && (
          <Accordion.Item value={`item4`}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordion_trigger}>
                Packaging
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordion_content}>
                {filters.packaging.map((each) => (
                  <>
                    <input type="checkbox" name="type" id={each} value={each} />
                    <label htmlFor={each}>{each}</label>
                  </>
                ))}
              </Accordion.Content>
            </Accordion.Header>
          </Accordion.Item>
        )} */}
        {/* PRICING FILTER */}
        {/* <Accordion.Item value={`item`}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              Pricing
            </Accordion.Trigger>
            <Accordion.Content className={styles.accordion_content}>
              <p>Content</p>
            </Accordion.Content>
          </Accordion.Header>
        </Accordion.Item> */}
      </Accordion.Root>
    </>
  );
};

export default FilterAccordions;
