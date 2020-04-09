import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./views/Main";
import AddChirp from "./views/AddChirp";
import EditChirp from "./views/EditChirp";

const App: React.SFC = props => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        }/>
        <Route path="/add" component={AddChirp} />
        <Route path="/:key/admin" component={EditChirp} />
        }/>
      </Switch>
    </Router>
  );
};

export default App;
