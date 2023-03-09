const React = require("react");
const ReactDOM = require("react-dom");
const DateDuJour = require('../classes/DateDuJour')
const DonneesReelle = require('../classes/DonneesReelle')
const GraphicChart = require('../classes/GraphicChart')


function Acceuil() {
    return <div>
      <div id="panel">
          <DateDuJour/>
          <DonneesReelle/>
      </div>
      <GraphicChart/>
  </div>
}

ReactDOM.render(<Acceuil/>, document.querySelector('#root') )