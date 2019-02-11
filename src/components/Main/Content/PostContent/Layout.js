import React, { Component } from 'react';
const Chart = require('chart.js');

export default class Layout extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const node = this.node;

        let myChart = new Chart(node, {
            type: 'bar',
            data: {
                labels: ['yellow','blue','red'],
                dataset[
                    {
                        label: 'label here',
                        data: [40, 10, 50],
                        backdropColor: {
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)"
                        }
                    }
                ]
            }
        });
    }

    render(){
        return(
            <>
                <canvas
                    style={{width: 800, height: 300}}
                    ref={node => (this.node = node)}
                />
            </>
        );
    }

}