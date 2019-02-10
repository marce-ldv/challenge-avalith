import React, {Component} from 'react';
import './Card.scss';
import jslogo from './jslogo.png';

export default class Card extends Component{

    constructor(props){
        super(props);

        this.state = {
            cardTitle: '',
            cardDescription: '',
            cardTechnology: '',
            cardImageUrl: '',
            cardGraph: {
                
            }
        }
    }

    render(){
        return(
            <div className="card">
                    <img className="card-img-top img-card" src={this.props.currentCard.cardImageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text card-content">
                        {/*this.props.currentCard ? this.props.currentCard.cardDescription : '' */}
                        {this.props.currentCard.cardDescription}
                    </p>
                </div>
            </div>
        );
    }

}