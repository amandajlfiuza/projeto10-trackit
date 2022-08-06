import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from '../contexts/UserContext';
import Login from './Login';
import SignUp from './SignUp';
import Habits from './Habits';
import Today from './Today';
import History from './History';

export default function App() {
  const [form, setForm] = useState({email: '', password: ''});
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');
  const [habitsList, setHabitsList] = useState([]);
  const [addIsVisible, setAddIsVisible] = useState(false);
  const [addHabit, setAddHabit] = useState({name: '', days: []});
  const [daysSelected, setDaysSelected] = useState([
    {day: 1, weekday:'D', selected:false},
    {day: 2, weekday:'S', selected:false},
    {day: 3, weekday:'T', selected:false},
    {day: 4, weekday:'Q', selected:false},
    {day: 5, weekday:'Q', selected:false},
    {day: 6, weekday:'S', selected:false},
    {day: 7, weekday:'S', selected:false},
  ]);

  return (
    <UserContext.Provider value={{form, setForm, token, setToken, image, setImage, habitsList, setHabitsList, addIsVisible, setAddIsVisible, addHabit, setAddHabit, daysSelected, setDaysSelected}}>
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