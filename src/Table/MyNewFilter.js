import React from 'react';
export const MyNewfilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (<span>
        Search : {' '}<input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} ></input>
    </span>)
}

// import React from 'react'

// export const MyNewfilter = ({ column }) => {

//     const { filterValue, setFilter } = column

//     return (

//         <span>

//             Search : {' '}

//             <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}></input>

//         </span>

//     )





// }










