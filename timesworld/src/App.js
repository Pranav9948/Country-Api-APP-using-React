
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
           <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />

           </Routes>
      </Router>
    </div>
  );
}

export default App;
