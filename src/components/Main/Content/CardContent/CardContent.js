import React, {Component} from 'react';
import jsonParsed from "../../../../database/json";
import Card from "./Card/Card";
import './CardContent.scss';

export default class CardContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            obj: jsonParsed,
        }
    }

    render() {
        return (
            <div className="content-cards card-columns">
                <div className="header-title">

                </div>

                {this.state.obj.map((ob, i) => {
                    return (<Card key={i} currentCard={ob}/>);
                })}

            </div>
        );
    }
}

