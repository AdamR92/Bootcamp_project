import React, {Component} from 'react';
import './Application.scss';
import{HashRouter, Route, Switch } from 'react-router-dom';
import Main from "../Main/Main"
import CalendarPage from "../calendarPage/calendarPage"
import Navigation from "../Navigation/Navigation"
import AboutEvent from "../aboutEvent/aboutEvent"
import '../../styles/partials/reset.scss'

const NotFound = () => <h2>Niestety nie znaleziono takiego wydarzenia</h2>

class App extends Component {
  state = {
    events: false,
    dataLoaded:false,
    event:{}

  };


  componentDidMount() {


    fetch('http://localhost:3001/events/').then(resp => resp.json())
        .then(data=>{
          this.setState({events:data});
          this.setState({dataLoaded:true});

          let counter=0;

          this.setState({event:this.state.events[counter]});

         this.intervalId =setInterval(()=> {
            if(counter<this.state.events.length-1){
              counter++
            }else{
              counter=0
            }
            this.setState({event:this.state.events[counter]});
            console.log(this.state.event)
            console.log(counter)
          },5000)
        })
  }

  componentWillUnmount() {
      clearInterval(this.intervalId)
  }

    render() {
    if (this.state.dataLoaded){
      return (
          <HashRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" render={()=><Main events={this.state.events} />}/>
              <Route path="/calendarPage/:date" render={()=><CalendarPage event={this.state.event}/>}/>
              <Route path="/about" render={()=><AboutEvent event={this.state.event}/>} />
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
