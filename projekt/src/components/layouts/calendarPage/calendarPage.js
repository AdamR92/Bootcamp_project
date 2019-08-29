import React, {Component} from 'react';
import './calendarPage.scss'


class calendarPage extends Component {

    render() {
        return (
                <div className="main__calendar">
                     <div className='calendarPage'>
                        <div className="white_flag">
                            <span className='day'>{this.props.event.day}</span>
                            <span className='month'>{this.props.event.month}</span>
                        </div>
                     <div className="red_flag">
                            <span className='year'>{this.props.event.year}</span>
                     </div>
                     </div>
                </div>
        )
    }
}

export default calendarPage;