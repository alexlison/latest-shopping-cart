import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import ViewProduct from './Components/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <AddProduct /> } />
      <Route path='view' element = { <ViewProduct /> } />
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;
