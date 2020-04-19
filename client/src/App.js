import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import HomePage from './containers/layout/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
