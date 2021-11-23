import { BusinessProps } from "./listConsts";

export async function fetchBusinesses(URL: string): Promise<BusinessProps[]> {
    const result = await fetch(URL).then(r => r.json());
    return result;
}
