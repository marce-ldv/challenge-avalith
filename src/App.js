import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Drawer from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";

{/*import Drawer from './components/Drawer';*/
}
{/*import Navbar from './components/Navbar';*/
}

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">

                <Navbar/>

                <div className="container-fluid">
                    <Drawer/>
                    <Content/>
                </div>

            </div>
        );
    }
}

export default App;
