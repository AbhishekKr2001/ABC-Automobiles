import React from 'react'
export const PositiveNumber = ({ postiveNumber }) => {
    if (postiveNumber < 0) {
        throw new Error(" Not a Positive Number.........")
    }
    return (
        <div>{postiveNumber}</div>
    )
}