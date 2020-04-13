//inspired by the article in medium.com https://medium.com/@bretcameron/a-beginners-guide-to-redux-with-react-50309ae09a14

import React from 'react';
import './App.css';
import {Provider} from 'react-redux'; 

//import Counter from './components/Counter';
import Counter from './components/CounterReducer';
import store from './store';

//Uncomment below function to run default react state version
//function App() {
//  return (
//    <>
//      <Counter />
//    </>
//  );
//}

function App() {
  return (
    <Provider store={store}>
      <h1>React - Redux sample</h1>
      <Counter />
    </Provider>
  );
}

export default App;
