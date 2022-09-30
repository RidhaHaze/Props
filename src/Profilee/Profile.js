import React from 'react'
import PropTypes from 'prop-types';
const Profile = (props) => {
  return (
    <div>
      <h3>{props.Fullname}</h3>
      <h3>{props.Bio}</h3>
      <h3>{props.Profession}</h3>
      <button  onClick={props.handleAlert} >Click me</button>
      {props.children}

    </div>
  )
}



export default Profile