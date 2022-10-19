import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../Icon/onlineIcon.png'
import closeIcon from '../../Icon/closeIcon.png'
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom'
let socket;
function InfoBar({room,setUsers,clicked}) {
  const ENDPOINT="http://localhost:5000";
  let navigate=useNavigate()
  const handledisconnect=()=>{
    socket=io(ENDPOINT);
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    navigate('/');
    window.location.reload();
  }
// const ENDPOINT="http://localhost:5000";
    // socket=io(ENDPOINT);
 
  return (
    <div className='infoBar'>
        <div onClick={()=>{clicked(true);}} className='leftInnerContainer'>
            <img className="onlineIcon" src={onlineIcon} alt=""/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <div onClick={handledisconnect}><img  src={closeIcon} alt="x" /></div>
        </div>
        </div>
  )
}

export default InfoBar