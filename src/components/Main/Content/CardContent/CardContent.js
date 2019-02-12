import React, {Component} from 'react';
import Card from "./Card/Card";
import './CardContent.scss';
import serviceFetchData from '../../../../services/serviceFetchData';
import 'animate.css';

export default class CardContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listCard: serviceFetchData.fetchAllData(),
            listCardFilteredText: serviceFetchData.fetchAllData(),
        }
    }

    filterByText(arrayToSearch, textEntry) {
        return arrayToSearch.filter(ob => {
            return (
                ob.cardTitle.includes(textEntry) || ob.cardDescription.includes(textEntry)
            );
        });

    }

    componentDidUpdate(prevProps) {

        if (this.props.currentTechnology !== prevProps.currentTechnology) {

            let listCard = serviceFetchData.fetchFilter(this.props.currentTechnology);
            let arrayFiltered = this.filterByText(listCard, this.props.searchData);

            this.setState({
                listCard: listCard,
                listCardFilteredText: arrayFiltered,
            });
        }

        if (this.props.searchData !== prevProps.searchData) {
            let arrayFiltered = this.filterByText(this.state.listCard, this.props.searchData);
            //console.log(arrayFiltered);

            this.setState({
                listCardFilteredText: arrayFiltered,
            });
        }

        //let textSearched = this.filterByText;
        //console.log(`adsdasads ${textSearched}  asddasdas`);
    }

    render() {
        return (
            <div className="card-content-container">
                <div className="header-title">
                    <h2 className="animated fadeInRight delay-1s">LANGUAGES AND TECHNOLOGIES</h2>
                </div>
                <div className="content-cards card-columns flex-container">


                    {this.state.listCardFilteredText.map((ob, i) => {
                        return (<Card
                            key={i}
                            currentCard={ob}
                            {...this.props}
                        />);
                    })}

                </div>
            </div>
        );
    }
}

