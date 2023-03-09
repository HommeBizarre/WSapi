//const React = require("react")
import React from "react"


export default class DonneesReelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature : 30,
            humidite : 20,
            pression : 40
        };
      }

      render() {
        console.log("graphic initialisé");
        return <div id="rtd-container">
            <div id='humidite' className="rtd-data">
                <h1>Humidite</h1>
                <h2>{this.state.humidite}%</h2>
            </div>
            <div id='temperature' className="rtd-data">
                <h1>Temperature</h1>
                <h2>{this.state.temperature}°C</h2>
            </div>
            <div id='pression'className="rtd-data">
                <h1>Pression</h1>
                <h2>{this.state.pression}Pa</h2>
            </div>
        </div>
      }
}

//module.exports = DonneesReelle;