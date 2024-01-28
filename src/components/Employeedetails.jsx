import React, { useState } from 'react'

import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';




const Employeedetails = (props) => {

  var [employee,setemployee]=useState({"idd":'',"ename":'',"eage":'',"eadress":'',"status":'ACTIVE'})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setemployee((employee)=>({...employee,[name]:value}))
      console.log(employee)
  }
  
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/new2/",employee)
    .then((response) =>{
    alert("Record Saved")
    navigate('/Employeeview')
    })
    .catch(err=>console.log(err))
    }
  return (
    <div align="center">
      
      <div className='div'>
      <h1>EMPLOYEE DETAILS</h1>
      <TextField  label="ID" variant="filled" name="idd" value={employee.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={employee.ename}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="eage" value={employee.eage}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="status" value={employee.status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      
      <br/><br/>
      <Button variant="contained" onClick={savedata} >SUBMIT</Button>
    </div>
    </div>
  )
}

export default Employeedetails;