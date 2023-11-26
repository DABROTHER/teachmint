import Typography from 'design-systems/Atoms/Typography';
import React from 'react';
import { formatTime } from 'utils/helper';

const DigitalWatch: React.FC<{ time: number; isLoadingTime: boolean }> = ({ time, isLoadingTime }) => {
  console.log('time', time);
  return (
    <div className='flex items-center w-full'>
      <div className='bg-neutral-100 text-neutral-800 w-[150px]'>
        <Typography className='p-2 text-body text-[#0700fb]'>
          {isLoadingTime ? 'Loading...' : formatTime(time)}
        </Typography>
      </div>
    </div>
  );
};

export default DigitalWatch;
