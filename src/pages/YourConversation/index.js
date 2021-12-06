import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { conversationAction } from '../../actions/conversationActions';
import { selectedDataAction } from '../../actions/selectedDataAction';
import ConversationCard from '../../components/ConversationCard';

export default function YourConversation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { conversationData } = useSelector((state) => state.conversation);
    const { selectedUser } = useSelector((state) => state.selectedData);

    useEffect(() => {
        dispatch(
            conversationAction({
                user_id: selectedUser?.id,
            }),
        )
    }, [selectedUser])

    return (
        <div>
            <section class="main_wrapper">

                <div class="container custome-container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="headline_wrapper">
                                <h3> Your Conversations </h3>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            {conversationData?.map((conversation, index) => (
                                <div onClick={() => {dispatch(selectedDataAction({ conversationSelectedData: conversation })); navigate('/conversation') }}>
                                    <ConversationCard title={conversation.title} last_message={conversation.last_message} sender_name={conversation.sender_name} active={false} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row align-items-center mt-5 mb-5">
                        <div class="col-5 offset-7">
                            <div class="slecBtn text-right">
                                <Link to="/select_contact" class="Btn stBtn"> Create New Conversation </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
