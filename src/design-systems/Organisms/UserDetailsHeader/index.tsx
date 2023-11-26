'use client';
import Button from 'design-systems/Atoms/Button';
import DropDown from 'design-systems/Molecules/DropDown';
import { FC, useMemo, useState } from 'react';
import { UserDetailsHeaderProps } from './interface';
import DigitalWatch from 'design-systems/Molecules/Timer.tsx';
import { convertIntoTimeToSecond } from 'utils/helper';
import { useTimeZone } from 'hooks/apis/useTimezone';
import { useRouter } from 'next/navigation';
import { useTimer } from 'hooks/useTimer';
const UserDetailsHeader: FC<UserDetailsHeaderProps> = ({ isLoadingCountries, countries }) => {
  const [zone, setTimeZone] = useState<string>('');
  const router = useRouter();
  const { isLoadingTime, timeZone } = useTimeZone(zone);
  const { time, isRunning, startPause } = useTimer(convertIntoTimeToSecond(timeZone?.datetime as string));
  useMemo(() => {
    setTimeZone(countries?.[0]);
  }, [countries]);
  const routHome = () => {
    router.push('/');
  };
  return (
    <>
      <div className='flex w-full p-4 md:gap-0 gap-3 justify-between items-center'>
        <Button
          className='flex h-12 w-full md:w-[15%] items-center justify-center px-3 py-4 text-center font-Poppins leading-[23.3px] r bg-[#CBE2F3] hover:bg-[#a8d4f5]'
          onClick={routHome}
        >
          Back
        </Button>
        <div className='hidden lmd:flex flex-row w-full ml-[10%] slg:ml-[15%] lg:ml-[20%] xlg:ml-[30%]'>
          <div className='flex flex-row items-center w-full lmd:flex'>
            <DropDown
              className='-mt-6 !w-[200px] slg:w-auto'
              data={countries as unknown as string[]}
              defaultValue={countries?.[0]}
              onChange={(data) => setTimeZone(data)}
            />
            <DigitalWatch time={time} isLoadingTime={isLoadingTime} />
          </div>
          <Button
            className='flex h-12 w-[18%] items-center px-3 py-4 text-center font-Poppins leading-[23.3px] bg-[#CBE2F3] hover:bg-[#a8d4f5] justify-end'
            onClick={startPause}
          >
            {isRunning ? 'Pause' : 'Start'}
          </Button>
        </div>
        <Button
          className='lmd:hidden flex h-12 w-full md:w-[18%] items-center px-3 py-4 text-center font-Poppins leading-[23.3px] bg-[#CBE2F3] hover:bg-[#a8d4f5] justify-end'
          onClick={startPause}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      </div>
      <div className='flex flex-col-reverse gap-10 md:flex-row lmd:hidden w-full p-4 justify-between items-center'>
        <div className='flex w-full'>
          <DropDown
            className='ml-1 -mt-6 w-full md:!w-30'
            data={countries as unknown as string[]}
            defaultValue={countries?.[0]}
            onChange={(data) => setTimeZone(data)}
          />
        </div>
        <div className='flex'>
          <DigitalWatch time={time} isLoadingTime={isLoadingTime} />
        </div>
      </div>
    </>
  );
};
export default UserDetailsHeader;
