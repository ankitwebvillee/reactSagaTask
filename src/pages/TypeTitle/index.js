import React from 'react'

export default function TypeTitle() {
    return (
        <>
            <section class="main_wrapper">

            <div class="container custome-container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="col-sm-12">
                            <div class="headline_wrapper text-center">
                                <h3> Welcome George! </h3>
                                <p> Give title to start a new conversation with 2 participants </p>
                            </div>

                        </div>
                        <div class="usr_seection">
                            <div class="user_section_details">
                                <div class="user_details_wrapper">
                                    <div class="user_img_wrapper select-user">
                                        <img src="assets/images/avtar-img.png" />
                                    </div>
                                    <div class="content_wrapper">
                                        <h5> Amanda Nano </h5>
                                        <p> Hey there! I’m using Jur chat </p>
                                    </div>
                                </div>
                                <div class="user_details_wrapper">
                                    <div class="user_img_wrapper select-user">
                                        <img src="assets/images/avtar-img.png" />
                                    </div>
                                    <div class="content_wrapper">
                                        <h5> Amanda Nano </h5>
                                        <p> Hey there! I’m using Jur chat </p>
                                    </div>
                                </div>
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
                                    <input type="search" class="userinput" placeholder=" Furniture Shopping TogetherI " name="name" />

                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="slecBtn text-right">
                                    <a href="#" class="Btn stBtn"> Start Conversation </a>
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
