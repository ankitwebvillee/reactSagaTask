import React, { useEffect } from 'react'
import io from 'socket.io-client';

// const socket = io.connect(process.env.REACT_APP_SOCKET_URL);

export default function Chats() {

    useEffect(() => {
        const socket = io.connect('ws://34.122.252.114:3000/cable/');
    }, [])

    return (
        <div>
            Chat page
        </div>
    )
}
