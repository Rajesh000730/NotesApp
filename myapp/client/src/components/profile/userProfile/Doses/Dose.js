import React,{useState} from 'react';
import './dose.css'

import { setdeletedatar } from '../../../../authslice'
import { useSelector, useDispatch } from 'react-redux';
const Dose = (props) => {
  const globname1 = useSelector((state) => state.authslicered.datar)
  const dispatch = useDispatch()
  
  const handledelete = ()=>{
  	 dispatch(setdeletedatar(props.id)) 
  }


  return (

    <div id={props.id}  className="doses">
		 <h1>{props.dosename}</h1>
		 <p>Dosage: {props.description}</p>
     <p>Frequency: {props.frequency}</p>
     <button>Update</button>
		 <div className="delete" onClick={handledelete}><i className="bi bi-x-lg"></i></div>
    </div>
  )
}

export default Dose;