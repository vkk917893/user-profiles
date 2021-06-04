import { Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Profile from "./components/Profile/Profile";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import getUsers from "./redux/actions/getUsers";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        dispatch(getUsers(response.data));
      },
      (error) => {
        alert("something went wrong");
      }
    );
  }, [dispatch]);
  
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/" exact component={CardList} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
}

export default App;
