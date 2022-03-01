import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';

function Overview({ form1Data, form2Data }) {
  const navigate = useNavigate();

  const { barName, firstName, lastName, phoneNumber, email } = form1Data;
  const { category, drinkType, glassType, ingredients } = form2Data;

  return (
    <main className='main'>
      <h1 className='main-title'>Welcome to the Cocktail App!</h1>
      <p className='main-paragraph'>Please check your selections..</p>
      <div className='card'>
        <div className='overview-container'>
          <h1 className='overview-title'>Overview</h1>
          <div className='overview'>
            <label htmlFor='bar-name'>Bar Name:</label>
            <p id='bar-name'>{barName}</p>
          </div>
          <div className='overview'>
            <label htmlFor='first-name'>First Name:</label>
            <p id='first-name'>{firstName}</p>
          </div>
          <div className='overview'>
            <label htmlFor='last-name'>Last Name:</label>
            <p id='bar-name'>{lastName}</p>
          </div>
          <div className='overview'>
            <label htmlFor='phone'>Phone Number:</label>
            <p id='phone'>{phoneNumber}</p>
          </div>
          <div className='overview'>
            <label htmlFor='mail'>E-mail:</label>
            <p id='mail'>{email}</p>
          </div>
          <div className='overview'>
            <label htmlFor='bar-name'>Category:</label>
            <p id='bar-name'>{category}</p>
          </div>
          <div className='overview'>
            <label htmlFor='alcohol-type'>Alcoholic Type:</label>
            <p id='alcohol-type'>{drinkType}</p>
          </div>
          <div className='overview'>
            <label htmlFor='glass-type'>Glass Type:</label>
            <p id='glass-type'>{glassType}</p>
          </div>
          <div className='overview'>
            <label htmlFor='ingredients'>Chosen Ingredients:</label>
            {ingredients.map((item, index) => Object.values(item) ? <p id='ingredients' key={index}>{Object.values(item)}</p> : null)}
          </div>
          <div className='actions'>
            <button onClick={() => navigate('/cocktails')}>Generate Cocktail!</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;
