import React from 'react'
import Level2 from './Level2'


//passing context to all the descendents of level1
export default function Level1() {
    return (
        <div><Level2 /></div>
    )
}
