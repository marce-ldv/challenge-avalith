import React, {Component} from 'react';
import './Drawer.scss';
import logoAvalith from '../Drawer/avalith.png';

export default class Drawer extends Component{

    constructor(){
        super();

        this.state = {
            hideClass: '',
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
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

    render(){
        return(
            <div className={this.state.hideClass + " drawer"}>
                <input type="image" src={logoAvalith} onClick={this.toggleDrawer} className="logo-drawer" />

                <div className="list-unstyled drawer-data">
                    <ul>
                        <li>MARCELO LUDOVINO</li>
                        <li>DNI 40.344.482</li>
                        <li>21 YEARS OLD</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <input className="form-control" type="text" placeholder="Search in cards"
                           aria-label="Search"/>
                </div>

                <p className="mt-4">Filter by</p>

                <div className="list-group drawer-list">
                    <label className="radio-inline">
                        <input type="radio" name="optradio" checked/>Frontend
                    </label>
                </div>

                <div className="list-group drawer-list">
                    <label className="radio-inline">
                        <input type="radio" name="optradio" checked/>Backend
                    </label>
                </div>
            </div>
        );
    }

}