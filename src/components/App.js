import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from '../contexts/UserContext';
import Login from './Login';
import SignUp from './SignUp';
import Habits from './Habits';
import Today from './Today';
import History from './History';

export default function App() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');

  return (
    <UserContext.Provider value={{form, setForm, token, setToken, image, setImage}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}