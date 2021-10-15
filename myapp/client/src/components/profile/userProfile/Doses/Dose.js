import React,{useState} from 'react';
import './dose.css'


import axios from 'axios';
const Dose = (props) => {
const [update, setupdate] = useState("updatenone")
  
  const handledelete = ()=>{
  	 axios.delete('http://localhost:5000/user/doses',{data:{id: props.id}}).then(()=>{console.log(props.id)})
     .then(()=>window.location.reload())
  
  }
  const handleupdate = ()=>{
    update==="updatenone"?setupdate("update"):setupdate("updatenone")
  }

  const handlecloseupdate = ()=>{
    setupdate("updatenone")
  }
  
  return (

    <div className="doses">
		 <h1>{props.dosename}</h1>
		 <p>Dosage: {props.dosage}</p>
     <p>Frequency: {props.frequency}</p>
     <button onClick={handleupdate}>Update</button>
		 <div className="delete" onClick={handledelete}><i className="bi bi-x-lg"></i></div>
     <div className={update} >
     <div className="closeupdate" onClick={handlecloseupdate}>
       <i className="bi bi-x-lg"></i>
     
       </div>
       <input type="text" value={props.dosename} />
       <input type="text" value={props.dosage}/>
       <input type="text" value={props.frequency}/>
       <button>submit</button>
     </div>
    </div>
  )
}

export default Dose;