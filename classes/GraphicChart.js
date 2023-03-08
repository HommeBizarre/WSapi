const React = require("react")

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
        return React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { id: 'Chart' })
        );
      }
  }

module.exports = GraphicChart;
