import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DataTable from './DataTable';
import Header from './Header';
import Home from './Home';
import Form from './Form';

function App(){
  return <div>
          <DataTable />
          <Form />

  </div>
}

export default App;