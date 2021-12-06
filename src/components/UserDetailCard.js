import React from 'react'

export default function UserDetailCard({name="", status="", active=false}) {
    return (
        <>
            <div className="user_details_wrapper">
                <div className={`user_img_wrapper ${active && ' select-user'}`}>
                    <img src="/assets/images/avtar-img.png" alt="avatar" />
                </div>
                <div className="content_wrapper">
                    <h5> {name} </h5>
                    <p> {status} </p>
                </div>
            </div>
        </>
    )
}
