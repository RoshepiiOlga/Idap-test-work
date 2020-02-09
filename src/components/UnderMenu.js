import React, { Component } from 'react';

export const UnderMenu = () =>(
  <div className="additional__information flex">
    <div className="additional__information_components components flex">
      <div className="components__width flex">
        <div className="components__percent">66%</div>
        <h3>Create the Context</h3>
      </div>
      <div className="flex right__side">
        <div className="additional__information_avatar">
          <div className="right__side_avatar_online"></div>
          <img src="./src/images/face.jpeg"></img>
        </div>
        <div className="additional__information_avatar">
          <div className="right__side_avatar_online"></div>
          <img src="./src/images/face.jpeg"></img>
        </div>
        <div className="additional__information_avatar">
          <div className="right__side_avatar_online"></div>
          <img src="./src/images/face.jpeg"></img>
        </div>
        <div className="additional__information_number">
          <p>+3</p>
        </div>
        <button className="additional__information_button flex">
          <i className="material-icons">replay</i>
          <p>TODAY, 13:40 PM</p>
        </button>
        <button className="components__buttons">
          <i className="material-icons color__icon">search</i>
        </button>
      </div>
    </div>
    <div className="additional__information_components components flex">
      <div className="components__title flex">
        <div className="components__percent">Ready</div>
        <h3>Implementation in the Layout
        <i className="material-icons">done</i></h3>
      </div>
      <div className="flex right__side">
        <div className="additional__information_avatar">
          <div className="right__side_avatar_online"></div>
          <img src="./src/images/face.jpeg"></img>
        </div>
        <div className="additional__information_avatar">
          <div className="right__side_avatar_online"></div>
          <img src="./src/images/face.jpeg"></img>
        </div>
        <button className="additional__information_button flex">
          <i className="material-icons">replay</i>
          <p >YESTARDAY, 12:40 PM</p>
        </button>
        <button className="components__buttons">
          <i className="material-icons color__icon">search</i>
        </button>
      </div>
    </div>
  </div>
)
export default UnderMenu

