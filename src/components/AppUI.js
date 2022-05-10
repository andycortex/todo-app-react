import React from 'react'
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {

  return (
    <>
        <TodoCounter
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch
        search={searchValue}
        setSearch={setSearchValue}
        />
        <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text) }
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
        </TodoList>
        <CreateTodoButton/>
  </>
  )
}

export { AppUI } 