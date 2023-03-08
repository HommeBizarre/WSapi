const React = require("react")

class DonneesReelle extends React.Component {
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
        return React.createElement("div", { id: "rtd-container" },
            React.createElement("div", { id: "humidite", className: "rtd-data" },
                React.createElement("h1", null, "Humidite"),
                React.createElement("h2", null, this.state.humidite, "%")),
            React.createElement("div", { id: "temperature", className: "rtd-data" },
                React.createElement("h1", null, "Temperature"),
                React.createElement("h2", null, this.state.temperature, "°C")),
            React.createElement("div", { id: "pression", className: "rtd-data" },
                React.createElement("h1", null, "Pression"),
                React.createElement("h2", null, this.state.pression, "Pa")));
        }
}

module.exports = DonneesReelle;