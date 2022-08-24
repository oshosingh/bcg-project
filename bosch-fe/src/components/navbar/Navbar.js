import React from 'react'
import './navbar.css'

function navbar(props) {

  const redirectToTableView = () => {
      props.renderTableView('table')
  }

  const handleAddSales = () => {
      props.renderTableView('add')
  }

  const handleEditSales = () => {
      props.renderTableView('edit')
  } 

  return (
    <div className='navbar-parent'>
      <div className='navbar-name align-items-nav' onClick={redirectToTableView}> Bosch Sales </div>

      <div className='sales-btn align-items-nav' onClick={handleAddSales}>
        Add Sales
      </div>

      <div className='sales-btn align-items-nav' onClick={handleEditSales}>
        Edit Sales
      </div>

      <div className='textbox align-items-nav'>
        <input placeholder='enter sales id or customer id' />

        <div className='search-btn align-items-nav'>
          <button>search</button>
        </div>
        
      </div>
    </div>
  )
}

export default navbar