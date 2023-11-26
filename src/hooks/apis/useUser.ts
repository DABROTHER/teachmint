import userService from 'api-services/userService';
import { useQuery } from 'react-query';
import { QUERIES } from 'utils/api-integration';

export const useUser = () => {
  const { isLoading: isLoadingUsers, data: users } = useQuery(
    [QUERIES.PUBLIC.GET_USERS],
    () => userService.getUsers(),
    {
      select: (res) => res as unknown as UserDetailsList[],
      refetchOnWindowFocus: false,
    }
  );
  return {
    isLoadingUsers,
    users: users as UserDetailsList[],
  };
};
