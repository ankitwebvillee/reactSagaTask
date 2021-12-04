import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { contactAction } from '../actions/contactActions';
import { conversationAction, getConversationAction, sendConversationAction } from '../actions/conversationActions';
import { getMessageByIdAction, messageAction, sendMessageAction } from '../actions/messageActions';

export default function Home(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                dispatch(
                    contactAction({
                        email: 'ankit',
                        pwd: 'pws',
                    }),
                )
            }}>Load contacts /contacts
            </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    sendConversationAction({
                        user_id: 1,
                        title: 'ankit',
                        contact_ids: [1, 2]
                    }),
                )
            }}>send conversation /conversations POST
            </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    conversationAction({
                        user_id: 2,
                    }),
                )
            }}>Load conversations /conversations GET
            </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    getConversationAction({
                        user_id: 1,
                        conversationId: 2
                    }),
                )
            }}>get conversation by id /conversations/:id </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    sendMessageAction({
                        user_id: 1,
                        conversation_id: 1,
                    }),
                )
            }}>send message /conversations/:id/messages POST
            </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    getMessageByIdAction({
                        user_id: 1,
                        conversation_id: 1,
                        message_id: 2
                    }),
                )
            }}>get Messages of conversation /conversations/:id/messages/:messageId
            </button>

            <br />
            <br />

            <button onClick={() => {
                dispatch(
                    messageAction({
                        user_id: 1,
                        conversation_id: 2
                    }),
                )
            }}>Load messages /conversations/:id/messages GET
            </button>

        </div>
    )
}
