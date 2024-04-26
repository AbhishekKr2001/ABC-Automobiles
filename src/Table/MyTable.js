import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table'
import { columns1 } from './column'
import MOCK_DATA from './MOCK_DATA.json'
import './table.css'
import { Myfilter } from './MyFiler'
import { MyNewfilter } from './MyNewFilter'

export const MyTable = () => {
    const columns = useMemo(() => columns1, [])
    const data = useMemo(() => MOCK_DATA, []);
    const mytable = useTable({
        columns,
        data
    }, useGlobalFilter, useFilters)//useSortBy

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,/*what it does it that it divides all the headers in to groups (e.g:- 1st group contains id, name and 2nd 
            group may contain country, location)*/
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = mytable;

    const { globalFilter } = state;
    /*rows will contain collection of cells like this this is a single row it will contain all the rows
     "cells": [
      {"cellData": 1, "column": {"Header": "ID", "accessor": "id"}},
      {"cellData": "Elvin", "column": {"Header": "First Name", "accessor": "first_name"}},
      {"cellData": "Hammerberger", "column": {"Header": "Last Name", "accessor": "last_name"}},
      {"cellData": "ehammerberger0@taobao.com", "column": {"Header": "Email", "accessor": "email"}},
      {"cellData": "Male", "column": {"Header": "Gender", "accessor": "gender"}},
      {"cellData": "Poland", "column": {"Header": "Country", "accessor": "country"}}
    ] */
    return (<>
        <Myfilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table   {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (//there can be two groups 1st and 2nd as stated above
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (//now actually get the each headers (id,firstname, lastname)
                            <th {...column.getHeaderProps(column)}>
                                {column.render('Header')}
                                <div>
                                    {column.canFilter ? column.render('Filter') : null}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                {footerGroups.map((footerGroup) => (
                    <tr {...footerGroup.getHeaderGroupProps()}>
                        {footerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Footer')}
                            </th>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table></>
    )
}