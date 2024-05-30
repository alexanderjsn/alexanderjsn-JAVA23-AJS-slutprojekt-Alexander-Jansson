import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DataTable from './DataTable';
import Header from './Header';
import Home from './Home';
import TaskForm from './TaskForm';


function App(){
  return <div>
   <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/datatest" element={<DataTable />} />
                <Route path="/TaskForm" element={<TaskForm />} />
            </Routes>
        </Router>  
  </div>
}

export default App;