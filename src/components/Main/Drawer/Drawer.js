import React, {Component} from 'react';
import './Drawer.scss';
import logoAvalith from './avalith.png';

export default class Drawer extends Component{

    constructor(props){
        super(props);

        this.state = {
            hideClass: '',
            selectedOption: '',
            searchData: '',
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleDrawer(){

        if(this.state.hideClass === 'hide-drawer'){
            this.setState({
                hideClass: '',
            });
        }else{
            this.setState({
                hideClass: 'hide-drawer',
            });
        }

    }
    // https://react.tips/radio-buttons-in-react-16/
    /*Va a esperar setear primero el estado, y una vez seteado va a continuar el flujo de la app*/
    async handleOptionChange(e){
        /*
        this.setSate(state => {}, () => {
            this.setState({
                selectedOption: e.target.value,
            });
        });
        */

        await this.setState({
            selectedOption: e.target.value,
        });
        this.props.toggleCardTechnology(this.state.selectedOption);
    }

    handleChange(e){
        let searchData = e.target.value;
        this.props.handleChangeSearchState(searchData);
    }

    render(){
        return(
            <div className={this.state.hideClass + " drawer"}>
                <input type="image" src={logoAvalith} onClick={this.toggleDrawer} className="logo-drawer" alt="logo avalith"/>

                <div className="drawer-data">
                    <ul className="drawer-li">
                        <li>MARCELO LUDOVINO</li>
                        <li>DNI 40.344.482</li>
                        <li>21 YEARS OLD</li>
                    </ul>
                </div>

                <div className="search-custom">
                    <input className="form-control"
                           type="text"
                           placeholder="Search in cards"
                           aria-label="Search"
                           onChange={this.handleChange}/>
                </div>

                <p className="mt-4">Filter by</p>

                <div className="list-group drawer-list">
                    <label className="radio-inline">
                        <input
                            type="radio"
                            name="optradio"
                            value="Frontend"
                            checked={this.state.selectedOption === 'Frontend'}
                            onChange={this.handleOptionChange}
                        />Frontend
                    </label>
                </div>

                <div className="list-group drawer-list">
                    <label className="radio-inline">
                        <input
                            type="radio"
                            name="optradio"
                            value="Backend"
                            checked={this.state.selectedOption === 'Backend'}
                            onChange={this.handleOptionChange}
                        />Backend
                    </label>
                </div>
            </div>
        );
    }

}