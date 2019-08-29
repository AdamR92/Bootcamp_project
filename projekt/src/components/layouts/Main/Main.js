import React, {Component} from 'react';
import './Main.scss'

class Main extends Component {
    state = {
        events: this.props.events
    };
    render() {
        console.log(this.props.events[0]);
        return(
            <div className="main__widget">
                <h1> Final Bootcamp Project</h1>
                <h2>Kalendarz historii Polski</h2>
                <img src="https://media.merlin.pl/media/300x452/000/010/147/56bd1dc37af78.jpg"/>
                <div className='calendarPage'>
                    <span className='day'>{this.state.events[0].day}</span>
                    <span className='month'>{this.state.events[0].month}</span>
                    <span className='year'>{this.state.events[0].year}</span>
                </div>
            </div>
        )



    }
}

export default Main;