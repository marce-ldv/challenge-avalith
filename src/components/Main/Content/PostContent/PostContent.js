import React, {Component} from 'react';
import './PostContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';

export default class PostContent extends Component{

    constructor(props){
        super(props);

        let serviceDataF = serviceFetchData.fetchAllData();
        let cardObj = serviceDataF.find( (elem) => {
            return(elem.cardId === props.match.params.id);
        });

        this.state = {
            serviceData: cardObj,
        }
    }

    // https://www.chartjs.org/docs/latest/charts/doughnut.html

    render(){
        return(
            <div>
                <h2>helllo i'm post</h2>
                {/*<h2>{this.state.serviceData.cardPost.postTitle}</h2>*/}
            </div>
        );
    }

}