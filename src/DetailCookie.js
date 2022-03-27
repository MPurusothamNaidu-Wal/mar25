import { useState, useEffect } from 'react';
import axios from 'axios';
const DetailCookie = () => {
  const createCookie = (event) => {
    event.preventDefault();
    axios
      .get(
        `/detailcookie/setcookieswithtime/${event.target.name.value}/${event.target.namevalue.value}/${event.target.time.value}`
      )
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
        <h1>Details Cookie</h1>
        <h3>Name : </h3>
        <input type='text' name='name' placeholder='Enter Name' />
        <br />
        <h3>Value : </h3>
        <input
          className='form-control d-inline-flex'
          type='text'
          name='namevalue'
          placeholder='Enter value'
        />
        <br />
        <h3>Time : </h3>
        <input type='number' name='time' placeholder='Enter Time' />
        <br />
        <button>
          <h3>Add Cookie</h3>
        </button>
      </form>
    </div>
  );
};
export default DetailCookie;
