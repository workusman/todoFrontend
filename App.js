import React from 'react';
import { View, Text } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './app/reducers';
import HomeContainer from './app/containers/homeContainer';


const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );
};

export default App;