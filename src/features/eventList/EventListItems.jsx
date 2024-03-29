import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventLIstAttendee from './EventLIstAttendee';

class EventListItems extends Component {
    render() {
        const {event, selectEvent} = this.props
        return (
					<Segment.Group>
						<Segment>
							<Item.Group>
								<Item>
									<Item.Image size='tiny' circular src={event.hostPhotoURL} />
									<Item.Content>
										<Item.Header as='a'>{event.title}</Item.Header>
										<Item.Description>
											Hosted by <a href=' '>{event.hostedBy}</a>
										</Item.Description>
									</Item.Content>
								</Item>
							</Item.Group>
						</Segment>
						<Segment>
							<span>
								<Icon name='clock' /> {event.date} |
								<Icon name='marker' /> {event.venue}
							</span>
						</Segment>
						<Segment secondary>
							<List horizontal>
								{event.attendee && event.attendees.map(attendee => (
									<EventLIstAttendee key={attendee.id} attendee={attendee} />
								))}
							</List>
						</Segment>
						<Segment clearing>
							<span>{event.description}</span>
							<Button onClick={()=> selectEvent(event)} as='a' color='teal' floated='right' content='View' />
						</Segment>
					</Segment.Group>
				);
    }
}

export default EventListItems;



