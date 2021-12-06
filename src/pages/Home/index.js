import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactAction } from '../../actions/contactActions';
import { selectedDataAction } from '../../actions/selectedDataAction';
import UserDetailCard from '../../components/UserDetailCard';


export default function Home(props) {

    const dispatch = useDispatch();
    const { contactsData } = useSelector((state) => state.contact);
    const { selectedUser } = useSelector((state) => state.selectedData);

    useEffect(() => {
        dispatch(contactAction())
    }, [])

    return (
        <>
            <section class="main_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-8  offset-lg-3 offset-md-2">
                            <div class="heading_wrapper text-center">
                                <h3> Let us know who you are </h3>
                            </div>
                            <div class="info_wrapper">
                                {contactsData?.map((contact) => (
                                    <div onClick={() => dispatch(selectedDataAction({ selectedUser: contact }))}>
                                        <UserDetailCard
                                            name={contact.name}
                                            status={'Hey there! I’m using Jur chat'}
                                            active={selectedUser?.id === contact?.id}
                                        />
                                    </div>
                                ))
                                }
                            </div>
                            {selectedUser &&
                                <div class="slecBtn text-right">
                                    <Link to="/your_conversation" class="Btn"> Continue </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
