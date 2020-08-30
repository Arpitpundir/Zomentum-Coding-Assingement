import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import AddTicket from "./tasks/addTicket";
import UpdateTicket from "./tasks/updateTicket";
import DeleteTicket from "./tasks/deleteTicket"
import ShowUser from "./tasks/showUser"; 
import SearchTicket from "./tasks/searchTicket";
import Header from "./homePage/header"
import PagesLink from "./homePage/PageLink"
class App extends Component {
  render() {
      return (
          <div>
            <Header/>
              <Switch>
                  <Route path="/createticket" component={AddTicket} exact />
                  <Route path="/updateticket" component={UpdateTicket} exact />
                  <Route path="/deleteticket" component={DeleteTicket} exact />
                  <Route path="/showuser" component={ShowUser} exact />
                  <Route path="/searchticket" component={SearchTicket} exact />
                  <Route path="/" component={PagesLink} />
              </Switch>
          </div>
      );
  }
}

export default App;
