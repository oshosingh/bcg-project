import React, { useEffect } from 'react'
import './tableview.css'
import { useState } from 'react'
import { getAllSales } from '../../RestApi'
import Spinner from 'react-bootstrap/Spinner';

function Tableview(props) {

    const [tableData, setTableData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
 
    useEffect(() => {
        getAllSales().then((data) => {
          setTableData(data)
        })

        if(tableData !== null) {
          setIsLoading(false)
        }
    }, [isLoading])
    
    return (
      <div className='parent'>
        { isLoading === false ? 'hello world' : <Spinner animation="grow" /> }
      </div>
    )
}

export default Tableview