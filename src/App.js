import DateDuJour from "./classes/DateDuJour.js"
import DonneesReelle from "./classes/DonneesReelle.js"
import GraphicChart from "./classes/GraphicChart.js"


import './App.css';

function App() {
  return (
    <div>
      <header>
        <div id="panel">
          <DateDuJour/>
          <DonneesReelle/>
        </div>
        <GraphicChart/>
      </header>
    </div>
  );
}

export default App;
