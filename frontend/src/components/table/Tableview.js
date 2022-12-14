import React, { useEffect } from 'react'
import './tableview.css'
import { useState } from 'react'
import { getAllSales, searchBySalesOrCustomerId } from '../../RestApi'
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import inputFieldToJsonKey from '../../utils';

function Tableview(props) {

    const [tableData, setTableData] = useState(null)
    const tableColumns = ['Sales Id', 'Date of Purchase', 'Customer Id', 'Vehcile Segment', 'Selling Price',
                          'Customer Gender', 'Customer Income Group', 'Customer Region' ]
 
    useEffect(() => {
        setTableData(null)
        if(props.searchInput === 0) {
            getAllSales().then((data) => {
              setTableData(data)
            })
        }
        else {
            searchBySalesOrCustomerId(props.searchInput).then((data) => {
                setTableData(data)
            })
        }
        
    }, [props.searchInput])


    const getTableComponent = () => {
      return (
        <div className='table-view'>
          <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                    {tableColumns.map((element, index) => {
                        return (
                            <th key={index}>{element}</th>
                        )
                    })}
                </tr>
              </thead>

              <tbody>
                {tableData.map((element, index) => {
                  return (
                    <tr key={index} className = {index % 2 == 0 ? 'even-row' : 'odd-row'} >
                        {tableColumns.map((column, idx) => {
                                return (
                                  <td key={idx}>{element[inputFieldToJsonKey(column)]}</td>
                                )  
                        })}
                    </tr>
                  )
                })}
              </tbody>
          </Table>
        </div>
      )
    }
    
    return (
      <div className='parent'>
        { tableData !== null ? getTableComponent() : <Spinner animation="border" className='spinner'/> }
      </div>
    )
}

export default Tableview