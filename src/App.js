import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Form from './routes/Form.js';
import Users from './routes/Users.js';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/users' element={<Users />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
