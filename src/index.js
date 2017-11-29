import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from './components/Modal';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

// const initialState = {
//   type: "error",
//   title: "Modal window title wide block",
//   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   show: true 
// }

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Modal 
      type="error"
      title="Modal window title wide block"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
