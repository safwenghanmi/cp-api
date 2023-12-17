
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Compoenents/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>Mern app</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
