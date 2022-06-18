import React,{useState} from 'react'

import { useNavigate,useParams } from 'react-router'
import './login.css'


export const Login = (props) => {
    const navigate=useNavigate();
   
    const [uname,setuname]=useState('')
    const [pass,setpass]=useState('')
    const oncli=(e)=>{
        e.preventDefault();
       if((uname==="sathvika"  && pass==="123456") ||(uname==="foo" && pass==="bar")){
        
         props.login()
         navigate('home')
        
       }
       else{
         alert("Please enter the correct login details")
       }
    }
    return (
       
        <div className='outer_container '>
            
            <div className="container">

        <form  className="form">
           <h1 className="heading">Login Form</h1>
           <br/>
           <br/>
    

            <label htmlFor="username">User Name</label>
            <input className='input' type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} name="username"/>
            <br/>


            <label htmlFor="password">Password</label>
            <input className='input' type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} name="password"/>
            <br/>
            
            <div className="button">
                <button id="submit" onClick={oncli} type="submit">Submit</button>
                <br/>
            </div>


        </form>
    </div>
        </div>
    )
}
