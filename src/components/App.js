import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import BridalParty from "./bridalparty";
import Festivities from "./festivities";
import Registry from "./registry";
import Travel from "./travel";
import Story from "./addtoourstory";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/bridalparty" component={BridalParty} />
            <Route exact path="/festivities" component={Festivities} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/travel" component={Travel} />
            <Route exact path="/story" component={Story} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
