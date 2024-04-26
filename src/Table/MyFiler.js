import React from "react";
export const Myfilter = ({ filter, setFilter }) => {
    return (<span>
        Search : <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>)
}