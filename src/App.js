import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Conversation from './pages/Conversation';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import ApiTest from './pages/ApiTest';
import SelectContact from './pages/SelectContact';
import TypeTitle from './pages/TypeTitle';
import YourConversation from './pages/YourConversation';
// import { CONNECT_SOCKET } from './actions/actionType';

function App() {
  const [socket, setSocket] = useState(null)
  // const dispatch = useDispatch();
  // const { socket } = useSelector(state => state.socketReducer)

  useEffect(() => {
    if (socket === null) {
      // dispatch({type: CONNECT_SOCKET})  //used saga for connecting sockets but getting infinite loop issue while dispatching the action and not have much time to resolve this issue so implemented sockets in App.js
      connectSockets()
    }
  }, [socket])

  const connectSockets = () => {
    const ws = new WebSocket('ws://34.122.252.114:3000/cable/')
    ws.onopen = () => {
      console.log('connected')
      setSocket(ws)
    }

    ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      console.log(message)
    }

    ws.onclose = () => {
      console.log('disconnected')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home socket={socket} />} />
        <Route exact path="/select_contact" element={<SelectContact />} />
        <Route exact path="/type_title" element={<TypeTitle />} />
        <Route exact path="/conversation" element={<Conversation />} />
        <Route exact path="/your_conversation" element={<YourConversation />} />
        <Route exact path="/apitest" element={<ApiTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
