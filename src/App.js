import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stats: {}

    }
  }


render() {
    return (
      <div className="page">
      <body>
        <div className="leftpage"></div>
        <main>
      <header>
        <nav></nav>
      </header>
          <div className="charactersheet">
            <div className="cSHeader">
              <div className="cSHeader1">
                <input id="characterName" type="text" placeholder="name"/>
              </div>
              <div className="cSHeader2">
                  <input className="user"/>
                  <input className="user"/>
                  <input className="user"/>
                  <input className="userbot"/>
                  <input className="userbot"/>
                  <input className="userbot"/>
              </div>
            </div>
            <div className="cSMain">
              <div className="information">
                <div className="stats"></div>
                <div className="bonuses"></div>
                <div className="passiveperception"></div>
                <div className="otherprof"></div>
              </div>
              <div className="information"></div>
              <div className="information"></div>
            </div>
        </div>
        </main>
      <footer></footer>
        <div className="rightpage"></div>

      </body>



      </div>
  );
}
}