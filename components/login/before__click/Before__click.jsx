import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import './before__click.css'

const Before__click = () => {

  var today = new Date();
  var time = today.getHours() + " " + ":" + " " + today.getMinutes();

  return (
    <>
        <div className="before__click">
            <Link to={"/login"}>
            <div className="before__click__container">
                <div className="before__click__date">
                  <h1>{time}</h1>
                  <h2>Sunday, May 15</h2>
                </div>
            </div>
            </Link>
        </div>
    </>
  )
}

export default Before__click