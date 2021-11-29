import { Link } from "react-router-dom";

import { ErrorPage } from "../error/Error";
import { BusinessProps } from "../item/itemConsts";
import styles from "./List.module.css";

interface ListProps {
  list?: BusinessProps[];
}

export const List = ({ list }: ListProps) =>
  list?.length ? (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={`${styles.tableHeadRow} ${styles.tableRow}`}>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {list.map((business) => (
            <tr key={business.id} className={styles.tableRow}>
              <td>
                {/* 
                    It makes bad User experience to have the whole row clickabe 
                    so I have decided to make the business name a Link
                    Also underline is shown on hover to show the user it is a link
                */}
                <Link className={styles.link} to={`/places/${business.id}`}>
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
  ) : (
    <div className={styles.spinnerWrapper}>
      <ErrorPage />
    </div>
  );
