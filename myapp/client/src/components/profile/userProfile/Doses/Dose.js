import React,{useState} from 'react';
import './dose.css'


import axios from 'axios';
const Dose = (props) => {

  
  const handledelete = ()=>{
  	 axios.delete('http://localhost:5000/user/doses',{data:{id: props.id}}).then(()=>{console.log(props.id)})
     .then(()=>window.location.reload())
  
  }


  return (

    <div className="doses">
		 <h1>{props.dosename}</h1>
		 <p>Dosage: {props.dosage}</p>
     <p>Frequency: {props.frequency}</p>
     <p>{props.id}</p>
     <button>Update</button>
		 <div className="delete" onClick={handledelete}><i className="bi bi-x-lg"></i></div>
    </div>
  )
}

export default Dose;