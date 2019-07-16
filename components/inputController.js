import React, { Component } from 'react';

export default class inputCtrl extends Component {

    state = {
        characterName: "",
        classLevel: "",
        background: "",
        playerName: "",
        race: "",
        Alignment: "",
        experiencePoints: null,
    }

    submitText(prop, val) {
        console.log(prop, val);
        this.setState({
            [prop]: val
        });
    }
    handleChange(prop, e) {
        this.setState({
            [prop]: e
        });
    }

    render() {
        return (



)
    }



}
