import React from 'react'

export default function Popup({ onClose }) {
    return (
        <div className='modal'>
            <div>Hello How are you ?</div>
            <button onClick={onClose}> Close</button>
        </div>
    )
}