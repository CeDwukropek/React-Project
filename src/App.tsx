import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Main } from './Components/Main';
import { Login } from './Components/Login';
import { Navbar } from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Main' element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
