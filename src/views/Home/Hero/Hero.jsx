import React from 'react'
import '../../../custom.css';
import CircularText from '../../../common/Circular/CircularText';

function Hero() {
  return (
    <div className='mx-4'>
        <div className='font-bodoni font-black uppercase flex flex-col leading-[4rem] min-h-[14rem] justify-center'>
            <div className='text-[8rem]'>Oli</div>
            <div className='text-[6rem] text-stroke-0-5 text-white self-end'>Art</div>
        </div>
        <div className='font-bodoni font-black uppercase flex flex-col leading-[4rem] min-h-[14rem] justify-center'>
            <div className='text-[8rem]'>Oli</div>
            <div className='text-[6rem] text-stroke-0-5 text-white self-end'>Art</div>
        </div>

        <div className='flex justify-between'>
            <div className='capitalize text-4xl font-thin relative top-8'>
                Gallery
            </div>
            <div className='lato font-bold'>
                <CircularText text=' 29 Fevrier * 20h *'/>
            </div>
        </div>
    </div>
  )
}

export default Hero