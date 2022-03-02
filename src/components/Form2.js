import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Form.css';

function Form2({ form2Data, setForm2Data, language }) {
  const [categories, setCategories] = useState([]);
  const [alcoholTypes, setAlcoholTypes] = useState([]);
  const [glassTypes, setGlassTypes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  let navigate = useNavigate();

  const categoryInputRef = useRef();
  const drinkTypeInputRef = useRef();
  const glassTypeInputRef = useRef();
  const ingredientsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const categoryInput = categoryInputRef.current.value;
    const drinkTypeInput = drinkTypeInputRef.current.value;
    const glassTypeInput = glassTypeInputRef.current.value;
    const ingredientsInput = ingredients.filter((item, index) => checkedState[index])

    const form2Data = {
      category: categoryInput,
      drinkType: drinkTypeInput,
      glassType: glassTypeInput,
      ingredients: ingredientsInput,
    };

    window.localStorage.setItem('category', form2Data.category);
    window.localStorage.setItem('drinkType', form2Data.drinkType);
    window.localStorage.setItem('glassType', form2Data.glassType);
    window.localStorage.setItem('ingredients', form2Data.ingredients);

    setForm2Data(form2Data);
    navigate('/overview');
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    
    async function getRequest() {
      const categoriesData = await (await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')).data.drinks;
      setCategories(categoriesData);
      const alcoholTypesData = await (await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')).data.drinks;
      setAlcoholTypes(alcoholTypesData);
      const glassTypesData = await (await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')).data.drinks;
      setGlassTypes(glassTypesData);
      const ingredientsData = await (await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')).data.drinks;
      setIngredients(ingredientsData);

    }
    getRequest();
  }, []);

  useEffect(() => {
    setCheckedState([...new Array(ingredients.length).fill(false)]);
  }, [ingredients]);

  return (
    <main className='main'>
      <h1 className='main-title'>{language === 'EN' ? 'Welcome to the Cocktail App!' : 'Cocktail App! a Hoşgeldiniz!'}</h1>
      <p className='main-paragraph'>{language === 'EN' ? 'Please fill out necessary fields..' : 'Lütfen gereken alanları doldurun..'}</p>
      <div className='card'>
        <form className='form' onSubmit={submitHandler}>
          <div className='input'>
            <label htmlFor='bar-name'>{language === 'EN' ? 'Select Category:' : 'Kategori seçin:'}</label>
            <select className='select' ref={categoryInputRef}>
              {categories.map((category, index) => (
                <option key={index}>{category.strCategory}</option>
              ))}
            </select>
          </div>
          <div className='input'>
            <label htmlFor='bar-name'>{language === 'EN' ? 'Select Alcoholic Type:' : 'Kokteyl tipini seçin:'}</label>
            <select className='select' ref={drinkTypeInputRef}>
              {alcoholTypes.map((type, index) => (
                <option key={index}>{type.strAlcoholic}</option>
              ))}
            </select>
          </div>
          <div className='input'>
            <label htmlFor='bar-name'>{language === 'EN' ? 'Select Glass Type:' : 'Bardak tipini seçin:'}</label>
            <select className='select' ref={glassTypeInputRef}>
              {glassTypes.map((type, index) => (
                <option key={index}>{type.strGlass}</option>
              ))}
            </select>
          </div>
          <div className='input'>
            <label htmlFor='bar-name'>{language === 'EN' ? 'Select Ingredients:' : 'İçerik seçin:'}</label>
            <div className='select' id='multi' ref={ingredientsInputRef}>
              {ingredients.map((type, index) => (
                <div className='checkbox-container'>
                  <input id={type.strIngredient1} type='checkbox' key={index} checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                  <label htmlFor={type.strIngredient1}>{type.strIngredient1}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='actions'>
            <button>{language === 'EN' ? 'Next Step' : 'Sonraki Adım'}</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Form2;
