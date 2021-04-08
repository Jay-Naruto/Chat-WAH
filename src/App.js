
import React,{useEffect, useState} from "react"
import './App.css';
import {Button, FormControl, InputLabel,FormHelperText, Input, ListItemSecondaryAction, IconButton} from "@material-ui/core"
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase"
import FlipMove from "react-flip-move"
import SendIcon from '@material-ui/icons/Send';




function App() {
const [input,setInput]=useState('')
const [messages,setMessages]=useState([
  
])
const [username,setUsername]=useState("")


 useEffect(()=>{
   db.collection('messenger')
   .orderBy('timestamp','desc').onSnapshot(snapshot=>{
     setMessages(snapshot.docs.map(doc=>({id: doc.id ,data:doc.data()})))
   })
 },[])


 
useEffect(()=>{
  setUsername(prompt("Please enter your name"))

},[])

const sendMessage=(event)=>{
  event.preventDefault()

  db.collection('messenger').add({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

setInput('')
}

  return (
    <div className="App">
      <img src="https://logos.textgiraffe.com/logos/logo-name/Wah-designstyle-boots-m.png" width="30%" height="30%" ></img>
      <div><strong>W</strong>rite <strong>A</strong>nything <strong>H</strong>ere</div>
      <hr></hr>
      <form className="App__form" >
    <FormControl  className="App__formControl" >
      
      <Input className="App__input"  placeholder="Enter a message" value={input} onChange={e=>setInput(e.target.value)}  />
      <IconButton className="App__btn" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
        <SendIcon />
      </IconButton>
      {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >Send</Button>
       */}
    </FormControl>
      </form>
 
      
      <FlipMove>
      {
        messages.map(({id,data})=>(
          <Message key={id} username={username} msg={data}/>
      
        )
          
        )
          
        }
      </FlipMove>

     
      
      
      
    </div> 
  );
}

export default App;
