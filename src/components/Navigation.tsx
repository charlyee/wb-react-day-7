import React from 'react';

export default class Navigation extends React.Component {
    constructor ( props: string )
    {
        super( props );
        console.log( 'Constructor ran.' );
    }
    componentDidMount ()
    {
        console.log( '"componentDidMount()" ran.' );
    }
    componentDidUpdate ()
    {
        console.log( '"componentDidUpdate()" ran.' );
    }
    componentWillUnmount ()
    {
        console.log( '"componentWillUnmount()" ran.' );
    }
    render ()
    {
        console.log( 'Render ran.' );
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