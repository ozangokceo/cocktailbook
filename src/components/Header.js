import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import trlogo from '../assets/turkey.png';
import usalogo from '../assets/united-states.png';
import uklogo from '../assets/ukraine.png';

import './Header.css';

function Header({ setLanguage, setState }) {
  const location = window.location.pathname;
  console.log(location);

  function Navigate(params) {
    let navigate = useNavigate();
    navigate(params);
  }

  const cocktailString = 'CocktailBook';
  const rgbMap = [];

  for (let i = 0; i < cocktailString.length; i++) {
    const randomColorR = Math.floor(Math.random() * 256);
    const randomColorG = Math.floor(Math.random() * 256);
    const randomColorB = Math.floor(Math.random() * 256);

    rgbMap.push({ r: randomColorR, g: randomColorG, b: randomColorB });
  }

  let cocktail = rgbMap.map((el, index) => <span style={{ color: `rgb(${rgbMap[index].r}, ${rgbMap[index].g}, ${rgbMap[index].b})` }}>{cocktailString[index]}</span>);

  return (
    <header className='header'>
      <div className='logo-cocktail'>
        <div className='c-letter'>C</div>
      </div>
      <div className='logo'>{cocktail} App!</div>
      <nav>
        <ul>
          <li>{/* <Link to="/">Form1</Link> */}</li>
        </ul>
      </nav>
      <button className='randomButton' onClick={() => setState((prevState) => !prevState)}>
        Randomise Colors!
      </button>
      <div className='language'>
        Language:
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value='EN'>English</option>
          <option value='TR'>Türkçe</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
