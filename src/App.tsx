import React, { useState } from 'react';
import './App.css';
import List from "./Components/List"

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]
  )


  return (
    <>
      <div className="App">
        <h1>People Invited to my Party</h1>
        <List people={people} />
      </div>
    </>
  );
}

export default App;
