import React, { Component } from 'react';
import { render } from 'react-dom';
import UnderMenu  from './UnderMenu';

export default class LeftContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(position){
    if (this.state.active === position) {
      this.setState({active : null})
    } else {
      this.setState({active : position})
    }
  }

  myClass(position) {
    if (this.state.active === position) {
      return 'd-b';
    }
    return 'd-n';
  }

  render() {
    return(
      <div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">23%</div>
                <h3>Create Contact Formular</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>WORLDA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(1)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(1)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">87%</div>
                <h3>Create Subpage PSD</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>PANORAMA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(2)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(2)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">83%</div>
                <h3>Layout & implementation in HTML & CSS</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>EBAY RELAUNCH</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(3)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(3)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">23%</div>
                <h3>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>PANORAMA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(4)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(4)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">98%</div>
                <h3>Create Contact Formular</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>WORLDA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(5)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(5)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">98%</div>
                <h3>Create Contact Formular</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>WORLDA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(6)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(6)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_list flex">
            <div className="components flex">
              <div className="components__width flex">
                <div className="percent">98%</div>
                <h3>Create Contact Formular</h3>
              </div>
              <div className="flex right__side">
                <button className="name">
                  <p>WORLDA</p>
                </button>
                <button className="components__buttons">
                  <i className="material-icons color__icon">search</i>
                </button>
                <button className="components__buttons" onClick={() => this.handleChange(7)}>
                  <i className="material-icons color__icon">expand_more</i>
                </button>
              </div>
            </div>
          </div>
          <div className={this.myClass(7)}>
            <UnderMenu />
          </div>
        </div>
        <div className="left__content-row">
          <div className="left__content_footer flex">
            <h3>Project Archiv</h3>
            <i className="material-icons color__icon">keyboard_arrow_right</i>
          </div>
        </div>
      </div>
    )
  }
}
