
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
import Editprofile from './components/Editprofile/Editprofile';

// this the main app
function App() {
  
  const store = useSelector((state) => state.authslicered)

  return (
    <Router>
       <div className="App">
       <Switch>
          <Route exact path="/editprofile">
            <Editprofile/>
          </Route>
          <Route path="/redir">
            <Redir/>
          </Route>
          <Route exact path="/profile">
            <Profile store={store} />
          </Route>
          <Route exact path="/signin">
            <Signin auth={store.auth}/>
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
