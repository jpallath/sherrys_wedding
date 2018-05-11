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
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/rsvp" component={RSVP} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/bridalparty" component={BridalParty} />
            <Route exact path="/festivities" component={Festivities} />
            <Route exact path="/story" component={Story} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
