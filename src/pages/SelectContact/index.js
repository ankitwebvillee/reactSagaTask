import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { contactAction } from '../../actions/contactActions';
import { selectedDataAction } from '../../actions/selectedDataAction';
import UserDetailCard from '../../components/UserDetailCard'

export default function SelectContact() {

    const dispatch = useDispatch();
    const { contactsData } = useSelector((state) => state.contact);
    const { chatUsers } = useSelector((state) => state.selectedData);

    useEffect(() => {
        dispatch(contactAction())
    }, [])


    return (
        <div>
            <section class="main_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-8  offset-lg-3 offset-md-2">
                            <div class="headline_wrapper text-center">
                                <h3> Welcome George! </h3>
                                <p> You don’t have any conversations </p>
                            </div>
                            <div class="heading_wrapper text-center">
                                <h3> Select contacts to message </h3>
                            </div>
                            <div class="info_wrapper">
                                {contactsData?.map((contact) => (
                                    <div onClick={() => dispatch(selectedDataAction({ chatUsers: (chatUsers ? (chatUsers?.includes(contact) ? chatUsers?.filter((item) => item.id !== contact.id) : [...chatUsers, contact]) : [contact]) }))}>
                                        <UserDetailCard
                                            name={contact.name}
                                            status={'Hey there! I’m using Jur chat'}
                                            active={chatUsers?.includes(contact)}
                                        />
                                    </div>
                                ))
                                }
                            </div>
                            {chatUsers?.length ?
                                <div class="slecBtn text-right">
                                    <Link to="/type_title" class="Btn"> Continue </Link>
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
