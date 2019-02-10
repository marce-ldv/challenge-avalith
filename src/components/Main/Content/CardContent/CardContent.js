import React, {Component} from 'react';
import Card from "./Card/Card";
import './CardContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';

export default class CardContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listCard: serviceFetchData.fetchAllData(),
        }
    }

    componentDidUpdate(prevProps){

        if(this.props.currentTechnology !== prevProps.currentTechnology){
            const listCard = serviceFetchData.fetchFilter(this.props.currentTechnology);
            console.log(listCard);
            this.setState({
                listCard
            });
        }

    }

    render() {
        return (
            <div className="content-cards card-columns">
                {/*<div className="header-title">

                </div>*/}
                <div>{this.props.currentTechnology}</div>
                {this.state.listCard.map((ob, i) => {
                    return (<Card key={i} currentCard={ob}/>);
                })}

            </div>
        );
    }
}

