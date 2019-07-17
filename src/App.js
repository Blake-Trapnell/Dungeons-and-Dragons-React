import React, { Component } from 'react';
import "./App.css";
import {statsRoller} from "./components/statsRoller"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      highestStat: ``,
      hSN: 8,
      ddClass: "",
      ddRace: "",
      racialTraits: "",
      speed: "",
      stats: { dex: 8, str: 8, wis: 8, int: 8, con: 8, cha: 8 }

    }
    // statsRoller = statsRoller.bind(this)
  }
      rollTheDice = () => {
        console.log(this.state.stats) 
        statsRoller()
      }


  render() {
    return (
      <div className="page">
        <button onClick={this.rollTheDice}>Roll The Dice</button>
      </div>
    );
  }
}