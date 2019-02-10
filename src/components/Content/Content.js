import React, {Component} from 'react';
import './Content.scss';
import CardContent from "./CardContent/CardContent";
//import PostContent from "./PostContent/PostContent";

export default class Content extends Component{

    render(){
        return(
            <div className="content-page">
                <h2>Languages & technologies</h2>
                <CardContent/>
                {/*<PostContent/>*/}
            </div>
        );
    }

}