import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp'
import { Provider } from 'react-redux';
import { store } from './Redux/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp/>
      </div>
    </Provider>
  );
}

export default App;
