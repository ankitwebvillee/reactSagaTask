import React from 'react'

export default function UserDetailCard({name="", status="", active=false}) {
    return (
        <>
            <div class="user_details_wrapper">
                <div class={`user_img_wrapper ${active && ' select-user'}`}>
                    <img src="/assets/images/avtar-img.png" alt="user-avatar" />
                </div>
                <div class="content_wrapper">
                    <h5> {name} </h5>
                    <p> {status} </p>
                </div>
            </div>
        </>
    )
}
