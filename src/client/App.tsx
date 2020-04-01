import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';
import Main from './Main';
import AddChirp from './AddChirp';
import EditChirp from './EditChirp';

const App: React.SFC = props => {
  return (
    <Router>
      <NavBar />
	  <Switch>
		<Route exact path="/" component={Main}/>
		<Route path="/add" component={AddChirp}/>
    <Route path="/:username/admin" component={EditChirp}/>
	  </Switch>
    </Router>
  );
};

export default App;
