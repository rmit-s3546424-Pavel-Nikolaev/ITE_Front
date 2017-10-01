import React from 'react';

export default class Home extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <section id="hero">
                    <img id="splash-image" />
                    <div id="makeImageDarkerSoThatWeCanReadTheTextBetter"></div>
                    <h1>Transform your sheet music into tabs</h1>
                    <h3>Tabby takes your existing music notation files and creates easy to read tabs, making it so you can focus on the fun.</h3>
                    <button className="button">Try Tabby For Free</button>
                </section>

                <section id="showcase">
                    <div id="demo">
                        <img id="demo-image" />
                        <div id="wip-banner">We’re working on this right now!</div>
                    </div>
                    <button className="button">Create Some Tabs</button>
                </section>
            </div>
        )
    }
}