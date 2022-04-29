import React from 'react'
import './../styles/TodoSearch.css'
const TodoSearch = ({ search, setSearch }) => {
  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  }
  return (
    <>
      <input 
        type="text" 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={search}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }