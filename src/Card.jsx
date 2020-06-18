import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import data from "./data.json";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { listName, src, history } = this.props;

    const item = data[listName].find((el) => el.src === src);

    if (!item) return <Redirect to={`/${listName}`} />;

    const { name, descr, facts } = item;
    const factsList = facts.map((fact, i) => (
      <li className='list-group-item' key={i}>
        {fact}
      </li>
    ));

    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='card'>
            <img
              className='card-img-top'
              src={`../img/${src}.jpg`}
              alt={name}
            />
            <div className='card-body'>
              <h2 className='card-title'>{name}</h2>
              <h4 className='card-subtitle text-muted'>{descr}</h4>
            </div>
            <ul className='list-group list-group-flush'>{factsList}</ul>
            <div className='card-body'>
              <button className='btn btn-info' onClick={history.goBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
