import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/login.svg'
import axios from 'axios';

export default function login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = JSON.stringify({email,password});
    console.log(data);
    axios.post('https://sweet-recipes.netlify.app/api/v1/users/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'responseType': 'json'
      }
    })
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
    }

  return (
    <div className="row d-flex justify-content-center flex-wrap-reverse my-4" style={{minHeight: "60vh"}}>
      <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h2 className="heading-secondary p-3">Մուտք գործեք</h2>
          <form className="form--login px-3 mb-3" id="form--login" onSubmit={handleSubmit}>
              <div className="form__group">
                <label className="form__label" htmlFor="email">Էլ․ հասցե</label>
                <input className="form__input" id="email" type="email" placeholder="you@example.com" required="required" />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="password">Գաղտնաբառ</label>
                <input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength="8" />
              </div>
              <span>Դեռ գրանցված չե՞ք։ <Link to="/signup" style={{color: "var(--mainGreen)"}}>Գրանցվել։</Link></span>
            <div className="form__group my-2"><button className="btn btn--green mt-3" type="submit">Մուտք</button></div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-11 col-11 d-none d-md-flex justify-content-center align-items-center">
        <img src={image1} className="img-fluid" width="100%" height="500px" alt="Cook..." />
      </div>
    </div>
  )
}
