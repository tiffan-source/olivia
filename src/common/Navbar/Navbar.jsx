import barsIcon from '../../assets/images/icons/bars.png';
import closeIcon from '../../assets/images/icons/close.png';
import React, {useState, useEffect} from 'react'

function Navbar() {
    const [close, setClose] = useState(false);
    const toogleMenu = () => {
        setClose(!close);
    }

    useEffect(() => {
        if (close) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [close]);

  return (
    <>
        <div className='p-4 flex justify-between items-center relative'>
            <div></div>
            <span className='text-3xl font-thin'>
                <img className='w-10 h-10' src={barsIcon} alt="" srcset="" onClick={()=>{toogleMenu()}}/>
            </span>
        </div>
        <div className={"fixed bg-[#222] w-screen h-screen top-0 transition-all duration-1000 ease-in-out z-50 " + (close ? 'left-0' : '-left-[100rem]')}>
            <div className='flex justify-center items-center w-full h-full relative'>
                <img src={closeIcon} alt="" srcset=""
                className='absolute top-4 right-4 w-10 h-10 cursor-pointer'
                onClick={()=>{toogleMenu()}}/>
                <ul className='uppercase text-white text-center flex flex-col gap-24'>
                    <li className='text-3xl cursor-pointer'>
                        Home
                    </li>
                    <li className='text-3xl cursor-pointer'>
                        Evenements
                    </li>
                    <li className='text-3xl cursor-pointer'>
                        Nos Artistes
                    </li>
                    <li className='text-3xl cursor-pointer'>
                        Galleriste
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar