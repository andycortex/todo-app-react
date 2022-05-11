import { useTodos } from './hooks/useTodos'
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Modal } from "./components/Modal"
import { TodoForm } from "./components/TodoForm"
import { TodoHeader } from './components/TodoHeader';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoError } from "./components/TodoError";
import { TodoLoading } from './components/TodoLoading';
import { TodoEmpty } from './components/TodoEmpty';
import { ChangeAlertWithStorageListener } from './components/ChangeAlert';

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
    sincronizedTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={ () => <TodoError/> }
        onLoading={ () => <TodoLoading/> }
        onEmptyTodo={ () => <TodoEmpty/> }
        onEmptySearchResult = { 
          (searchText) => <p>No hay resultados para {searchText}</p>}
        // render={ todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text) }
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        //   )}
        >
          { todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text) }
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
      { !!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize={sincronizedTodos}/>
    </>
  );
}

export default App;
