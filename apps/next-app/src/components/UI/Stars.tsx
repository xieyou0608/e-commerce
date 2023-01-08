import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Props = {
  rate: number;
};

const Stars = ({ rate }: Props) => {
  //   const num = rate.toFixed(0);
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < rate) {
          return <AiFillStar color="orange" key={i} />;
        } else {
          return <AiOutlineStar key={i} />;
        }
      })}
    </div>
  );
};

export default Stars;
