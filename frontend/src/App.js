import './App.css';
import Navbar from './components/navbar/Navbar'
import Tableview from './components/table/Tableview';
import { useEffect, useState } from 'react';
import AddSalesForm from './components/form/AddSalesForm';

function App() {

  const [action, setAction] = useState('table')
  const [searchInputData, setSearchInputData] = useState(0)

  useEffect(() => {
      //console.log('found change in search input')
  }, [searchInputData, action])

  const renderTableView = (action) => {
      setSearchInputData(0)
      setAction(action)
  }

  const renderTableWithSearchResults = (searchInput) => {
      setAction('table')
      setSearchInputData(searchInput)
  }

  return (
    <div className="App">
      <Navbar renderTableView = {renderTableView } renderTableWithSearchResults = {renderTableWithSearchResults} />

      <div className='main'> 
        {action === 'table' ? <Tableview searchInput = {searchInputData} /> : <AddSalesForm action={action} />}
      </div>
    </div>
  );
}

export default App;
