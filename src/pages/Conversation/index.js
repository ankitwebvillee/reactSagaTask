import React, { useEffect, useState } from 'react';
import ChatCard from '../../components/ChatCard';
import { useDispatch, useSelector } from 'react-redux'
import { getConversationAction } from '../../actions/conversationActions';
import { Link } from 'react-router-dom';
import { sendMessageAction } from '../../actions/messageActions';

export default function Conversation() {

    const dispatch = useDispatch();
    const { getConversationByIdData, sendConversationData } = useSelector((state) => state.conversation);
    const { chatTitle, selectedUser, conversationSelectedData } = useSelector((state) => state.selectedData);
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (sendConversationData !== []) {
            dispatch(
                getConversationAction({
                    user_id: selectedUser?.id,
                    conversationId: conversationSelectedData === undefined ? sendConversationData?.id : conversationSelectedData?.id
                }),
            )
        }
    }, [sendConversationData])

    return (
        <>
            <section className="main_wrapper">

                <div className="container custome-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="headline_wrapper">
                                <h3> {conversationSelectedData?.title ? conversationSelectedData?.title : chatTitle ? chatTitle : 'Furniture Shopping Together'} </h3>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            {getConversationByIdData?.recent_messages?.map((chat, index) => (
                                <div key={index}>
                                    <ChatCard sender_name={chat.sender_name} content={chat.content} />
                                </div>
                            ))}
                        </div>
                        <div className="col-md-10">
                            <div className="row align-items-center pt-5">
                                <div className="col-md-9">
                                    <div className="user-input-section">
                                        <input type="search" className="userinput" placeholder=" We can list down items and then decide on marketplaceI  " name="name" onChange={(e) => setMessage(e.target.value)} value={message} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="slecBtn text-right">
                                        <Link to="#" className="Btn stBtn" onClick={() => {
                                            dispatch(
                                                sendMessageAction({
                                                    user_id: selectedUser?.id,
                                                    conversation_id: conversationSelectedData === undefined ? sendConversationData?.id : conversationSelectedData?.id,
                                                    content: message
                                                }),
                                            ); setMessage('')
                                        }}> Send </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headlie_arow">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                </div>

            </section>
        </>
    )
}
