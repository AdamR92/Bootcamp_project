import React, {Component} from 'react';
import './aboutEvent.scss'

class AboutEvent extends Component {

    render() {
        return(
            <div className="about_event">
                <div> <p> {this.props.event.description} </p> </div>
                <div>
                    <img src={this.props.event.image} alt=""/>
                </div>


            </div>
        )
    }
}

export default AboutEvent;