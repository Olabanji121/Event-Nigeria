import React, { Component,Fragment } from 'react'
import EventListItems from './EventListItems'

class EventList extends Component {
    render() {
        const {events, selectEvent} = this.props
        return (
                <Fragment>
                    {events.map(event => (
                        <EventListItems key={event.id} event={event} selectEvent={selectEvent}/>
                    ))}
                
                </Fragment>
				);
    }
}

export default EventList;
