import React, { useContext } from 'react'
import { TodoContext } from "./../context/TodoContext";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Modal } from "./../components/Modal"
import { TodoForm } from "./../components/TodoForm"

function AppUI () {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
    return (
    <>
        <TodoCounter/>
        <TodoSearch/>
       
            <TodoList>
              { error && <p>Desespérate, hubo un error...</p> }
              { loading && <p>Estamos cargando, no desesperes...</p> }
              { (!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p> }
              { searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text) }
                  onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>
            { !!openModal && (
               <Modal>
               <TodoForm/>
             </Modal>
            )}
            <CreateTodoButton
              setOpenModal={setOpenModal}
            />
          </>
        )}

export { AppUI } 