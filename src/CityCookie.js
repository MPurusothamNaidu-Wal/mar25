import { useState, useEffect } from 'react';
import axios from 'axios';
const CityCookie = () => {
  const createCookie = (event) => {
    event.preventDefault();
    let setCity = event.target.city.value;
    axios
      .get(`/citycookie/setcookie/city/${setCity}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form className='todo' onSubmit={createCookie}>
        <h1>City Cookie</h1>
        <h3>City : </h3>
        <input type='text' name='city' placeholder='Enter City Name' />
        <br />
        <button>
          <h3>Add City</h3>
        </button>
      </form>
    </div>
  );
};
export default CityCookie;
