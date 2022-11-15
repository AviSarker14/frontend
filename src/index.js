import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ta8ixk5t7vdghpkq.us.auth0.com"
      clientId="kuqMF8SOhypbK55qfInjpINRSAg6pd9i"
      redirectUri={window.location.origin}
  >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

