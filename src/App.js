
import './App.css';
import Front from './components/Front';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div >
      <Routes>
      <Route path='/' element={<Front/>}></Route>
      <Route path='/main' element={<Main/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
