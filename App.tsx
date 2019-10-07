import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

// Store
import configureStore from './src/store';

// Navigation
import AppContainer, { NavigationService } from './src/navigation';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppContainer
          ref={navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
