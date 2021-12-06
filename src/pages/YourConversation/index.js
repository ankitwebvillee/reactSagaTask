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
    }, [])

    return (
        <div>
            <section className="main_wrapper">

                <div className="container custome-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="headline_wrapper">
                                <h3> Your Conversations </h3>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            {conversationData?.map((conversation, index) => (
                                <div onClick={() => {dispatch(selectedDataAction({ conversationSelectedData: conversation })); navigate('/conversation') }}>
                                    <ConversationCard title={conversation.title} last_message={conversation.last_message} sender_name={conversation.sender_name} active={false} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-5 offset-7">
                            <div className="slecBtn text-right">
                                <Link to="/select_contact" className="Btn stBtn"> Create New Conversation </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
