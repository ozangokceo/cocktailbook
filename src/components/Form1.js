import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';

function Form1({ setForm1Data, form1Data, language }) {
  let navigate = useNavigate();

  const barInputRef = useRef();
  const firstInputRef = useRef();
  const lastInputRef = useRef();
  const phoneInputRef = useRef();
  const mailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const barInput = barInputRef.current.value;
    const firstInput = firstInputRef.current.value;
    const lastInput = lastInputRef.current.value;
    const phoneInput = phoneInputRef.current.value;
    const mailInput = mailInputRef.current.value;

    const form1Data = {
      barName: barInput,
      firstName: firstInput,
      lastName: lastInput,
      phoneNumber: phoneInput,
      email: mailInput,
    };

    window.localStorage.setItem('form1Data', (form1Data));
    
    console.log(form1Data);

    setForm1Data(form1Data);
    navigate('/form2');
  }

  useEffect(() => {
    setForm1Data(window.localStorage.getItem('form1Data'));
      console.log(window.localStorage.getItem('form1Data'));
  }, [])

  return (
    <main className='main'>
      <h1 className='main-title'>{language === 'EN' ? 'Welcome to the Cocktail App!' : 'Cocktail App! a Hoşgeldiniz!'}</h1>
      <p className='main-paragraph'>{language === 'EN' ? 'Please fill out necessary fields..' : 'Lütfen gereken alanları doldurun..'}</p>
      <div className='card'>
        <form className='form' onSubmit={submitHandler}>
          <div className='input'>
            <label htmlFor='bar-name'>{language === 'EN' ? 'Bar Name:' : 'Bar ismi:'}</label>
            <input type='text' required id='bar-name' ref={barInputRef}></input>
          </div>
          <div className='input'>
            <label htmlFor='first-name'>{language === 'EN' ? 'First Name:' : 'Adınız:'}</label>
            <input type='text' required id='first-name' ref={firstInputRef} />
          </div>
          <div className='input'>
            <label htmlFor='last-name'>{language === 'EN' ? 'Last Name:' : 'Soyadınız:'}</label>
            <input type='text' required id='last-name' ref={lastInputRef} />
          </div>
          <div className='input'>
            <label htmlFor='phone'>{language === 'EN' ? 'Phone Number:' : 'Telefon No:'}</label>
            <input type='tel' required pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$' id='phone' ref={phoneInputRef} />
          </div>
          <div className='input'>
            <label htmlFor='mail'>E-mail:</label>
            <input type='email' required id='mail' ref={mailInputRef} />
          </div>
          <div className='actions'>
            <button>{language === 'EN' ? 'Next Step' : 'Sonraki Adım'}</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Form1;
