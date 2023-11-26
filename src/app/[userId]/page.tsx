'use client';
import UserDetailTemplate from 'design-systems/Templates/UserDetailTemplate';
import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useCountries } from 'hooks/apis';

const UserDetails: FC = () => {
  const { userId } = useParams();
  const { countries, isLoadingCountries } = useCountries();

  return (
    <UserDetailTemplate
      id={userId as string}
      countries={countries as string[]}
      isLoadingCountries={isLoadingCountries}
    />
  );
};
export default UserDetails;
