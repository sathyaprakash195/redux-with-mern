import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect , useState} from 'react'
import Child from './Child';
import messageReducer from './messageReducer';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
function App() {

  
  const store = createStore(messageReducer , applyMiddleware(thunk))



  return (
    <div className="App">
      <Provider store={store}>
      <Child/>
      </Provider>
     
    </div>
  );
}

export default App;
