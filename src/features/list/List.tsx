import { BusinessApiUrl, BusinessProps } from "./listConsts";
import { useQuery } from "react-query";
import logo from '../../logo.svg';
import styles from './List.module.css';
import { fetchBusinesses } from "./listAPI";

import { updateData } from "./listSlice";
import { useEffect } from "react";

export function List() {
    const businessQuery = useQuery<BusinessProps[], Error>(["Business-fetch"], async () =>  await fetchBusinesses(BusinessApiUrl) );
    const businesses = businessQuery.data || [];
    
    useEffect(() => {
        updateData(businesses)
    },[businesses])

    console.log(businesses)

    return (
        <div>

        <header className={styles.listHeader}>
            <img src={logo} className={styles.logo} alt="logo" />
            Logo
        </header>
        <ul>
            {businesses.map(((business: BusinessProps) =><li key={business.id}>{business.name}</li> ))}
        </ul>
        </div>
    );
} 

