import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import General from './component/general/general';
import { generalService } from './services/general-service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAO Admin</h1>
      </header>
      <BrowserRouter>
          <NavBar></NavBar>
          <div className='App-content'>
              <Routes>
                <Route path='/' element={<General generalService={generalService}/>}></Route>
                <Route path='/general' element={<General generalService={generalService}/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
