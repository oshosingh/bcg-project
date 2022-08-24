import React, { useEffect } from 'react'
import './tableview.css'
import { useState } from 'react'
import { getAllSales } from '../../RestApi'
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import data from '../../data.json'
import inputFieldToJsonKey from '../../utils';

function Tableview(props) {

    const [tableData, setTableData] = useState(data)
    const tableColumns = ['Sales Id', 'Date of Purchase', 'Customer Id', 'Vehcile Segement', 'Selling Price',
                          'Customer Gender', 'Customer Income Group', 'Customer Region' ]
 
    // useEffect(() => {
    //     getAllSales().then((data) => {
    //       setTableData(data)
    //     })
    // }, [])


    const getTableComponent = () => {
      console.log('table data log ', tableData)
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
                    <tr>
                        return (
                            {tableColumns.map((column, idx) => {
                                return (
                                  <td>{element[inputFieldToJsonKey(column)]}</td>
                                )  
                            })}
                        )
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