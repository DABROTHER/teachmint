import { useEffect, useMemo, useState } from 'react';

interface TimerHook {
  time: number;
  isRunning: boolean;
  startPause: () => void;
  reset: () => void;
}
export const useTimer = (initialTime: number): TimerHook => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  // console.log(time, 'initialTime', initialTime);

  useMemo(() => {
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startPause = (): void => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = (): void => {
    setTime(initialTime);
    setIsRunning(false);
  };

  return { time, isRunning, startPause, reset };
};
