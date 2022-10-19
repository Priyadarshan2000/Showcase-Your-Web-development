import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'
function Message({message:{user,text,date},name}) {
  
        let isSentByCurrentUser=false,admin=false;
        const trimmedName=name.trim().toLowerCase();

        if(user===trimmedName){
            isSentByCurrentUser=true;
        }
      if(user==='admin'){
        admin=true;
      }
      

  return (
    isSentByCurrentUser?<div className='messageContainer justifyEnd'>
        <div className='sentText pr-10'>You</div>
        <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            <p>{date}</p>
        </div>
    </div>:
  admin?<div className={`messageContainer justifyCenter`}>
  <div className="messageBox backgroundLightad">
      <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      
  </div>
  <p className='sentText pl-10'>{user}</p>
</div>:
  <div className={`messageContainer justifyStart`}>
  <div className="messageBox backgroundLight">
      <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      <p style={{color:"black"}}>{date}</p>
  </div>
  <p className='sentText pl-10'>{user}</p>
</div>
  )
}

export default Message