import React, {Component} from 'react';
import logo from './logo.svg';
import logoAvalith from './avalith.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <nav class="navbar navbar-light bg-dark">
                    <a class="navbar-brand" href="#">
                        <img src={logoAvalith} width="30" height="30" class="d-inline-block align-top" alt=""/>

                    </a>
                </nav>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 drawer">


                            <div className="sections">

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

                        </div>
                    </div>
                </div>

            </div>
    );
    }
    }

    export default App;
