import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";

const store = createStore(
  rootReducer,
  window.__PRELOADEDSTATE__, // 이 값을 초기 상태로 사용함
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();