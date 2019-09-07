
import React, {Component} from 'react';
import EventDashBoard from '../../features/events/eventDashBoard/EventDashBoard';
import NavBar from '../../features/NavBar/NavBar';





class  App extends Component {
  render(){
    return (
      
      <div>
          <NavBar />
          <EventDashBoard />
        </div>
      
    );

  }
  
}

export default App;

