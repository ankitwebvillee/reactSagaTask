import React from 'react'

export default function ChatCard({sender_name="", content="", active=false}) {
    return (
        <div>
            <div className={`user_details_wrapper ${active && 'select-conversion'}`}>
                <div className="user_img_wrapper">
                    <img src="assets/images/avtar-img.png" alt="avatar" />
                </div>
                <div className="content_wrapper">
                    <h5> {content} </h5>
                    <p> {sender_name} </p>
                </div>
            </div>
        </div>
    )
}
