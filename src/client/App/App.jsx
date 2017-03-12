// Libs
import React, { Component, PropTypes } from 'react';

// Components
import app from './App.scss';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Sidebar from './_common/Sidebar';
import {
  AppContainer,
  AppContent,
} from './AppStyled';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className={app}>
        <Header />
        <Sidebar />
        <AppContent className="AppContent">
          {this.props.children}
        </AppContent>
        <Footer />
      </div>
    );
  }
}
