import React from 'react';

export default class Home extends React.Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){

        return(
            <div>
                <section id="hero">
                    <h1>Transform your sheet music into tabs</h1>
                    <h3>Tabby takes your existing music notation files and creates easy to read tabs, making it so you can focus on the fun.</h3>
                    <button className="button">Try Tabby For Free</button>
                </section>

                <section id="showcase">
                    <div id="demo">
                    <div id="wip-banner">We’re working on this right now!</div>
                    </div>
                    <button className="button">Create Some Tabs</button>
                </section>
            </div>
        )
    }
}