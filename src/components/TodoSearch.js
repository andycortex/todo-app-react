import React from 'react'
import './../styles/TodoSearch.css'
function TodoSearch ({ searchValue, setSearchValue, loading }) {
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
        disabled={loading}
      />
    </>
  )
}

export { TodoSearch }