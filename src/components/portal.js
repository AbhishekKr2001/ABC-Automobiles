import React from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react'
import Popup from './popup';

export default function Portal() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            <div className='clipping-conbtainer'>
                <button onClick={() => setShowPopup(true)}>Show me popup message......</button>
                {showPopup && createPortal(<Popup onClose={() => setShowPopup(false)} />,
                    document.body)}
            </div>
        </>
    )
}