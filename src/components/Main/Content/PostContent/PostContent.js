import React, {Component} from 'react';
import './PostContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';
// const DoughnutChart = require("react-chartjs").Doughnut; //ES5
// import { Doughnut } from 'react-chart.js'; //ES6
// import { Chart } from 'chart.js';
const Chart = require('chart.js');

export default class PostContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            serviceData: [],
            data: [10, 20, 30],
        };

        this.makeChart = this.makeChart.bind(this);
        this.linkToDashboard = this.linkToDashboard(this);
    }

    componentDidMount(){
        let serviceData = serviceFetchData.fetchAllData();
        let cardObj = serviceData.find(elem => elem.cardId === this.props.match.params.id);

        this.setState({
            serviceData,
        })
    }

    // This component never will rendered
    componentWillUnmount(){

    }

    makeChart() {
        this.setState({ data: [10, 20, 30] });
        let ctx = document.getElementById("chart");
        let myChart = new Chart(ctx, {
            type: 'pie',
            data: [10, 20, 30],
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
        //console.log(myChart.data);
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
                        <img src="https://dummyimage.com/1366x768/000/fff" alt="dev"/>
                    </div>
                </div>

                <div className="container text-center desc-cont-post">
                    <div className="row">
                        <div className="col-sm-8 description">
                            JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed,
                            prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and
                            CSS, JavaScript is one of the three core technologies of World Wide Web content production.
                            It is used to make webpages interactive and provide online programs, including video games.
                            The majority of websites employ it, and all modern web browsers support it without the need
                            for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines
                            represent a different implementation of JavaScript, all based on the ECMAScript
                            specification, with some engines not supporting the spec fully, and with many engines
                            supporting additional features beyond ECMA. As a multi-paradigm language, JavaScript
                            supports event-driven, functional, and imperative (including object-oriented and
                            prototype-based) programming styles. It has an API for working with text, arrays, dates,
                            regular expressions, and basic manipulation of the DOM, but the language itself does not
                            include any I/O, such as networking, storage, or graphics facilities, relying for these upon
                            the host environment in which it is embedded. Initially only implemented client-side in web
                            browsers, JavaScript engines are now embedded in many other types of host software,
                            including server-side in web servers and databases, and in non-web programs such as word
                            processors and PDF software, and in runtime environments that make JavaScript available for
                            writing mobile and desktop applications, including desktop widgets. Although there are
                            strong outward similarities between JavaScript and Java, including language name, syntax,
                            and respective standard libraries, the two languages are distinct and differ greatly in
                            design; JavaScript was influenced by programming languages such as Self and Scheme.
                        </div>
                        <div className="col-sm-4 graphic">
                            <h4>JavaScript Development</h4>
                            <canvas id="chart">
                                {this.makeChart}
                            </canvas>
                        </div>
                    </div>
                </div>
                {/*<h2>{this.state.serviceData.cardPost.postTitle}</h2>*/}
                {/*Pie Chart*/}
                {/*<canvas id="pieChart" width="400" height="400"></canvas>*/}

                {/*<button
                    className="btn btn-primary button-back"
                    onClick={this.linkToDashboard}
                >Go back</button>*/}

            </div>
        );
    }

}