import React, { useEffect, useState } from "react"
import uuid from 'react-uuid'
import ItemsList from "./ItemsList.js"
import AddItem from "./AddItem.js"

export default function Shop() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || [])
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  function handleFormSubmit(e) {
    e.preventDefault()
    if (name.trim() !== "" && desc.trim() !== "") {
      setItems(prevItems => [...prevItems, { id: uuid(), name, desc }])
      setName("")
      setDesc("")
    }
    else {
      alert("Заполните все поля")
    }
  }
  const handleDeleteClick = id => () => setItems(prevItems => prevItems.filter((item) => item.id !== id))
  const handleNameChange = e => setName(e.target.value)
  const handleDescChange = e => setDesc(e.target.value)
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
    items.length ? (document.title = `${items.length} товаров`) : (document.title = 'Товары отсутствуют')
  }, [items])

  return (
    <>
      <AddItem onFormSubmit={handleFormSubmit} onNameChange={handleNameChange} onDescChange={handleDescChange} name={name} desc={desc} />
      {!items.length && <div>
        <p className="text-center my-4">Добавьте первый товар</p>
      </div>
      }
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
