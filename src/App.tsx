import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './Components/Main';
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
