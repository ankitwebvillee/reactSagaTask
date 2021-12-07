import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Conversation from './pages/Conversation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiTest from './pages/ApiTest';
import SelectContact from './pages/SelectContact';
import TypeTitle from './pages/TypeTitle';
import YourConversation from './pages/YourConversation';
import { notification } from 'antd';
// import { CONNECT_SOCKET } from './actions/actionType';

function App() {
  const [socket, setSocket] = useState(null)
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.selectedData);


  useEffect(() => {
    if (socket === null) {
      // dispatch({type: CONNECT_SOCKET})  //used saga for connecting sockets but getting infinite loop issue while dispatching the action and not have much time to resolve this issue so implemented sockets in App.js
      connectSockets()
    }
  }, [socket])

  useEffect(() => {
    if(socket !== null){
      socket.onmessage = evt => {
        const message = JSON.parse(evt.data)
        if (message?.type !== 'welcome' && message?.type !== 'ping' && message?.type !== 'confirm_subscription') {
          if (selectedUser?.id !== message?.message?.sender_id && message?.message?.contact_ids?.includes(selectedUser?.id)) {
            // Chat Notifications will only show to users who are in contact ids and not to the user who send it
            notification.info({
              message: message?.message?.sender_name,
              description: message.message?.content,
              className: "chatNoti",
              icon: false
            });
          }

          // Used to append new message with older messages
          dispatch({
            type: "NEW_MESSAGE",
            payload: message?.message
          })
        }
      }
    }
  }, [selectedUser])

  const connectSockets = () => {
    const ws = new WebSocket(process.env.REACT_APP_SOCKET_URL) // connecting sockets

    ws.onopen = () => {
      console.log('connected')
      setSocket(ws)
      ws.send(JSON.stringify({
        command: 'subscribe',
        identifier: JSON.stringify({
          channel: 'NotificationsChannel',
        }),
      }));
    }

    ws.onclose = () => {
      console.log('disconnected')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
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
