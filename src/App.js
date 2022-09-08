import { Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Profile from "./components/Profile/Profile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import getUsers from "./redux/actions/getUsers";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  const [searchValue,  setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  }

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
      <Header handleSearchChange={handleSearchChange}/>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <CardList searchValue={searchValue}/>} />
        </Switch>
      </div>
    </>
  );
}

export default App;
