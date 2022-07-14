import logo from './logo.svg';
import './App.css';
import Main from './Components/landing';
import { Route, Routes } from 'react-router-dom';
import buy from '../src/Components/buy'

function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path='/buy' element={<buy/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
