
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from './components/Signin/Signin';
import SIgnup from './components/Signup/SIgnup';
import Profile from './components/Maincontent/profile/Profile';

function App() {
  const user = 'true'
  const isauthenticated = 'true'
  return (
    <Router>
       <div className="App">
       <Switch>
          <Route path="/profile">
            <Profile isauthenticated={isauthenticated}/>
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
        </Switch>
    </div>
    </Router>
   
  );
}

export default App;
