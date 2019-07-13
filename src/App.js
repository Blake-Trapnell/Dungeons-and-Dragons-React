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
                <li id= "charName">IonSteel</li>
              </div>
              <div className="cSHeader2">
                  <li className="user">Bard 4</li>
                  <li className="user">Sailor</li>
                  <li className="user">Blake T</li>
                  <li className="userbot">Tiefling</li>
                  <li className="userbot">Chaotic Neut</li>
                  <li className="userbot">300</li>
              </div>
            </div>
            <div className="cSMain"></div>
        </div>
        </main>
      <footer></footer>
        <div className="rightpage"></div>

      </body>



      </div>
  );
}
}