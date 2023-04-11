// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import logo from '../../src/logo512.png'
import Nav from './Nav';
import React, { useState } from 'react';
import axios from 'axios';


// import logo1 from "../background.png"

function Lis(){
  const [afile,setafile] = useState('');
  const [newdata,setnewdata]=useState('');

  const clickHandler = async (e) => 
  {
      
      
      
      
      
   try {
    
    
      if(afile )
      {
        // console.log(formData);
       

        if(afile.toString().length===12){

        
          
          const res = await axios.post("http://localhost:8080/lis",{
           
            afile:afile,
          
        },
        {
          credentials: "include",
          mode:"cors"
        }
      );
      if(res.data.message==="not valid adhaar number")
          {
              alert("not valid adhaar number");
          }
      else if(res.status===200){
        console.log("succesfully process done");
        setnewdata(res.data.aplylis);
        

      }   
    }
    else{
      alert("enter valid credentials")
    }

      }

  
  }  
      catch(error) {
          console.log("inside catch");
        console.log(" error" +error);
      } finally {
          console.log("in finally");
      }
  }







    return(
      // <div style={image}>
      <div>
        <><Nav/></>
        <div className='container'>
          
            <center>
              <h1>LICENSE</h1>
                <img className='picinuser' src={logo} alt="img loading..."></img>
            </center>
        
            <form>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label formhead">REGD.OWNER</label>
            <input type="text" onChange={(e) => {setafile(e.target.value)}} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>
          </form>
          <button type="button" className="btn btn-primary" onClick={clickHandler} data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
        <Table striped bordered hover >
      
      <tbody>
       
        
        
      </tbody>
    </Table>
    <center>
        <a className="btn btn-primary"  href="ntg" role="button">DOWNLOAD</a>
        
      </center>
    </div>
    </div>
    // </div>
          );
        
        
        

    

   

}
export default Lis;
// const image={
//   width: "100%",
//     height: "100vh",
//     background: `url(${logo1})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
// }
