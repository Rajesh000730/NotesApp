
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from './components/Signin/Signin';
import SIgnup from './components/Signup/SIgnup';
import Profile from './components/profile/Profile';
import Redir from './components/Redirect/Redir';
import { useSelector } from 'react-redux';


function App() {
  const auth = useSelector((state) => state.authslicered.auth)

  return (
    <Router>
       <div className="App">
       <Switch>
          <Route path="/redir">
            <Redir/>
          </Route>
          <Route exact path="/profile">
            <Profile auth={auth}/>
          </Route>
          <Route exact path="/signin">
            <Signin auth={auth}/>
          </Route>
          <Route path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
   
  );
}

export default App;
