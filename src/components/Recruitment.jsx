import React, { useState } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Recruitment = (props) => {
  var [recruitment,setrecruitment]=useState({"idd":'',"jobposition":'',"jobdetails":'',"eligibility":'',"Status":'ACTIVE'})

  const navigate = useNavigate();
  
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setrecruitment((recruitment)=>({...recruitment,[name]:value}))
      console.log(recruitment)
  }
  
  const savedata =()=>{
    console.log(recruitment)
    axios.post("http://localhost:4005/new1",recruitment)
    .then((response)=>{alert("Record Saved")})
    .catch(err=>console.log(err))
  
    navigate('/recruitmentview')
  }
  
  
  return (
    <div align="center">
      <div className='bb'>
      <Typography>Vacancy Details</Typography><br/>
      <TextField  label="Job ID" variant="filled" name="idd" value={recruitment.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="Job Position" variant="filled" name="jobposition" value={recruitment.jobposition} onChange={inputhandler}/><br/><br/>
      <TextField  label="Job Description" variant="filled" name="jobdetails" value={recruitment.jobdetails}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Eligibility" variant="filled" name="eligibility" value={recruitment.eligibility}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="Status" value={recruitment.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
    </div>
  )
}

export default Recruitment