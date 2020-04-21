import React from 'react';
import InfoDisplay from '../InfoDisplay/InfoDisplay'
import MonthDisplay from '../MonthDisplay/MonthDisplay'

class MonthInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: 'January'
    }
  }

  changeMonth = (month) => {
    this.setState({selectedMonth: month});
    this.render()
  }

  render() {

    let produceList = ''
    this.props.data.forEach( (item) => {
      if (item.month === this.state.selectedMonth) {
        produceList = item.selection.join(', ');
      }
    })

    return (
      <React.Fragment>
        <InfoDisplay
          label={`The Produce we Offer, by Month`}
          info={
            <React.Fragment>
              <div>
                <MonthDisplay
                  active={this.state.selectedMonth}
                  onchange={this.changeMonth}
                />
              </div>
              <br />
              <div>
                {produceList}
              </div>
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }

}

export default MonthInfoDisplay;