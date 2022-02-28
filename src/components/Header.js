import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/1222613.png';

import './Header.css';

function Header({ setLanguage, setState }) {
  function click(input) {
    setLanguage(input)
    console.log(`test: ${input}` );
  }

  return (
    <header className='header'>
      <img src={logo} alt='face' />
      <div className='logo'>CocktailBook App!</div>
      <nav>
        <ul>
          <li>{/* <Link to="/">Form1</Link> */}</li>
        </ul>
      </nav>
      <button className='randomButton' onClick={() => setState((prevState => !prevState))}>Randomise Colors!</button>
      <div className='language'>
        Language:
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value='EN'>
            English
          </option>
          <option value='TR'>
            Türkçe
          </option>
        </select>
      </div>
    </header>
  );
}

export default Header;
