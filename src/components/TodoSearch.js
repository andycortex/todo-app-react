import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import './../styles/TodoSearch.css'
function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  }
  return (
    <>
      <input 
        type="text" 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }