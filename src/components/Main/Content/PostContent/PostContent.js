import React, {Component} from 'react';
import './PostContent.scss';

export default class PostContent extends Component{

    constructor(){
        super();

        this.state = {
            postTitle: '',
            postImageUrl: '',
            postDescription: '',
        }
    }

    // https://www.chartjs.org/docs/latest/charts/doughnut.html

    render(){
        return(
            <div>
                {/*PostContent Design*/}
                <h2>helllo i'm post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur consequuntur cum distinctio dolore ducimus earum enim eum ex exercitationem, id, natus nihil omnis qui quo repellat rerum soluta tempora.</p>
            </div>
        );
    }

}