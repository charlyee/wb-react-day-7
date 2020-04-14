import React from 'react';
import App from '../App';

interface INavigationProps {
}

interface INavigationState {
    updated: boolean
}

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor ( props: string )
    {
        super( props );
        this.state = {updated:true}
        console.log( 'Constructor ran.' );
    }
    componentDidMount ()
    {
        // This means our component was successfully constructed and rendered.
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
    testUpdate = () => {
        // setState will trigger: componentDidUpdate() !!!
        this.setState( {updated: !this.state.updated} );
    }
    render ()
    {
        console.log( 'Render ran.' );
        return (
            <nav id="navigation">
                <h2>Website Navigation</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#" onClick={this.testUpdate}>About</a></li>
                    <li><a href="#" onClick={App.removeNavigation}>Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}
