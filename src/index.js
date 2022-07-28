import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jump';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


store.subscribe(()=> console.log(store.getState()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
