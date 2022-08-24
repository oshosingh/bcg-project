import React, { useEffect } from 'react'
import './tableview.css'
import { useState } from 'react'
import { getAllSales } from '../../RestApi'
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

function Tableview(props) {

    const [tableData, setTableData] = useState(null)
    const tableColumns = ['Sales id', 'Date of Purchase', 'Customer Id', 'Vehicle Segment', 'Selling Price',
                          'Customer Gender', 'Customer Income Group', 'Customer Region' ]
 
    useEffect(() => {
        getAllSales().then((data) => {
          setTableData(data)
        })
    }, [])


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