import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Overview from './components/Overview';
import Cocktails from './components/Cocktails';

import './App.css';

function App() {
  const [form1Data, setForm1Data] = useState({});
  const [form2Data, setForm2Data] = useState({});
  const [language, setLanguage] = useState('EN');
  const [state, setState] = useState(false)

  return (
    <div className='App'>
      <Header setLanguage={setLanguage} setState={setState} />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form1 form1Data={form1Data} setForm1Data={setForm1Data} language={language} />} />
          <Route path='/form2' element={<Form2 form2Data={form2Data} setForm2Data={setForm2Data} language={language} />} />
          <Route path='/overview' element={<Overview form1Data={form1Data} form2Data={form2Data} language={language} />} />
          <Route path='/cocktails' element={<Cocktails form1Data={form1Data} form2Data={form2Data} language={language} state={state} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
