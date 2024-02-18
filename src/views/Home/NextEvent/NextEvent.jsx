import React, {useState} from 'react'

function NextEvent() {

    const [hide,setHide] = useState(false);

  return (
    <div className='mx-4 mt-24 mb-8 '>
        <div className='flex bg-white'>
            <div className='flex flex-col leading-[12rem] relative bottom-20'>
                <span className='font-inter text-[12rem] text-stroke-0-5 text-white'>29</span>
                <span className='font-lato text-3xl'>18h</span>
            </div>
            <div className='self-end '>
                <span className='font-inter text-[6rem] break-all leading-[7rem]'>Fevrier</span>
            </div>
        </div>
        <div className='flex items-center gap-2 py-4 bg-white'>
            <span className='inline-block w-6 h-6 rounded-full bg-black'></span>
            <span className='text-xl font-inter'>Abidjan, Cocodi</span>
        </div>
        <div className='realtive border-t border-black'>
            <div className='absolute flex justify-center items-center w-full h-[1px]'>
                <span className='w-4 h-4 bg-black text-white flex justify-center items-center rounded-full cursor-pointer' onClick={()=>{setHide(!hide)}}>+</span>
            </div>
            <div className={`py-4 relative -z-30 transition ease-in ${hide ? '-translate-y-full' : ''}`}>
                <p className='font-inter'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ad consequatur similique. Distinctio consequuntur reiciendis reprehenderit necessitatibus sapiente at facilis?
                </p>
            </div>
        </div>
    </div>
  )
}

export default NextEvent