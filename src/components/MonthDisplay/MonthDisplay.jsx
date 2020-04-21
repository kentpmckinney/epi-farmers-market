import React from 'react';
import './MonthDisplay.css'

function MonthDisplay(props) {

    return (
      <React.Fragment>
        <ul className="monthlist">
          <li className={props.active === 'January' ? 'active' : ''} onClick={() => {props.onchange('January')}}>January</li>
          <li className={props.active === 'February' ? 'active' : ''} onClick={() => {props.onchange('March')}}>March</li>
          <li className={props.active === 'April' ? 'active' : ''} onClick={() => {props.onchange('April')}}>April</li>
          <li className={props.active === 'May' ? 'active' : ''} onClick={() => {props.onchange('May')}}>May</li>
          <li className={props.active === 'June' ? 'active' : ''} onClick={() => {props.onchange('June')}}>June</li>
          <li className={props.active === 'July' ? 'active' : ''} onClick={() => {props.onchange('July')}}>July</li>
          <li className={props.active === 'August' ? 'active' : ''} onClick={() => {props.onchange('August')}}>August</li>
          <li className={props.active === 'September' ? 'active' : ''} onClick={() => {props.onchange('September')}}>September</li>
          <li className={props.active === 'October' ? 'active' : ''} onClick={() => {props.onchange('October')}}>October</li>
          <li className={props.active === 'November' ? 'active' : ''} onClick={() => {props.onchange('November')}}>November</li>
          <li className={props.active === 'December' ? 'active' : ''} onClick={() => {props.onchange('December')}}>December</li>
        </ul>
      </React.Fragment>
    );
  
}

export default MonthDisplay;