import React, {Component} from 'react';
import './Application.scss';
import{HashRouter, Route, Switch } from 'react-router-dom';
import Main from "../Main/Main"
import CalendarPage from "../calendarPage/calendarPage"
import Navigation from "../Navigation/Navigation"
import AboutEvent from "../aboutEvent/aboutEvent"

const NotFound = () => <h2>Niestety nie znaleziono takiego wydarzenia</h2>

class App extends Component {
  state = {
    events: false,
    dataLoaded:false,
    counter: 0

  };


  componentDidMount() {
    fetch('http://localhost:3001/events/').then(resp => resp.json())
        .then(data=>{
          this.setState({events:data});
          this.setState({dataLoaded:true});
        })
  }

  render() {
    if (this.state.dataLoaded){
      return (
          <HashRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" render={()=><Main events={this.state.events} />}/>
              <Route path="/calendarPage/:date" render={()=><CalendarPage event={this.state.events[this.state.counter]}/>}/>
              <Route path="/about" render={()=><AboutEvent events={this.state.events}/>} />
              <Route component={NotFound}/>
            </Switch>
          </HashRouter>
      );
    }else{
      return null;
    }

  }
}

export default App;
