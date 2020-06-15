import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import List from "./List";
import Card from "./Card";
import NavBar from "./NavBar";
import data from "./data.json";

class App extends React.Component {
  render() {
    const [listName] = Object.keys(data);

    return (
      <>
        <header>
          <NavBar {...{ listName }} />
        </header>
        <main className='container'>
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
        </main>
      </>
    );
  }
}

export default App;
