import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
  
    render(){
      
     return (       
        <BrowserRouter >
            <Switch>
                <Route path="/user" component={User}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
     )  ;
    }

}

render(<App />,window.document.getElementById("app"));