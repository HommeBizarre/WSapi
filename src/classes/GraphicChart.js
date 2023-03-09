import React from "react"
import Chart from 'chart.js/auto';

export default class GraphicChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['date1', 'date2', 'date3', 'date4', 'date5', 'date6'],
      temperature: [12, 19, 7, 5, 2, 3],
      humidite:  [12, 8, 2, 5, 9, 5],
      pression: [3, 4, 3, 12, 19, 3]
    };
    this.chartRef = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    const ctx = this.chartRef.current.getContext('2d');
    this.chart = new Chart(ctx, {
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

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  render() {
    return (
      <div className="chart-container">
        <canvas id="Data-Chart" ref={this.chartRef}></canvas>
      </div>
    );
  }
}
