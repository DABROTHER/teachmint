'use client';
import HomePageTemplate from 'design-systems/Templates/HomePageTemplate';
import { useHome, useUser } from 'hooks/apis';

export default function Home() {
  const { isHomePageLoading, data } = useHome();
  return <HomePageTemplate usersData={data} isLoading={isHomePageLoading} />;
}
