import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Cocktail.css';
import './Neon.css';

function Cocktails({ form1Data, form2Data }) {
  const [filterDataState, setFilterDataState] = useState([]);

  const alcoholType = form2Data.drinkType;
  const glassType = form2Data.glassType;
  const category = form2Data.category;

  useEffect(() => {
    window.scrollTo(0, 0)
    async function getRequest() {
      const alcoholFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholType}`)).data.drinks;
      const glassFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType}`)).data.drinks;
      const categoryFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)).data.drinks;
      // const ingredientsFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Anis`)).data.drinks;

      const filteredData = [];

      for (let i = 0; i < alcoholFilterData.length; i++) {
        for (let j = 0; j < glassFilterData.length; j++) {
          if(alcoholFilterData[i].strDrink === glassFilterData[j].strDrink) { filteredData.push(alcoholFilterData[j]) }
        }
      }

      setFilterDataState(filteredData);
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

  const randomColorR = Math.floor( Math.random() * 256 );
  const randomColorG = Math.floor( Math.random() * 256 );
  const randomColorB = Math.floor( Math.random() * 256 );

  console.log(randomColorR, randomColorG, randomColorB)

  return (
    <div className='main'>
      <h1 className='main-title-neon'>{form1Data.barName} Bar<br/>The Cocktails..</h1>
      <div className='card' id='cocktail'>
        {filterDataState.map((el, index) => (
          <div style={{ backgroundColor: `rgb(${rgbMap[index].r}, ${rgbMap[index].g}, ${rgbMap[index].b})`}} className='cocktail-container'>
            <img src={el.strDrinkThumb} alt='drink' key={index} />
            <p style={rgbMap[index].r < 100 || rgbMap[index].g < 100 || rgbMap[index].b < 100 ? {color: 'white'} : {color: 'black'}}>{el.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocktails;
