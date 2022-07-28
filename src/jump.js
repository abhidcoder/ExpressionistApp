import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {smile,stopsmile,change,changeA} from "./case";
import Button from 'react-bootstrap/Button';
import {TbArrowForwardUp} from 'react-icons/tb';
import Alert from 'react-bootstrap/Alert';




export default function Jump() {

    const myState = useSelector((state) => state.Redu )
    const dispatch = useDispatch();

  return (
    <div>
    <h1 className="text-center" style={{marginTop:"2%",background:"crimson",color:"white"}}><TbArrowForwardUp/> Expressionist (Express + Expressions) </h1>
    <br></br>
    <Alert variant="primary" className="text-center">
         This project is a simple demonstration of React with Redux and Bootstrap
        </Alert>
    <div style={{marginLeft:"5%",marginBottom:"5%"}}>
    <div style={{float:"right",marginRight:"25%"}} className="text text-center" >
    {myState}
    <br></br>
    </div>
    <div style={{marginTop:"12%"}}>
    <div>
    <Button style={{width:"20%"}} onClick={()=>dispatch(smile())}>Smile Face</Button>
    </div>
    <br></br>
    <div>
    <Button style={{width:"20%"}} variant="success" onClick={()=>dispatch(stopsmile())}>Sad Face</Button>
    </div>
    <br></br>
    <div>
    <Button style={{width:"20%"}} variant="dark"onClick={()=>dispatch(changeA())}>Change Color</Button>
    </div>
    <br></br>
    <div>
    <Button style={{width:"20%"}} variant="info" onClick={()=>dispatch(change())}>Change Expression</Button>
    </div>
    </div>
    </div>
    <Alert variant="success" className="text-center">
      <Alert.Heading>THANK YOU</Alert.Heading>
      <p>
      Made By: Abhishek Kumar Singh 
      </p>
    </Alert>
    </div>
  )
}
