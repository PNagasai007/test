import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import logo from '../../src/logo192.png'
import Nav from './Nav';


function Rc(){
    return (
      <div>
      <><Nav/></>
        <div className='container'>
          
             <center>
              <h1>RC</h1>
                <img className='picinuser' src={logo} alt="no img"></img>
            </center>
        <Table striped bordered hover>
       
        <tbody>
          <tr>
            <th  className='tbh'>REGISTRATION NO:</th>
            <td>details</td>     
          </tr>

          <tr>
            <th >REGD.OWNER</th>
            <td>details</td>           
          </tr>

          <tr>
            <th >MTH.YR.OF MFG</th>
            <td>details</td>           
          </tr>

          <tr>
            <th >ADDRESS</th>
            <td>details</td>
            </tr>

            <tr>
                <th >MARKERS CLASS</th>
                <td>details</td>           
              </tr>

              <tr>
                <th >FUEL USED</th>
                <td>details</td>           
              </tr>

              <tr>
                <th >VEHICLE COLOUR</th>
                <td>details</td>           
              </tr>

              <tr>
                <th >VEHICLE CLASS</th>
                <td>details</td>           
              </tr>

              <tr>
                <th >engine number</th>
                <td>details</td>           
              </tr>

              <tr>
                <th >DATE OF REGISTRATION</th>
                <td>details</td>           
              </tr>

              <tr>
                <th>REGISTRATION VALID UPTO</th>
                <td>details</td>           
              </tr>



             
        </tbody>
      </Table> 
      <center>
        <a className="btn btn-primary" href="no" role="button">DOWNLOAD</a>
      </center>
      </div>  
      </div>
    )

   

}
export default Rc;