import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import List from "./List";
// eslint-disable-next-line no-unused-vars
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: "hazel",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };

  listName = Object.keys(this.props)[0];

  render() {
    const items = this.props[this.listName];

    const cardComponent = ({ match }) => {
      const item = items.filter(({ src }) => src === match.params.src)[0];
      return <Card {...item} />;
    };

    return (
      <Switch>
        <Route exact path={`/${this.listName}/:src`} render={cardComponent} />
        <Route exact path={`/${this.listName}`}>
          <List items={items} />
        </Route>
        <Redirect to={`/${this.listName}`} />
      </Switch>
    );
  }
}

export default App;
