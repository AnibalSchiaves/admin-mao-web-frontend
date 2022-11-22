import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import General from './component/general/general';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAO Admin</h1>
      </header>
      <div className='App-content'>
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path='/general' element={<General />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
