import { useMemo } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import styles from "./List.module.css";
import { fetchBusinesses } from "./listAPI";
import { BusinessApiUrl, BusinessProps } from "./listConsts";

export function List() {
  const businessQuery = useQuery<BusinessProps[], Error>(
    ["Business-fetch"],
    async () => await fetchBusinesses(BusinessApiUrl)
  );
  const businesses = useMemo(
    () => businessQuery.data || [],
    [businessQuery.data]
  );

  return (
    <div>
      <header className={styles.listHeader}>
        <img src={logo} className={styles.logo} alt="logo" />
        Logo
      </header>

      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {businesses?.map((business) => (
            <tr key={business.id} className={styles.tableRow}>
              <td>
                {/* It makes bad User experience to have the whole row clickabe 
                so I have decided to make the business name a Link  */}
                <Link className={styles.link} to={`/${business.id}`}>
                  {business.name}
                </Link>
              </td>
              <td>
                <span className={styles.description}>
                  {business.description}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
