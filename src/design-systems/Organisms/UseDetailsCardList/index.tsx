import Typography from 'design-systems/Atoms/Typography';
import Card from 'design-systems/Molecules/Card';
import { FC, useState } from 'react';
import { UseDetailsCardListProps } from './interface';
import Modal from 'design-systems/Molecules/Modal';
import { useToggle } from 'hooks/useToggle';
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton';
import { generateEmptyArray } from 'utils/helper';

const UseDetailsCardList: FC<UseDetailsCardListProps> = ({ data, isLoadingCountries }) => {
  const [isOpen, , , isOpenOn, isOpenOff] = useToggle(false);
  const [content, setContent] = useState<string>('');

  return (
    <>
      <div className='grid !gap-8 md:grid-cols-2 lg:grid-cols-3 m-8'>
        {isLoadingCountries
          ? generateEmptyArray(10).map((_, i) => (
              <CardSkeleton
                key={i}
                className='relative !h-[245px] w-full rounded-xs flex'
                variant='all'
                // eslint-disable-next-line react/no-children-prop
                // children={<HomeSkeletonCardInfo />}
              />
            ))
          : data?.map(({ title, body }, i) => (
              <div
                key={i}
                onClick={() => {
                  isOpenOn();
                  setContent(body);
                }}
              >
                <Card
                  className='border cursor-pointer !rounded-sm w-full flex flex-col !h-[245px]'
                  linkCss='cursor-pointer'
                >
                  <div className='flex flex-col gap-8 h-full p-2'>
                    <Typography className='!font-medium h-[85px] ' size='paragraph'>
                      {title}
                    </Typography>
                    <Typography className=' flex-grow' size='body'>
                      {body}
                    </Typography>
                  </div>
                </Card>
              </div>
            ))}
      </div>
      <Modal
        className='!min-h-[300px] overflow-y-scroll'
        handleClose={() => isOpenOff()}
        label={'Post Detail'}
        open={isOpen}
      >
        <Typography className=' flex-grow' size='body'>
          {content}
        </Typography>
      </Modal>
    </>
  );
};
export default UseDetailsCardList;
