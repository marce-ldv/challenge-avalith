import React, {Component} from 'react';
import Card from "./CardContent/Card/Card";
import './Content.scss';
import jsonParsed from '../../json'
import CardContent from "./CardContent/CardContent";
import PostContent from "./PostContent/PostContent";

export default class Content extends Component{

    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div className="content-page">
                <h2>Languages & technologies</h2>
                <CardContent/>
                {/*<PostContent/>*/}
            </div>
        );
    }

}