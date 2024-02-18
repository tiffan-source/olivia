import React from 'react'
import { artists } from '../../../data/artistes'

function MainArtiste() {
  return (
    <div className=''>
        <div className='relative flex'>
            <div className='flex animate-[scroll1_10s_linear_infinite]'>
                {
                    artists.concat(artists).map((artiste, index) => {
                        return (
                            <div key={index} className='w-[20rem] p-4 font-inter uppercase'>
                                <img className='' src={artiste.img} alt=""/>
                                <div className='text-xl'>{artiste.name}</div>
                                <div className='text-gray-600 text-lg'>{artiste.role}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MainArtiste