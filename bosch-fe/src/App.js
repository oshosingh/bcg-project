import './App.css';
import Navbar from './components/navbar/Navbar'
import Tableview from './components/table/Tableview';
import { useState } from 'react';
import AddSalesForm from './components/form/AddSalesForm';

function App() {

  const [action, setAction] = useState('table')

  const renderTableView = (action) => {
      console.log('action done ', action)
      setAction(action)
  }

  return (
    <div className="App">
      <Navbar renderTableView = {renderTableView } />

      <div className='main'> 
        {action === 'table' ? <Tableview /> : <AddSalesForm action={action} />}
      </div>
    </div>
  );
}

export default App;
