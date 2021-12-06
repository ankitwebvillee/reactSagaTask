import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendConversationAction } from '../../actions/conversationActions';
import { selectedDataAction } from '../../actions/selectedDataAction';
import SelectedUserCard from '../../components/SelectedUserCard'
import { useNavigate } from 'react-router';

export default function TypeTitle() {

    const { chatUsers, selectedUser, chatTitle } = useSelector((state) => state.selectedData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <section className="main_wrapper">

                <div className="container custome-container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="col-sm-12">
                                <div className="headline_wrapper text-center">
                                    <h3> Welcome {selectedUser?.name}! </h3>
                                    <p> Give title to start a new conversation with {chatUsers?.length} participants </p>
                                </div>

                            </div>
                            <div className="usr_seection">
                                <div className="user_section_details">
                                    {chatUsers?.map((user) => (
                                        <SelectedUserCard name={user.name} status={"Hey there! I’m using Jur chat"} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headlie_arow">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row select-section-wrapper">
                        <div className="col-lg-8  col-md-10 offset-lg-2 offset-md-1">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="user-input-section">
                                        <input type="search" className="userinput" placeholder=" Furniture Shopping TogetherI " name="name" onChange={(e) => dispatch(selectedDataAction({ chatTitle: e.target.value }))} />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="slecBtn text-right" onClick={() => dispatch(
                                        sendConversationAction({
                                            user_id: selectedUser?.id,
                                            title: chatTitle,
                                            contact_ids: chatUsers.map(data => data.id),
                                            navigate: navigate
                                        }),
                                    )}>
                                        <Link to="#" className="Btn stBtn"> Start Conversation </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
