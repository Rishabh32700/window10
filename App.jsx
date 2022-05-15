import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './app.css'

import Before__click from './components/login/before__click/Before__click'
import After__login from './components/login/after__click/After__login'
import Desktop from '../src/components/desktop/Desktop'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <div className="app__container">
            <Routes>
              <Route path="/" element={<Before__click />} />
              <Route path="/login" element={<After__login />} />
              <Route path="/desktop" element={<Desktop />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App