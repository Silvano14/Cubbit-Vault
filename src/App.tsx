import React from 'react';
import './App.css';
import { Header } from './header/container/Header';
import { Body } from './body/container/Body';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
