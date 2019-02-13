import React, {Component} from 'react';
import './PostContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';
// const DoughnutChart = require("react-chartjs").Doughnut; //ES5
// import { Doughnut } from 'react-chart.js'; //ES6
// import { Chart } from 'chart.js';
import Chart from'chart.js';

export default class PostContent extends Component {

    constructor(props) {
        super(props);
        let obj = serviceFetchData.fetchById(this.props.match.params.id);

        this.state = {
            obj,
        };

        this.makeChart = this.makeChart.bind(this);
        this.linkToDashboard = this.linkToDashboard(this);
    }

    componentDidMount(){


        this.makeChart();
    }

    // This component never will rendered
    componentWillUnmount(){


    }

    makeChart() {
        let ctx = document.getElementById("chart");
        let myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: this.state.obj.cardGraph.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }],
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ]
            },
            options: {
                legend: {
                    display: false,
                }
            }
        });
    }

    linkToDashboard(){
        //alert('Not implement yet..')
        //this.props.history.push('/');
    }

    // https://www.chartjs.org/docs/latest/charts/doughnut.html

    render() {
        return (
            <div>
                <div className="container-fluid cont-jumbotron">
                    {/*<img src={this.state.serviceData.cardPost.postImageUrl} alt="dev"/>*/}
                    <div className="img-jumbotron">
                        {/*<button
                            className="btn btn-primary button-back"
                            onClick={this.linkToDashboard}
                        >Go back</button>*/}
                        <img src={this.state.obj.cardPost.postImageUrl} alt="dev"/>
                    </div>
                </div>

                <div className="container text-center desc-cont-post">
                    <div className="row">
                        <div className="col-sm-8 description">
                            {this.state.obj.cardPost.postDescription}
                        </div>
                        <div className="col-sm-4 graphic">
                            <h4>{this.state.obj.cardTitle} Development</h4>
                            <canvas
                                className="chart"
                                id="chart"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="btn btn-primary button-back"
                    onClick={this.linkToDashboard}
                >Go back</button>

            </div>
        );
    }

}