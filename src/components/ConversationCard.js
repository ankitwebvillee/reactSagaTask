import React from 'react'

export default function ConversationCard({title="title", last_message="", sender_name="", active=false}) {
    return (
        <div>
            <div class={`user_details_wrapper ${active && ' indx-conversion'}`}>
                <div class="user_img_wrapper">
                    <img src="assets/images/avtar-img.png" />
                </div>
                <div class="content_wrapper">
                    <h5>{title}</h5>
                    <p> {sender_name} <br /> {last_message} </p>
                </div>
            </div>
        </div>
    )
}
