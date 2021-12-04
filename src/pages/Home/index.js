import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { contactAction } from '../../actions/contactActions';
import { selectedDataAction } from '../../actions/selectedDataAction';
import UserDetailCard from '../../components/UserDetailCard'

export default function Home() {

    const dispatch = useDispatch();
    const { contactsData } = useSelector((state) => state.contact);

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
                                    // <div onClick={()=> dispatch(selectedDataAction({'selectedUser': contact.id}))}>
                                        <UserDetailCard
                                            name={contact.name}
                                            status={'Hey there! I’m using Jur chat'}
                                            active={false}
                                        />
                                    // </div>
                                ))
                                }

                            </div>
                            <div class="slecBtn text-right">
                                <Link to="#" class="Btn"> Continue </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
