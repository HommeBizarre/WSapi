
class DateDuJour extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        tabDay: ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
        tabMonth: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      };
    }
  
    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState({ date: new Date() });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    render() {
      const { date, tabDay, tabMonth } = this.state;
      const nomJour = tabDay[date.getDay()];
      const nomMois = tabMonth[date.getMonth()];
  
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
  
      let seconds = date.getSeconds();
      if (seconds < 10) seconds = "0" + seconds;
  
      const dateComplete = nomJour + " " + date.getDate() + " " + nomMois + " " + date.getFullYear();
      const heureComplete = date.getHours() + "H " + minutes + "M " + seconds + "S";
  
      return <h1 id="date">
          {dateComplete}
          <br />
          {heureComplete}
        </h1>
        ;
    }
  }

  //adapter cette classe pour qu'elle récupére les dernières données recolté
class DonneesReelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature : 20,
            humidite : 30,
            pression : 40
        };
      }

      render() {
    
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
        </div>;
      }
}
class GraphicChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        //pour chaque groupe de données récupéré, rajouter la date dans label et chaque données respcetivement dans leur case
      labels: ['date1', 'date2', 'date3', 'date4', 'date5', 'date6'],
      temperature: [12, 19, 7, 5, 2, 3],
      humidite:  [12, 8, 2, 5, 9, 5],
      pression: [3, 4, 3, 12, 19, 3]
    };
  }

  componentDidMount() {
    const ctx = document.getElementById('Chart').getContext('2d');

    new Chart(ctx, {
      type: 'line',

      data: {
        labels: this.state.labels,
        datasets: [
          {
            label: 'Humidité',
            data: this.state.pression,
            borderWidth: 2
          },
          {
            label: 'Température',
            data: this.state.temperature,
            borderWidth: 2
          },
          {
            label: 'Pression',
            data: this.state.humidite,
            borderWidth: 2
          }
        ]
      },

      options: {
        layout: {
          margin: 20,
          padding: 20
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  render() {
    return <div className="chart-container">
         <canvas id="Chart"></canvas>
    </div>
  }
}

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