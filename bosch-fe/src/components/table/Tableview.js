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

        // setTimeout(() => {
        //     setTableData([])
        // }, 5000)

        if(tableData !== null) {
          setIsLoading(false)
        }
    }, [])
    
    return (
      <div className='parent'>
        { isLoading === false ? <h1>'hello world'</h1> : <Spinner animation="border" className='spinner'/> }
      </div>
    )
}

export default Tableview