import { Link } from "react-router-dom";

import { Address, BusinessProps } from "../item/itemConsts";
import styles from "./Nearby.module.css";

interface NearbyProps {
  placesByCity: BusinessProps[];
}

const getPlaceAddress = (address: Address) =>
  `${address.number} ${address.street}, ${address.city} ${address.country} `;

export const Nearby = ({ placesByCity }: NearbyProps) => (
  <div>
    <h2 className={styles.title}>Nearby Places</h2>
    <table className={styles.table}>
      <tbody>
        {placesByCity.map((place) => (
          <tr key={place.id} className={styles.tableRow}>
            <td className={styles.name}>
              {/* It makes bad User experience to have the whole row clickabe 
                    so I have decided to make the business name a Link  */}
              <Link className={styles.link} to={`/places/${place.id}`}>
                {place.name}
              </Link>
            </td>
            <td>
              <span className={styles.description}>
                {getPlaceAddress(place.address)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
