import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

import { store, setList } from "./state/store";
import { fetchList } from "./api/api";

import ListView from "./containers/list-view";
import ItemView from "./containers/item-view";

// initial api call
fetchList().then(data => store.dispatch(setList(data)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListView />
          </Route>
          <Route path="/item/:id">
            <ItemView />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
