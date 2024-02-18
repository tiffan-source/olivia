import React, { useState } from 'react'
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';


function Slide() {

    const tabImages = [img1, img2, img3, img4];
    const [index, setIndex] = useState(1);
    const [rand, setRand] = useState(Math.random());

  return (
    <>
    <div className='mx-4 mt-40 mb-8 font-bodoni uppercase'>

        <div className={"max-w-[52rem] relative transition ease-in duration-500 "}
        style={{
            transform: `translateX(-${index * 100}%)`
        }}>
            <div className='flex relative z-10'>
                {tabImages.map((img, i) => {
                    return (
                        <img key={i} src={img} alt="" srcset="" className={
                            "flex-1 transition duration-500 " +
                            (i === index ? `scale-100 opacity-100 ${rand<0.5?'-':''}rotate-12` : 'scale-0 opacity-0 rotate-0')
                        }/>
                    )
                    }
                )}
            </div>
        </div>
        <div className='flex justify-evenly'>
            <span className={'relative z-20 cursor-pointer ' + (index !== 0 ? 'opacity-100' : 'opacity-0') }onClick={()=>{
            if (index !== 0)
            {
                setIndex(index - 1)
                setRand(Math.random())
            }
            }}>Prev -</span>
            <span className='relative z-20' onClick={()=>{
            if (index !== tabImages.length -1)
            {
                setIndex(index + 1)
                setRand(Math.random())
            }
            }}>- Next</span>


        </div>
    </div>
    </>
  )
}

export default Slide