import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';

import awsConfig from './aws-exports';
import './index.css';
import AuthenticationProvider from './components/AuthenticationProvider'
import reportWebVitals from './reportWebVitals';

Amplify.configure(awsConfig);

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
