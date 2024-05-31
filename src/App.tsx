import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import List from './components/List';
import Header from './components/Header';
import Form from './components/Form';


function App(){
  return (
          <div>
          <Header />
          <List />
          <Form />
          </div>
  );
}


export default App;