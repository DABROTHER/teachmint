import Skeleton from 'design-systems/Atoms/Skeleton';
import { generateEmptyArray } from 'utils/helper';

const HomeSkeletonCardInfo = () => {
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      {generateEmptyArray(2).map((_, i) => (
        <Skeleton key={i} className={`!w-20 !h-4 rounded-xs`}></Skeleton>
      ))}
    </div>
  );
};
export default HomeSkeletonCardInfo;
