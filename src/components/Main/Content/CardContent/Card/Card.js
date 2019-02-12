import React, {Component} from 'react';
import './Card.scss';

export default class Card extends Component{

    constructor(props){
        super(props);

        this.linkToPost = this.linkToPost.bind(this);
    }

    linkToPost(){
        this.props.history.push('/post/'+this.props.currentCard.cardId);
    }

    render(){
        return(
            <div className="card animated zoomIn">
                    <img className="card-img-top img-card" onClick={this.linkToPost} src={this.props.currentCard.cardImageUrl} alt="Card"/>
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