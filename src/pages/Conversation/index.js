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
            <section class="main_wrapper">

                <div class="container custome-container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="headline_wrapper">
                                <h3> {conversationSelectedData?.title ? conversationSelectedData?.title : chatTitle ? chatTitle : 'Furniture Shopping Together'} </h3>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            {getConversationByIdData?.recent_messages?.map((chat) => (

                                <ChatCard sender_name={chat.sender_name} content={chat.content} />

                            ))}
                        </div>
                        <div class="col-md-10">
                            <div class="row align-items-center pt-5">
                                <div class="col-md-9">
                                    <div class="user-input-section">
                                        <input type="search" class="userinput" placeholder=" We can list down items and then decide on marketplaceI  " name="name" onChange={(e) => setMessage(e.target.value)} />
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="slecBtn text-right">
                                        <Link to="#" class="Btn stBtn" onClick={() => dispatch(
                                            sendMessageAction({
                                                user_id: selectedUser?.id,
                                                conversation_id: conversationSelectedData === undefined ? sendConversationData?.id : conversationSelectedData?.id,
                                                content: message
                                            }),
                                        )}> Send </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="headlie_arow">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                </div>

            </section>
        </>
    )
}
