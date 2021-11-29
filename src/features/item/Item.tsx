import { useMemo } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router";

import { useBusinesses } from "../../app/api/useBusinesses";
import { Spinner } from "../common/spinner/Spinner";
import { ErrorPage } from "../error/Error";
import { Nearby } from "../nearby/Nearby";
import styles from "./Item.module.css";
import { ResponsiveImage } from "./image/Image";
import { BusinessProps } from "./itemConsts";

export const Item = () => {
  const queryClient = useQueryClient();
  const businesses = useBusinesses();
  const { id } = useParams<{ id: string }>();
  const business = useMemo(
    () => businesses.data?.find((business) => business.id === id),
    [businesses.data, id]
  );

  const placesByCity = queryClient
    .getQueriesData([business?.address.city])
    ?.filter(
      ([_, city]) => id !== (city as BusinessProps).id // filtering out the current place
    )
    .map(([_, city]) => city as BusinessProps);

  const ADDRESS_SEPARATOR = <span>, </span>;

  if (businesses.isRefetching || businesses.isLoading) return <Spinner />;
  if (business) {
    return (
      <>
        <div className={styles.imageContainer}>
          <ResponsiveImage src={business.image} alt={business.name} />
        </div>
        <div className={styles.content}>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.item}>
              <h2 className={`${styles.title} ${styles.singleLine}`}>
                Address
              </h2>
              <span className={styles.singleLine}>
                {business.address.number}&nbsp;
                {business.address.street}
              </span>
              <br />
              <span className={styles.singleLine}>
                {business.address.city}
                {ADDRESS_SEPARATOR}
                {business.address.zip}
              </span>
            </div>
            <div className={styles.item}>
              <h2 className={`${styles.title} ${styles.singleLine}`}>
                Contact
              </h2>
              <a className={styles.link} href={`tel:${business.phone}`}>
                {business.phone}
              </a>
              <a className={styles.link} href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.card}>
              {placesByCity?.length && <Nearby placesByCity={placesByCity!} />}
            </div>
          </div>
        </div>
      </>
    );
  }
  return !business && <ErrorPage />;
};
