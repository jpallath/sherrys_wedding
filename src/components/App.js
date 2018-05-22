import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/home";
import Gallery from "../containers/gallery";
import BridalParty from "../containers/bridalparty";
import Festivities from "../containers/festivities";
import Story from "../containers/addtoourstory";
import RSVP from "../containers/rsvp";
import NavBar from "../containers/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />
            <Route exact path="/" render={props => <Home />} />
            <Route exact path="/rsvp" render={props => <RSVP />} />
            <Route exact path="/gallery" render={props => <Gallery />} />
            <Route
              exact
              path="/bridalparty"
              render={props => <BridalParty />}
            />
            <Route
              exact
              path="/festivities"
              render={props => <Festivities />}
            />
            <Route exact path="/story" render={props => <Story />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
