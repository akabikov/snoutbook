import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import List from "./List";
import Card from "./Card";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  render() {
    const [listName] = Object.keys(data);

    return (
      <Switch>
        <Route
          exact
          path={`/${listName}/:src`}
          render={({ match }) => (
            <Card {...{ listName, src: match.params.src }} />
          )}
        />
        <Route
          exact
          path={`/${listName}`}
          render={() => <List {...{ listName }} />}
        />
        <Redirect to={`/${listName}`} />
      </Switch>
    );
  }
}

export default App;
