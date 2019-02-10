import React, {Component} from 'react';
import './Main.scss';
import Navbar from "./Navbar/Navbar";
import Drawer from "./Drawer/Drawer";
import Content from "./Content/Content";

export default class Main extends Component {

    constructor() {
        super();

        this.state = {
            cardTechnology: 'Frontend'
        };

        this.toggleCardTechnology = this.toggleCardTechnology.bind(this);
    }

    toggleCardTechnology(cardTechnology){
        this.setState({
            cardTechnology //ES6 <--    ES5 -> cardTechnology: cardTechnology
        });
    }

    render() {
        return (
            <div className="App">

                <Navbar/>

                <div className="container-fluid">
                    <Drawer toggleCardTechnology={this.toggleCardTechnology}/>
                    <Content currentTechnology={this.state.cardTechnology}/>
                </div>

            </div>
        );
    }
}

