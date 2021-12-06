import React from 'react'

export default function ChatCard({sender_name="", content="", active=false}) {
    return (
        <div>
            <div class={`user_details_wrapper ${active && 'select-conversion'}`}>
                <div class="user_img_wrapper">
                    <img src="assets/images/avtar-img.png" />
                </div>
                <div class="content_wrapper">
                    <h5> {content} </h5>
                    <p> {sender_name} </p>
                </div>
            </div>
        </div>
    )
}
