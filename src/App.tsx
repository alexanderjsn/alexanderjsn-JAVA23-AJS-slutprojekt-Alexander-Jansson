import Message from './Message';
import Header from  './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule';
import Settings from './Settings';

function App(){
  return <div>
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/mypage" element={<Settings />} />
            </Routes>
        </Router>  
  </div>
}

export default App;