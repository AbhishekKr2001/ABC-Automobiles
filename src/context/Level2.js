import React from 'react'
import Level3 from './Level3'
//passing context to all the descendents of level1
export default function Level2() {
    return (
        <div><Level3 /></div>
    )
}
