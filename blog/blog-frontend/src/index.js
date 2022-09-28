import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules/index';
import { tempSetUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try{
    const user = localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아니면 아무것도 안 함
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch(e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
