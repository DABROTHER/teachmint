import CountriesService from 'api-services/CountriesService';
import { useMutation, useQuery } from 'react-query';
import { QUERIES } from 'utils/api-integration';

export const useCountries = () => {
  const { isLoading: isLoadingCountries, data: countries } = useQuery(
    [QUERIES.PUBLIC.GET_COUNTRIES],
    () => CountriesService.getCountries(),
    {
      select: (res) => res,
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isLoadingTimeZoneCountry, mutateAsync: timeZoneCountry } = useMutation(
    ({ timeZone }: { timeZone: string }) => CountriesService.getCountriesTimeZone(timeZone)
  );
  return {
    isLoadingCountries,
    countries,
    isLoadingTimeZoneCountry,
    timeZoneCountry,
  };
};
