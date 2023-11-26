import { useUser } from './useUser';
import { usePost } from './usePost';
import { useMemo } from 'react';
import { calculateTotalPostOfEveryUser } from 'utils/helper';
import { useDispatch } from 'react-redux';
import { setUserList } from 'store/slices/userSlice';
import { setPostList } from 'store/slices/postSlice';

export const useHome = () => {
  const { isLoadingUsers, users } = useUser();
  const { isLoadingPosts, posts } = usePost();
  const dispatch = useDispatch();

  const data = useMemo(() => {
    if (posts && users) {
      const postCountByUser = calculateTotalPostOfEveryUser(posts as PostDetailsList[]);

      const usersWithPostCount = users.map((user) => ({
        ...user,
        postCount: postCountByUser[user.id] || 0,
      }));

      dispatch(setUserList(usersWithPostCount));
      dispatch(setPostList(posts));

      return usersWithPostCount;
    }
    return [];
  }, [users, posts, dispatch]);

  return {
    isHomePageLoading: isLoadingUsers || isLoadingPosts,
    data,
  };
};
