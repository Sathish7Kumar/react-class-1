import React, { useState } from 'react'
import image from './image.webp'
import './Popup.css'

const Popup = () => {
    const [showPopup, setshowPopup] = useState(false)

    const handle = () =>{
        setshowPopup(!showPopup)
    }

  return (
    <>
    <div>

        {!showPopup && <button className='btn2' onClick={handle}>Open</button>}

        {showPopup && (
            <>
            <div className='container'>
                <img src={image} />
                <button className='btn' onClick={handle}>X</button>
            </div>
            </>
        )}

    </div>
    </>
  )
}

export default Popup