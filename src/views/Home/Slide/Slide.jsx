import React, { useState } from 'react'
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';


function Slide() {

    const [tabRoll, setTabRoll] = useState([img1, img2, img3, img4]);

  return (
    <div className='mt-48 mx-2'>
        <span>Prec -</span>
        <div>
            <img src={tabRoll[0]} alt="" />
        </div>
        <span>- Suiv</span>
    </div>
  )
}

export default Slide