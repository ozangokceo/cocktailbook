import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Cocktail.css';

function Cocktails({ form1Data, form2Data, language, state }) {
  const [filterDataState, setFilterDataState] = useState([]);

  const alcoholType = form2Data.drinkType;
  const glassType = form2Data.glassType;
  const category = form2Data.category;

  useEffect(() => {
    async function getRequest() {
      const alcoholFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholType}`)).data.drinks;
      const glassFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType}`)).data.drinks;
      const categoryFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)).data.drinks;
      const ingredientsFilterData = await (await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Anis`)).data.drinks;

      const filteredData = [];

      for (let i = 0; i < alcoholFilterData.length; i++) {
        for (let j = 0; j < glassFilterData.length; j++) {
          if(alcoholFilterData[i].strDrink === glassFilterData[j].strDrink) { filteredData.push(alcoholFilterData[j]) }
        }
      }

      setFilterDataState(filteredData);

      console.log(filteredData);
      console.log(alcoholFilterData);
      console.log(glassFilterData);
      console.log(categoryFilterData);

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

export default Cocktails;
