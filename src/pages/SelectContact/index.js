import React from 'react'
import { Link } from 'react-router-dom'
import UserDetailCard from '../../components/UserDetailCard'

export default function SelectContact() {
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
                                <UserDetailCard
                                    name={'Amanda Nano'}
                                    status={'Hey there! I’m using Jur chat'}
                                />
                            </div>
                            <div class="slecBtn text-right">
                                <Link to="#" class="Btn"> Continue </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
