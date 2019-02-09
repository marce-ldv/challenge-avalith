import React, {Component} from 'react';
import Card from "./Card/Card";

export default class Content extends Component{

    render(){
        return(
            <div className="content-page">
                <h2>Languages & technologies</h2>
                <div className="">
                    <Card/>
                </div>
            </div>
        );
    }

}