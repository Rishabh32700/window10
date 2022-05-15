import React from 'react'

import './desktop.css'

import user from './assets/user.png'
import bin from './assets/bin.png'
import edge from './assets/edge.png'
import explorer from './assets/explorer.png'
import store from './assets/store.png'


const Desktop = () => {

  const data = [
    {
      id: 1,
      folder__icon: user,
      folder__name: "My PC",
    },
    {
      id: 2,
      folder__icon: bin,
      folder__name: "Recycle bin",
    },
    {
      id: 3,
      folder__icon: explorer,
      folder__name: "File Explorer",
    },
    {
      id: 4,
      folder__icon: edge,
      folder__name: "Browser",
    },
    {
      id: 5,
      folder__icon: store,
      folder__name: "Microsoft Store",
    },
  ];

  return (
    <>
      <div className="desktop">
        <div className="desktop__container">
          <div className="folders">

            {data.map((folder) => (
              <div className="folder">
                <div className="folder__icon">
                  <img src={folder.folder__icon} alt="" />
                </div>
                <div className="folder__name">
                  <span>{folder.folder__name}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default Desktop