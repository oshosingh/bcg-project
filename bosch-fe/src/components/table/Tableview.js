import React from 'react'
import './tableview.css'
import { useEffect } from 'react'

function Tableview(props) {
    useEffect(() => {
      console.log('rerendered')
    }, [props.action])
    
    return (
      <div className='parent'>Tableview</div>
    )
}

export default Tableview