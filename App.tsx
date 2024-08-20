/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/screens/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
      <Navigation />
      </Provider>
    ); 
}
export default App;
