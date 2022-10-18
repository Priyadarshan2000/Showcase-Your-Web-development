import React from 'react';

import onlineIcon from '../../Icon/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div >
   
    {
      users
        ? (
          <div>
            <div className='navi'>
            <h3 style={{color:"white",padding:"0.5rem"}}>LET'S CHAT</h3>

            </div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div style={{width:"20rem"}} key={name}>

                  <div  className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                    
                  </div>
                  <hr />
                  </div>
                  
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;