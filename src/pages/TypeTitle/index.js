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
            <section class="main_wrapper">

                <div class="container custome-container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="col-sm-12">
                                <div class="headline_wrapper text-center">
                                    <h3> Welcome {selectedUser?.name}! </h3>
                                    <p> Give title to start a new conversation with {chatUsers?.length} participants </p>
                                </div>

                            </div>
                            <div class="usr_seection">
                                <div class="user_section_details">
                                    {chatUsers?.map((user) => (
                                        <SelectedUserCard name={user.name} status={"Hey there! I’m using Jur chat"} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="headlie_arow">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row select-section-wrapper">
                        <div class="col-lg-8  col-md-10 offset-lg-2 offset-md-1">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <div class="user-input-section">
                                        <input type="search" class="userinput" placeholder=" Furniture Shopping TogetherI " name="name" onChange={(e) => dispatch(selectedDataAction({ chatTitle: e.target.value }))} />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="slecBtn text-right" onClick={() => dispatch(
                                        sendConversationAction({
                                            user_id: selectedUser?.id,
                                            title: chatTitle,
                                            contact_ids: chatUsers.map(data => data.id),
                                            navigate: navigate
                                        }),
                                    )}>
                                        <Link to="#" class="Btn stBtn"> Start Conversation </Link>
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
