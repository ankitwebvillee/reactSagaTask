import React from 'react'

export default function SelectedUserCard({name="", status=""}) {
    return (
        <div>
            <div class="user_details_wrapper">
                <div class="user_img_wrapper select-user">
                    <img src="assets/images/avtar-img.png" />
                </div>
                <div class="content_wrapper">
                    <h5> {name} </h5>
                    <p> {status} </p>
                </div>
            </div>
        </div>
    )
}
