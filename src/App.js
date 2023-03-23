
import './App.css';
import Login from './Authentification/Login';
import Register from './Authentification/Register';
import { Routes, Route } from 'react-router-dom';

import RecoverPassword from './Authentification/RecoverPassword';
import Liste from './component/Body/Liste';
import Tracetube from './component/Tracetube';
import Vaccination from './Vaccination';




function App() {


  return (

    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/RecoverPassword" element={<RecoverPassword />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Liste" element={<Liste />} />
      <Route path="/Tracetube" element={<Tracetube />} />
      <Route path="/Vaccination" element={<Vaccination />} />
    </Routes>


  );

}







export default App;
