import React from 'react';
import './MonthDisplay.css'

function MonthDisplay(props) {

    return (
      <React.Fragment>
        <ul className="monthlist noselect">
          <li className={props.active === 'January' ? 'active' : ''} onClick={() => {props.onChangeHandler('January')}}>January</li>
          <li className={props.active === 'February' ? 'active' : ''} onClick={() => {props.onChangeHandler('March')}}>March</li>
          <li className={props.active === 'April' ? 'active' : ''} onClick={() => {props.onChangeHandler('April')}}>April</li>
          <li className={props.active === 'May' ? 'active' : ''} onClick={() => {props.onChangeHandler('May')}}>May</li>
          <li className={props.active === 'June' ? 'active' : ''} onClick={() => {props.onChangeHandler('June')}}>June</li>
          <li className={props.active === 'July' ? 'active' : ''} onClick={() => {props.onChangeHandler('July')}}>July</li>
          <li className={props.active === 'August' ? 'active' : ''} onClick={() => {props.onChangeHandler('August')}}>August</li>
          <li className={props.active === 'September' ? 'active' : ''} onClick={() => {props.onChangeHandler('September')}}>September</li>
          <li className={props.active === 'October' ? 'active' : ''} onClick={() => {props.onChangeHandler('October')}}>October</li>
          <li className={props.active === 'November' ? 'active' : ''} onClick={() => {props.onChangeHandler('November')}}>November</li>
          <li className={props.active === 'December' ? 'active' : ''} onClick={() => {props.onChangeHandler('December')}}>December</li>
        </ul>
      </React.Fragment>
    );
  
}

export default MonthDisplay;