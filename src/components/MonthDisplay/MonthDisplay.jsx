import React from 'react';
import './MonthDisplay.css'

class MonthDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <div></div>
    } else {
      currentlyVisibleState = <div></div>
    }
    return (
      <React.Fragment>
  
      </React.Fragment>
    );
  }
  
}

export default MonthDisplay;