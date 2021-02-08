import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination, useFilters } from 'react-table'
import makeData from '../data/makeData'
import {kycData} from '../data/kycData'
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`
function TextFilter({
  column: { filterValue, preFilteredRows, setFilter },
 }) {
  const count = preFilteredRows.length
  
  return (
    <input  
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
 }
 
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
   )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 2 },
    },
    useFilters,usePagination
  )

  // Render the UI for your table
  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

function TasksTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Kyc Request',
        columns: [
          {
            Header: 'KYCID',
            accessor: 'kycId',

            Cell: (row, original, index, viewIndex, level, nestingPath, aggregated, subRows) => {
              const onItemClick = value => {
                console.log("value", value)
              //  updateMyData(index, id, value)
              }
               return  (<a href="#" onClick={onItemClick}>{row.value}</a>) ;
          }              
          },
          
          {
            Header: 'BPID',
            accessor: 'bpId',
          },
          {
            Header: 'RMEmail',
            accessor: 'rmEmail',
          },
          {
            Header: 'LMEmail',
            accessor: 'lmEmail',
          },
          {
            Header: 'CaseInitiator',
            accessor: 'caseInitiator',
          },
          {
            Header: 'Request Type',
            accessor: 'requestType',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'CreatedDate',
            accessor: 'createdDate',
          },
          {
            Header: 'LastUpdatedDate',
            accessor: 'lastUpdatedDate',
          },
        ],
      },
      
    ],
    []
  )

   
}

export default TasksTable;
