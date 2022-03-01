import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Cocktail.css';

function FastCocktails({ language, state }) {
  const [filterDataState, setFilterDataState] = useState([]);

  useEffect(() => {
    async function getRequest() {
      const alcoholFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)).data.drinks;

      setFilterDataState(alcoholFilterData);
    }
    getRequest();
  }, []);

  const rgbMap = []

  for (let i = 0; i < filterDataState.length; i++) {
    const randomColorR = Math.floor( Math.random() * 256 );
    const randomColorG = Math.floor( Math.random() * 256 );
    const randomColorB = Math.floor( Math.random() * 256 );

    rgbMap.push({r: randomColorR, g: randomColorG, b: randomColorB})
  }

  return (
    <div className='main'>
      <h1 className='main-title'>The Cocktails..</h1>
      <div className='card' id='cocktail'>
        {filterDataState.map((el, index) => (
          <div style={{ backgroundColor: `rgb(${rgbMap[index].r}, ${rgbMap[index].g}, ${rgbMap[index].b})`}} className='cocktail-container'>
            <img src={el.strDrinkThumb} key={index} />
            <p>{el.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FastCocktails;