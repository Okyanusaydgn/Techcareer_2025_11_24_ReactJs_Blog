// rfce ==> TAB
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';

// ROUTER APP COMPONENT
function RouterApp() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default RouterApp;
