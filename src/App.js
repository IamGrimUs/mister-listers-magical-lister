import * as React from 'react'
import { ListContextProvider } from './_shared/context/useTodoList'
import { Title } from './_shared/Title.component'
import { Footer } from './_shared/Footer.component'
import { TextInput } from './_shared/TextInput.component'
import {List} from './list/list-component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Title text="Mister Lister's Magical Lister" />
      <div className="parent-container">
        <ListContextProvider>
          <TextInput />
          <List />
        </ListContextProvider>
      </div>
      <Footer text="@2021 SuckaFish Inc" />
    </div>
  )
}

export default App;
