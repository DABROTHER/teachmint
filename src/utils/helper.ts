export const calculateTotalPostOfEveryUser = (posts: PostDetailsList[]) => {
  const postCountByUser: { [userId: number]: number } = {};
  for (const post of posts) {
    const userId = post.userId;

    if (userId in postCountByUser) {
      postCountByUser[userId]++;
    } else {
      postCountByUser[userId] = 1;
    }
  }

  return postCountByUser;
};
export const generateEmptyArray = (num: number) => Array(num).fill('');
export const convertIntoTimeToSecond = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getUTCHours() * 60 * 60;
  const minutes = date.getUTCMinutes() * 60;
  const seconds = date.getUTCSeconds();
  return hours + minutes + seconds;
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
};
