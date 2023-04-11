import React from 'react';
import Table from 'react-bootstrap/Table';
import Nav from './Nav';

function Permits(){
    return (
      <div>
        <><Nav/></>
        <div className='container'>
        <center><h2>PERMITS</h2></center>
        <br></br>
      <Table striped bordered hover>
       
        <tbody>
          <tr>
            <th className='tbh' >REGD.OWNER:</th>
            <td>details</td>     
          </tr>

          <tr>
            <th >VEHICLE NO:</th>
            <td>details</td>           
          </tr>

          <tr>
            <th >FROM:</th>
            <td>details</td>           
          </tr>

          <tr>
            <th >TO:</th>
            <td>details</td>
            </tr>

              <tr>
                <th  >VALIDITY</th>
                <td>details</td>           
              </tr>
              
        </tbody>
      </Table>   
      <center>
        <a className="btn btn-primary" href="ni" role="button">DOWNLOAD</a>
      </center>
    </div>
    </div>
    )

   

}
export default Permits;
