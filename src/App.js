import * as React from 'react'
import { ListContextProvider } from './_shared/context/useTodoList'
import { TextInput } from './_shared/TextInput.component'
import {List} from './list/list-component'
import './App.css';

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <TextInput />
        <List />
      </ListContextProvider>
    </div>
  );
}

export default App;
