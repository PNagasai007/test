import logo from "../background.png"
import Greetings from './Greetings';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
function Signup(){

    const navigate = useNavigate();
    const [mobile,setMobile] = useState('');
    const [repassword,setRePassword] = useState('');
    const [password,setPassword] = useState('');


    const clickHandler = async (e) => {
        e.preventDefault();
     try {
        if(password===repassword && mobile.length===10  )
        {
            const res = await axios.post("http://localhost:8080/signup",{
            mobile:mobile,
            password: password,
            repassword:repassword

          },
          {
            credentials: "include",
            mode:"cors"
          }
        );

            if(res.data.message==="User already exists")
            {
                alert("User already exists");
            }
            else if(res.status === 200) {
                console.log("inside response");
                console.log(res.data);
             
                    alert("Successfully Registered!!")
                    navigate('/');

                
        
            }
    } 
    else{
        alert("invalid input")
    }


        }
        catch(error) {
            console.log("inside catch");
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }
        
      
}
    return (
        <div  style ={HeaderStyle}>
             <>
        <Greetings/>
        </>
                    <div className="btnn" onClick={'/greetings'}>Home</div>

        <form className="box">
        <div className="register">
          
            <h1  className="head">Register</h1>
            <input type="text" name="mobile" onChange={(e) => {setMobile(e.target.value)}} placeholder="Your mobile number" ></input>
            <br/><br/>
            <input type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter Password" ></input>
            <br/><br/>
            <input type="password" name="reEnterPassword" onChange={(e) => {setRePassword(e.target.value)}}  placeholder="Re-enter Password" ></input>
            <br/><br/>
            <button className="button" onClick={clickHandler}  type="submit" >Register</button>
           
            
        </div>
        </form>
        </div>
    )

   

}
export default Signup;


const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };
