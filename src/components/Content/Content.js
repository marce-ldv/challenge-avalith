import React, {Component} from 'react';
import Card from "./Card/Card";
import './Content.scss';
import jsonParsed from '../../json'

export default class Content extends Component{

    constructor(){
        super();

        this.state = {
            obj: jsonParsed,
        }
    }

    render(){
        return(
            <div className="content-page">
                <h2>Languages & technologies</h2>
                <div className="content-cards card-columns">
                    {this.state.obj.map((ob,i) => {
                        return (<Card key={i} currentCard={ob}/>);
                    })}

                </div>
            </div>
        );
    }

}