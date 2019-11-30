import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div class='boxed-view'>
            <div class="boxed-view__box">
                            <h2>404 PAGE NOT FOUND</h2>
                                <p>Hmmmm, we cannot find the page you're looking for.</p>
                                <Link  to="/" className="button button--link">Go back to home</Link>
            </div>
        </div>
    )
};
