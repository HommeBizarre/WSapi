const React = require("react");
const ReactDOM = require("react-dom");
const DateDuJour = require('../classes/DateDuJour')
const DonneesReelle = require('../classes/DonneesReelle')
const GraphicChart = require('../classes/GraphicChart')


function Acceuil() {
  return (
    React.createElement("div", null,
      React.createElement("div", { id: "panel" },
        React.createElement(DateDuJour, null),
        React.createElement(DonneesReelle, null)
      ),
      React.createElement(GraphicChart, null)
    )
  );
}


ReactDOM.render(React.createElement(Acceuil, null), document.querySelector("#root"));