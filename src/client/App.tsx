import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';
import Main from './Main';
import AddChirp from './AddChirp';

const App: React.SFC = props => {
  return (
    <Router>
      <NavBar />
	  <Switch>
		<Route exact path="/" component={Main}/>
		<Route path="/add" component={AddChirp}/>
	  </Switch>
    </Router>
  );
};

export default App;
