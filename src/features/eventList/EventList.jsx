import React, { Component,Fragment } from 'react'
import EventListItems from './EventListItems'

class EventList extends Component {
    render() {
        return (
                <Fragment>
                    {this.props.events.map(event => (
                        <EventListItems key={event.id} event= {event} />
                    ))}

                
                </Fragment>
				);
    }
}

export default EventList;
