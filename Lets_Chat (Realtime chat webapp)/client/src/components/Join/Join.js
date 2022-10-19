import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Join.css'
import chat from './chat.png'
function Join() {
 

const [name, setName] = useState('');
const [room, setRoom] = useState(''); 


  return( 
  <>
<div>
  <h1 className='text-center pt-2'>
    LET's CHAT
  </h1>
  <hr />
</div>
<div className='bg'>
        
               <div style={{backgroundColor:"transparent",border:"none"}} className="card  cardd" >
  <div className="row g-0">
    <div className="col-md-5">
      <img src={chat} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body mt-5">
      <h3 className="heading text-center">Create or Join the Room</h3>
<div className=' text-center'><input placeholder='username' type="text" className='joinInput mt-3 ' name="" id="" value={name} onChange={(event)=>{setName(event.target.value)}}/></div>  
<div className=' text-center'><input placeholder='room' type="text" className='joinInput mt-3' name="" id="" value={room} onChange={(event)=>{setRoom(event.target.value)}}/></div>  
<Link onClick={event=>(!name|| !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
  <div className="text-center">
<button className='btn btn-success mt-2  text-center'type='submit'>JOIN</button>

  </div>
</Link>
      </div>
    </div>
  </div>

   </div>   
   </div>
  </>
  );
}

export default Join