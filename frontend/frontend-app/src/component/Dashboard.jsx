import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../component-css/Dashboard.css'

export default function Dashboard() {
    const {isAuthenticated, user} = useAuth0();
    return (
    <>
      <div className='dashboard-outer-container'>
        <div className='image-div'>
          {isAuthenticated && <img className='dash-userimage' src={user.image} alt='userimage'/>}
          </div>
        <div className='info-div'>
            <ul className='dash-list'>
                <li className='dash-list-con'>Full Name</li>
                <li className='dash-list-con'>Mobile Number</li>
                <li className='dash-list-con'>Email ID</li>
                <li className='dash-list-con'>Gender</li>
                <li className='dash-list-con'>DOB</li>
                <li className='dash-list-con'>Alternate Number</li>
            </ul>
            <ul className='dash-list'>
                <li  className='dash-list-con'>{ isAuthenticated && <p> {user.name} </p> } </li>
                <li  className='dash-list-con'></li>
                <li  className='dash-list-con'>{ isAuthenticated && <p> {user.email} </p> }</li>
                <li  className='dash-list-con'></li>
                <li  className='dash-list-con'></li>
                <li  className='dash-list-con'></li>
            </ul>
        </div>
      </div>
    </>
  )
}
