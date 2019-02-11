import React, {Component} from 'react';
import './PostContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';
//var DoughnutChart = require("react-chartjs").Doughnut; //ES5
//import { Doughnut } from 'react-chart.js'; //ES6

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
                <div className="jumbotron img-jumbotron">
                    {/*<img src={this.state.serviceData.cardPost.postImageUrl} alt="dev"/>*/}
                    <img src="https://dummyimage.com/1366x768/000/fff" alt="dev"/>
                </div>
                {/*<h2>{this.state.serviceData.cardPost.postTitle}</h2>*/}
                {/*Pie Chart*/}
                {/*<canvas id="pieChart" width="400" height="400"></canvas>*/}

            </div>
        );
    }

}