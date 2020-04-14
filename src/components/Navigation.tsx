import React from 'react';

export default class Navigation extends React.Component {
    constructor ( props: string )
    {
        super( props );
    }
    render ()
    {
        return (
            <nav>
                <h2>Website Navigation</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}