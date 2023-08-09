import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserProfile />
      </div>
    </Provider>
  );
};

export default App;
