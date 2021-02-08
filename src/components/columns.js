import { format } from 'date-fns'



export const COLUMNS = [
  {
    Header: 'KYCID',
     accessor: 'kycId',
    //disableFilters: true,
    sticky: 'left',
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
    sticky: 'left'
  },
  {
    Header: 'RMEmail',
    accessor: 'rmEmail',
    sticky: 'left'
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
]

 
