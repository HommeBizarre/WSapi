React = require("react");
ReactDOM = require("react-dom");
DateDuJour = require('../classes/DateDuJour')
DonneesReelle = require('../classes/DonneesReelle')
GraphicChart = require('../classes/GraphicChart')

function Acceuil() {
  return (
    <div>
      <div id="panel">
        <DateDuJour />
        <DonneesReelle />
      </div>
      <GraphicChart />
    </div>
  );
}

ReactDOM.render(<Acceuil />, document.querySelector("#root"));