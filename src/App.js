import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {

  const [{user}, dispatch] = useStateValue();

  // useEffect is very powerful
  //Piece of code which runs based on a given condition
    useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          // the user is logged in
          dispatch({
            type: "set_user",
            user: authUser
          })
        }
        else{
          // the user is logged out
          dispatch({
            type: "set_user",
            user: null
          })
        }
      });

      return () => {
        //Any cleanup operations go in here
        unsubscribe();
      }
    }, []);

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
                    
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
