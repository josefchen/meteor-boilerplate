import React, { Component } from 'react';

import PrivateHeader from './PrivateHeader';


export default () => {
    return (
        <div>
            <PrivateHeader title='Dashboard'/>
            <div class="content">
            Dashboard page content
            </div>
        </div>

    )
}
