import { MyNewfilter } from "./MyNewFilter";
export const columns1 = [
    {
        Header: "Id",
        Footer: "Id",
        accessor: 'id',
        Filter: MyNewfilter,
        disableFilters: true

    },
    {
        Header: "FIRSTNAME",
        Footer: "FIRSTNAME",
        accessor: 'first_name',
        Filter: MyNewfilter

    },
    {
        Header: "LASTNAME",
        Footer: "LASTNAME",
        accessor: 'last_name',
        Filter: MyNewfilter

    },
    {
        Header: "EMAIL",
        Footer: "EMAIL",
        accessor: 'email',
        Filter: MyNewfilter

    },
    {
        Header: "GENDER",
        Footer: "GENDER",
        accessor: 'gender',
        Filter: MyNewfilter
    },
    {
        Header: "COUNTRY",
        Footer: "COUNTRY",
        accessor: 'country',
        Filter: MyNewfilter
    }
];