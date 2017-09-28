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
            <div id="main" className="shadow">
                <div id="massiveGoddamnLogo" className="shadow">
                    <h3 id="homeLogo">TABBR LOGO HERE</h3>
                </div>
            </div>
             <div id="sub" className="shadow">
                 <div className="homeOption shadow" id="op1"><h3>Tabs for Guitar</h3></div>
                 <div className="homeOption shadow" id="op2"><h3>tabs for Bass</h3></div>
                 <div className="homeOption shadow" id="op3"><h3>Music Theory</h3></div>
                 <div className="homeOption shadow" id="op4"><h3>Videos</h3></div>
                 <div className="homeOption shadow" id="op5"><h3>News</h3></div>
                 <div className="homeOption shadow" id="op6"><h3>Other random page</h3></div>
             </div>
         </div>
        )
    }
}