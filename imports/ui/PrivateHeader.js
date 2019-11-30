import React, { Component } from 'react'
import { stringify } from 'querystring';


const PrivateHeader = (props) => {
    return (
        <div class="header header--private">
            <div class="header__content">
                <h1 class="header__title">{props.title}</h1>
                <button class="button--link-text" onClick={() => {
                    Accounts.logout();
                }}>Logout</button>
            </div>
        </div>
    )
}

export default PrivateHeader;
