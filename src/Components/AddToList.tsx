import React, { useState } from 'react'
import { IState as Props } from '../App'


interface IProps {
 people: Props["people"]
 setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

 const [input, setInput] = useState({
  name: "",
  age: "",
  note: "",
  img: ""
 })

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  setInput({
   ...input,
   [e.target.name]: e.target.value
  })
 }

 const handleClick = (): void => {
  if (
   !input.name || !input.age || !input.img
  ) {
   return
  }
  setPeople([
   ...people,
   {
    name: input.name,
    age: parseInt(input.age),
    url: input.img,
    note: input.note
   }
  ])
  setInput(
   {
    name: "",
    age: "",
    note: "",
    img: ""
   }
  )
 }

 return (
  <div className="AddToList">
   <input type="text" className="AddToList-Input" placeholder='Name' value={input.name} onChange={handleChange} name="name" />
   <input type="number" className="AddToList-Input" placeholder='Age' value={input.age} onChange={handleChange} name="age" />
   <input type="text" className="AddToList-Input" placeholder='Image Url' value={input.img} onChange={handleChange} name="img" />
   <textarea className="AddToList-Input" placeholder='Notes' value={input.note} name="note" onChange={handleChange} />
   <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
  </div>
 )
}

export default AddToList