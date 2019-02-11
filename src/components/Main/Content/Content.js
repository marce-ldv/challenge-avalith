import React, { Component } from 'react';
import './Content.scss';
import CardContent from "./CardContent/CardContent";
import PostContent from "./PostContent/PostContent";
import { Switch, Route } from 'react-router-dom';

export default class Content extends Component{

    render(){
        return(
            <div className="content-page">
                <h2>Languages & technologies</h2>

                <Switch>
                    <Route exact path='/' render={ (props) => (
                        <CardContent
                            currentTechnology={this.props.currentTechnology}
                            handleChangeSearchState={this.props.handleChangeSearchState}
                            searchData={this.props.searchData}
                            {...props}
                        />
                    )}/>
                    <Route path='/post/:id' render={ (props) => (
                        <PostContent
                            {...props}
                        />
                    )}/>
                </Switch>

            </div>
        );
    }

}