import { useQuery, useQueryClient } from "react-query";

import { BusinessProps } from "../../features/item/itemConsts";
import { BusinessApiUrl } from "../../features/list/listConsts";

export function useBusinesses() {
  const queryClient = useQueryClient();

  const getBusinesses = async (): Promise<BusinessProps[]> => {
    const data = await fetch(BusinessApiUrl).then((r) => r.json());
    return data;
  };

  return useQuery<BusinessProps[], Error, BusinessProps[]>(
    "businesses",
    getBusinesses,
    {
      onSuccess: (businesses: BusinessProps[]) => {
        queryClient.setQueryData("businesses", businesses);
        businesses?.forEach((business: BusinessProps) => {
          queryClient.setQueryData(
            [business.address.city, business.id],
            business
          );
        });
      },
    }
  );
}
