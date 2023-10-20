import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
