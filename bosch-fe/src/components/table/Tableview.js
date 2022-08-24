import React, { useEffect } from 'react'
import './tableview.css'
import { useState } from 'react'
import { getAllSales } from '../../RestApi'
import Spinner from 'react-bootstrap/Spinner';

function Tableview(props) {

    const [tableData, setTableData] = useState(null)
 
    useEffect(() => {
        getAllSales().then((data) => {
          setTableData(data)
        })
    }, [])
    
    return (
      <div className='parent'>
        { tableData !== null ? <h1>'hello world'</h1> : <Spinner animation="border" className='spinner'/> }
      </div>
    )
}

export default Tableview