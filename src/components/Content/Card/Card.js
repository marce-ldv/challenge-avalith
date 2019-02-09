import React, {Component} from 'react';
import './Card.scss';
import jslogo from './jslogo.png';

export default class Card extends Component{

    constructor(){
        super();

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
            <div className="card" id="card-father">
                <img className="card-img-top" id="img-card" src={jslogo} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text" id="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam aspernatur atque aut consequatur dignissimos distinctio earum modi, nostrum, numquam quis reiciendis sit ullam voluptates. Ad eaque laborum quas!</p>
                </div>
            </div>
        );
    }

}