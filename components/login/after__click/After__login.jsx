import React from 'react'
import { Link } from 'react-router-dom';

import './after__login.css'

import profile__pic from '../assests/profile__pic.jpg'

import { AiOutlineArrowRight } from 'react-icons/ai';

const After__login = () => {
    return (
        <>
            <div className="after__login">
                <div className="after__login__container">
                    <div className="profile__pic">
                        <img src={profile__pic} alt="" />
                    </div>
                    <div className="name">
                        <h1>Rishabh</h1>
                    </div>
                    <div className="password">
                        <input type="password" name="password" id="password" placeholder='Password' />
                            <div className="enter">
                        <Link to={"/desktop"}>
                                <AiOutlineArrowRight className='arrow' />
                        </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default After__login