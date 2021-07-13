
import './App.css';
import React, { useEffect, useState } from 'react'
import{  FormControl,  Input} from '@material-ui/core';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setinput] = useState('');
  const [message, setmessage] = useState([]);
  const [username, setusername] = useState('');
//useState= its a variable to store data
//useEffect = its a block of code, run code on a condition.
 
useEffect(() => {
  db.collection('message').orderBy('timestamp','desc').onSnapshot(snapshot =>{
   setmessage(snapshot.docs.map(doc=>({id:doc.id, message: doc.data()})))
  })
 
}, [input])



useEffect ( () =>{
    setusername(prompt('enter ur name'));

  },[]
  )

  const sendMessage = (event) =>{
    //event.preventDefault function is used to stop reload when enter button is hit
    event.preventDefault();

    db.collection('message').add({
      text :input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setinput('');
  }

  return(
  
   <div className="App">
     <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger"/>
     <h2> welcome {username}</h2>

<form className="app__form">
<FormControl className= "app__formControl">

  <Input className="app__input" placeholder="Enter a message" value ={input} onChange={event => setinput(event.target.value)} />


<IconButton className="app__iconButton" disabled={!input}
 variant="contained"
  color="primary"
   type="submit"
    onClick = {sendMessage}
    >
  <SendIcon/>
  </IconButton>


</FormControl>
</form>


<FlipMove>
{
  message.map (({id,message}) =>(
    <Message key ={id} username={username} message ={message} />
    ))
}

</FlipMove>



    </div>
  );
}

export default App;
