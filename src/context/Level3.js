import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'




//passing context to all the descendents of level1
export default function Level3() {
    const value = useContext(MyContext);
    return (
        <div>{value}</div>
    )
}
