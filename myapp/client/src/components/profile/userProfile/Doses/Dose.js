import React,{useState} from 'react';
import './dose.css'


import axios from 'axios';

const Dose = (props) => {
  const [dosename, setdosename] = useState(props.dosename);
const [dosage, setdosage] = useState(props.dosage)
const [frequency, setfrequency] = useState(props.frequency)
const [update, setupdate] = useState("updatenone")
const you = props.setfun  
  const handledelete = ()=>{
  	 axios.delete('http://localhost:5000/user/doses',{data:{id: props.id}}).then(()=>{console.log(props.id)})
     .then(()=>you(props.set))
  
  }
  const handleupdatecont = ()=>{
    update==="updatenone"?setupdate("update"):setupdate("updatenone")
    
  }
  const handleupdate = ()=>{
    axios.put('http://localhost:5000/user/doses',{id:props.id, dosename: dosename, dosage:dosage, frequency:frequency})
    .then(()=>you(props.set))
    .catch((err)=>console.log(err))

    setupdate("updatenone")
  }

  const handlecloseupdate = ()=>{
    setupdate("updatenone")
  }

  const handlechangedname = (e)=>{
    setdosename(e.target.value)
    
    
  }
  const handlechangedosage = (e)=>{
    setdosage(e.target.value)
  }

  const handlechangefrequency = (e)=>{
    setfrequency(e.target.value)
  }
  
  return (

    <div className="doses">
		 <h1>{props.dosename}</h1>
		 <p>Dosage: {props.dosage}</p>
     <p>Frequency: {props.frequency}</p>
     <button onClick={handleupdatecont}>Update</button>
		 <div className="delete" onClick={handledelete}><i className="bi bi-x-lg"></i></div>
     <div className={update} >
     <div className="closeupdate" onClick={handlecloseupdate}>
       <i className="bi bi-x-lg"></i>
     
       </div>
       <input type="text" value={dosename} onChange={handlechangedname} required={true}/>
       <input type="text" value={dosage} onChange={handlechangedosage} required={true}/>
       <input type="text" value={frequency} onChange = {handlechangefrequency} required={true}/>
       <button onClick={handleupdate}>Update</button>
     </div>
    </div>
  )
}

export default Dose;