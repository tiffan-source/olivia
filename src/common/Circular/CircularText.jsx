import React from 'react';

const CircularText = ({ text }) => {
  return (
    // <div className="flex items-center justify-center w-48 h-48 rounded-full">
      <div className="relative w-full h-full right-[7rem]">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className='h-[80px] absolute top-0 left-0 w-[20px]'
            style={{
                transformOrigin: 'bottom center',
                transform: `rotate(${index * (360 / text.length)}deg)`,
            }}
        >
            {char}
          </span>
        ))}
      </div>
    // </div>
  );
};

export default CircularText;
