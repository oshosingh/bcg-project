import React from 'react'
import './sidebar.css'

function Sidebar(props) {
    const addSales = () => {
        props.renderTableView('add')
    }
    
    const editSales = () => {
        props.renderTableView('edit')
    }

    return (
        <div className='parent-sidebar'>
            <div className='child-div text-decor' onClick={addSales}>Add New sale</div>
            <div className='child-div text-decor' onClick={editSales}>Edit Existing sale</div>
        </div>
    )
}

export default Sidebar