import React, { useState } from 'react';
import './App.css';
import List from "./Components/List"
import AddToList from "./Components/AddToList"

export interface IState {
  people: {
    id?: number
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([

    {
      id: 1,
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allergic to staying on the same team",
    },
    {
      id: 2,
      name: "Kobe Bryant",
      age: 42,
      url: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-01/LeBron%20James%20and%20Ja%20Morant%20010423.jpeg?itok=WR2SF0sq"
    }
  ]
  )
  return (
    <>
      <div className="App">
        <h1>People Invited to my Party</h1>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />
      </div>
    </>
  );
}

export default App;
