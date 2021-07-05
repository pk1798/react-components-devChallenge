import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="navbar">
        <h1> <span>Dev</span>Challenges.io</h1>
        <ul>
         <li><Link exact to="/buttons">Buttons</Link></li>
         <li><Link exact to="/inputs">Inputs</Link></li>
        </ul>
      </div>
      <div className="main">
        <Switch>
        <Route exact path='/buttons'>
          <Buttons/>
        </Route>
        <Route exact path='/inputs'>
        <Inputs/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
