// singele comment
/* 
JS multiple comment
*/

// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';

// EXTERNAL CSS
import './index.css';

// I18N INTERNATIONALIZATION
import './internationalization/i18nlanguage';

// UTILS
import reportWebVitals from './reportWebVitals';

// ROUTER
import { BrowserRouter } from 'react-router-dom';

// REUSABILITY TOAST
import ResuabilityToast from './reusability/ReusabilityToast';

// COMPONENTS
import RouterApp from './RouterApp';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ResuabilityToast></ResuabilityToast> */}
      <ResuabilityToast />
      {/* <App /> */}
      {/* <Counter /> */}
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
