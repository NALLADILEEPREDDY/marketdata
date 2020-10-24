import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { default as Home } from "./components/Home/Home.container";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import todoApp from './ReduxData/appReducer'

const store = createStore(todoApp)

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
