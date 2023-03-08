const React = require("react")

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
      if (minutes < 10)
        minutes = "0" + minutes;
  
      let seconds = date.getSeconds();
      if (seconds < 10)
        seconds = "0" + seconds;
  
      const dateComplete = nomJour + " " + date.getDate() + " " + nomMois + " " + date.getFullYear();
      const heureComplete = date.getHours() + "H " + minutes + "M " + seconds + "S";
  
      return React.createElement('h1', { id: 'date' }, [
        dateComplete,
        React.createElement('br', null),
        heureComplete
      ]);
    }
  }

module.exports = DateDuJour;